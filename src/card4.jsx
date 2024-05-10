import React from "react";


function Card4(props) {

    return (
        <div className="card4 g-col-4">
            <img src={props.img} alt="1" />
            <p>{props.content}</p>
            <p>{props.cost}</p>
            <p>M.R.P:  &#8377;<span className="strike">{props.orginalcost}</span></p>
            <p>EMI starts at  &#8377;{props.emi}.No Cost EMI available EMI options</p>
            <a href={props.link}>{props.link}</a>
        </div>
    );
}

export default Card4;