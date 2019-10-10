import React from 'react';

export default function PhotoCard(props) {

    return (
        <div className="card">
            <h1>Photo of the Day!</h1>
            <div className="image">
                <img src={props.image}></img>
            </div>
        </div>
    )
}