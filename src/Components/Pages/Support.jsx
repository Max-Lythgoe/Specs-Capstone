import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import './Support.css';

const Support = () => {

  return (
    <div>
        <NavBar />
        <h1>Support</h1>
        <div className='main-container'>
        <h2>3 Minute Video Demo:</h2>
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/K_o8q-KdgIg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h2>GitHub Link</h2>
        <a className="git-link" href="https://github.com/Max-Lythgoe/Specs-Capstone">Link to GitHub Repo</a>
        <h2>Features:</h2>
        <ul className="list-container">
          <li className='list-items'>Homepage with featured products</li>
          <li className='list-items'>Product cards showing basic info such as name and price, when clicked on it activates the modal view which gives add to cart option and a more detailed description</li>
          <li className='list-items'>Ability to add to cart: simply click on any product to expand the modal and add to cart</li>
          <li className='list-items'>Pop up when adding to cart confirming item was added, dissapears after 5 seconds and includes link to cart</li>
          <li className='list-items'>Top right of screen shows current count of total number of items in cart</li>
          <li className='list-items'>Sort by category on category screen</li>
          <li className='list-items'>Sorty items by price or alphabetically on category page</li>
          <li className='list-items'>Remove an item from cart</li>
          <li className='list-items'>Checkout using Stripe for processing payments</li>
        </ul>
        </div>
        <Footer />
      </div>
        
  )
}

export default Support