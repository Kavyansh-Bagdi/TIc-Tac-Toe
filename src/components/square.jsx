import React from "react";

function Square(props){
    return(
        <div onClick={props.onclick} className="sqaure">
            {props.value}
        </div>
    );
};

export default Square;