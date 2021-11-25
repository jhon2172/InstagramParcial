import React, { useState } from "react";
import Info from "./Info";
import LoginSection from "./LoginSection";
import Promo from "./Promo";
import {  getAuth, onAuthStateChanged } from "firebase/auth";
import LoginMobile from './LoginMobile'
import FeedLayout from "../feed/FeedLayout";
import { useMediaQuery } from 'react-responsive'


const LoginLayout = () => {
    // useState utilizado para dar acceso
    const [login,setLogin] = useState(false);
    // validador de acceso
    const validation = () => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLogin(true);
            } else {
                console.log("No user signed in");
            }
        });
    }
    //Parte Responsive
    const isTabletOrMobile = useMediaQuery({ query: '(min-width: 769px)' })
    const isTabletOrMobile2 = useMediaQuery({ query: '(max-width: 768px)' })
    
    return (
        <div>
            
            {validation()}
            {login === false ? 
            <div style={_styleLogin.principal}>
            <div style={{..._styleLogin.second}}>
                {/*Muestra La seccion del Login*/}
            {isTabletOrMobile2 && <LoginSection/>}
            
                {/*Muestra la imagen y informacion del login*/}
            {isTabletOrMobile && <Promo/>}
            {isTabletOrMobile && <LoginMobile/>}    

              
                
            </div>
            <footer>
                <Info/>
            </footer>
            </div>
            : <FeedLayout/>}
        </div>
    );
};
// Estilos del Login
const _styleLogin = {
    principal: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        margin: 0,
        paddig: 0,
        justifyContent: 'space-around',
        alignItems: 'center',
        background: '#FAFAFA',
    },
    second: {
        display: 'flex',
        width: '80%',
        height: '66%',
        justifyContent: 'center',
        marginTop: '60px',

    }
}

export default LoginLayout;