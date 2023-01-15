import React from 'react'

export const FlashCard = () => {
  return (
   <>
        <div className='box'>
            <div className='product mtop'>
                <div className='img'>
                    <span className='discount'> % Offer </span>
                    <img src='' alt=''/>
                    <div className='product-like'>
                        <label></label> <br/>
                      <i className='fa-regular fa-heart'></i>

                    </div>
                </div>
                <div className='product-details'>
                    <h3></h3>
                     <div className='rate'>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                            <i className='fa fa-star'></i>
                     </div>
                     <div className='price'>
                        <h3></h3>
                        <button>
                            <i className='fa fa-plus'></i>
                        </button>
                     </div>
                </div>
            </div>
        </div>
   </>
  )
}
