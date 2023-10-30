
import React, { useEffect, useState } from 'react'
import './../layout/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
export default function Footer() {

  const [categories, setCategories] = useState([]);
  const getAllCategories = async () => {

    try {
      const { data } = await axios.get("http://localhost:5000/api/get-admin-category");
    
      setCategories(data.categories);

    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  useEffect(() => {

    getAllCategories()
  }, []);
  return (
    <div>
      <footer id="footer">
        <div className="footer-width">
          <figure>
            <a href="index.html"><img src="images/logo.svg" alt="footer" title="footer" /></a>
          </figure>
          <div className="footer-content">
            <div className="footer-address">
              <h3>CONTACT US</h3>
              <div className="contact-icon">
                <div className="contact-office">
                  <FontAwesomeIcon icon={faLocation} className='fa-location-dot' />
                  <h5>Corporate Office:</h5>
                </div>
                <p>Melbourne ,vic 3000</p>
              </div>
              <div className="contact-icon-phone">
                <FontAwesomeIcon icon={faPhone} />
                <p><a href=":+91 8055425542">+61 00000000</a></p>
              </div>
              <div className="contact-icon-phone">
                <FontAwesomeIcon icon={faEnvelope} />
                <p><a href="mailto:support@lawpreptutorialpatna.com" />lipika.mangla.web@gmail.com
                </p>
              </div>
            </div>
            <div className="footer-address-course">
              <h3>Our categories</h3>
              <div className="contact-icon-course">
                <ul className="footer-menu">
                  {
                    categories.length > 0 ?
                      categories.map((v, i) => {
                     
                        return (
                          <>
                            <li key={i}><Link to={`/category/` + v.slug}>{v.name}</Link></li></>
                        )
                      })

                      : " no image"
                  }


                </ul>
              </div>
            </div>
            <div className="footer-address-course">
              <h3>Useful Links</h3>
              <div className="contact-icon-course">
                <ul className="footer-menu">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="about-us.html">About Us</a></li>
                  <li><a href="privacy-policy.html">Privacy Policy</a></li>
                  <li><a href="terms-conditions.html">Terms &amp; Conditions</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer section ends here */}
      {/* Footer bottom section starts here */}
      <section id="footer-bottom">
        <div className="footer-bottom-width">
          <div className="footer-bottom-content">
            <div className="footer-bottom-link">
              <p>Copyright © 2023 <span>Lipika Mangla</span> </p>
            </div>


          </div>
        </div>

      </section>
    </div>

  )
}
