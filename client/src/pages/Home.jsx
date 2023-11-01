import Layout from '../layout/Layout'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Slider from 'react-slick'
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './../styles/Home.css'

export default function Home() {
  const baseURL = process.env.REACT_APP_API_BASE_URL_DEV
  console.log(baseURL)
  const [allImage, setAllImage] = useState([]);
  const [categories, setCategories] = useState([]);
  
  const getAllCategories = async () => {

    try {
      const { data } = await axios.get(`/api/get-admin-category`);
    
      setCategories(data.categories);

    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //for slider
  const getImage = () => {

    axios.get(`/api/slider-view-image`)
      .then((res) => {
        setAllImage(res.data.sliderImage);
      })

  };
  useEffect(() => {
    getImage();
    getAllCategories()
  }, []);



  let settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <Layout>

        {/* Banner section */}

        <section style={{overflow:'hidden'}}>
          <Slider {...settings}>
            {
              allImage.length > 0 ?
                allImage.map((v, i) => {
                  return (
                    <><img src={`/` + v.image} style={{ height: '400px', width: "100%" }} key={i}/></>
                  )
                })

                : ""
            }

          </Slider>
        </section>
        {/* //categogy dispay */}
        <section>
          <div className='catList'>
            <div className='catListItems'>
              <h2>Shop By Category</h2>
              <div className='cat-data'>
                {
                  categories.length > 0 ?
                    categories.map((v, i) => {
                   
                      return (


                        <>
                          {
                            i % 2 == 0 ?
                              <>
                                <div className='board-img' key={i}>
                                  <img src={`/` + v.image} alt={v.name} />
                                </div>
                                <div className='cat-para cat-color-2'>
                                  <div className='list-style'>
                                    <h4> Products</h4><span></span>
                                  </div>
                                  <h3>{v.name}</h3>
                                  <p> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                  <button class="wbtn"><Link to={`/category/` + v.slug}>More Products</Link></button>
                                </div>
                              </>

                              :
                              <>
                                <div className='cat-para cat-color-1'>
                                  <div className='list-style'>
                                    <h4> Products</h4><span></span>
                                  </div>
                                  <h3>{v.name}</h3>
                                  <p> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                  <button class="wbtn"><Link to={`/category/` + v.slug}>More Products</Link></button>
                                </div>
                                <div className='board-img'>
                                  <img src={`/` + v.image} alt={v.name} />
                                </div>
                              </>
                          }
                        </>

                      )
                    })

                    : " no image"
                }





              </div>
            </div>
          </div>
        </section>





      </Layout>
    </>
  )
}
