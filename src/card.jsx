import React from "react";


function Card(props) {

    return (
        <div className="card g-col-4">
            <img src={props.img} alt="1" />
            <p>{props.content}</p>
            <h2>Shop Now!</h2>
            <a href={props.link}>{props.link}</a>
        </div>
    );
}

export default Card;