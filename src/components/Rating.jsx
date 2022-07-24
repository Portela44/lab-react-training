import React from 'react'

export default function Rating(props) {
    const rating = props.children;
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
        <div className="rating">{stars}</div>
    )
}
