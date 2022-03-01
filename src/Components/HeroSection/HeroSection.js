import React from 'react'
import "../../Common/commonClasses.css";
import Button from '../Common/Button/Button';
import "./heroSection.css";

const HeroSection = () => {
  return <>
    <div className='hero-section-wrapper '>
          <div className="flex absolute-center hero-claim-label ">
              <div className="">
              pay credit card bill. earn guaranteed ₹200 back.
              </div>
              <div className="claim-anchor">
                  Claim  Now
              </div>
                  <img  className= "claim-arrow" src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png" alt="cred logo"/>
        
          </div>
          <div className="hero-section flex absolute-center flex-col max-width">
              <div className="hero-heading">
                    rewards for paying credit card bills.

              </div>
              <div className="hero-subheading">
              join 7.5M+ members who win rewards and cashbacks everyday
              </div>
            <Button buttonText={"Download Cred"} />
          </div>
    </div>
    </>
}

export default HeroSection