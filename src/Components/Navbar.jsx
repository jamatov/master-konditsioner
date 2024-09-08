import React, {useState} from 'react'
import Logo from '../Images/master-logo.svg'
import { Link } from 'react-scroll'
import callBtn from '../Icons/call-btn.svg'

export default function Navbar() {
  const[active, setActive] = useState("nav__menu");
  const[toggleIcon, setToggleIcon] = useState("nav__toggler");
  const navToggle = () => {
    active === "nav__menu"
    ? setActive("nav__menu nav__active")
    : setActive("nav__menu");

    toggleIcon === "nav__toggler"
    ? setToggleIcon("nav__toggler toggle")
    : setToggleIcon ("nav__toggler");
  };

  return (
    <nav className='Navbar'>
      <div className="container"> 
        <div className="nav-body">

          <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <li className='nav-logo2'><img  src={Logo} alt="Logo" /></li>


          <ul className={active}>
            {/* <Link onClick={navToggle} activeClass="active" spy={true} smooth={true} offset={-120} duration={100} to='Header'>Главная</Link> */}
            <li className='nav-logo1'><img  src={Logo} alt="Logo" /></li>
            <li ><Link onClick={navToggle} activeClass="active" spy={true} smooth={true} offset={-120} duration={100} to='Uslugi'>Услуги</Link></li>
            <li ><Link onClick={navToggle} spy={true} smooth={true} offset={-120} duration={100} to='About'>О нас</Link></li>
            <li ><Link onClick={navToggle} spy={true} smooth={true} offset={-120} duration={100} to='Contact'>Для справки</Link></li>
          </ul>

          <div className='nav-numbers'>
            <li><a href="tel:+998770724349">+998(77)072-43-49</a></li>
            <li><a href="tel:+998770109744">+998(77)010-97-44</a></li>
          </div>

          <a className='call-btn' href="tel:+998770724349">
            <img src={callBtn} alt="call-btn" />
          </a>



          
        </div>
      </div>  
    </nav>
  )
}
