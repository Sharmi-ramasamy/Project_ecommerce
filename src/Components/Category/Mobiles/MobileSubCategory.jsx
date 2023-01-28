import React from 'react'
import './MobileSubCategory.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export const MobileSubCategory = ({handleAddProduct}) => {
  const [redmi, setRedmi] = useState('')
    const [oppo, setOppo] = useState('')
    const [samsung, setSamsung] = useState('')
    const [vivo,setVivo] = useState('')

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
                        <button className="btn btn-warning w-100 mb-4" onClick={() => setRedmi(redmi == 'Redmi' ? "" : 'Redmi')}> Redmi  </button>
                        <button className='btn btn-warning w-100 mb-4' onClick={() => setOppo(oppo == 'Oppo' ? "" : 'Oppo')}> Oppo </button>
                        <button className='btn btn-warning w-100 mb-4' onClick={() => setSamsung(samsung == 'Samsung' ? "" : 'Samsung')}>  Samsung </button>
                        <button className='btn btn-warning w-100 mb-4' onClick={() => setVivo(vivo == 'vivo' ? "" : 'Vivo')}>  Vivo </button>
                    </div>

                    <div className="col-md-9">
                        {redmi == 'Redmi' ?
                            getProduct.filter((e) => {
                                if (e.category == 'Redmi') {
                                    return e
                                }
                            }).map((e) => (
                                <div key={e.id} className="row">
                                        <div className="col-md-4 mb-4">
                                            <div className="card">
                                                <img src={e.image} className='card-img-top' alt={e.name} />
                                                <div className="card-body">
                                                    <h5 className="card-title"> {e.name} </h5>
                                                    <p > ${e.price} </p>
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
                        {oppo == 'Oppo' ?
                            getProduct.filter((e) => {
                                if (e.category == 'Oppo') {
                                    return e
                                }
                            }).map((e) => (
                                <div className="row" key={e.id}>
                                        <div className="col-md-4 mb-4">
                                            <div className="card">
                                                <img src={e.image} className='card-img-top' alt={e.name} />
                                                <div className="card-body">
                                                    <h5 className="card-title"> {e.name} </h5>
                                                    <p > $ {e.price} </p>
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
                        {samsung == 'Samsung' ?
                            getProduct.filter((e) => {
                                if (e.category == 'Samsung') {
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
                        {vivo == 'Vivo' ?
                            getProduct.filter((e) => {
                                if (e.category == 'Vivo') {
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
