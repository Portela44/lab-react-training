import React from 'react'

export default function DriverCard(props) {
    const {name, rating, img, car} = props;
    const roundRating = Math.round(rating);
    let stars = "";
    switch(roundRating) {
        case 0: stars = "☆☆☆☆☆"; break;
        case 1: stars = "★☆☆☆☆"; break;
        case 2: stars = "★★☆☆☆"; break;
        case 3: stars = "★★★☆☆"; break;
        case 4: stars = "★★★★☆"; break;
        case 5: stars = "★★★★★"; break;
        default: stars = "☆☆☆☆☆"; break;
    };  
    return (
        <div className="driverCard">
            <img src={img} alt="profile" />
            <div className="cardInfo">
                <h1>{name}</h1>
                <p className="driverRating">{stars}</p>
                <p className="carModel">{car.model} - {car.licensePlate}</p>                
            </div>
        </div>
    )
}
