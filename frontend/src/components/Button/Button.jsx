import React from 'react'
import'./Button.css'
function Button({name,type, onClick,classname}) {
  return (
   <button className={classname}  type={type} onClick={onClick} >{name}</button>
  )
}

export default Button