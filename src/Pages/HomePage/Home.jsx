import React from 'react'
import Header from '../../Common/Header/Header'
import { Pages } from '../Pages'
import { Categories } from './Categories'
import { SlideCard } from './SlideCard'
import { Slider } from './Slider'
// import './Header/Header.css'
import './Home.css'
// import './Header.css'

const Home = () => {
  return (
    <>
    <section className='home'>
      <div className='container d_flex'>
      <Header/>
            <Categories/>
            <Slider/>
            
            {/* <Pages/> */}
      </div>
    </section>
    </>
  )
}


export default Home