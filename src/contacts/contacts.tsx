import styleContacts from './contacts.module.css'
import telegram from '../images/telegram.png'
import viber from '../images/viber.png'
import whatsapp from '../images/whatsapp.png'

function Contacts() {
    return (
        <ul className={`${styleContacts.list}`}>
            <li>
                <p className={`${styleContacts.text}`}>+7 555 555-55-55</p>
            </li>
            <li className={`${styleContacts.item}`}>
                <img src={`${telegram}`} className={`${styleContacts.icon}`} alt="telegram" />
            </li>
            <li className={`${styleContacts.item}`}>
                <img src={`${viber}`} className={`${styleContacts.icon}`} alt="viber" />
            </li>
            <li className={`${styleContacts.item}`}>
                <img src={`${whatsapp}`} className={`${styleContacts.icon}`} alt="whatsapp" />
            </li>
        </ul>
  );
}

export default Contacts;