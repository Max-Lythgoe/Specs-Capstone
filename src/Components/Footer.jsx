import {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import './footer.css'

const Footer = () => {

  var [update, setUpdate] = useState(0)
  const [data, setData] = useState([])

  let currentUser = 1

  const getData = () => {
      axios.get(`http://localhost:4000/api/userCart/${currentUser}`)
      .then((res) => {
          setData(res.data)
          setUpdate(++update)
      })
      .catch(console.error)
  }

  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div className='footer-body'>
      <h1>footer</h1>
      <Link to="/cart">
      <div>
      <h1 className="counter-icon">{data.length}</h1>
      </div>
      </Link>
      </div>
  )
}

export default Footer