import React, { useEffect, useState } from 'react';
import {Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar';
import Phoenix from './pages/Phoenix';
import Album from './pages/Album';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AboutMe from './pages/AboutMe';
import "../src/components/root.scss";
import Cards from './components/Cards';
import Cart from './pages/Cart';
import CartContext from './context/CartContext';

const App = () => {

    const [theme, setTheme] = useState(false);

    const toggleHandler = () =>{
        setTheme(!theme);
    }

    const autoTheme = () => {
        const date = new Date();
        const time = date.getHours();

        if (time > 7 && time < 20) {
            setTheme(false);
        }
        else{
            setTheme(true);
        }
    }

    useEffect(() => autoTheme(), []);
    
    return (
        <CartContext>
            <div className={theme ? "darkMode" : "lightMode"}>
                <Navbar toggle={toggleHandler} theme={theme} />
                <Routes>
                    <Route path='/' element={<Phoenix />} />
                    <Route path='/album' element={<Cards />} />
                    <Route path='/album/:id' element={<Album />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/aboutme' element={<AboutMe />} />
                </Routes>
            </div>
        </CartContext>
    );

};

export default App;