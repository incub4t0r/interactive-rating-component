import star from '../images/icon-star.svg';

import { useState } from 'react';

function SubmitButton(props) {
    function handleSubmitClick() {
        props.setSubmitted(true);
    }
    return (
        <button onClick={handleSubmitClick} className='SubmitButton'>
            Submit
        </button>
    );
}

function Ratings(props) {
    const [ratings, setRatings] = useState([false, false, false, false, false]);
    function handleRatingClick(id) {
        var newRatings = [...ratings];
        for (var i = 0; i < newRatings.length; i++) {
            if (i <= id) {
                newRatings[i] = true;
            } else {
                newRatings[i] = false;
            }
        }
        setRatings(newRatings);
        props.setRateCount(id + 1);
    }

    return (
        <>
            {ratings.map((ratingBool, index) =>
                <button className={ratingBool ? 'button_active' : ''} id={index} key={index} onClick={() => handleRatingClick(index)}>
                    <img src={star} alt={index}></img>
                    {/* {index + 1} */}
                </button>
            )}
        </>

    )
};

export default function PreSubmit(props) {
    return (
        <div className="App">
            <header className="App-header">
                <div className="card">
                    <div className="card-header">
                        <div className="star">
                            <img src={star} alt="logo" />
                        </div>
                        <h1>
                            How did we do?
                        </h1>
                        <h3>
                            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
                        </h3>
                    </div>
                    <div className="card-body">
                        <div className="rating">
                            <Ratings
                                setRateCount={props.setRateCount}
                            />
                        </div>
                        <SubmitButton
                            setSubmitted={props.setSubmitted}
                        />
                    </div>
                </div>
            </header>
        </div>
    );
}