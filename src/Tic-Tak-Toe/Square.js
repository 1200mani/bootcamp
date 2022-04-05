import React from "react";

const Square = (props) => {
    const classes = (props.className ? `${props.className} square`: `square`)   
    console.log(props.className);   
    return (
        <div
            className={classes}    
            onClick={() => props.onClick(props.index)}>
           {props.state}            
        </div>
    )
}
export default Square;