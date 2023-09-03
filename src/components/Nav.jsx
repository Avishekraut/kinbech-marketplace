import React from 'react';
import { BiSearch } from 'react-icons/bi';
import {AiOutlineMenu} from "react-icons/ai";

const Nav = () => {
  return (
    <div className='nav-bar'>
      <AiOutlineMenu size={26} className='hamburger-menu'/>
      <h1 className='logo-text'>KinBech</h1>
      <div className="search">
      <input className='search-box' type='text'name='search' placeholder='What are you looking for?'></input>
      <span className='search-icon'> <BiSearch size={19}/></span>
      </div>
      <ul className='nav-links'>
        <li>Login</li>
        <li>Signup</li>
      </ul>
      <button className='postad-btn'>Post Ad</button>
    </div>
  );
}

export default Nav;
