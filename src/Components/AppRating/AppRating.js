import React from 'react'
import Button from '../Common/Button/Button'
import "./appRating.css"

const AppRating = () => {
    const getIosPrefix = ()=>{
        return <img className='app-rating-icon' src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png" alt="" />
    }
    

  return <div className='app-rating flex max-width '>
        <div className='app-rating-block flex flex-column'>
                <div className='flex '>
                    <div className='app-rating-value flex flex-column'> 4.8</div>
                <img className="app-rating-stars" src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png" alt="" />
                
                <div className='app-rating-platform'>
                    app <br/> store
                </div>
                </div>
            <div className='non-mobile'>
                <Button buttonText="download the app"
                    prefix={getIosPrefix()}
                 customClasses="app rating button" />
            </div>
        </div>

        <div className='app-rating-block flex flex-column'>
                <div className='flex '>
                    <div className='app-rating-value flex flex-column'> 4.8</div>
                <img className="app-rating-stars" src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png" alt="" />
                
                <div className='app-rating-platform'>
                    app <br/> store
                </div>
                </div>
            <div className='non-mobile'>
                <Button buttonText="download the app"
                    prefix={getIosPrefix()}
                 customClasses="app rating button" />
            </div>
        </div>

      </div>
  
}

export default AppRating