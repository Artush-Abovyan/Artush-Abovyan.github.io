import React from 'react'
import Styles from './english.module.css'

const English = () => {
    return (
        <div>
            <h2 className={Styles.greetings}>
                Hello, I am Artush Abovyan. I was born on April 2, 1997 in the Tavush region of the Republic of Armenia.
            </h2>
            <div className={Styles.experience}>
                <h2>ABOUT MY</h2>
                <ul className={Styles.part1}>
                    <li>
                        <h6>2005 - 2015</h6>
                        <div className={Styles.info1}>
                            <p>I attended the first school in the village of Koghb, in the Tavush region of the Republic of Armenia.</p>
                        </div>
                    </li>
                    <li>
                        <h6>2015 - 2017</h6>
                        <div className={Styles.info1}>
                            <p>I have served in the armed forces of the Republic of Armenia.</p>
                        </div>
                    </li>
                    <li>
                        <h6>2018 - 2022</h6>
                        <div className={Styles.info1}>
                            <p>I have studied at the Faculty of Economics of Yerevan State University, Ijevan Branch.</p>
                        </div>
                    </li>
                </ul>
                <h2>WORK EXPERIENCE</h2>
                <ul className={Styles.part1}>
                    <li>
                        <h6>2019 - 2022</h6>
                        <div className={Styles.info1}>
                            <p>I have worked in the National Security Service of the Republic of Armenia.</p>
                        </div>
                    </li>
                    <li>
                        <h6>2023 - 2024</h6>
                        <div className={Styles.info1}>
                            <p>I have worked at Evistep software development company as a Frontend developer.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <div className={Styles.accardion}>
                    <input id="ac-1" name="accordion-1" type="checkbox" />
                    <label for="ac-1">SKILLS</label>
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

export default English