import React from 'react'

export default function ProductListItem({product}) {
  return (
    <div className='col-md-4 mb-2'>
        <div className='card shadow-sm p-2'>
            <div className='row'>
                <img src={product.image.url} alt={product.name} height={250} />
                <div className='card-body '>
                   <div className="d-flex justify-content-between">
                        <h5 className='card-title'> {product.name}</h5>
                        <h5 className='text-danger'>${product.price}</h5>
                    </div>  
                    <p className="card-text">{product.description.substr(0,100)}{"..."}</p>                    
                   <button className='btn btn-sm btn-primary'>
                      <i className='fas fa-cart-plus'></i>{" "}
                      Add to cart
                   </button>
                </div>
            </div>

        </div>
    </div>
  )
}
