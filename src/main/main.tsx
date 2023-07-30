import styleMain from './main.module.css';
import ballRedBig from '../images/ball/main-red-light.png';
import ballRed from '../images/ball/main-red-ball.png';


function Main() {
  return (
    <div className={`${styleMain.main}`}>
        <section>
            <h1 className={`${styleMain.title}`}>Зарабатывайте больше</h1>
            <h2 className={`${styleMain.titleGradient}`}>с WELBEX</h2>
            <p className={`${styleMain.subtitle}`}>Развиваем и контролируем продажи за вас</p>
        </section>
        <section className={`${styleMain.container}`}>
            <p className={`${styleMain.text}`}>Вместе с <span className={`${styleMain.textGradient}`}>бесплатной консультацией</span> мы дарим:</p>
            <div className={`${styleMain.table}`}>
              <div className={`${styleMain.item}`}>
                <p className={`${styleMain.caption}`}>Виджеты</p>
                <p className={`${styleMain.paragraph}`}>30 готовых решений</p>
              </div>
              <div className={`${styleMain.item}`}>
                <p className={`${styleMain.caption}`}>Dashboard</p>
                <p className={`${styleMain.paragraph}`}>с показателями вашего бизнеса</p>
              </div>
              <div className={`${styleMain.item}`}>
                <p className={`${styleMain.caption}`}>Skype Аудит</p>
                <p className={`${styleMain.paragraph}`}>отдела продаж и CRM системы</p>
              </div>
              <div className={`${styleMain.item}`}>
                <p className={`${styleMain.caption}`}>35 дней</p>
                <p className={`${styleMain.paragraph}`}>использования CRM</p>
              </div>
            </div>
            <button type="button" className={`${styleMain.button}`}>Подключить консультацию</button>
        </section>
        <img src={`${ballRedBig}`} className={`${styleMain.ballRedBig}`} alt="Красный свет, дизайн" />
        <img src={`${ballRed}`} className={`${styleMain.ballRed}`} alt="Красный шар, дизайн" />
    </div>
  );
}

export default Main;