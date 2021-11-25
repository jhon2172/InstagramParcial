import React from 'react';

const PincardHistory = (props)=>{
    // Estilos del PincardHistory
    const _stylesPinImage = {
        pin_image_card: {
          display: 'grid',
          gridTemplateColumns: '1fr',
          
        },
        small: {
          gridRowEnd: 'span 1',
        },
      
        image: {
          marginLeft: '1px',
          marginTop: '1px',
          height: '96%',
          width: '97%',
          borderRadius: '50%',
          aspectRatio: 1,
          gridColumn: '1/2',
          gridRow: '1/2',
          zIndex: 0,
          cursor: 'pointer',
        },
    }
    // retorna una imagen tomando el tamaño con props
    return (
        <div>
            <div
                style={{
                    ..._stylesPinImage.pin_image_card,
                    ..._stylesPinImage[props.size],
                }}
            >
                <img
                    src={props.image}
                    style={_stylesPinImage.image}
                    alt='img'
        
                />
            </div>


        </div>
    )
}
export default PincardHistory;

