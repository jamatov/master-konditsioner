import React from 'react'
import master1 from '../Images/master1.jpg'
import master2 from '../Images/master2.jpg'
import master3 from '../Images/master3.jpg'


export default function Masters() {
  return (
    <section className='Masters'>
      <div className="container">
        <div className="row">
          <h2>Наши мастера</h2>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img src={master1} alt="master1" />
                <h3>Ефремов Александр Алексеевич</h3>
                <p>Инженер: опыт работы 25 лет</p>
                <h4>Инженер – электрик по установке сплит-систем и систем вентиляции. Имеет опыт работы с подобным оборудованием более 10 лет.</h4>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img src={master2} alt="master1" />
                <h3>Бондарев Сергей Владимирович</h3>
                <p>Инженер: опыт работы 25 лет</p>
                <h4>Проработал более 10 лет специалистом по
техническому обслуживанию климатической
техники.</h4>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <img src={master3} alt="master1" />
                <h3>Никитин Роман Игоревич</h3>
                <p>Инженер: опыт работы 25 лет</p>
                <h4>Инженер высшей категории. Проработал более
15 лет в данной сфере. Имеет огромный опыт
работы с климатическим оборудованием.</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
