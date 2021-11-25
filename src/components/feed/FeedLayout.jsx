import React from 'react';
import PinCard from '../feed/ImagePin/PinCard';
import HeaderDesk from '../feed/HeaderDesktop/HeaderDesk';
import AddedUsers from '../feed/UsersAdd/AddedUsers';
import OtherUSers from '../feed/UsersAdd/OtherUsers';
import Historypin from '../feed/History/Historypin';
import HeaderMobile from './mobile/headerMobile';
import FooterMobile from '../feed/mobile/FooterMobile';
import { useMediaQuery } from 'react-responsive'

// Contenedor principal de nuestros pines
const FeedLayout = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 1000px)' })
  const isTabletOrMobile2 = useMediaQuery({ query: '(min-width: 376px)' })
  const Mobile = useMediaQuery({ query: '(max-width: 375px)' })
  // Estilos propios del contenedor principal
  const _stylesLayout = {
    pin_container: {
      marginTop: '-114px',
      padding: 0,
      width: '50vw',
      backgroundColor: 'white',
      position: 'absolute',
      left: '42%',
      top:'45%',
      transform: 'translateX(-50%)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, 650px)',
      gridAutoRows: '10px',
      justifyContent: 'center',
      
    },  
    pin_containerUsers: {
      margin: 0,
      padding: '10px 20px',
      width: '25vw',
      height:'500px',
      position: 'fixed',
      left: '80.8%',
      top:'10%',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection:'column',
      borderradius: '50%',
      gridTemplateColumns: 'repeat(auto-fill, 250px)',
      gridAutoRows: '10px',
      justifyContent: 'flex-start',
      
    },
    pin_conter:{
      display:'flex',
    },

    pin_containerMobile:{
      marginTop: '-114px',
      padding: 0,
      width: '50vw',
      backgroundColor: 'white',
      position: 'absolute',
      left: '50%',
      top:'45%',
      transform: 'translateX(-50%)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, 400px)',
      gridAutoRows: '10px',
      justifyContent: 'center',
    }
  };

  return (
    
    
    <div style={_stylesLayout.pin_conter}>

      {/* Version Desktop retorna los componentes y los pincard*/}
      {isTabletOrMobile2 &&<div>
      <HeaderDesk/>
      <Historypin/>
      <div className='Pincard'>
        <div  style={_stylesLayout.pin_container}>
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/262' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/263' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/257' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
          <PinCard size='large' image='https://picsum.photos//250/260' />
        </div>
        </div>
        </div> }

        {/* Version Telefono retorna los componentes y los pincard*/}
        {Mobile &&<div>
          <div className='Pincard'>
            <HeaderMobile/>
            
            <div  style={_stylesLayout.pin_containerMobile}>
              <PinCard size='large' image='https://picsum.photos//250/260' />
              <PinCard size='large' image='https://picsum.photos//250/260' />
              <PinCard size='large' image='https://picsum.photos//250/260' />
              <PinCard size='large' image='https://picsum.photos//250/260' />
              <PinCard size='large' image='https://picsum.photos//250/260' />
              <PinCard size='large' image='https://picsum.photos//250/260' />
              <PinCard size='large' image='https://picsum.photos//250/262' />
              <PinCard size='large' image='https://picsum.photos//250/260' />
              <PinCard size='large' image='https://picsum.photos//250/260' />
              <PinCard size='large' image='https://picsum.photos//250/260' />
              <PinCard size='large' image='https://picsum.photos//250/260' />
              <PinCard size='large' image='https://picsum.photos//250/260' />
              <PinCard size='large' image='https://picsum.photos//250/260' />
              <PinCard size='large' image='https://picsum.photos//250/260' />
              <PinCard size='large' image='https://picsum.photos//250/260' />
              <PinCard size='large' image='https://picsum.photos//250/263' />
              <PinCard size='large' image='https://picsum.photos//250/260' />
              <PinCard size='large' image='https://picsum.photos//250/260' />
              <PinCard size='large' image='https://picsum.photos//250/257' />
              <PinCard size='large' image='https://picsum.photos//250/260' />
              <PinCard size='large' image='https://picsum.photos//250/260' />
            </div>
            <FooterMobile/>
        </div>
        
        </div> 
        
         }
      
         {/* Version Desktop retorna los componentes */}
        <div className='AddUsers' style={_stylesLayout.pin_containerUsers}>
        {isTabletOrMobile &&<div style={{backgroundColor:'white'}}>
          <AddedUsers/>
          <OtherUSers/>
        </div> }
        
          
        </div>
    </div>
  );
};

export default FeedLayout;
