import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Navbar.css';
import Dropdown from './Dropdown';
import Dropdown2 from './Dropdown2';
import Logo from './images/logo.png';

console.log(Dropdown);
function Navbar() {


      const [dropdown, setDropdown] = useState(false);
      const [dropdown2, setDropdown2]=useState(false);



      const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } 
        else {
          setDropdown(true);

        }
      };

      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };

      const onMouseEnter2=()=>{
        if(window.innerWidth<960){
          setDropdown2(false);
        }
        else{
          setDropdown2(true);
        };}

        const onMouseLeave2=()=>{
          if(window.innerWidth<960){
            setDropdown2(false)
          }
          else{
            setDropdown2(false);
          }
        };
  


  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' >
          <img src={Logo} alt='logo'/>
        </Link>
        <div className='search-user'>
        <i class="fas fa-search fa-3x"></i>
        <Link to='/Signin'> <i class="far fa-user fa-3x"></i></Link>
        </div>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link to='/Services' className='nav-links'>
              Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Services' className='nav-links'>
              Work
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Services' className='nav-links'>
              Innovation
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/insgihts'
              className='nav-links'
            >
              Insights <i className='fas fa-chevron-down' />
            </Link>
              {dropdown && <Dropdown/>}
          </li>


          <li 
            className='nav-item'
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
            >
            <Link
              to='/about_us'
              className='nav-links'

            >
              About Us <i className='fas fa-chevron-down' />
            </Link>
            {dropdown2 && <Dropdown2/>}
          </li>
          <div className='seperate'>
          <li className='nav-item'>
            <Link
              to='/get_in_touch'
              className='nav-links'
            >
              Get in Touch
            </Link>
          </li>
          </div>

        </ul>

      </nav>
    </>
  );
}

export default Navbar;
