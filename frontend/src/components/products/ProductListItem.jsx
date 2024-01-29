import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../redux/slices/cartSlice'
import '../layouts/single.css'


export default function ProductListItem({product, single}) {
    
    const dispatch = useDispatch();
    return (
        <>
            {
                single ? 
                
                    <div className="col-md-10 mx-auto mb-2 mt-5">
                        <div className="card- mb-3">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={product.image.url} alt={product.name} 
                                        className="img-fluid h-100 rounded" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="card-title">{product.name}</h5>
                                            <h5 className="text-danger">${product.price}</h5>
                                        </div>
                                        <div className="my-2">
                                            <span className="badge bg-dark p-2">
                                                { product.category.name }
                                            </span>
                                        </div>
                                        <p className="card-text">
                                            { product.description }
                                        </p>
                                        <button 
                                         onClick={() => dispatch(addToCart({
                                            id: product._id,
                                            name: product.name,
                                            quantity: 1,
                                            maxQty: product.qty,
                                            price: product.price,
                                            image: product.image.url
                                        }))}
                                            className="btn btn-sm btn-primary">
                                            <i className="fas fa-cart-plus"></i>{" "}
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
    
                     :
                <div className='col-md-4 mb-2 px-2'>
                    <Link to={`/products/${product._id}`} 
                        className="text-decoration-none text-dark">
                        <div className="card shadow-sm">
                            <div className="row p-2">
                                <img src={product.image.url} alt={product.name} 
                                    height={250} />
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <h5 className="card-title">{product.name}</h5>
                                        <h5 className="text-danger">${product.price}</h5>
                                    </div>
                                    <p className="card-text">
                                        { product.description.substr(0,200) }{"..."}
                                    </p>
                                    <button 
                                        className="btn btn-sm btn-primary">
                                        view more ...
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            }
        </>
    )
}
