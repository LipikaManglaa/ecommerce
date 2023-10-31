const multer=require('multer')


    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, "./uploads");
        },
        filename: function (req, file, cb) {
          const uniqueSuffix = Date.now();
           cb(null, uniqueSuffix + file.originalname)
        },
      });


  export const upload = multer({ storage: storage });

  