import React from 'react'

export default function ProductListItem() {
  return (
    <div className='col-md-4'>
        <div className='card shadow-sm p-2'>
            <div className='row'>
                <img src="" alt="" />
                <div className='card-body '>
                   <div className="d-flex justify-content-between">
                        <h5 className='card-title'> Lenovo</h5>
                        <h5 className='text-danger'>$500</h5>
                    </div>  
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia perferendis nemo maxime similique explicabo nisi repellendus perspiciatis incidunt expedita id </p>                    
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
