import React from 'react'
import'./Button.css'
function Button({name, onClick,classname}) {
  return (
   <button className={classname}  type='submit' onClick={onClick} >{name}</button>
  )
}

export default Button