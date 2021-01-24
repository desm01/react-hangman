import React from 'react';
import post from '../resources/post.png'
import head from '../resources/head.png'
import legs from '../resources/legs.png'
import dead from '../resources/dead.png'
import arms from '../resources/arms.png'
import oneArm from '../resources/oneArm.png'
import oneLeg from '../resources/oneLeg.png'
import body from '../resources/body.png'

const style = {
    height : '200px'
}

function person(props) {

    let text = 'YOU HAVE ' + props.lives + ' LIVES LEFT'
    let image = post;

    if (props.lives === 0 || props.lives < 0) {
        text = ' YOU ARE DEAD'
        image = dead;
    }

    if (props.lives === 1) {
        image = arms;
    }

    if (props.lives === 2) {
        image = oneArm;
    }

    if (props.lives === 3) {
        image = legs;
    }

    if (props.lives === 4) {
        image = oneLeg
    }

    if (props.lives === 5) {
        image = body;
    }

    if (props.lives === 6) {
        image = head;
    }



    return (
        <div>
            <h1>{text}</h1>
            <img style = {style} src = {image} />
        </div>
    )
}

export default person;