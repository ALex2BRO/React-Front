import './App.css'
import { card_fields } from './data'
import Card from './components/Card/Card'
import user from './assets/img/user.png'
import bell from './assets/img/IconRing.svg'
import question from './assets/img/IconQuestion.svg'
import sun from './assets/img/IconSun.svg'

const App = () => {
  return (
    <>
    <header>
      <div className='header_wrapper'>
        <a href="" className='portal'>Портал Разработчика</a>
        <div className='wrapper'>
          <a href="" className='learn'>Моё обучение</a>
          <a href="" className='tasks'>Задачи</a>
        </div>
      </div>
      <div className='navigation_wrapper'>
        <div className='button-wrapper'>
          <button>
            <img src={bell} alt="Колокольчик" />
          </button>
          <button>
            <img src={question} alt="Вопросы" />
          </button>
          <button>
            <img src={sun} alt="Сменить тему" />
          </button>
        </div>
        <div className='user-info'>
          <img src={user} alt="Аватар пользователя" />
          <a className='user-name'>Михаил Романов</a>
        </div>
      </div>
    </header>
    <div className='container'>
      <div className='recomendates'>
        <p className='recomend'>Рекомендуемые темы</p>
        <div className='main_card'>
            <h3 className='main_card-title'>Начало работы</h3>
            <p className='main_card-description'>Для новичка Основы работы</p>
            <p className='main_card-advice'>Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете</p>
            <button className='main_card-button'>
                <p className='main_card-label'>Продолжить тему</p>
            </button>
        </div>
      </div>
      <div className="card__frontend">
        <div className="card-wrapper">
          <div className="card-wrapper-f">
            <p className="card__frontend-p">Путь Front End Developer</p>
            <button className='close-button'>
              <p>Скрыть пройденные</p>
            </button>
          </div>
          <div className="card-wrapper-t">
            <button className='arrow-left'></button>
            <button className='arrow-right'></button>
          </div>
        </div>
        <div className="card__frontend-wrapper">
          <Card {...card_fields[0]}/>
          <Card {...card_fields[1]}/>
          <Card {...card_fields[2]}/>
          <Card {...card_fields[3]}/>
          <Card {...card_fields[3]}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
