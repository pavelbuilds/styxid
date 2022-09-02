import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTelegram, faVimeo, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Icons = ({ white, grey }) => {

  const flexContainer = {
    display: "flex",
    flexWrap: "wrap",
    width: "90%",
    margin: "30px auto 20px auto",
  }

  const iconContainer = {
    color: white,
    fontSize: "50px",
    textAlign: "center",
    width: "33%",
    marginBottom: "20px",
  }

  const icon = {
    fontSize: "43px",
    marginBottom: "2px",
  }

  const iconName = {
    fontSize: "10px",
    color: grey,
    textAlign: "center",
  }

  return (
    <div style={flexContainer}>
      <div style={iconContainer}>
        <a href="https://www.instagram.com/alexdzev/?igshid=YmMyMTA2M2Y=">
          <div style={icon}>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div style = {iconName}>Instagran</div>
        </a>
      </div>
      <div style={iconContainer}>
        <a href="https://vimeo.com/alexdevsoldak">
          <div style={icon}>
            <FontAwesomeIcon icon={faVimeo} />
          </div>
          <div style = {iconName}>Vimeo</div>
        </a>
      </div>
      <div style={iconContainer}>
        <a href="mailto:alexdevsoldak@gmail.com">
          <div style={icon}>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div style = {iconName}>E-Mail</div>
        </a>
      </div>
      <div style={iconContainer}>
        <a href="https://t.me/alex_D_S">
          <div style={icon}>
            <FontAwesomeIcon icon={faTelegram} />
          </div>
          <div style = {iconName}>Telegram</div>
        </a>
      </div>
      <div style={iconContainer}>
        <a href="https://api.whatsapp.com/send?phone=34673510313">
          <div style={icon}>
            <FontAwesomeIcon icon={faWhatsapp} />
          </div>
          <div style = {iconName}>WhatsApp</div>
        </a>
      </div>
      <div style={iconContainer}>
        <a href="https://www.facebook.com/alexander.soldak.1">
          <div style={icon}>
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div style = {iconName}>Facebook</div>
        </a>
      </div>
    </div>
  )
}

export default Icons;