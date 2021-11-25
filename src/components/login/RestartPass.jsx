import React from "react";

const RestartPass = () => {
    return (
        <div>
            <div style={_stylePassSection.principal}>
                <p>¿No tienes una cuenta? <a style={{..._stylePassSection.link}} href="http://localhost:3000/">Registrate</a></p> 
            </div>
        </div>
    );
};

const _stylePassSection = {
    principal: {
        display: 'flex',
        width: '100%',
        height: '61px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '14px',

    },
    link: {
        color: '#0095F6',
        fontWeight: 'bolder',
        textDecoration: 'none',
        cursor: 'pointer',
    }
}

export default RestartPass;