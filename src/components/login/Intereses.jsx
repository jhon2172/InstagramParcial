import React from "react";

const Intereses = (props) =>{
    return (
        <div>
            <p style={_styleIntereses.principal}>{props.title}</p>
        </div>
    );
};

const _styleIntereses = {
    principal: {
        display: 'flex',
        marginRight: '10px',
        color: '#8E8E8E',
        fontSize: '12px',
        lineHeight: '16px',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        
    }
}

export default Intereses;