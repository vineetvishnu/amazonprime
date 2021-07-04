import React from 'react';

function Card(props) {
    return (
        <>
        <div className="card">
        <img src={props.imgsrc} alt={props.alternate} /> 
        <div className="card-content">
            <div className="card-title">
              <h2>{props.ctitle}</h2>
                </div>
         <button className="btn" ><a href={props.refer} target="_blank" >Watch</a></button>
        </div>
    </div>
    </>
    );
}

export default Card;