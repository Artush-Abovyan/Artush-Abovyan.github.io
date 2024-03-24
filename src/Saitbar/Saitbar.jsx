import React from 'react';
import Styles from './Saitbar.module.css';
import { FaLinkedin, FaGithub, FaTelegram, FaPhoneSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const Saitbar = () => {
  return (
    <div className={Styles.myimages}>
        <h1>FRONTEND DEVELOPER</h1>
        <img
          style={{ width: '400px' }}
          src="Artush.jpeg" 
          alt="Artush"
        />
        <div>
          <h1>NAME: Artush</h1>
          <h1>SURNAME: Abovyan</h1>
          <h2>BIRTHDAY,MONTH,YEAR: 02.04.1997</h2>
          <h2>RESIDENCE ADDRESS: Republic of Armenia, Yrevan</h2>
          <Link to="https://www.linkedin.com/in/artush-abovyan-52407a288/"><FaLinkedin className={Styles.linkedine}/></Link> 
          <Link to='https://github.com/Artush-Abovyan'><FaGithub className={Styles.linkedine}/></Link><br></br>
          <h2><FaTelegram className={Styles.linkedine}/>@ArtushAbovyan</h2>
          <h2><FaPhoneSquare className={Styles.linkedine}/>+374-93-99-79-39</h2>
          <h2><MdEmail className={Styles.linkedine}/>artushartush032@gmail.com</h2>
        </div>
    </div>
  )
}

export default Saitbar;