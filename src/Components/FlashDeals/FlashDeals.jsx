import React from 'react'
import { FlashCard } from './FlashCard'

export const FlashDeals = () => {
  return (
    <>
        <section className='flash background'>
            <div className='container'>
                <div className='heading f_flex'>
                    <i className='fa fa-bolt'></i>
                    <h2> FlashDeals </h2>
                </div>
                    <FlashCard/>
            </div>
        </section>
    </>
  )
}
