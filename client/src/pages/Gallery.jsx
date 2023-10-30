import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import images from "./../server/uploads"
export default function Gallery() {

  const [allImage, setAllImage] = useState([]);



  useEffect(() => {
    getImage();
  }, []);
  const getImage = async () => {
    const result = await axios.get("http://localhost:5000/api/get-image");
   console.log(result)
    setAllImage(result.data.productImage);
  };
  return (
    <>
      
<h1>images</h1>
{allImage.length>0 ?
        
         allImage.map((data) => {
          console.log(data)
            return (
             
            
              <img
                src={require(`./../images/${data.image}`)}
                height={100}
                width={100}
              />
            );
          })
          : "no image"
          }
    </>
  )
}
