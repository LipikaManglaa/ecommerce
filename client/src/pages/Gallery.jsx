import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Gallery() {

  const [allImage, setAllImage] = useState(null);

 

  useEffect(() => {
    getImage();
  }, []);
  const getImage = async () => {
    const result = await axios.get("http://localhost:5000/get-image");
   console.log(result)
    setAllImage(result.data.data);
  };
  return (
    <>
      
<h1>images</h1>
{allImage ?
        
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
