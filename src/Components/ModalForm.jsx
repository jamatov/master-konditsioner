import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import { CHAT_ID, TOKEN } from "../Constants";


export default function ModalForm(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [model, setModel] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  let text = `Ismi: ${name}.%0ATelefon raqami: ${phone}`;

  const sendFeedback = (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (phone.length !== 19) {
      toast.error("Требуется номер телефона. Попробуйте еще раз.");
      setIsLoading(false);
    } else {
      const { data } = axios.post(
        `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`
      );

      toast.success(`Завершено успешно. Дождитесь обратного звонка!`);
      setIsLoading(false);
      setName("");
      setPhone("+998");
    }
  };

  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    className='ModalForm'
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Мастер-бронирование
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <form onSubmit={sendFeedback} className='modalform-form' action="">
        <div className="row">
          <div className="card-body">
            <label className='col-12' htmlFor="name">Ваше имя</label>
            <input 
              className="col-12" 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              id="name" placeholder='Имя' />

            <label className='col-12' htmlFor="number">Ваш номер телефона</label>
            <InputMask
              className="col-12"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              mask="+998 (99) 999-99-99"
              maskChar=""
              id="phone"
              type="text"
              placeholder="+998 (_) _ _ _"
            />

            <button className='col-12' disabled={isLoading} type="submit">
              {" "}
              {isLoading && (
                <i className="spinner-border spinner-border-sm text-white me-2"></i>
              )}
              Заказать звонок
            </button>
          </div>
        </div>
      </form>
    </Modal.Body>
    
  </Modal>
  )
}

