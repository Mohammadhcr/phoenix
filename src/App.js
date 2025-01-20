import React, { useEffect, useState } from 'react';
import {Route, Routes} from 'react-router-dom';

import Navbar from './components/Navbar';
import Phoenix from './pages/Phoenix';
import Album from './pages/Album';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AboutMe from './pages/AboutMe';
import Cards from './components/Cards';
import Cart from './pages/Cart';
import CartContextProvider from './context/CartContextProvider';
import Checkout from './pages/Checkout';

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
            <CartContextProvider>
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
                        <Route path='/checkout' element={<Checkout />} />
                    </Routes>
                </div>
            </CartContextProvider>
    );

};

export default App;