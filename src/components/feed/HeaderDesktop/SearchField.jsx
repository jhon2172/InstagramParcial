import React from "react";

const SearchField = () => {

   

    const _styleSearch = {
        contentFind:{
            display: 'flex',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            
            
          }, 
          searchIcon:{
            position: 'relative',
            left: '30px',
            top: '-2px',
            fill: '#767676',
            
          }, 
          searchBar: {
            height: '100%',
            width: '65%',
            border: '1px solid rgba(223,223,223)',
            paddingLeft: '40px',
            
            
          },
          find:{
            display: 'flex',
            width: '100%',
            height: '20px',
            justifyContent: 'center',
            alignItems: 'center',
           
          }
    }


    return (
        <div className='SearchHeader'>
        <div style={ _styleSearch.find }>
            <div style={{..._styleSearch.contentFind }}>
            <div style={{..._styleSearch.searchIcon }}>
                <div className="Eqh wc1 zI7 iyn Hsu">
                    <svg className="gUZ B9u U9O kVc" height="10" width="10" viewBox="0 0 24 24" aria-label="Ícono de búsqueda" role="img">
                        <path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24">
                        </path>
                    </svg>
                </div>
            </div>
                <input type="text" placeholder="Buscar" style={{..._styleSearch.searchBar }}  />
            </div>
        </div>
        </div>
    );
}

export default SearchField;