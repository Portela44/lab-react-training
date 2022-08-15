import React, {useState} from 'react'

export default function LikeButton() {
    const [like1, setLike1] = useState(0);
    const [like2, setLike2] = useState(0);
    const [background1, setBackground1] = useState("purple");
    const [background2, setBackground2] = useState("purple");
    const backgroundColors = ['purple','blue','green','yellow','orange','red'];
    const checkLike1 = () => {
        setLike1(prev => prev+1);
        setBackground1(backgroundColors[like1%(backgroundColors.length-1)+1]);
    };
    const checkLike2 = () => {
        setLike2(prev => prev+1);
        setBackground2(backgroundColors[like2%(backgroundColors.length-1)+1]);
    };
    return (
        <div>
            <button className="colorLike" onClick={() => checkLike1()} style={{backgroundColor: background1}}>{like1} Likes</button>
            <button className="colorLike" style={{backgroundColor:background2}} onClick={() => checkLike2()} >{like2} Likes</button>
        </div>
    )
}
