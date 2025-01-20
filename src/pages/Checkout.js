import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../context/CartContextProvider';
import styles from '../styles/Checkout.module.scss';

const Checkout = () => {

    const {state} = useContext(CartContext);
    const {successfulNotif, checkoutNotif, unSuccessfulNotif} = styles


    return (
        <div className={checkoutNotif}>
            {state.checkout ? <> <div className={successfulNotif}>
                <h2>
                    <i className='bx bx-check'></i>
                    <span>Successfully checked out</span>
                </h2>
                <Link to='/album'><i className='bx bx-arrow-back'></i> Back to store</Link>
            </div> </> : <> <div className={unSuccessfulNotif}>
                <h2>
                    <i className='bx bx-x'></i>
                    <span>Access denied</span>
                </h2>
                <Link to='/album'><i className='bx bx-arrow-back'></i> Back to store</Link>
            </div> </>}
            
        </div>
    );
};

export default Checkout;