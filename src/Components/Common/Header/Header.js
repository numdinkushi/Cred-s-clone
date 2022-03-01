import React, { useState } from 'react'
import "../../../Common/commonClasses.css";
import "../../../Common/animation.css";
import "./header.css"
const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const toggleMobileMenu = ()=>{
        setShowMobileMenu(!showMobileMenu)
    }
  return (
  <>
    <div className="mobile-menu-wrapper" >
         <div className={`mobile-menu only-mobile  ${showMobileMenu ? "overlay" : ""} `} >
                    <div className='mobile-nav-bar'>
                    <div className='mobile-nav-item'> credit score check</div>
                    <div className='mobile-nav-item'>  check credit card bill payment</div>
                    </div>
                   

         </div>
            <div className="header flex max-width">
                    <img className='header-logo' src='https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png' />
                    <div className='nav-menu non-mobile flex'>

                    <div className='header-nav-item'> credit score check</div>
                    <div className='header-nav-item'>  check credit card bill payment</div>
                 
                    </div>
                    <div className='only-mobile mobile-menu-button-wrapper  '>


                    <button className= {`hamburger hamburger--spin ${showMobileMenu? "is-active": ""}` }
                            type="button" 
                            onClick={toggleMobileMenu}
                            >
                    <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                    </span>
                    </button>  
    
                            </div>

            </div>
    </div>
  </>
  )
}

export default Header