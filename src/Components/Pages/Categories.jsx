import React from 'react'
import NavBar from '../NavBar/NavBar'
import ProductByCategory from '../Categories/ProductByCategory'
import Footer from '../Footer/Footer'

const CategoriesPage = ({update, setUpdate}) => {
  return (
    <div>
        <NavBar />
        <ProductByCategory update={update} setUpdate={setUpdate} />
        <Footer update={update} />
    </div>
  )
}

export default CategoriesPage