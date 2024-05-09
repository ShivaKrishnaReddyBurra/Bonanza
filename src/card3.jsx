import React from "react";


function Card3(props) {

    return (
        <div className="card g-col-4">
            <img src={props.img} alt="1" />
            <p>{props.content}</p>
            <h2>Limited Time Deal!</h2>
            <a href={props.link}>{props.link}</a>
        </div>
    );
}

export default Card3;