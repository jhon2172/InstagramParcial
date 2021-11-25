import React from 'react';
import PinImage from '../ImagePin/PinImage';
import PinUserInfo from '../UserDataPin/PinUserInfo';
import IconPinCard from '../UserDataPin/IconPinCard';
import Coments from '../UserDataPin/Coments';
import SearchBarPin from '../UserDataPin/SearchBarPin';
import { useMediaQuery } from 'react-responsive'


const PinCard = (props) => {

  const isTabletOrMobile2 = useMediaQuery({ query: '(min-width: 376px)' })

  const _stylesPinCard = {
    pin_card: {
      margin: '10px 30px',
      backgroundColor: 'white',
      border:'1px solid rgba(182, 182, 182, 0.8)',
    },
    small: {
      gridRowEnd: 'span 36',
    },
    medium: {
      gridRowEnd: 'span 43',
    },
    large: {
      gridRowEnd: 'span 85',
    },
    description_pin: {
      height: '',
      width: '97%',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      fontFamily: 'Roboto',
      fontSize: '10px',
      fontWeight: 500,
      
    },
    coment: {
      height: '1.5em',
      width: '97%',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      fontFamily: 'Roboto',
      fontSize: '10px',
      fontWeight: 300,
    },
  
  };

  return (

   
   
    
    <div style={{ ..._stylesPinCard.pin_card, ..._stylesPinCard[props.size] }}>
      {isTabletOrMobile2 &&<div style={{..._stylesPinCard.headerpincard}}>
      <PinUserInfo />

      </div>}
      <PinImage size={props.size} image={props.image} />
      <IconPinCard/>
      <Coments/>
      <SearchBarPin/>
     
      <br/>
     
    </div>
  );
};

export default PinCard;
