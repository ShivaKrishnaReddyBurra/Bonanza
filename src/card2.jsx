import React from "react";


function Card2(props) {

    return (
        <div className="card2 g-col-4">
            <img src={props.img} alt="1" />
            <p>{props.content}</p>
            <p>Use Code: {props.code}</p>
            <h2>Shop Now!</h2>
            <a href={props.link}>{props.link}</a>
        </div>
    );
}

export default Card2;