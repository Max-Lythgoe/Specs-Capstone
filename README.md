# Link to 3 Minute Video Demo

https://www.youtube.com/watch?v=K_o8q-KdgIg

# Startup Instructions

First, run "npm i" to install needed dependencies.
In a new terminal, run "npm start" for the React frontend. In a seperate terminal run "nodemon server" for the backend server.

## List of Features

* Homepage with featured products
* Product cards showing basic info such as name and price, when clicked on it activates the modal view which gives add to cart option and a more detailed description
* Ability to add to cart: simply click on any product to expand the modal and add to cart
* Pop up when adding to cart confirming item was added, dissapears after 5 seconds and includes link to cart
* Top right of screen shows current count of total number of items in cart
* Sort by category on category screen
* Sorty items by price or alphabetically on category page
* Remove an item from cart
* Checkout using Stripe for processing payments

## Tables in Database

My Database is made up of 3 tables: users, cart and products. Users shows which cart belongs to what user in case I wanted multiple users (although for this project I just use the one user). The products table includes every product available for purchase on the site. It shows item name, description, category, price, image link (images from best buy) and product ID. Cart takes the userID to know which user's cart contains what items, and takes the product ID and combines that in order to take all the info from the product table that it needs to display in cart.
