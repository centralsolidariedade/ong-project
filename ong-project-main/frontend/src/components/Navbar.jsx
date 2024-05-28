import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { HiOutlineTemplate, HiOutlineSearchCircle, HiOutlineViewGrid } from "react-icons/hi";

const Navbar = () => {
    const location = useLocation();
    const [selected, setSelected] = useState('/ongs/');

    useEffect(() => {
        setSelected(location.pathname);
    }, [location]);

    return ( 
        <nav className='navbar'>
            <div className='containerNavBar'>
                <ul className='listNavBar'>
                    <li><Link to='/' className={selected === '/' ? 'selected' : ''}><HiOutlineViewGrid className='iconsNavBar' /></Link></li>
                    <li><Link to='/buscarfamilias/' className={selected === '/buscarfamilias/' ? 'selected' : ''}><HiOutlineSearchCircle className='iconsNavBar' /></Link></li> 
                    <li><Link to='/ongs/' className={selected === '/ongs/' ? 'selected' : ''}><HiOutlineTemplate className='iconsNavBar' /></Link></li>  
                </ul>
            </div>
        </nav>
     );
}

export default Navbar;