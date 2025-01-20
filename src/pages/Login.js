import React from 'react';
import {Link} from 'react-router-dom';

import styles from '../styles/Login.module.scss';

const Login = () => {

    const {lForm, login, title, inputs, submit, options, socialLoginButtons, socialLoginButton, google, facebook, apple, bxl, bxlLog, placeholder, input} = styles;

    return (
        <form className={lForm}>
            <div className={login}>
                <div className={title}>
                    <h1>Login to Phoenix</h1>
                </div>
                <div className={inputs}>
                    <div className={input}>
                        <span className={placeholder}>Username:</span>
                        <div>
                            <i className='bx bx-user'></i>
                            <input type="text" name="username" placeholder="" />
                        </div>
                    </div>
                    <div className={input}>
                        <span className={placeholder}>Password:</span>
                        <div>
                            <i className='bx bx-lock-alt'></i>
                            <input type="password" name="password" placeholder="" />
                        </div>
                    </div>
                </div>
                <div className={submit}>
                    <button type="submit"><i className={`bx bx-log-in-circle ${bxlLog}`}></i> Login</button>
                </div>
                <div className={options}>
                    <p>Don't have an account? <Link to="/signup">SIGNUP</Link></p>
                </div>
                <div className={socialLoginButtons}>
                    <button className={`${socialLoginButton} ${google}`}><i className={`bx bxl-google ${bxl}`}></i> Continue with Google</button>
                    <button className={`${socialLoginButton} ${apple}`}><i className={`bx bxl-apple ${bxl}`}></i> Continue with Apple</button>
                    <button className={`${socialLoginButton} ${facebook}`}><i className={`bx bxl-facebook ${bxl}`}></i> Continue with Facebook</button>
                </div>
            </div>
        </form>
    );
};

export default Login;