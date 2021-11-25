import React from 'react';

const HeaderImage = () => {
    const _styleImage = {
        imageInsta:{
            width:'110px',
            height:'30px',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            cursor:'pointer',
            
        },
        contentImage:{
            display:'flex',
            width:'15%',
            alignItems:'center',
            justifyContent:'flex-end',
          
           
            
        }
    }

    return(
        <div style={_styleImage.contentImage }>
           
            <img style={_styleImage.imageInsta }alt="Instagram" className="s4Iyt" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" srcSet="/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png 2x"></img>
        </div>
    )
}
export default HeaderImage;