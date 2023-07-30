import Contacts from "../contacts/contacts";
import styleFooter from "./footer.module.css";


function Footer() {
  return (
    <div className={`${styleFooter.footer}`}>
      <div className={`${styleFooter.container}`}>
        <nav>
          <p className={`${styleFooter.caption}`}>о компании</p>
          <ul className={`${styleFooter.list}`}>
            <li>
              <p className={`${styleFooter.text}`}>Партнёрская программа</p>
            </li>
            <li>
              <p className={`${styleFooter.text}`}>Вакансии</p>
            </li>
          </ul>
        </nav>
        <nav>
          <p className={`${styleFooter.caption}`}>меню</p>
          <div className={`${styleFooter.wrapper}`}>
            <ul className={`${styleFooter.list}`}>
              <li>
                <p className={`${styleFooter.text}`}>Расчёт стоимости</p>
              </li>
              <li>
                <p className={`${styleFooter.text}`}>Услуги</p>
              </li>
              <li>
                <p className={`${styleFooter.text}`}>Виджеты</p>
              </li>
              <li>
                <p className={`${styleFooter.text}`}>Интеграции</p>
              </li>
              <li>
                <p className={`${styleFooter.text}`}>Наши клиенты</p>
              </li>
            </ul>
            <ul className={`${styleFooter.list}`}>
              <li>
                <p className={`${styleFooter.text}`}>Кейсы</p>
              </li>
              <li>
                <p className={`${styleFooter.text}`}>Благодарственные письма</p>
              </li>
              <li>
                <p className={`${styleFooter.text}`}>Сертификаты</p>
              </li>
              <li>
                <p className={`${styleFooter.text}`}>Блог на Youtube</p>
              </li>
              <li>
                <p className={`${styleFooter.text}`}>Вопрос / Ответ</p>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <nav className={`${styleFooter.nav}`}>
        <p className={`${styleFooter.captionEnd}`}>контакты</p>
        <div className={`${styleFooter.contacts}`}>
          <Contacts />
        </div>
        <p className={`${styleFooter.text}`}>
          Москва, Путевой проезд 3с1, к 902
        </p>
        <p className={`${styleFooter.copyright}`}>
        ©WELBEX 2022. Все права защищены.
        </p>
        <p className={`${styleFooter.privacy}`}>
        Политика конфиденциальности
        </p>
      </nav>
    </div>
  );
}

export default Footer;