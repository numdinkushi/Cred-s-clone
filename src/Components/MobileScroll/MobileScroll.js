import React, { useEffect, useRef, useState } from 'react'
import "./mobileScroll.css"
import ScreenText from './ScreenText'

const scrollData = [
    {   id:"1",
        heading:"we've got your back",
        desc:"gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.",
        mobile_img:"https://web-images.credcdn.in/_next/assets/images/home-page/features/fold1.png",
    },
    {   id:"2",
        heading:"begin your winning streak",
        desc:"use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.",
        mobile_img:"https://web-images.credcdn.in/_next/assets/images/home-page/features/fold2.png",
    },
       { id:"3",
        heading:"for your eclectic taste.",
        desc:"get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of.",
        mobile_img:"https://web-images.credcdn.in/_next/assets/images/home-page/features/fold3.png",
    },  {
        id:4,
        heading:"more cash in your pockets.",
        desc:"gswitch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period, more reward points and a happy landlord.",
        mobile_img:"https://web-images.credcdn.in/_next/assets/images/home-page/features/fold4.png",
    },

]

const MobileScroll = () => {
    

        const [currentImg, setCurrentImg]= useState(0)

  return   <div className='mobile-scroll max-width flex' >
                <div className='scroll-full-screen-wrapper'>
                        {scrollData.map((screen, i)=>(
                            <div className='scroll-full-screen'>
                                <ScreenText screen={screen} i={1} setCurrentImg={setCurrentImg} />
                               
                            </div>

                        ))}
                </div>
                <div className='mobile-mockup-wrapper non-mobile'>
                    <div className='mobile-mockup'>
                        <div className='mobile-mockup-screen flex absolute-center'>
                            <img
                            src={scrollData[currentImg].mobile_img}
                            className='mobile-screen-img slide-right'
                            key={scrollData[currentImg].mobile_img}
                            >
                            
                            </img>
                        </div>
                    </div>
                </div>
                <div>

                </div>

      </div>
  
}

export default MobileScroll