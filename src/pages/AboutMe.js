import React from 'react';

import styles from '../components/AboutMe.module.scss';

const AboutMe = () => {

    const {myMain, myName, myLinks, myDescription, mySkillsContact, myLinksLink, skills} = styles;
    
    return (
            <div className={myMain}>
                <div className={myName}>
                    <h1>Mohammad hcr</h1>
                    <h3>Junior Front-End Developer</h3>
                </div>
                <div className={mySkillsContact}>
                    <div className={myDescription}>
                        <div><h2>My Skills</h2></div>
                        <div className={skills}>
                            <ul>
                                <li>HTML 5</li>
                                <li>CSS 3</li>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>SASS</li>
                                <li>Git</li>
                            </ul>
                        </div>
                    </div>
                    <div className={myLinks}>
                        <div><h2>Contact Me</h2></div>
                        <div className={myLinksLink}>
                            <a href="mailto:mohammadhcr@icloud.com" target="_blank">E-Mail</a>
                            <a href="tel:+989919931260" target="_blank">Phone Number</a>
                            <a href="https://t.me/mohammadhcr" target="_blank">Telegram</a>
                            <a href="https://instagram.com/mohammadhcr" target="_blank">Instagram</a>
                            <a href="https://github.com/Mohammadhcr" target="_blank">GitHub</a>
                            <a href="https://mohammadhcr.ir" target="_blank">Website</a>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default AboutMe;