import React from 'react'

export default function Random(props) {
    const {min, max} = props;
    const random1 = Math.floor(Math.random() * max) + min;
    return (
        <div>
            <p className="random">Random value between {min} and {max} {"=>"} {random1}</p>
        </div>
    )
}
