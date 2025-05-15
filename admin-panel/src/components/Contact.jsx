// src/pages/Contact.jsx
import '../assets/styles/Contact.css';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-container" id="Contact">
      <h2 className="contact-title">Contact</h2>
      <div className="contact-info">
        <div className="contact-block">
          <FaEnvelope className="icon" />
          <span className="label">E-mail</span>
        </div>
        <div className="info">
          <p>alcantara@mat.puc-rio.br</p>
        </div>
        <div className="contact-block">
          <FaPhone className="icon" />
          <span className="label">Telefone</span>
        </div>
        <div className="info">
          <p>(21) 3527-1744</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
