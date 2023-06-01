import React from "react";

const MovieHeading = (props)=>{
    return(
        <div>
            <h1 className="text-white text-3xl py-6">{props.heading}</h1>
        </div>
    );

}

export default MovieHeading;