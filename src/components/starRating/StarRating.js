import React, { useState } from "react";
import  Star from './Star';

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const handleStarClick = (starIndex) => {
        setRating(setRating + 1);
    }

    return (
        <div>
            {Array.from({ length: 5 }).map((___, index)=>(
            <Star
                key={index}
                filled={index < rating}
                onClick={() => handleStarClick(index)} />
            ))}
            <p>your Rating: {rating } stars</p>
        </div>

    )
            
}

export default StarRating;