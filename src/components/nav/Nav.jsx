import React from 'react'
import './nav.css'
import {BiHomeAlt2} from 'react-icons/bi'
import {RiUserLine} from 'react-icons/ri'
import {MdWork} from 'react-icons/md'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav]= useState ('#')
  return (
    <nav>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt2/></a>
      <a href='#about' onClick={() => setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}><RiUserLine/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active' : ''}><MdWork/></a>
      <a href='#services' onClick={() => setActiveNav('#services')}  className={activeNav === '#services' ? 'active' : ''}><MdOutlineMiscellaneousServices/></a>
      
    </nav>
  )
}

export default Nav