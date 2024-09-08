import React from 'react'
import icon1 from '../Icons/about-icon1.svg'
import icon2 from '../Icons/about-icon2.svg'
import { Fade } from 'react-reveal'

export default function About() {
  return (
    <section className='About'>
      <div className="container">
        <Fade left>
          <h2>Предоставляем гарантии на ремонт <br /> <span>кондиционеров</span></h2>
        </Fade>
        <div className="row">
          <Fade left>
            <div className="col-md-6">
              <p>Исправно работающий кондиционер – это гарантия комфорта, свежего
                воздуха и уюта в любом помещении. Важно доверить эту технику
                гарантированно надежной компании. Обращайтесь в «Mастеркондиционер»! Это 100% уверенности в долговечности вашей климатической техники!</p>
                <p>Мы отвечаем за качество своей работы и даем гарантию на
                произведенные работы и установленные запчасти.</p>
            </div>
          </Fade>
          <Fade right>
            <div className="col-md-6">
              <div className="about-icons">
                <div className='icon-body'>
                  <img src={icon1} alt="" />
                  <p>Гарантия на <br />проведенные работы</p>
                </div>

                <div className='icon-body'>
                  <img src={icon2} alt="" />
                  <p>Гарантия на <br />используемые запчасти</p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}
