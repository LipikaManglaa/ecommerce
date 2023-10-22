import galleryModel from "../models/galleryModel.js";

  
export const createController = async function (req, res, next) {
      console.log(req.body)
      console.log(req.file)
              //   obj={
              //     image: {
              //       data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
              //       contentType: 'image/png'
              //   }
              //   }
             

                
                const imageName = req.file.filename;
                console.log(imageName)
                try{
                let pImageeee = await new galleryModel({
                     image:imageName
                   }).save();
                   res.status(201).send({
                     success: true,
                     message: "new image created",
                     pImageeee,
                   });
                 } catch (error) {
                   console.log(error);
                   res.status(500).send({
                     success: false,
                     error,
                     message: "Errro in Category",
                   });
                 }
              //   try {
              //     await new galleryModel({image:imageName}).save();
              //     res.json({ status: "ok" });
              //   } catch (error) {
              //     res.json({ status: error });
              //   }
       
    
}
      
export const productImageController=()=>async (req, res) => {
       try {
              const productImage = await galleryModel.find({});
              res.status(200).send({
                success: true,
                message: "All product Images List",
                productImage,
              });
       //   galleryModel.find({}).then((data) => {
       //  console.log(data)
       //     res.send({ status: "ok", data: data });
       //   });
       } catch (error) {
         res.json({ status: error });
       }
     }

