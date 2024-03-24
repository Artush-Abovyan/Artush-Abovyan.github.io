import React, { useState } from 'react';
import English from './English/English';
import Armenia from './Armenian/Armenia';
import Russin from './Russin/Russin';
import Styles from './AbouthMy.module.css'

const AbouthMy = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("English");
    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };
    const renderLanguageComponent = () => {
        switch (selectedLanguage) {
            case 'English':
                return <English />;
            case 'Armenian':
                return <Armenia />;
            case 'Russian':
                return <Russin />;
            default:
                return null;
        }
    };
    return (
        <div className={Styles.abouthmy}>
            <div className={Styles.buttons}>
                <button onClick={() => handleLanguageChange('Armenian')}>AR</button>
                <button onClick={() => handleLanguageChange('Russian')}>RU</button>
                <button onClick={() => handleLanguageChange('English')}>EN</button>
            </div>
            {renderLanguageComponent()}
        </div>
    )
}

export default AbouthMy