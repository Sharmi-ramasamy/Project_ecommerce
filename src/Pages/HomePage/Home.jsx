import React from 'react'
import { Pages } from '../Pages'
import { Categories } from './Categories'
import { SlideCard } from './SlideCard'
import { Slider } from './Slider'

const Home = () => {
  return (
    <>
    <section className='home'>
      <div className='container d_flex'>
            <Categories/>
            <Slider/>
            {/* <Pages/> */}
      </div>
    </section>
    </>
  )
}


export default Home