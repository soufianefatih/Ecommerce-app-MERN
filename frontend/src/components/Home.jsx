import React, { useEffect, useState } from 'react'
import ProductListItem from './products/ProductListItem'
import Categories from './categories/Categories';
import { useParams } from 'react-router-dom';
import {getAllproducts, getcategorybyAllProducts} from "../services/productServices";

export default function Home() {
    const[products, setProducts] = useState([]);
    const { category_id } = useParams()

    useEffect(() => {
        const fetchProducts = async () => {
            try {
               if(category_id) {
                    const response = await  getcategorybyAllProducts(category_id);
                    setProducts(response.data.result);
               }else {
                    const response = await getAllproducts();
                    setProducts(response.data.result);
               }
            } catch (error) {
                console.log(error);
            }
        }
        fetchProducts();
    }, [category_id])

    return (
        <div className='container'>
            <Categories />
            <div className="row my-5">
                {
                    products?.map(product => <ProductListItem 
                        key={product._id} product={product} />)
                }
            </div>
        </div>
    )
}