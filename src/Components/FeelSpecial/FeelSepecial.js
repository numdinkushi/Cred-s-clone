import React from 'react'
import "./feelSpecial.css"
import "../../Common/commonClasses.css";
import Button from '../Common/Button/Button';


const FeelSepecial = () => {
  return <div className='feel-special photo-section'>
            <div className='max-width'>
                <div className='photo-section-child'>
                    <div className='photo-section-top'>
                        <div className='photo-section-header'>       feel special more Often.
                    </div>

                    </div>
                    <div className='photo-section-subheading'>exclusive rewards for paying your bills</div>
                    <div className='photo-section-button'>
                        <div className='photo-section-description'>
                        every time you pay your credit card bills on CRED, you receive CRED coins. you can use these to win exclusive rewards or get special access to curated products and experiences. on CRED, good begets good.
                        </div>.
                        <div>
                            <Button buttonText={"Explore rewards"} />
                        </div>
                    </div>

                </div>
            </div>

      </div>
  
}

export default FeelSepecial