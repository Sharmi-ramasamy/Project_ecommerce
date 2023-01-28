import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export const JewelSubCategory = (handleAddProduct) => {
    const [bangle, setBangle] = useState('')
    const [necklace, setNecklace] = useState('')
    const [ring, setRing] = useState('')
    const [earings, setEarings] = useState('')

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
                        <button className="btn btn-warning w-100 mb-4" onClick={() => setBangle(bangle == 'Bangles' ? "" : 'Bangles')}> Bangles  </button>
                        <button className='btn btn-warning w-100 mb-4' onClick={() => setNecklace(necklace == 'Necklace' ? "" : 'Necklace')}> Necklace </button>
                        <button className='btn btn-warning w-100 mb-4' onClick={() => setRing(ring == 'Ring' ? "" : 'Ring')}>  Ring </button>
                        <button className='btn btn-warning w-100 mb-4' onClick={() => setEarings(earings == 'Earings' ? "" : 'Earings')}>  Earings </button>
                    </div>

                    <div className="col-md-9">
                        {bangle == 'Bangles' ?
                            getProduct.filter((e) => {
                                if (e.category == 'Bangles') {
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
                        {necklace == 'Necklace' ?
                            getProduct.filter((e) => {
                                if (e.category == 'Necklace') {
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
                        {ring == 'Ring' ?
                            getProduct.filter((e) => {
                                if (e.category == 'Ring') {
                                    return e
                                }
                            }).map((e) => (
                                <div className="row" key={e.id}>
                                    <div>

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
                                </div>
                            )) : ' '}
                    </div>


                    <div className="col-md-9">
                        {earings == 'Earings' ?
                            getProduct.filter((e) => {
                                if (e.category == 'Earings') {
                                    return e
                                }
                            }).map((e) => (
                                <div className="row" key={e.id}>
                                    <div>

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
                                </div>
                            )) : ' '}
                    </div>




                </div>
            </div>



        </>
    )
}
