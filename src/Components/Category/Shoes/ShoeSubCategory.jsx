import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export const ShoeSubCategory = (handleAddProduct) => {
    const [men, setMen] = useState('')
    const [women, setWomen] = useState('')
    const [kids, setKids] = useState('')
    // const [earings, setEarings] = useState('')

    const [getProduct, setGetProduct] = useState([])

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const prodata = await axios.get('http://localhost:4040/ProductItems')
        // console.log(prodata.data);
        setGetProduct(prodata.data)
    }
    return (
        <>
            <h1 className='text-center'> Lets Shop </h1>
            <div className="container-fluid mx-2">
                <div className="row mt-5 mx-2">

                    <div className="col-md-3">
                        <button className="btn btn-warning w-100 mb-4" onClick={() => setMen(men == 'ShoeMen' ? "" : 'ShoeMen')}> Men  </button>
                        <button className='btn btn-warning w-100 mb-4' onClick={() => setWomen(women == 'ShoeWomen' ? "" : 'ShoeWomen')}> Women </button>
                        <button className='btn btn-warning w-100 mb-4' onClick={() => setKids(kids == 'Kids' ? "" : 'Kids')}>  Kids </button>
                        {/* <button className='btn btn-warning w-100 mb-4' onClick={() => setEarings(earings == 'Earings' ? "" : 'Earings')}>  Earings </button> */}
                    </div>

                    <div className="col-md-9">
                        {men == 'ShoeMen' ?
                            getProduct.filter((e) => {
                                if (e.category == 'ShoeMen') {
                                    return e
                                }
                            }).map((e) => (
                                <div key={e.id} className="row">
                                        <div className="col-md-4 mb-4">
                                            <div className="card">
                                                <img src={e.image} className='card-img-top' alt={e.name} />
                                                <div className="card-body">
                                                    <h5 className="card-title"> {e.name} </h5>
                                                    <p > {e.price} </p>
                                                    <p className='card-text'>
                                                        {e.desc}
                                                    </p>
                                                    <button className='btn btn-dark' onClick={() => handleAddProduct(e)}>
                                                        Add To Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                   </div>
                            )) : ' '}
                    </div>

                    <div className="col-md-9">
                        {women == 'ShoeWomen' ?
                            getProduct.filter((e) => {
                                if (e.category == 'ShoeWomen') {
                                    return e
                                }
                            }).map((e) => (
                                <div className="row" key={e.id}>
                                        <div className="col-md-4 mb-4">
                                            <div className="card">
                                                <img src={e.image} className='card-img-top' alt={e.name} />
                                                <div className="card-body">
                                                    <h5 className="card-title"> {e.name} </h5>
                                                    <p > {e.price} </p>
                                                    <p className='card-text'>
                                                        {e.desc}
                                                    </p>
                                                    <button className='btn btn-dark' onClick={() => handleAddProduct(e)}>
                                                        Add To Cart
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    
                                </div>
                            )) : ' '}
                    </div>

                    <div className="col-md-9">
                        {kids == 'Kids' ?
                            getProduct.filter((e) => {
                                if (e.category == 'Kids') {
                                    return e
                                }
                            }).map((e) => (
                                <div className="row" key={e.id}>
                                        <div className="col-md-4 mb-4">
                                            <div className="card">
                                                <img src={e.image} className='card-img-top' alt={e.name} />
                                                <div className="card-body">
                                                    <h5 className="card-title"> {e.name} </h5>
                                                    <p > {e.price} </p>
                                                    <p className='card-text'>
                                                        {e.desc}
                                                    </p>
                                                    <button className='btn btn-dark' onClick={() => handleAddProduct(e)}>
                                                        Add To Cart
                                                    </button>

                                                </div>
                                            </div>
                                        </div>
                                    
                                </div>
                            )) : ' '}
                    </div>

                 
                </div>
            </div>



        </>
    )
}
