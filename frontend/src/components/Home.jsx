import React, { useEffect, useState } from 'react'
import ProductListItem from './products/ProductListItem'
import axios from 'axios';

export default function Home() {
    const [products, setProducts] = useState([]);


   useEffect (()=>{
    const fetchProducts = async ()=>{
      try {
        const response =await axios.get('http://localhost:5050/v1/product');
         setProducts(response.data.result)
         console.log(setProducts);
      } catch (error) {
        console.log(error);
      }
    }
     fetchProducts();
   },[])



  return (
    <div className='container'>
      <div className='row my-5'>
           {
             products?.map(product => <ProductListItem  key={product.id} product={product}/>)
           }
      </div>
    </div>
  )
}
