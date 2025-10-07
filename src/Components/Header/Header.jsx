import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm mb-20 px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <NavLink to="/" className='font-semibold text-[16px]/[152%] mr-8'>Home</NavLink>
     <NavLink to="/apps" className='font-semibold text-[16px]/[152%] mr-8'>Apps</NavLink>
     <NavLink to="/installation" className='font-semibold text-[16px]/[152%] mr-8'>Installation</NavLink>
      </ul>
    </div>
    <a href='/' className="btn btn-ghost 
    font-bold 
    bg-clip-text
     text-transparent
      bg-gradient-to-r 
      from-[#632EE3]
       to-[#9F62F2]"><img className='w-[30px] h-[30px]' src="/src/assets/logo.png" alt="" />HERO.IO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <NavLink to="/" className='font-semibold text-[16px]/[152%] mr-8'>Home</NavLink>
     <NavLink to="/apps" className='font-semibold text-[16px]/[152%] mr-8'>Apps</NavLink>
     <NavLink to="/installation" className='font-semibold text-[16px]/[152%] mr-8'>Installation</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://github.com/roksanadilshad' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"><FaGithub/> Contribute</a>
  </div>
</div>
        </div>
    );
};

export default Header;