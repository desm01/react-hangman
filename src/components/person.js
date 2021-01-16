import React from 'react';
import image from '../resources/hangman.png' 

const style = {
    height : '200px'
}

function person() {
    return (
        <div>
            <img style = {style} src = {image} />
        </div>
    )
}

export default person;