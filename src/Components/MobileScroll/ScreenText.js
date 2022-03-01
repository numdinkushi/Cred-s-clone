import React, { useEffect, useRef, useState } from 'react'
// import "./mobileScroll.css"
const ScreenText = ({screen, setCurrentImg, i}) => {
  const [showAnimation, setShowAnimation] = useState(false)
  const ref = useRef(null)

  const toggleAnimation = (e)=> {
      if(e[0].isIntersecting){
          setShowAnimation(true)      
          setCurrentImg(i)
      }

  } 
  const options = {
      root:null,
      rootMargin:"0px",
      threshold:0.6,
  }
  
  useEffect(()=>{
      const observer = new IntersectionObserver(toggleAnimation, options)
      
          if(ref.current){
              observer.observe(ref.current)
          }
      
      return ()=>{
          observer.unobserve(ref.current)

      }
  })
  
  return <div className={`screen-text ${showAnimation? "text-visible" : ""}`} ref={ref}>
            <div className='screen-heading'>
                {screen.heading} 
            </div> 
            <div className='mobile-mockup-wrapper only-mobile'>
                    <div className='mobile-mockup'>
                        <div className='mobile-mockup-screen flex absolute-center'>
                            <img
                            src={screen.mobile_img}
                            className='mobile-screen-img'
                            >
                            
                            </img>
                        </div>
                    </div>
                </div>
                <div className='screen-descritption'> {screen.desc}</div>
      </div>
  
}

export default ScreenText