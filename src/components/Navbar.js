import React, { useState, useContext } from 'react';

import styles from '../styles/Navbar.module.scss';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContextProvider';

const Navbar = (props) => {

    const [menu, setMenu] = useState(false);

    const {leftSide, logoTitle, rightSide, toggle, shopCart, bxCart, bxCartActive, hamburgerMenu, menuList, menuListActive, hamburgerMenuActive, toggleActive, bxMoon, bxSun, menuItems, menuUser} = styles;

    const clickHandler = () =>{
        setMenu(!menu);
    }

    const {state} = useContext(CartContext)
    
    return (
        <>
            <div className={`${menuList} ${menu ? `${menuListActive}` : ""}`}>
                <ul className={menuItems}>
                    <Link to="/album" onClick={clickHandler}><li><i className='bx bx-album'></i> Albums</li></Link>
                    <Link to="/aboutme" onClick={clickHandler}><li><i className='bx bx-at'></i> Contact Me</li></Link>
                </ul>
                <ul className={menuUser}>
                    <Link to="/login" onClick={clickHandler}><li><i className='bx bx-user'></i> Login</li></Link>
                    <Link to="/signup" onClick={clickHandler}><li><i className='bx bx-user-plus'></i> Sign-up</li></Link>
                </ul>
            </div>    
            <header>
                <div className={leftSide}>
                    <div className={`${hamburgerMenu} ${menu ? `${hamburgerMenuActive}` : ""}`} onClick={clickHandler}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={logoTitle}>
                        <Link to="/">
                            <h1>Phoenix</h1>
                        </Link>
                    </div>
                </div>
                <div className={rightSide}>
                    <nav>
                        <ul>
                            <li><Link to="/album"><i className='bx bx-album'></i> Albums</Link></li>
                            <li><Link to="/aboutme"><i className='bx bx-at'></i> Contact Me</Link></li>
                            <li><Link to="/login"><i className='bx bx-user'></i> Login</Link></li>
                            <li><Link to="/signup"><i className='bx bx-user-plus'></i> Sign-up</Link></li>
                        </ul>
                    </nav>
                    <div className={shopCart}>
                        <Link to="/cart">
                            <i className={`bx bx-cart ${bxCart} ${state.itemsCounter ? `${bxCartActive}` : ""}`}></i>
                            <span>{state.itemsCounter}</span>
                        </Link>
                    </div>
                    <div className={`${toggle} ${props.theme ? `${toggleActive}` : ""}`}>
                        <span onClick={props.toggle}>
                            <i className={`bx bx-moon ${bxMoon}`}></i>
                            <i className={`bx bx-sun ${bxSun}`}></i>
                        </span>
                    </div>
                </div>
            </header>
        </>
    );

};

export default Navbar;