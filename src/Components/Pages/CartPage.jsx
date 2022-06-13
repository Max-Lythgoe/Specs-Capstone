import {useState} from 'react'
import Cart from '../Cart/Cart'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

const CartPage = () => {
    const [update, setUpdate] = useState(0)

  return (
    <div>
        <NavBar />
        <Cart update={update} setUpdate={setUpdate}/>
        <Footer update={update} />
    </div>
  )
}

export default CartPage