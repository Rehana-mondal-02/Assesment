import React from 'react'
import img1 from "../images/logo.png";
import img2 from "../images/search.png"
import SearchIcon from '@material-ui/icons/Search';
import "./nav.css"

const Nav = () => {
  return (
    <div className='nav'>
    <img className='logo' src={img1} alt="#"/>
    <nav>
    <ul>
      <li>Home</li>
        <li>Buy NFT</li>
        <li>Feeding</li>
        <li>Faq</li>
        <li>Home</li>
      </ul>
      <div className='searchbar'>
      <SearchIcon className='icon'/>
      <input type="search" placeholder='Brouse Shop'/>
      <img src={img2} alt="#"/>
      </div>

      
    </nav>

    </div>
  )
  
}

export default Nav