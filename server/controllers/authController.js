import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from 'jsonwebtoken'
import cartModel from "../models/cartModel.js";

export const registerController = async (req, res) => {
    try {
     
      const { name, email, password, phone } = req.body;
      
      //validations
      if (!name) {
        return res.send({ error: "Name is Required" });
      }
      if (!email) {
        return res.send({ message: "Email is Required" });
      }
      if (!password) {
        return res.send({ message: "Password is Required" });
      }
      if (!phone) {
        return res.send({ message: "Phone no is Required" });
      }
    
   
      //check user
      const exisitingUser = await userModel.findOne({ email });
      //exisiting user
      if (exisitingUser) {
        return res.status(200).send({
          success: false,
          message: "Already Register please login",
        });
      }
      
      //register user
      const hashedPassword = await hashPassword(password);
      //save
      const user = await new userModel({
        name,
        email,
        phone,
        password: hashedPassword,
       
      }).save();
  
      res.status(201).send({
        success: true,
        message: "User Register Successfully",
        user,
      });
    } catch (error) {
     
      res.status(500).send({
        success: false,
        message: "Error in Registeration",
        error,
      });
    }
  };
  
  export const loginController = async (req, res) => {
  
    try {
     
      const { email, password } = req.body;


      //validation
      if (!email || !password) {
        return res.status(404).send({
          success: false,
          message: "Invalid email or password",
        });
      }
      //check user
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Email is not registerd",
        });
      }
      const match = await comparePassword(password, user.password);
      if (!match) {
        return res.status(200).send({
          success: false,
          message: "Invalid Password",
        });
      }
      //user login
    const token=JWT.sign({_id:user._id},process.env.JWT_SECERT_KEY,{expiresIn:'2hr'})

 const cart=await cartModel.find({ userId : user._id})


    res.status(200).send({
      sucess:true,
      message:"Login Sucessfully",
      user:{
      name:user.name,
      email:user.email,
      mobile:user.mobile,
      id:user.id

      },
      token,
      cartItem:cart.length
      })
    
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in login",
        error,
      });
    }
  };



  //display user
  export const displayUserController=async(req,res)=>{
    try{
      const users = await userModel.find({});
      console.log(users)
      res.status(200).send({
        success: true,
        message: "All User List",
        users
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while getting all users",
      });
    }
  }


  export const updateProfileController = async (req, res) => {
    try {
      const { name, email, password,  phone } = req.body;
      const { id } = req.params;
  
      if (password && password.length < 6) {
        return res.json({ error: "Passsword is required and 6 character long" });
      }
      const hashedPassword = password ? await hashPassword(password) : undefined;
      const updatedUser = await userModel.findByIdAndUpdate(
       id,
        {
          name: name ,
          password: hashedPassword ,
          phone: phone ,
       email:email,
          
        },
        { new: true }
      );
      res.status(200).send({
        success: true,
        message: "Profile Updated SUccessfully",
        updatedUser,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        success: false,
        message: "Error WHile Update profile",
        error,
      });
    }
  };
  