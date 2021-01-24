import React from 'react';


function input (props) {
return (
    <div>
        <input value = {''} onKeyDown= {props.checkAnswer}/>
    </div>
)
}

export default input;