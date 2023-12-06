import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <div className='main-header'>
      <div>
        <h1>NIT-EEG</h1>
      </div>
      <div className='headings'>
        <div>Home</div>
        <div>Members</div>
        <div>Research</div>
        <div>Projects</div>
        <div>Publications</div>
        <div>Collaborate</div>
        <div>Contact Us</div>
      </div>
    </div>
  )
}
