import React from 'react';
import './Navbars.css'
import { Link } from 'react-router-dom';
import profile from '../../Assets/profile/profile.jpg'

const Navbars = () => {
    
    return (
        <div className=''>
            <div className="navbar bg-slate-600 flex justify-between ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/Project' >Project</Link></li>
                            <li><Link to='/Contacts'>Contacts</Link></li>
                            <img className='w-12 rounded-full ml-3' src={profile} alt="" />
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl text-white">Redoy Hossin</Link>
                </div>

                <div className="navbar-center hidden lg:flex  ">
                    <ul className="menu menu-horizontal p-0  text-white ">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/Project' >Project</Link></li>
                        <li><Link to='/Contacts'>Contacts</Link></li>
                        <li><Link to='/AboutMe'>About Me</Link></li>
                        <img className='w-12 rounded-full' src={profile} alt="" />
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbars;