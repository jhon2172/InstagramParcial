import React from "react";
import logoInstagram from '../../imgs/Instagram_logo.svg';
import Login from "./Login";
import RestartPass from "./RestartPass";


const LoginMobile = () => {

    
    return (
        <div style={_styleLoginSection.principal}>
            <div>
                <div style={{..._styleLoginSection.spaceLogo}}>
                    <img src={logoInstagram} alt="logo de instagram" width="200px"/>
                </div>
                <div style={{..._styleLoginSection.spaceKeys}}>
                    <input style={{..._styleLoginSection.inputs}} type="text" name="user" id="user" placeholder="Telefono, usuario o correo electronico"/>
                    <input style={{..._styleLoginSection.inputs}} type="password" name="pass" id="pass" placeholder="Contraseña"/>
                    <button style={{..._styleLoginSection.buttons}}>Iniciar sesion</button>
                </div>
                <div style={{..._styleLoginSection.hrsContent}}>
                    <div> <hr style={{..._styleLoginSection.hrs}}/> </div>
                    <div style={{..._styleLoginSection.hrsO}}>O</div>
                    <div> <hr style={{..._styleLoginSection.hrs}}/> </div>
                </div> 
            </div>
            <Login/>
            <div style={{..._styleLoginSection.pass}}>
                <a href="http://localhost:3000/" style={{..._styleLoginSection.link}}>¿Olvidaste tu contraseña?</a>
            </div>
            <div style={{..._styleLoginSection.restablecer}}>
                <RestartPass/>
            </div>
            <div style={{..._styleLoginSection.promo}}>
                
            </div>
        </div>
    );
};

const _styleLoginSection = {
    principal: {
        padding: '30px',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        background: '#FFFFFF',
        width: '30%',
        border: '1px solid #DBDBDB',
        height: '72%',
        marginRight: '11%',
        marginTop: '0.5%',
        
        
    },
    spaceLogo:{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
    },
    spaceKeys: {
        display: 'flex',
        flexFlow: 'column',
        padding: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    inputs: {
        marginTop: '10px',
        width: '89%',
        height: '30px',
        background: '#FAFAFA',
        border: '1px solid #DBDBDB',
        padding: '0 12px',
    },
    buttons: {
        marginLeft: '1px',
        marginTop: '10px',
        width: '255px',
        height: '30px',
        background: '#0095F6',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        fontWeight: 'bolder',
        cursor: 'pointer',
    },
    hrsContent: {
        display: 'flex',
        justifyContent: 'center',
    },
    hrs: {
        width: '105px',
        color: '#DBDBDB',
    },
    hrsO: {
        marginRight: '5%',
        marginLeft: '5%',
        color: '#8E8E8E',
        fontWeight: '600',
        fontSize: '13px',
    },
    pass: {
        marginTop: '5px',
        fontSize: '12px',
    },
    link: {
        color: '#00376B',
    },
    restablecer: {
        marginTop: '31px',
        width: '123.5%',
        height: '100%',
        border: '1px solid #DBDBDB',
    },
    promo: {
        fontSize: '14px',
    }
}

export default LoginMobile;
