import React from "react";
import imgIphone from '../../imgs/iphone2.0.png';
import imgIphoneBlack from '../../imgs/iphoneblack2.0.png';

const Promo = () => {
    return (
        <div style={_stylePromo.container}>
            <div style={_stylePromo.iphoneBlack}>
                <img src={imgIphoneBlack} alt="imagen de un iphone" height='95%' style={{..._stylePromo.acomodar}}/>
            </div>
            <div style={{..._stylePromo.iphone}}>
                <img src={imgIphone} alt="imagen de un iphone" height='100%' style={{..._stylePromo.acomodar2}}/>
            </div>
        </div>
    );
};

const _stylePromo = {
    container: {
        display: 'flex',
        height: '100%',
    },
    iphone: {
        display: 'flex',
        height: '90%',
        zIndex: '2',
    },
    acomodar: {
        marginTop: '27px',
    },
    acomodar2: {
        marginTop: '15px',
    },
    iphoneBlack: {
        display: 'flex',
        height: '90%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        left: '150px',
        top: '-20px'
    },
    acomodar3: {
        position: 'relative',
        marginTop: '15px',
        right: '500px',
    }
}

export default Promo;