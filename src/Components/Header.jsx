import React from 'react'
import header_img from '../Images/home-top-img.jpg.jpg'
import icon1 from '../Icons/header-icon1.svg'
import icon2 from '../Icons/header-icon2.svg'
import icon3 from '../Icons/header-icon3.svg'
import top1 from '../Icons/caed-top1.svg'
import top2 from '../Icons/card-top2.svg'
import { Fade } from 'react-reveal' 



export default function Header() {
  return (
    <section className='Header'>
      <div className="container">
        <div className="row">
        <Fade left>
          <div className="col-md-7 header-info">
            <h2>Ремонт и обслуживание <br /> <span>кондиционеров</span> <br /> в Ташкент </h2>
            <img className='dn' src={header_img} alt="header-img" />
            
            <div className="d-flex">
              <div className="card">
                <img className='top-stick1' src={top1} alt="card-top-stick" />
                <img className='card-icon' src={icon1} alt="icon" />
                <p>Бесплатная <br /> диагностика</p>
              </div>

              <div className="card">
                <img className='card-icon' src={icon2} alt="icon" />
                <p>Гарантия до 12 <br /> месяцев</p>
              </div>

              <div className="card">
                <img className='top-stick2' src={top2} alt="card-top-stick" />

                <img className='card-icon' src={icon3} alt="icon" />
                <p>Выезд от 30 минут</p>
              </div>
            </div>

            <div className="header-button">
              Работаем круглосуточно без праздников и выходных. 24/7
            </div>

          </div>
        </Fade>

          <Fade right>
            <div className="col-md-5">
              <img className='header-img' src={header_img} alt="header-img" />
            </div>
          </Fade>
          
          
        </div>
      </div>
    </section>
  )
}
