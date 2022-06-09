import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='bg-neutral text-neutral-content'>
            <div className=" p-[1%] w-[95%] navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case  border-[aqua] text-[aqua] text-xl">JA</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li className='items'><a href='/' >Home</a></li>
      <li   className='items'><a href='#about'>About</a></li>
      <li  className='items'><a href='#projects' >Projects</a></li>
      <li  className='items'><a href='#contact' >Contact Me</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://drive.google.com/file/d/1nXh337uScO4fMwSc7i5Imn5a4mjSULw1/view' className="items btn px-5 btn-sm  border-[aqua] text-[aqua]">Resume</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;