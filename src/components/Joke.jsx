import React from 'react';

const Joke = (props) => {
    return (
        <div className="jokes">
            <h2 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h2>
            <h4 style = {{color: !props.question && 'red'}}>Joke: {props.joke}</h4>
        </div>
    );
}

export default Joke;
