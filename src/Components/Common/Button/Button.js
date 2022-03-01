import React from 'react'
import "./Button.css"

const Button = ({buttonText, onClick, customClasses, prefix}) => {
  return (  <div className={`flex absolute-center button-wrappper ${customClasses}`} onClick={onClick}>
                  {prefix} {buttonText}
  </div>
  )
}

export default Button