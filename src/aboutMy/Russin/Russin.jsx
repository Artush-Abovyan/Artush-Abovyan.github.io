import React from 'react'
import Styles from './russian.module.css'

const Russin = () => {
  return (
    <div>
        <h2 className={Styles.greetings}>
            Здравствуйте, я Артуш Абовян. Я родился 2 апреля 1997 года в Тавушской области Республики Армения.
        </h2>
        <div className={Styles.experience}>
                <h2>ОБ-ОМНЕ</h2>
                <ul className={Styles.part1}>
                    <li>
                        <h6>2005 - 2015</h6>
                        <div className={Styles.info1}>
                            <p>Я учился в первой школе в селе Когб, в Тавушской области Республики Армения.</p>
                        </div>
                    </li>
                    <li>
                        <h6>2015 - 2017</h6>
                        <div className={Styles.info1}>
                            <p>Я служил в вооруженных силах Республики Армения.</p>
                        </div>
                    </li>
                    <li>
                        <h6>2018 - 2022</h6>
                        <div className={Styles.info1}>
                            <p>Я учился на экономическом факультете Иджеванского филиала Ереванского государственного университета.</p>
                        </div>
                    </li>
                </ul>
                <h2>ОПИТ РАБОТИ</h2>
                <ul className={Styles.part1}>
                    <li>
                        <h6>2019 - 2022</h6>
                        <div className={Styles.info1}>
                            <p>Я работал в Национальной службе безопасности Республики Армения.</p>
                        </div>
                    </li>
                    <li>
                        <h6>2015 - 2017</h6>
                        <div className={Styles.info1}>
                            <p>Я работал в компании Evistep по разработке программного обеспечения в качестве фронтенд-разработчика.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <div className={Styles.accardion}>
                    <input id="ac-1" name="accordion-1" type="checkbox" />
                    <label for="ac-1">Навыки</label>
                    <article>
                        <ul>
                            <li>HTML:5</li>
                            <li>CSS </li>
                            <li>SCSS, SASS</li>
                            <li>JavaScript</li>
                            <li>React.js</li>
                            <li>React-native</li>
                            <li>Redux (React-Redux)</li>
                            <li>Next.js</li>
                            <li>Git (GitHub)</li>
                            <li>Expo Application Services (EAS CIL)</li>
                        </ul>
                    </article>
                </div>
            </div>
    </div>
  )
}

export default Russin