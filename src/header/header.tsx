import styleHeader from "./header.module.css";
import logo from "../images/logo_welbex.png";
import Contacts from "../contacts/contacts";
import ballPurpleSmall from "../images/ball/footer-purple-ball.png";
import ballPurpleBig from "../images/ball/footer-purple-light.png";
import ballRed from "../images/ball/footer-red-ball.png";

function Header() {
  return (
    <div className={`${styleHeader.header}`}>
      <nav className={`${styleHeader.container}`}>
        <div>
          <img
            src={`${logo}`}
            className={`${styleHeader.logo}`}
            alt="Логотип"
          />
          <p className={`${styleHeader.textLogo}`}>
            крупный интегратор CRM в Росcии и ещё 8 странах
          </p>
        </div>
        <ul className={`${styleHeader.list}`}>
          <li>
            <p className={`${styleHeader.text}`}>Услуги</p>
          </li>
          <li>
            <p className={`${styleHeader.text}`}>Виджеты</p>
          </li>
          <li>
            <p className={`${styleHeader.text}`}>Интеграции</p>
          </li>
          <li>
            <p className={`${styleHeader.text}`}>Кейсы</p>
          </li>
          <li>
            <p className={`${styleHeader.textSert}`}>Сертификаты</p>
          </li>
        </ul>
      </nav>
      <div className={`${styleHeader.contacts}`}>
        <Contacts />
      </div>
      <img
        src={`${ballPurpleSmall}`}
        className={`${styleHeader.ballPurpleSmall}`}
        alt="Фиолетовый шар, дизайн"
      />
      <img
        src={`${ballPurpleBig}`}
        className={`${styleHeader.ballPurpleBig}`}
        alt="Фиолетовый свет, дизайн"
      />
      <img
        src={`${ballRed}`}
        className={`${styleHeader.ballRed}`}
        alt="Красный шар, дизайн"
      />
    </div>
  );
}

export default Header;
