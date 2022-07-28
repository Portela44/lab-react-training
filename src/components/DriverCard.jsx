import React from 'react'
import Rating from './Rating';

export default function DriverCard(props) {
    const {name, rating, img, car} = props;

    return (
        <div className="driverCard">
            <img src={img} alt="profile" />
            <div className="cardInfo">
                <h1>{name}</h1>

                <Rating>{rating}</Rating>
                <p className="carModel">{car.model} - {car.licensePlate}</p>                
            </div>
        </div>
    )
}
