import React from 'react'
import img from '../Images/contact-img.png'
import ModalForm from '../Components/ModalForm'


export default function Contact() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <section className='Contact'>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-info">
              <h2>
                Узнайте стоимость
                ремонта Вашего <br />
                <span>кондиционера</span>
              </h2>
              <img className='contact-img dn' src={img} alt="" />

              <p>
                Ответьте на 4 вопроса и получите <br />
                скидку 10% на ремонт!
              </p>
              <button onClick={() => setModalShow(true)}>Узнать стоимость</button>
            </div>
          </div>
          <div className="col-md-6">
            <img className='contact-img' src={img} alt="" />
          </div>
        </div>
      </div>
      <ModalForm
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </section>
  )
}
