import React from 'react';
import IconHeader from './IconHeader';
import SearchField from './SearchField'
import HeaderImage from './HeaderImage'

const HeaderDesk = () => {
    const _styleHeader = {
        headerContent:{
            display: 'flex',
            justifyContent: 'center',
            height:'60px',
            alignItems: 'center',
            position:'fixed',
            zIndex: '10',
            gap: '270px',
            width:'100%',
            backgroundColor:'white',
            border: '1px solid rgba(223,223,223)',

        },
      

    }
    return (
        <div style={_styleHeader.headerContent}>
            <HeaderImage/>
            <SearchField/>
            <IconHeader/>
        </div>
        
        
    )
}
export default HeaderDesk;