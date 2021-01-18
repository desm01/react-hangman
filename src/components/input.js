import React from 'react';


function input (props) {
return (
    <div>
        <input onKeyDown= {props.checkAnswer}/>
    </div>
)
}

export default input;