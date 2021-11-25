import React from 'react';

const Coments = () => {
    const _styleComents = {
        likes:{
            height: '',
            width: '97%',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            fontFamily: 'Roboto',
            fontSize: '10px',
            fontWeight: 500,
            padding:'0px 10px',
        },
        info:{
            height: '1.5em',
            width: '97%',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            fontFamily: 'Roboto',
            fontSize: '10px',
            fontWeight: 300,
            padding:'0px 10px',
        },
        time:{
            height: '1.5em',
            width: '97%',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            fontFamily: 'Roboto',
            fontSize: '10px',
            fontWeight: 200,
            color:'gray',
            padding:'0px 10px',
        },
        contentComents:{
            padding:'10px',
        }
    }
    return (
        <div>
             <div>
        <p style={_styleComents.likes}>
          128 Me gusta
        </p>
        <p style={_styleComents.info}>
        modainfantilbimbi ¡Aprovecha nuestros descuentos adicionales en el día sin IVA!😎
        </p>
        <p style={_styleComents.time}>
        Hace 2 dias
        </p>
      </div>
        </div>
    )
}
export default Coments;