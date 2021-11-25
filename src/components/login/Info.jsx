import React from "react";
import Intereses from "./Intereses";

const Info = () => {
    return (
        <div>
            <div style={_styleInfo.principal}>
                <Intereses title='Meta' />
                <Intereses title='Informacion'/>
                <Intereses title='Empleo'/>
                <Intereses title='Ayuda'/>
                <Intereses title='API'/>
                <Intereses title='Privacidad'/>
                <Intereses title='condiciones'/>
                <Intereses title='Cuantas destacadas'/>
                <Intereses title='Hashtags'/>
                <Intereses title='Ubicaciones'/>
                <Intereses title='Instagram Lite'/>
            </div>
            <div style={_styleInfo.principal}>
                <Intereses title='Belleza'/>
                <Intereses title='Danza'/>
                <Intereses title='Fitness'/>
                <Intereses title='Comida y bebida'/>
                <Intereses title='Casa y jardin'/>
                <Intereses title='Musica'/>
                <Intereses title='Artes visuales'/>
            </div>
        </div>
    );
};

const _styleInfo = {
    principal: {
        display: 'flex',
        justifyContent: 'center',
    },
    hover: {
        cursor: 'pointer',
    }
}

export default Info;