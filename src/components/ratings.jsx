import React from 'react'
import { useState } from 'react';

export default function Ratings() {
    const [ratings, setRatings] = useState([false, false, false, false, false]);
    function handleClick(id) {
        var newRatings = [...ratings];
        for (var i = 0; i < newRatings.length; i++) {
            if (i <= id) {
                newRatings[i] = true;
            } else {
                newRatings[i] = false;
            }
        }
        setRatings(newRatings);
    }

    return (
        <div className="rating">
            {ratings.map((ratingBool, index) =>
                // <button className={ratingBool ? 'button_active': ''} active={ratingBool.toString()} id={index} onClick={() => handleClick(index)}>
                <button className={ratingBool ? 'button_active' : ''} id={index} onClick={() => handleClick(index)}>
                    {index + 1}
                </button>
            )}
        </div>
    )
}