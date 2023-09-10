import React from 'react';
import { BiSearch } from 'react-icons/bi';
import {AiOutlineMenu} from "react-icons/ai";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav-bar'>
      <AiOutlineMenu size={26} className='hamburger-menu'/>
      <h1 className='font-bold text-2xl'><Link to="/">KinBech</Link></h1>
      <div className="search">
      <input className='search-box' type='text'name='search' placeholder='What are you looking for?'></input>
      <span className='search-icon'> <BiSearch size={19}/></span>
      </div>
      <ul className='nav-links'>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
      <button className='postad-btn'>Post Ad</button>
    </div>
  );
}

export default Nav;
