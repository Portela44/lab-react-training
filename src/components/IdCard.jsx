import React from 'react'

export default function IdCard(props) {
    const {lastName, firstName, gender, height, birth, picture} = props;
    return (
        <div className="card">
            <img src={picture} alt="profile" />
            <div className="cardInformation">
                <p><span className="infoTitle">First Name: </span>{firstName}</p>
                <p><span className="infoTitle">Last Name: </span>{lastName}</p>
                <p><span className="infoTitle">Gender: </span>{gender}</p>
                <p><span className="infoTitle">Height: </span>{height}</p>
                <p><span className="infoTitle">Birth: </span>{birth}</p>
            </div>
        </div>
    )
}
