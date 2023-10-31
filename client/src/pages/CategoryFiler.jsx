
import React, { useEffect, useState } from 'react'
import './../styles/CategoryFilter.css'
import Layout from '../layout/Layout'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../context/cart'
import { toast } from 'react-toastify'
import { useAuth } from '../context/auth'
export default function CategoryFiler() {
  let data = useParams()
  let navigate = useNavigate()
  let [catProduct, setCatProducts] = useState()
  let [catData, setCatData] = useState()
  let [subCatData, setSubCatData] = useState([])
  let [productData, setProductData] = useState()
  let [productDatap, productDatapData] = useState()
  let [auth, setAuth] = useAuth()
  let [cart, setCart] = useState()
  let[subcartgoryId,setSubCategoryId]=useState([])
  let [price,setPrice]=useState([])
  let [rangevalue,setRangeValue]=useState(0)
  let checkCategory=(e)=>{
    if(e.target.checked && !subcartgoryId.includes(e.target.value)){
       setSubCategoryId([...subcartgoryId,e.target.value])
    }
    else{
       if(subcartgoryId.includes(e.target.value)){
        setSubCategoryId(subcartgoryId.filter((v)=>v!=e.target.value))
       }
    }

  }



  //filter data

  const getFilter=()=>{

    if(subcartgoryId.length>0){
      axios.post("/api/productFilter",{
       
          subCat:subcartgoryId,
        
       
       
      })
      .then((res)=>{
        return res.data
      }) 
      .then((finalRes)=>{
        let fp=finalRes.finalresult.flat()

        var finalProduct = []

        fp.forEach((p) => {
           
          if(p.price<=rangevalue){
            finalProduct.push(p)
          } 
        })
        setProductData(finalProduct)
      }) 
    }

    else{
      let finalOlddata=productDatap ?? [];
      var finalProduct = []

      finalOlddata.forEach((p) => {
        if(p.price<=rangevalue){
          finalProduct.push(p)
        } 
       
      })
      setProductData(finalProduct)
    }
        
  }
  const getSubCategoryProduct = () => {

   axios.get("/api/getproductsubcategory", {
      params: {
        slug: data.slug
      }
    })
      .then((res) => res.data)
      .then((finalData) => {

        setCatData(finalData.catData
        )
        setSubCatData(finalData.finalresult[0].subcategories)
        let finalProduct = []
        finalData.finalresult[0].subcategories.forEach(element => {
            element.products.forEach((p) => {
             

              finalProduct.push(p)
            })
            setProductData(finalProduct)
            productDatapData(finalProduct)
         
        });

        let flatProduct=finalProduct.flat();
        
        let minPrice=flatProduct[0].price;
        let maxPrice=flatProduct[1].price;
       for(let v  of flatProduct){
           if(v.price<minPrice){
            minPrice=v.price;
           }
           if(v.price>maxPrice){
            maxPrice=v.price;
           }


       }

        setPrice([minPrice,maxPrice])
        setRangeValue(maxPrice)


      })

  }


  //get product by accending order
  const getProductByAccending = () => {

    axios.get("/api/productAccendingOrder")
    .then((res)=>{
      console.log(res)
      setProductData(res.data)
    })
  }



  let handleCart = (productId) => {
   
    if (auth.token === "") {
      toast.success("Please Login first! Then you can add your item into cart", { autoClose: 700 });
      setTimeout(() => {
        navigate('/login')
      }, 1500)
    }
    else {
      let user = JSON.parse(localStorage.getItem("auth"))
      let userId = user.user.id;
      let qty = 1;
      axios.post(`/api/cart`,
        {
          userId,
          qty,
          productId
        }
      ).then((res) => {
      
        setCart(res.data)
        setAuth({...auth,cartItem:res.data.cartItem})
      })


    }



  }


  let getValuePrice=(e)=>{
    setRangeValue(e.target.value)


    getFilter()
  }

  useEffect(() => {
    getSubCategoryProduct()

  }, [data.slug])

useEffect(()=>{
  
  getFilter()
},[subcartgoryId])


  return (
    <Layout>
      <section className='cat-filter'>


        <div className="catfileterdata">
          <h1 className="cat-list">

          <Link to={'/'}>Home / </Link> 
            {catData !== undefined ?
             catData.name

              : ""
            }
          </h1>



          <div className='row-filter'>
            <div className='flider-list-left'> 
             <div className='list-data'><h4>Filter</h4>
             
             </div>
             <div className='list-data-items'>
              <div className='vertical-filters-header'>
                <span>Categories</span>
                </div>
                <ul className='categories-list'>


                {
                          subCatData.length > 0 ?
                            subCatData.map((v, i) => {

                            
                              return (
                                <li className='cat-check' key={i}> <input type='checkbox' value={v.subcategory._id} onChange={checkCategory} /> <label className='vertical-filters-label'>{v.subcategory.name}</label></li>
                              )
                            })

                            :

                            ""
                        }
             </ul>
              
             </div>

             <div className='list-data-items'>
              <div className='vertical-filters-header'>
                <span>Price</span>
                </div>

                <div>
                  {price.length>0 ?  
                  <>
                 <span>${ price[0] }  </span> |
                 <span> $ { price[1] } </span>  </> :
                   
                   "" }
                
                </div>
                <input type='range' min={price[0]} max={price[1]} value={rangevalue} onChange={getValuePrice}  />
               
              
             </div>

            </div>
           
            <div className="product-right">
            <div className='list-data list-pro'><h4>
 <div onClick={getProductByAccending}>order</div> 
              <select className='cat-select'>
                <option >Sort By: Recommend</option>
                <option>Accending order</option>
               <option>Price:High to Low</option>
                 <option>Price :Low to High
                </option> 
               
              </select>
            </h4>
             
             </div>
                        <div className='product-right-lsit'>
                        {
                  productData !== undefined ?

                    productData.map((value, i) => {

                      return (


                          <div className='product-list-items' key={i}>
                           <Link to={'/product-details/' + value.slug}>
                            <img src={`/` + value.image} />   </Link>
                          
                          <div className="product-cat">
                            <span className="">{value.name}</span>
                           
                            <div className="list-price">
                            <p className="p-prodcut">Price:&nbsp;${value.price}</p>

                              <div className="ml-auto">    <FontAwesomeIcon icon={faShoppingBag} onClick={() => handleCart(value._id)} /></div>
                            </div>
                          </div>
                          </div>
      )
    })
    :
    " nO data"
  }



                   
                        </div>


                        </div>
        
          </div>
        </div>


     
      </section>
    </Layout>
  )
}

