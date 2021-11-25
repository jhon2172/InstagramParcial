import React, { useState } from 'react';

const OtherUSers = () => {

    const [underlineText, setUnderlineText] = useState('none');
    const [underlineText2, setUnderlineText2] = useState('none');

    const _stylesOtherUsers = {
        sugest:{
            color:'gray',
            fontWeight: 500,
            fontSize:'12px'
        },
        watch:{
            fontWeight: 500,
            fontSize:'12px',
            cursor:'pointer',
        },
        user_profile_image: {
            height: '30px',
            width: '30px',
            borderRadius: '50%',
            position:'relative',
            top:'20px',
            padding:'0px 10px',
            cursor: 'pointer',
        },
        userData: {
            display: 'flex', 
          },
          user_profile_mail: {
            height: '1.5em',
            width: '60%',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontWeight: 400,
            cursor:'pointer',
            textDecoration: `${underlineText}`,
          },
          user_profile_mail2: {
            height: '1.5em',
            width: '60%',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontFamily: 'Roboto',
            fontSize: '14px',
            fontWeight: 400,
            cursor:'pointer',
            textDecoration: `${underlineText2}`,
          },
          user_profile_name: {
            
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
          container:{
            display:'flex',
            justifyContent:'space-between',
            width:'100%'   
          },
          selector:{
            cursor: 'pointer',
          },
    }
    return(
        <div className='AddUsers'>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <p style={{..._stylesOtherUsers.sugest}}>Sugerencias para ti</p>
                <p style={{..._stylesOtherUsers.watch}}> Ver todo</p>
                
            </div>
            
            <div >
                <div style={_stylesOtherUsers.userData} 
                onMouseEnter={() => setUnderlineText('underline')}
                onMouseOut={() => setUnderlineText('none')}
                >
                
                    <img
                    src='https://i.pinimg.com/236x/40/e2/d1/40e2d1a5b63a4811f2e64b1246fc8d08.jpg'
                    alt='img'
                    style={_stylesOtherUsers.user_profile_image}
                    />
                    <div style={_stylesOtherUsers.container}>
                        <div>
                            <p style={_stylesOtherUsers.user_profile_mail}  
                            onMouseEnter={() => setUnderlineText('underline')}>
                           
                            Mauricio44_omen223
                            </p>
                            <p style={_stylesOtherUsers.user_profile_name}>
                            Te sigue
                            </p>
                        </div>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <p style={{color:'#3C92F3',fontSize:'14px',cursor:'pointer'}}>Seguir</p>
                        </div>
                    </div>
                
            </div>
            
            
            </div>

            <div >
                <div style={_stylesOtherUsers.userData} 
                onMouseEnter2={() => setUnderlineText2('underline')}
                onMouseOut2={() => setUnderlineText2('none')}
                >
                
                    <img
                    src='https://i.pinimg.com/564x/9e/8d/06/9e8d0633c55f92bbc51874a081927814.jpg'
                    alt='img'
                    style={_stylesOtherUsers.user_profile_image}
                    />
                    <div style={_stylesOtherUsers.container}>
                        <div>
                            <p style={_stylesOtherUsers.user_profile_mail2}  
                            onMouseEnter2={() => setUnderlineText2('underline')}>
                           
                            JuanCarlosPro_123
                            </p>
                            <p style={_stylesOtherUsers.user_profile_name}>
                            Te sigue
                            </p>
                        </div>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <p style={{color:'#3C92F3',fontSize:'14px',cursor:'pointer'}}>Seguir</p>
                        </div>
                    </div>
                
            </div>
            
            
            </div>
            
            

        </div>
        
    )
}

export default OtherUSers;