import React from 'react'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import Testimonial from './components/Testimonial'
import { recipes } from './recipes/page'

export default function HomePage() {
  return (
    <div>
      <Header/>
      <Hero recipes={recipes}/>
      <Testimonial/>
      <Gallery/>
      <Footer/>
    </div>
  )
}
