import React from 'react'
import Styles from './armenian.module.css'

const Armenia = () => {
    return (
        <div>
            <h2 className={Styles.greetings}>
                Բարև ձեզ ես Արտուշ Աբովյանն եմ։ Ծնվել  եմ 1997թ ապրիլի 2-ին Հայաստանի Հանրապետության Տավուշի մարզում։
            </h2>
            <div className={Styles.experience}>
                <h2>ԻՄ ՄԱՍԻՆ</h2>
                <ul className={Styles.part1}>
                    <li>
                        <h6>2005 - 2015</h6>
                        <div className={Styles.info1}>
                            <p>Ես հաճախել եմ Հայաստանի Հանրապետության, Տավուշի մարզի, Կողբ գյուղի համար առաջին դպրոցը։</p>
                        </div>
                    </li>
                    <li>
                        <h6>2015 - 2017</h6>
                        <div className={Styles.info1}>
                            <p>Ես անցել եմ զինծառայության Հայաստանի Հանրապետության զինված ուժերում։</p>
                        </div>
                    </li>
                    <li>
                        <h6>2018 - 2022</h6>
                        <div className={Styles.info1}>
                            <p>Ես սովորել եմ Երևանի Պետական Համալսարանի Իջևանի մասնաճյուղի տնտեսագիտության ֆակուլտետը։</p>
                        </div>
                    </li>
                </ul>
                <h2>ԱՇԽԱՏԱՆՔԱՅԻՆ ՓՈՐՁ</h2>
                <ul className={Styles.part1}>
                    <li>
                        <h6>2019 - 2022</h6>
                        <div className={Styles.info1}>
                            <p>Ես աշխատել եմ Հայաստանի Հանրապետության Ազգային անվտանգության ծառայությունում։</p>
                        </div>
                    </li>
                    <li>
                        <h6>2023 - 2024</h6>
                        <div className={Styles.info1}>
                            <p>Ես աշխատել եմ Evistep ծրագրային ապահովման ընկերությունում որպես Frontend developer։</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <div className={Styles.accardion}>
                    <input id="ac-1" name="accordion-1" type="checkbox" />
                    <label for="ac-1">Հմտություններ</label>
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

export default Armenia