import React from 'react'

export default function BoxColor(props) {
    const {r, g, b} = props;
    const color = ("rgb(" + r + "," + g + "," + b + ")");
    const divStyle = {
        backgroundColor: color,
    }
    function rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };
    const colorHex = rgbToHex(r,g,b);
    
    return (
        <div>
            <p className="boxcolor" style={divStyle}>{color} <br></br> {colorHex}</p>
        </div>
    )
}
