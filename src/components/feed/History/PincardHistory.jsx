import React from 'react';
import PinHistoryImage from './PinHistoryImage';


const PincardHistory = (props)=>{
    const _stylesPinCard = {
        pin_card: {
          margin: '10px 30px',
          backgroundColor: 'white',
          borderRadius:'100px',
          border:'2px solid red',
        },
        small: {
          gridRowEnd: 'span 1',
        },
        username:{
            position:'relative',
            top:'-10px',
        }
       
        
    }
    return (
    <div style={{ ..._stylesPinCard.pin_card, ..._stylesPinCard[props.size] }}>
      <div style={{..._stylesPinCard.headerpincard}}>
      </div>
      <PinHistoryImage size={props.size} image={props.image} />
        <p style={{..._stylesPinCard.username}}>UserName</p>
    </div>
    )
}

export default PincardHistory;