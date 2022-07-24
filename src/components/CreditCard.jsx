import React from 'react'
import visa from "../assets/images/visa.png"
import mastercard from "../assets/images/master-card.svg"

export default function CreditCard(props) {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
    let typeImg = "";
    let width = "";
    switch(type) {
        case "Visa": typeImg = visa; width="60px"; break;
        case "Master Card": typeImg = mastercard; width="40px"; break;
        default: typeImg = "";
    };
    const divStyle = {
        backgroundColor: bgColor,
        color:color,
    };
    const imgStyle = {
        width: width,
    }
    const hashedAccount = "···· ···· ···· " + number.slice(12, 16);
    return (
        <div className="creditCard" style={divStyle}>
            <img style={imgStyle} src={typeImg} alt="logo" />
            <h2>{hashedAccount}</h2>
            <div className="expiration">
                <span>Expires {expirationMonth}/{expirationYear}</span>
                <span className="bankName">{bank}</span>
            </div>
            <div className="owner">
                <p>{owner}</p>
            </div>
        </div>
    )
}
