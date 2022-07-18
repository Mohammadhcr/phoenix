import React from 'react';
import {Link} from 'react-router-dom';

import styles from '../components/Signup.module.scss';

const Signup = () => {

    const {sForm, signup, title, inputs, submit, options, socialLoginButtons, socialLoginButton, google, facebook, apple, bxl, input, placeholder, leftSide, rightSide} = styles;

    return (
        <form className={sForm}>
            <div className={signup}>
                <div className={leftSide}>
                    <div className={title}>
                        <h1>Sign-up to Phoenix</h1>
                    </div>
                    <div className={inputs}>
                        <div className={input}>
                        <input type="text" name="username" placeholder="Username" />
                        <span className={placeholder}>Username</span>
                        </div>
                        <div className={input}>
                        <input type="email" name="email" placeholder="E-Mail" />
                        <span className={placeholder}>E-Mail</span>
                        </div>
                        <div className={input}>
                        <input type="text" name="phoneNumber" placeholder="Phone Number" />
                        <span className={placeholder}>Phone Number</span>
                        </div>
                        <div className={input}>
                        <input type="password" name="password" placeholder="Password" />
                        <span className={placeholder}>Password</span>
                        </div>
                        <div className={input}>
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" />
                        <span className={placeholder}>Confirm Password</span>
                        </div>
                    </div>
                    <div className={submit}>
                        <button type="submit"><i className='bx bx-plus'></i> Create Account</button>
                    </div>
                </div>
                <div className={rightSide}>
                    <div className={socialLoginButtons}>
                        <button className={`${socialLoginButton} ${google}`}><i className={`bx bxl-google ${bxl}`}></i> Continue with Google</button>
                        <button className={`${socialLoginButton} ${apple}`}><i className={`bx bxl-apple ${bxl}`}></i> Continue with Apple</button>
                        <button className={`${socialLoginButton} ${facebook}`}><i className={`bx bxl-facebook ${bxl}`}></i> Continue with Facebook</button>
                    </div>
                    <div className={options}>
                        <p>Already have an account? <Link to="/login">LOGIN</Link></p>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Signup;