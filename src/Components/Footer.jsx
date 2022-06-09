import {useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './footer.css';

const Footer = ({update}) => {

  const [data, setData] = useState([])

  let currentUser = 1

  const getData = () => {
      axios.get(`http://localhost:4000/api/userCart/${currentUser}`)
      .then((res) => {
          setData(res.data)
      })
      .catch(console.error)
  }

  useEffect(() => {
    getData()
  }, [update])
  
  return (
    <div className='footer-body'>
      <div className="container">
        <div className="row">
          <div className="section-1">
            <h6>About</h6>
            <p className="text-justify">TechStack is a fake company made for my DevMountain capstone project. It contains a home, categories, support and cart page. Each page is made with multiple components and custom CSS styling. Each product takes from my postgreSQL tables with general information and photos taken from BestBuy.com. Made by Max Lythgoe, for more info please email me at lythgoemax@gmail.com.</p>
          </div>

          <div className="section-2">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/categories">Categories</a></li>
              <li><a href="/support">Support</a></li>
              <li><a href="/cart">Cart</a></li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <p>Copyright ©2022 All Fake Rights Reserved by TechStack</p> <a href="/support">Learn More</a>
      </div>
      <Link to="/cart">
      <div>
      <h1 className="counter-icon">{data.length}</h1>
      </div>
      </Link>
      </div>
  )
}

export default Footer