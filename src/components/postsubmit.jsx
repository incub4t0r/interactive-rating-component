import thankyou from '../images/illustration-thank-you.svg';

export default function PostSubmit(props) {
    return (
        <div className="App">
            <header className="App-header">
                <div className="card">
                    <div className="card-header">
                        <div className="thankyou">
                            <img src={thankyou} alt="logo" />
                            <h3 className="final-rating">
                                You selected {props.rating} out of 5
                            </h3>
                            <h1>
                                Thank you!
                            </h1>
                            <h3 className="appreciation">
                                We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
                            </h3>
                            </div>
                        </div>
                </div>
            </header>
        </div>
    );
}