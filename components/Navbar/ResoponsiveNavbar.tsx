"use client"
import React, { useState } from 'react'
import MobileNavbar from './MobileNavbar'
import Nav from './Nav'

const ResoponsiveNavbar = () => {

    const [showNav,setShowNav]=useState(false);
    const showNavHandler=()=>setShowNav(true);
    const closeNavHandler=()=>setShowNav(false)
  return (
    <div>
        <Nav openNav={showNavHandler}/>
        <MobileNavbar showNav={showNav} closeNav={closeNavHandler}/>
    </div>
  )
}

export default ResoponsiveNavbar