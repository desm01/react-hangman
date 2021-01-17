import React from 'react'

function char(props) {

    const style = {
        padding : '10px'
    }

return(
    <div style = {style}>
        <p>{props.char}</p>
    </div>

)
}

export default char;