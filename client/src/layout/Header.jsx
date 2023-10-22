import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './../styles/Header.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBagShopping, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  
 
    return (
      <div class="main">
     <header>
  <i className="fa-solid fa-bars header-bar" />
  <div className="logo">
    <img src="images/logo.png" />
  </div>
  <div className="menu">
    <ul>
      <li className="showsubitems"><Link to="#">Men</Link>
        <div className="subMenu" />
        <div className="submenylist">
          <div className="sub-list-item">
            <div className="list-item">
              <h3>Topwear</h3>
              <ul className="sub-menu">
                <li><Link to="#">T-Shirts</Link></li>
                <li><Link to="#">Casual-Shirts</Link></li>
                <li><Link to="#">Formal-Shirts</Link></li>
                <li><Link to="#">Sweatshirts</Link></li>
                <li><Link to="#">Sweaterss</Link></li>
                <li><Link to="#">Jackets</Link></li>
                <li><Link to="#">Blazers</Link></li>
                <li><Link to="#">Suits</Link></li>
                <li><Link to="#">Rain jackets</Link></li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Indian &amp; Festive Wear</h3>
              <ul className="sub-menu">
                <li><Link to="#">Kurta &amp; Kurta Sets</Link></li>
                <li><Link to="#">Shervani</Link></li>
                <li><Link to="#">Nehru jackets</Link></li>
                <li><Link to="#">Dhoti</Link></li>
              </ul>
            </div>
          </div>
          <div className="sub-list-item">
            <div className="list-item">
              <h3>Topwear</h3>
              <ul className="sub-menu">
                <li><Link to="#">T-Shirts</Link></li>
                <li><Link to="#">Casual-Shirts</Link></li>
                <li><Link to="#">Formal-Shirts</Link></li>
                <li><Link to="#">Sweatshirts</Link></li>
                <li><Link to="#">Sweaterss</Link></li>
                <li><Link to="#">Jackets</Link></li>
                <li><Link to="#">Blazers</Link></li>
                <li><Link to="#">Suits</Link></li>
                <li><Link to="#">Rain jackets</Link></li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Indian &amp; Festive Wear</h3>
              <ul className="sub-menu">
                <li><Link to="#">Kurta &amp; Kurta Sets</Link></li>
                <li><Link to="#">Shervani</Link></li>
                <li><Link to="#">Nehru jackets</Link></li>
                <li><Link to="#">Dhoti</Link></li>
              </ul>
            </div>
          </div>
          <div className="sub-list-item">
            <div className="list-item">
              <h3>Topwear</h3>
              <ul className="sub-menu">
                <li><Link to="#">T-Shirts</Link></li>
                <li><Link to="#">Casual-Shirts</Link></li>
                <li><Link to="#">Formal-Shirts</Link></li>
                <li><Link to="#">Sweatshirts</Link></li>
                <li><Link to="#">Sweaterss</Link></li>
                <li><Link to="#">Jackets</Link></li>
                <li><Link to="#">Blazers</Link></li>
                <li><Link to="#">Suits</Link></li>
                <li><Link to="#">Rain jackets</Link></li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Indian &amp; Festive Wear</h3>
              <ul className="sub-menu">
                <li><Link to="#">Kurta &amp; Kurta Sets</Link></li>
                <li><Link to="#">Shervani</Link></li>
                <li><Link to="#">Nehru jackets</Link></li>
                <li><Link to="#">Dhoti</Link></li>
              </ul>
            </div>
          </div>
          <div className="sub-list-item">
            <div className="list-item">
              <h3>Topwear</h3>
              <ul className="sub-menu">
                <li><Link to="#">T-Shirts</Link></li>
                <li><Link to="#">Casual-Shirts</Link></li>
                <li><Link to="#">Formal-Shirts</Link></li>
                <li><Link to="#">Sweatshirts</Link></li>
                <li><Link to="#">Sweaterss</Link></li>
                <li><Link to="#">Jackets</Link></li>
                <li><Link to="#">Blazers</Link></li>
                <li><Link to="#">Suits</Link></li>
                <li><Link to="#">Rain jackets</Link></li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Indian &amp; Festive Wear</h3>
              <ul className="sub-menu">
                <li><Link to="#">Kurta &amp; Kurta Sets</Link></li>
                <li><Link to="#">Shervani</Link></li>
                <li><Link to="#">Nehru jackets</Link></li>
                <li><Link to="#">Dhoti</Link></li>
              </ul>
            </div>
          </div>
          <div className="sub-list-item">
            <div className="list-item">
              <h3>Topwear</h3>
              <ul className="sub-menu">
                <li><Link to="#">T-Shirts</Link></li>
                <li><Link to="#">Casual-Shirts</Link></li>
                <li><Link to="#">Formal-Shirts</Link></li>
                <li><Link to="#">Sweatshirts</Link></li>
                <li><Link to="#">Sweaterss</Link></li>
                <li><Link to="#">Jackets</Link></li>
                <li><Link to="#">Blazers</Link></li>
                <li><Link to="#">Suits</Link></li>
                <li><Link to="#">Rain jackets</Link></li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Indian &amp; Festive Wear</h3>
              <ul className="sub-menu">
                <li><Link to="#">Kurta &amp; Kurta Sets</Link></li>
                <li><Link to="#">Shervani</Link></li>
                <li><Link to="#">Nehru jackets</Link></li>
                <li><Link to="#">Dhoti</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li className="list-color1 showsubitems"> <Link to="#">Women</Link>
        <div className="subMenu submeny-color1" />
        <div className="submenylist">
          <div className="sub-list-item">
            <div className="list-item">
              <h3>Topwear</h3>
              <ul className="sub-menu">
                <li><Link to="#">T-Shirts</Link></li>
                <li><Link to="#">Casual-Shirts</Link></li>
                <li><Link to="#">Formal-Shirts</Link></li>
                <li><Link to="#">Sweatshirts</Link></li>
                <li><Link to="#">Sweaterss</Link></li>
                <li><Link to="#">Jackets</Link></li>
                <li><Link to="#">Blazers</Link></li>
                <li><Link to="#">Suits</Link></li>
                <li><Link to="#">Rain jackets</Link></li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Indian &amp; Festive Wear</h3>
              <ul className="sub-menu">
                <li><Link to="#">Kurta &amp; Kurta Sets</Link></li>
                <li><Link to="#">Shervani</Link></li>
                <li><Link to="#">Nehru jackets</Link></li>
                <li><Link to="#">Dhoti</Link></li>
              </ul>
            </div>
          </div>
          <div className="sub-list-item">
            <div className="list-item">
              <h3>Topwear</h3>
              <ul className="sub-menu">
                <li><Link to="#">T-Shirts</Link></li>
                <li><Link to="#">Casual-Shirts</Link></li>
                <li><Link to="#">Formal-Shirts</Link></li>
                <li><Link to="#">Sweatshirts</Link></li>
                <li><Link to="#">Sweaterss</Link></li>
                <li><Link to="#">Jackets</Link></li>
                <li><Link to="#">Blazers</Link></li>
                <li><Link to="#">Suits</Link></li>
                <li><Link to="#">Rain jackets</Link></li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Indian &amp; Festive Wear</h3>
              <ul className="sub-menu">
                <li><Link to="#">Kurta &amp; Kurta Sets</Link></li>
                <li><Link to="#">Shervani</Link></li>
                <li><Link to="#">Nehru jackets</Link></li>
                <li><Link to="#">Dhoti</Link></li>
              </ul>
            </div>
          </div>
          <div className="sub-list-item">
            <div className="list-item">
              <h3>Topwear</h3>
              <ul className="sub-menu">
                <li><Link to="#">T-Shirts</Link></li>
                <li><Link to="#">Casual-Shirts</Link></li>
                <li><Link to="#">Formal-Shirts</Link></li>
                <li><Link to="#">Sweatshirts</Link></li>
                <li><Link to="#">Sweaterss</Link></li>
                <li><Link to="#">Jackets</Link></li>
                <li><Link to="#">Blazers</Link></li>
                <li><Link to="#">Suits</Link></li>
                <li><Link to="#">Rain jackets</Link></li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Indian &amp; Festive Wear</h3>
              <ul className="sub-menu">
                <li><Link to="#">Kurta &amp; Kurta Sets</Link></li>
                <li><Link to="#">Shervani</Link></li>
                <li><Link to="#">Nehru jackets</Link></li>
                <li><Link to="#">Dhoti</Link></li>
              </ul>
            </div>
          </div>
          <div className="sub-list-item">
            <div className="list-item">
              <h3>Topwear</h3>
              <ul className="sub-menu">
                <li><Link to="#">T-Shirts</Link></li>
                <li><Link to="#">Casual-Shirts</Link></li>
                <li><Link to="#">Formal-Shirts</Link></li>
                <li><Link to="#">Sweatshirts</Link></li>
                <li><Link to="#">Sweaterss</Link></li>
                <li><Link to="#">Jackets</Link></li>
                <li><Link to="#">Blazers</Link></li>
                <li><Link to="#">Suits</Link></li>
                <li><Link to="#">Rain jackets</Link></li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Indian &amp; Festive Wear</h3>
              <ul className="sub-menu">
                <li><Link to="#">Kurta &amp; Kurta Sets</Link></li>
                <li><Link to="#">Shervani</Link></li>
                <li><Link to="#">Nehru jackets</Link></li>
                <li><Link to="#">Dhoti</Link></li>
              </ul>
            </div>
          </div>
          <div className="sub-list-item">
            <div className="list-item">
              <h3>Topwear</h3>
              <ul className="sub-menu">
                <li><Link to="#">T-Shirts</Link></li>
                <li><Link to="#">Casual-Shirts</Link></li>
                <li><Link to="#">Formal-Shirts</Link></li>
                <li><Link to="#">Sweatshirts</Link></li>
                <li><Link to="#">Sweaterss</Link></li>
                <li><Link to="#">Jackets</Link></li>
                <li><Link to="#">Blazers</Link></li>
                <li><Link to="#">Suits</Link></li>
                <li><Link to="#">Rain jackets</Link></li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Indian &amp; Festive Wear</h3>
              <ul className="sub-menu">
                <li><Link to="#">Kurta &amp; Kurta Sets</Link></li>
                <li><Link to="#">Shervani</Link></li>
                <li><Link to="#">Nehru jackets</Link></li>
                <li><Link to="#">Dhoti</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li className="list-color2 showsubitems"><Link to>Kids</Link>
        <div className="subMenu submeny-color2" />
        <div className="submenylist">
          <div className="sub-list-item">
            <div className="list-item">
              <h3>Topwear</h3>
              <ul className="sub-menu">
                <li><Link to="#">T-Shirts</Link></li>
                <li><Link to="#">Casual-Shirts</Link></li>
                <li><Link to="#">Formal-Shirts</Link></li>
                <li><Link to="#">Sweatshirts</Link></li>
                <li><Link to="#">Sweaterss</Link></li>
                <li><Link to="#">Jackets</Link></li>
                <li><Link to="#">Blazers</Link></li>
                <li><Link to="#">Suits</Link></li>
                <li><Link to="#">Rain jackets</Link></li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Indian &amp; Festive Wear</h3>
              <ul className="sub-menu">
                <li><Link to="#">Kurta &amp; Kurta Sets</Link></li>
                <li><Link to="#">Shervani</Link></li>
                <li><Link to="#">Nehru jackets</Link></li>
                <li><Link to="#">Dhoti</Link></li>
              </ul>
            </div>
          </div>
          <div className="sub-list-item">
            <div className="list-item">
              <h3>Topwear</h3>
              <ul className="sub-menu">
                <li><Link to="#">T-Shirts</Link></li>
                <li><Link to="#">Casual-Shirts</Link></li>
                <li><Link to="#">Formal-Shirts</Link></li>
                <li><Link to="#">Sweatshirts</Link></li>
                <li><Link to="#">Sweaterss</Link></li>
                <li><Link to="#">Jackets</Link></li>
                <li><Link to="#">Blazers</Link></li>
                <li><Link to="#">Suits</Link></li>
                <li><Link to="#">Rain jackets</Link></li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Indian &amp; Festive Wear</h3>
              <ul className="sub-menu">
                <li><Link to="#">Kurta &amp; Kurta Sets</Link></li>
                <li><Link to="#">Shervani</Link></li>
                <li><Link to="#">Nehru jackets</Link></li>
                <li><Link to="#">Dhoti</Link></li>
              </ul>
            </div>
          </div>
          <div className="sub-list-item">
            <div className="list-item">
              <h3>Topwear</h3>
              <ul className="sub-menu">
                <li><Link to="#">T-Shirts</Link></li>
                <li><Link to="#">Casual-Shirts</Link></li>
                <li><Link to="#">Formal-Shirts</Link></li>
                <li><Link to="#">Sweatshirts</Link></li>
                <li><Link to="#">Sweaterss</Link></li>
                <li><Link to="#">Jackets</Link></li>
                <li><Link to="#">Blazers</Link></li>
                <li><Link to="#">Suits</Link></li>
                <li><Link to="#">Rain jackets</Link></li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Indian &amp; Festive Wear</h3>
              <ul className="sub-menu">
                <li><Link to="#">Kurta &amp; Kurta Sets</Link></li>
                <li><Link to="#">Shervani</Link></li>
                <li><Link to="#">Nehru jackets</Link></li>
                <li><Link to="#">Dhoti</Link></li>
              </ul>
            </div>
          </div>
          <div className="sub-list-item">
            <div className="list-item">
              <h3>Topwear</h3>
              <ul className="sub-menu">
                <li><Link to="#">T-Shirts</Link></li>
                <li><Link to="#">Casual-Shirts</Link></li>
                <li><Link to="#">Formal-Shirts</Link></li>
                <li><Link to="#">Sweatshirts</Link></li>
                <li><Link to="#">Sweaterss</Link></li>
                <li><Link to="#">Jackets</Link></li>
                <li><Link to="#">Blazers</Link></li>
                <li><Link to="#">Suits</Link></li>
                <li><Link to="#">Rain jackets</Link></li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Indian &amp; Festive Wear</h3>
              <ul className="sub-menu">
                <li><Link to="#">Kurta &amp; Kurta Sets</Link></li>
                <li><Link to="#">Shervani</Link></li>
                <li><Link to="#">Nehru jackets</Link></li>
                <li><Link to="#">Dhoti</Link></li>
              </ul>
            </div>
          </div>
          <div className="sub-list-item">
            <div className="list-item">
              <h3>Topwear</h3>
              <ul className="sub-menu">
                <li><Link to="#">T-Shirts</Link></li>
                <li><Link to="#">Casual-Shirts</Link></li>
                <li><Link to="#">Formal-Shirts</Link></li>
                <li><Link to="#">Sweatshirts</Link></li>
                <li><Link to="#">Sweaterss</Link></li>
                <li><Link to="#">Jackets</Link></li>
                <li><Link to="#">Blazers</Link></li>
                <li><Link to="#">Suits</Link></li>
                <li><Link to="#">Rain jackets</Link></li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Indian &amp; Festive Wear</h3>
              <ul className="sub-menu">
                <li><Link to="#">Kurta &amp; Kurta Sets</Link></li>
                <li><Link to="#">Shervani</Link></li>
                <li><Link to="#">Nehru jackets</Link></li>
                <li><Link to="#">Dhoti</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li className="list-color3 showsubitems"><Link to>Home &amp; Living</Link>
        <div className="subMenu submeny-color3" />
        <div className="submenylist">
          <div className="sub-list-item">
            <div className="list-item">
              <h3>Topwear</h3>
              <ul className="sub-menu">
                <li><Link to="#">T-Shirts</Link></li>
                <li><Link to="#">Casual-Shirts</Link></li>
                <li><Link to="#">Formal-Shirts</Link></li>
                <li><Link to="#">Sweatshirts</Link></li>
                <li><Link to="#">Sweaterss</Link></li>
                <li><Link to="#">Jackets</Link></li>
                <li><Link to="#">Blazers</Link></li>
                <li><Link to="#">Suits</Link></li>
                <li><Link to="#">Rain jackets</Link></li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Indian &amp; Festive Wear</h3>
              <ul className="sub-menu">
                <li><Link to="#">Kurta &amp; Kurta Sets</Link></li>
                <li><Link to="#">Shervani</Link></li>
                <li><Link to="#">Nehru jackets</Link></li>
                <li><Link to="#">Dhoti</Link></li>
              </ul>
            </div>
          </div>
          <div className="sub-list-item">
            <div className="list-item">
              <h3>Topwear</h3>
              <ul className="sub-menu">
                <li><Link to="#">T-Shirts</Link></li>
                <li><Link to="#">Casual-Shirts</Link></li>
                <li><Link to="#">Formal-Shirts</Link></li>
                <li><Link to="#">Sweatshirts</Link></li>
                <li><Link to="#">Sweaterss</Link></li>
                <li><Link to="#">Jackets</Link></li>
                <li><Link to="#">Blazers</Link></li>
                <li><Link to="#">Suits</Link></li>
                <li><Link to="#">Rain jackets</Link></li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Indian &amp; Festive Wear</h3>
              <ul className="sub-menu">
                <li><Link to="#">Kurta &amp; Kurta Sets</Link></li>
                <li><Link to="#">Shervani</Link></li>
                <li><Link to="#">Nehru jackets</Link></li>
                <li><Link to="#">Dhoti</Link></li>
              </ul>
            </div>
          </div>
          <div className="sub-list-item">
            <div className="list-item">
              <h3>Topwear</h3>
              <ul className="sub-menu">
                <li><Link to="#">T-Shirts</Link></li>
                <li><Link to="#">Casual-Shirts</Link></li>
                <li><Link to="#">Formal-Shirts</Link></li>
                <li><Link to="#">Sweatshirts</Link></li>
                <li><Link to="#">Sweaterss</Link></li>
                <li><Link to="#">Jackets</Link></li>
                <li><Link to="#">Blazers</Link></li>
                <li><Link to="#">Suits</Link></li>
                <li><Link to="#">Rain jackets</Link></li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Indian &amp; Festive Wear</h3>
              <ul className="sub-menu">
                <li><Link to="#">Kurta &amp; Kurta Sets</Link></li>
                <li><Link to="#">Shervani</Link></li>
                <li><Link to="#">Nehru jackets</Link></li>
                <li><Link to="#">Dhoti</Link></li>
              </ul>
            </div>
          </div>
          <div className="sub-list-item">
            <div className="list-item">
              <h3>Topwear</h3>
              <ul className="sub-menu">
                <li><Link to="#">T-Shirts</Link></li>
                <li><Link to="#">Casual-Shirts</Link></li>
                <li><Link to="#">Formal-Shirts</Link></li>
                <li><Link to="#">Sweatshirts</Link></li>
                <li><Link to="#">Sweaterss</Link></li>
                <li><Link to="#">Jackets</Link></li>
                <li><Link to="#">Blazers</Link></li>
                <li><Link to="#">Suits</Link></li>
                <li><Link to="#">Rain jackets</Link></li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Indian &amp; Festive Wear</h3>
              <ul className="sub-menu">
                <li><Link to="#">Kurta &amp; Kurta Sets</Link></li>
                <li><Link to="#">Shervani</Link></li>
                <li><Link to="#">Nehru jackets</Link></li>
                <li><Link to="#">Dhoti</Link></li>
              </ul>
            </div>
          </div>
          <div className="sub-list-item">
            <div className="list-item">
              <h3>Topwear</h3>
              <ul className="sub-menu">
                <li><Link to="#">T-Shirts</Link></li>
                <li><Link to="#">Casual-Shirts</Link></li>
                <li><Link to="#">Formal-Shirts</Link></li>
                <li><Link to="#">Sweatshirts</Link></li>
                <li><Link to="#">Sweaterss</Link></li>
                <li><Link to="#">Jackets</Link></li>
                <li><Link to="#">Blazers</Link></li>
                <li><Link to="#">Suits</Link></li>
                <li><Link to="#">Rain jackets</Link></li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Indian &amp; Festive Wear</h3>
              <ul className="sub-menu">
                <li><Link to="#">Kurta &amp; Kurta Sets</Link></li>
                <li><Link to="#">Shervani</Link></li>
                <li><Link to="#">Nehru jackets</Link></li>
                <li><Link to="#">Dhoti</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li className="list-color4 showsubitems"><Link to>Beauty</Link>
        <div className="subMenu submeny-color4" />
        <div className="submenylist">
          <div className="sub-list-item">
            <div className="list-item">
              <h3>Topwear</h3>
              <ul className="sub-menu">
                <li><Link to="#">T-Shirts</Link></li>
                <li><Link to="#">Casual-Shirts</Link></li>
                <li><Link to="#">Formal-Shirts</Link></li>
                <li><Link to="#">Sweatshirts</Link></li>
                <li><Link to="#">Sweaterss</Link></li>
                <li><Link to="#">Jackets</Link></li>
                <li><Link to="#">Blazers</Link></li>
                <li><Link to="#">Suits</Link></li>
                <li><Link to="#">Rain jackets</Link></li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Indian &amp; Festive Wear</h3>
              <ul className="sub-menu">
                <li><Link to="#">Kurta &amp; Kurta Sets</Link></li>
                <li><Link to="#">Shervani</Link></li>
                <li><Link to="#">Nehru jackets</Link></li>
                <li><Link to="#">Dhoti</Link></li>
              </ul>
            </div>
          </div>
          <div className="sub-list-item">
            <div className="list-item">
              <h3>Topwear</h3>
              <ul className="sub-menu">
                <li><Link to="#">T-Shirts</Link></li>
                <li><Link to="#">Casual-Shirts</Link></li>
                <li><Link to="#">Formal-Shirts</Link></li>
                <li><Link to="#">Sweatshirts</Link></li>
                <li><Link to="#">Sweaterss</Link></li>
                <li><Link to="#">Jackets</Link></li>
                <li><Link to="#">Blazers</Link></li>
                <li><Link to="#">Suits</Link></li>
                <li><Link to="#">Rain jackets</Link></li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Indian &amp; Festive Wear</h3>
              <ul className="sub-menu">
                <li><Link to="#">Kurta &amp; Kurta Sets</Link></li>
                <li><Link to="#">Shervani</Link></li>
                <li><Link to="#">Nehru jackets</Link></li>
                <li><Link to="#">Dhoti</Link></li>
              </ul>
            </div>
          </div>
          <div className="sub-list-item">
            <div className="list-item">
              <h3>Topwear</h3>
              <ul className="sub-menu">
                <li><Link to="#">T-Shirts</Link></li>
                <li><Link to="#">Casual-Shirts</Link></li>
                <li><Link to="#">Formal-Shirts</Link></li>
                <li><Link to="#">Sweatshirts</Link></li>
                <li><Link to="#">Sweaterss</Link></li>
                <li><Link to="#">Jackets</Link></li>
                <li><Link to="#">Blazers</Link></li>
                <li><Link to="#">Suits</Link></li>
                <li><Link to="#">Rain jackets</Link></li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Indian &amp; Festive Wear</h3>
              <ul className="sub-menu">
                <li><Link to="#">Kurta &amp; Kurta Sets</Link></li>
                <li><Link to="#">Shervani</Link></li>
                <li><Link to="#">Nehru jackets</Link></li>
                <li><Link to="#">Dhoti</Link></li>
              </ul>
            </div>
          </div>
          <div className="sub-list-item">
            <div className="list-item">
              <h3>Topwear</h3>
              <ul className="sub-menu">
                <li><Link to="#">T-Shirts</Link></li>
                <li><Link to="#">Casual-Shirts</Link></li>
                <li><Link to="#">Formal-Shirts</Link></li>
                <li><Link to="#">Sweatshirts</Link></li>
                <li><Link to="#">Sweaterss</Link></li>
                <li><Link to="#">Jackets</Link></li>
                <li><Link to="#">Blazers</Link></li>
                <li><Link to="#">Suits</Link></li>
                <li><Link to="#">Rain jackets</Link></li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Indian &amp; Festive Wear</h3>
              <ul className="sub-menu">
                <li><Link to="#">Kurta &amp; Kurta Sets</Link></li>
                <li><Link to="#">Shervani</Link></li>
                <li><Link to="#">Nehru jackets</Link></li>
                <li><Link to="#">Dhoti</Link></li>
              </ul>
            </div>
          </div>
          <div className="sub-list-item">
            <div className="list-item">
              <h3>Topwear</h3>
              <ul className="sub-menu">
                <li><Link to="#">T-Shirts</Link></li>
                <li><Link to="#">Casual-Shirts</Link></li>
                <li><Link to="#">Formal-Shirts</Link></li>
                <li><Link to="#">Sweatshirts</Link></li>
                <li><Link to="#">Sweaterss</Link></li>
                <li><Link to="#">Jackets</Link></li>
                <li><Link to="#">Blazers</Link></li>
                <li><Link to="#">Suits</Link></li>
                <li><Link to="#">Rain jackets</Link></li>
              </ul>
            </div>
            <div className="list-item">
              <h3>Indian &amp; Festive Wear</h3>
              <ul className="sub-menu">
                <li><Link to="#">Kurta &amp; Kurta Sets</Link></li>
                <li><Link to="#">Shervani</Link></li>
                <li><Link to="#">Nehru jackets</Link></li>
                <li><Link to="#">Dhoti</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li className="list-color5 showsubitems"><Link to>studio</Link><sup>New</sup>
        <div className="subMenu submeny-color4" />
        <div className="submenylist submneuliststudio">
          <div className="sub-list-item">
            <div className="list-item">
              <img src="images/studio-logo-new.svg" />
              <span>Your daily inspiration for everything fashion</span>
              <img src="images/sudio-nav-banner.png" className="nav-banner-studio" />
              <button>Explore Video<i className="fa-solid fa-greater-than" /></button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div className="menuright">
    <div className="serachmenu">
      <input type="search" placeholder="Search for products,brands and more" />
      <i className="fa-solid fa-magnifying-glass" />
    </div>
    <div className="profilemenu">

      <FontAwesomeIcon icon={faUser}/>
      <h3 >Profile
       
      
          
          <div className="subMenu submeny-color4" ></div>
          <div className="submenylist submneuliststudio" >
          <div className="list-item list-item-profile">
            <h3>Welcome</h3>
            <span>To access account and manage orders</span>
            <div className="btn-login"><Link to="/signup"> Signup</Link> / <Link to="/login">login</Link></div>
            <ul>
              <li><Link to="#">Orders</Link></li>
              <li><Link to="#">WishList</Link></li>
              <li><Link to="#">Gift Cards</Link></li>
              <li><Link to="#">Contact us</Link></li>
              <li><Link to="#">Coupons</Link></li>
            </ul>
          </div>
        </div>
       
       </h3>
    </div>
    <div className="profilemenu">
    <FontAwesomeIcon icon={faHeart} />
      <i className="fa-regular fa-heart" />
      <h3><Link to>Wishlist</Link></h3>
    </div>
    <div className="profilemenu">
      <FontAwesomeIcon icon={faBagShopping}/>
   
      <h3><Link to>Bag</Link></h3>
    </div>
  </div>
</header>
</div>

    )
}
