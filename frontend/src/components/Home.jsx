import React from 'react'
import ProductListItem from './products/ProductListItem'

export default function Home() {
  return (
    <div className='container'>
      <div className='row my-5'>
           {
             <ProductListItem/>
           }
      </div>
    </div>
  )
}
