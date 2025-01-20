import React from 'react';

import styles from '../styles/AboutMe.module.scss';

const AboutMe = () => {

    const {myMain, myName, myLinks, mySkillsContact, myLinksLink, email, phone, telegram, instagram, github, website} = styles;
    
    return (
            <div className={myMain}>
                <div className={myName}>
                    <h1>Mohammad hcr</h1>
                    <h3>Front-end developer</h3>
                </div>
                <div className={mySkillsContact}>
                    <div className={myLinks}>
                        <div><h2>Contact Me</h2></div>
                        <div className={myLinksLink}>
                            <a className={email} href="mailto:mohammadhcr97@gmail.com" target="_blank"><i className='bx bx-envelope'></i> E-Mail</a>
                            <a className={phone} href="tel:+989383700503" target="_blank"><i className='bx bx-phone'></i> Phone Number</a>
                            <a className={telegram} href="https://t.me/mohammadhcr" target="_blank"><i className='bx bxl-telegram'></i> Telegram</a>
                            <a className={instagram} href="https://instagram.com/mohammadhcr" target="_blank"><i className='bx bxl-instagram'></i> Instagram</a>
                            <a className={github} href="https://github.com/Mohammadhcr" target="_blank"><i className='bx bxl-github'></i> GitHub</a>
                            <a className={website} href="https://mohammadhcr.ir" target="_blank"><i className='bx bx-world'></i> Website</a>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default AboutMe;