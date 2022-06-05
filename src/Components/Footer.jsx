import {useEffect, useState} from "react";
import axios from 'axios';
import './footer.css'

const Footer = () => {

  const [update, setUpdate] = useState(0)
  const [data, setData] = useState([])

  let currentUser = 1

  const getData = () => {
      axios.get(`http://localhost:4000/api/userCart/${currentUser}`)
      .then((res) => {
          setData(res.data)
          setUpdate(++update)
      })
  }

  useEffect(() => {
    getData()
  }, [update])

  // useEffect(() => {
  //   setInterval(() => {
  //     getData()
  //   }, 1000);
  // },[])

  
  return (
    <div className='footer-body'>
      <h1>footer</h1>
      <div>
      <h1 className="counter-icon">{data.length}</h1>
      </div>
      </div>
  )
}

export default Footer