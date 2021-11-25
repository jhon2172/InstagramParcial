import React, { useState } from 'react';

// Componente de la informacion del usuario
const PinUserInfo = () => {
  // Estado del hover del texto de usuario
  const [underlineText, setUnderlineText] = useState('none');

  // Estilos propios del usuario
  const _stylesUserInfo = {
    userData: {
      display: 'flex',
      padding:'5px',
      justifyContent:'space-between',
      
    },
    user_profile_image: {
      height: '30px',
      width: '30px',
      borderRadius: '50%',
      position:'relative',
      top:'5px',
      cursor:'pointer',
      
    },
    user_profile_name: {
      marginLeft: '7px',
      height: '1.5em',
      width: '60%',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      fontFamily: 'Roboto',
      fontSize: '14px',
      fontWeight: 400,
      textDecoration: `${underlineText}`,
      cursor:'pointer',
    },
    iconStyle:{
      display: 'flex',
      cursor:'pointer',
      alignItems:'center',
      
      justifyContent:'flex-end',
    },
    icon:{
      display: 'flex',
      cursor:'pointer',
      padding:'10px',
    },

  };
  return (
    <div style={_stylesUserInfo.userData}>
      <div
        style={_stylesUserInfo.userData}
        onMouseEnter={() => setUnderlineText('underline')}
        onMouseOut={() => setUnderlineText('none')}
      >
        <img
          src='https://picsum.photos//50/50'
          alt='img'
          style={_stylesUserInfo.user_profile_image}
          
        />
        <p
          style={_stylesUserInfo.user_profile_name}
          onMouseEnter={() => setUnderlineText('underline')}
        >
          Moda_ela
        </p>
      </div>

      <div style={_stylesUserInfo.iconStyle}>
        <svg style={_stylesUserInfo.icon} aria-label="Más opciones" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
          <circle cx="12" cy="12" r="1.5">
          </circle>
          <circle cx="6.5" cy="12" r="1.5">
          </circle>
          <circle cx="17.5" cy="12" r="1.5">
          </circle>
        </svg>
      </div>
    </div>

   
  );
};

export default PinUserInfo;
