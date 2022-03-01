import React from 'react'
import BrandsLove from '../Components/BrandsLove/BrandsLove'
import Header from '../Components/Common/Header/Header'
import CredSecurity from '../Components/CredSecurity/CredSecurity'
import FeelSepecial from '../Components/FeelSpecial/FeelSepecial'
import HeroSection from '../Components/HeroSection/HeroSection'
import CredExperience from '../Components/CredExperience/CredExperience'
import ProductShowcase from '../Components/ProductShowcase/ProductShowcase'
import WindowPeek from '../Components/WindowPeek/WindowPeek'
import MobileScroll from '../Components/MobileScroll/MobileScroll'
import CredStory from '../Components/CredStory/CredStory'
import AppRating from '../Components/AppRating/AppRating'

const Homepage = () => {
  return (
    <div>
          <Header />
          <HeroSection />
          <ProductShowcase />
          <FeelSepecial />
          <BrandsLove />
          <CredExperience />
          <MobileScroll />
          <div className='non-mobile'> 

          <WindowPeek />
          </div>
          <CredSecurity />
          <CredStory />
    </div>
  )
}

export default Homepage