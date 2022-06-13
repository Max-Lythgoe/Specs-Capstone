const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;
const sequelize = require('./sequelize')
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

//Middleware
app.use(express.json());
app.use(cors());

//Put endpoints here
app.get('/api/allProducts', async (req, res) => {
    let products = await sequelize.query(`
    SELECT * FROM products
    WHERE category = 'computers'
    LIMIT 10
    `)
    res.status(200).send(products[0])
});

//category
app.get(`/api/categories/:catname`, async (req, res) => {
    const {catname} = req.params
    const products = await sequelize.query(`
    SELECT * FROM products
    WHERE category = '${catname}'
    `)
    res.status(200).send(products[0])
})

app.get(`/api/userCart/:id`, async (req, res) => {
    const {id} = req.params
    const myCart = await sequelize.query(`
    SELECT c.id as cart_id, p.name, p.price, p.img_link, p.category FROM cart c
    JOIN products p
    ON c.product_id = p.id
    WHERE c.user_id = ${id}
    `)
    res.status(200).send(myCart[0])
})

//Cart Total
app.get(`/api/cartTotal/:id`, async (req, res) => {
    const {id} = req.params
    const cartTotal = await sequelize.query(`
    SELECT SUM(p.price)
    FROM cart c
    JOIN products p
    ON c.product_id = p.id
    WHERE c.user_id = ${id}
    `)
    res.status(200).send(cartTotal[0])
})

//Cart item count
app.get(`/api/cartCount/:id`, async (req, res) => {
    const {id} = req.params
    const cartCount = await sequelize.query(`
    SELECT COUNT(p.price)
    FROM cart c
    JOIN products p
    ON c.product_id = p.id
    WHERE c.user_id = ${id}
    `)
    res.status(200).send(cartCount[0])
})

app.post(`/api/addToCart`, async (req, res) => {
    const {userID, productID} = req.body
    await sequelize.query(`
    INSERT INTO cart (user_id, product_id)
    VALUES (
        ${userID},
        ${productID}
    )
    `)
    res.status(200).send("Item added to cart")
})

app.delete(`/api/userCart/:id`, async (req, res) => {
    const {id} = req.params
    await sequelize.query(`
    DELETE FROM cart WHERE id = ${id}
    `)
    res.status(200).send("Removed from Cart")
})

//stripe checkout
app.post('/create-checkout-session', async (req, res) => {

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: req.body.items.map(item => {
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: item.name
                        },
                        unit_amount: item.price * 100,
                    },
                    quantity: 1
                }
            }),
            success_url: `${process.env.SERVER_URL}/`,
            cancel_url: `${process.env.SERVER_URL}/cart`
        })
        res.json({url: session.url })
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));