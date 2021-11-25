import React, { useState } from 'react';

const AddedUsers = () => {

    const _stylesUserInfo = {
        userData: {
          display: 'flex',
          cursor: 'pointer',
          marginLeft: '-50px',
          justifyContent: 'space-around'
        },
        user_profile_image: {
          height: '50px',
          width: '50px',
          borderRadius: '50%',
          position:'relative',
          top:'5px',
          left:'20px'
        },
        user_profile_mail: {
          marginLeft: '-7px',
          height: '1.5em',
          width: '100%',
          textOverflow: 'ellipsis',
          
          fontFamily: 'Roboto',
          fontSize: '14px',
          fontWeight: 500,
        },
        user_profile_name: {
            marginLeft: '-7px',
            marginTop:'-15px',
            height: '1.5em',
            width: '60%',
            textOverflow: 'ellipsis',
            
            whiteSpace: 'nowrap',
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontWeight: 300,
            color:'gray',
          },
          
      };
    return(
        <div className='AddUsers' >
            <div style={_stylesUserInfo.userData}>
            <img
            src='https://picsum.photos//50/50'
            alt='img'
            style={_stylesUserInfo.user_profile_image}
            />
                <div style={_stylesUserInfo.container}>
                    <p style={_stylesUserInfo.user_profile_mail}>
                    JhonRuibe_2172
                    </p>
                    <p style={_stylesUserInfo.user_profile_name}>
                    Jhon Uribe
                    </p>
                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                    <p style={{color:'#3C92F3',fontSize:'14px'}}>Cambiar</p>
                </div>
                
            </div>
            
      </div>
    )
}
export default AddedUsers;