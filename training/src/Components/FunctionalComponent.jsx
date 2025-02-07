import React from 'react';

const FunctionalComponent = (props) => {
    let applyStyle = props.apply ? 'heading' : '';
    console.log(props);
    let inlineStyle = {
        color: 'red',
        fontSize: '100px'
    };
    
    return (
        <div>
           <h1 className={`${applyStyle} font-style`}>Welcome to REACT, {props.clg}, {props.city}</h1>
           <h2 style={inlineStyle}>Good Morning!</h2> 
        </div>
    );
};

export default FunctionalComponent;
