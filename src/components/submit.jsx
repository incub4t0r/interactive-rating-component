import React from 'react'
import { useState } from 'react';

export default function SubmitButton() {
    const [submitted, setSubmitted] = useState(false);
    function handleClick() {
        setSubmitted(true);
    }
    return (
        <button onClick={handleClick} className={`SubmitButton ${submitted ? 'submitted' : ''}`}>
            Submit
        </button>
    );
}