import React from 'react';
import { BiSearch } from 'react-icons/bi';

const Nav = () => {
  return (
    <div className='nav-bar'>
      <h1>KinBech</h1>
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
