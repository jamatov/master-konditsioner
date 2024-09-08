import React from 'react'
import tg from '../Icons/footer-tg.svg'
import insta from '../Icons/footer-insta.svg'
import fc from '../Icons/footer-fc.svg'
import { Link } from 'react-scroll'

export default function Footer() {
  return (
    <footer className='Footer'>
      <div className="container">
        <div className='footer-list'>
          <ul>
            <li ><Link activeClass="active" spy={true} smooth={true} offset={-120} duration={100} to='Uslugi'>Услуги</Link></li>
            <li ><Link spy={true} smooth={true} offset={-120} duration={100} to='About'>О нас</Link></li>
            <li ><Link spy={true} smooth={true} offset={-120} duration={100} to='Contact'>Для справки</Link></li>
          </ul>
        </div>

        <div className="footer-bottom">
          <div>©Все права защищены</div>
          <div className='footer-socials'>
            <img src={tg} alt="telegram" />
            <img src={insta} alt="instagram" />
            <img src={fc} alt="facebook" />
          </div>
          <div>
            Web Marketing
          </div>
        </div>
      </div>
    </footer>
  )
}
