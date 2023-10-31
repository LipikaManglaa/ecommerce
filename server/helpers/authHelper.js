// import bcrypt from "bcrypt";
const bcrypt =require('bcrypt')

module.exports={
async hashPassword (password)  {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
},

async  comparePassword (password, hashedPassword)  {
  return bcrypt.compare(password, hashedPassword);
},
}