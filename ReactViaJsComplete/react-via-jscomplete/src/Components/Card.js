import React from 'react';
const Card = (props) =>
{
    return (
        <div style={{margin:'1em'}} >
            <img width="75" src={props.avatarUrl} alt="Avatar" />
            <div style={{display:'inline-block', marginLeft:10}}>
                <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>{props.name}</div>
                <div>{props.companyName}</div>
            </div>
        </div>
    );
};
export default Card;