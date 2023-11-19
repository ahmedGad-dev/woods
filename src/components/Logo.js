import React from 'react'
import logoImg from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <div>
        <Link to='/'><img src={logoImg} alt="logo" width='65px' height='65px'/></Link>
    </div>
  )
}

export default Logo