import React from 'react';
import image from '../resources/hangman.png' 

const style = {
    height : '200px'
}

function person(props) {

    let text = 'YOU HAVE ' + props.lives + ' LIVES LEFT'

    if (props.lives === 0 || props.lives < 0) {
        text = ' YOU ARE DEAD'
    }


    return (
        <div>
            <h1>{text}</h1>
            <img style = {style} src = {image} />
        </div>
    )
}

export default person;