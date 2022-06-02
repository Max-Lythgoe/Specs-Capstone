import {useState} from 'react'
import Cart from '../Cart/Cart'
import NavBar from '../NavBar/NavBar'

const CartPage = () => {
    const [update, setUpdate] = useState(0)

  return (
    <div>
        <NavBar />
        <Cart update={update} setUpdate={setUpdate}/>
    </div>
  )
}

export default CartPage