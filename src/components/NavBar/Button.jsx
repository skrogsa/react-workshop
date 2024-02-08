import React from "react";

function Button() {
    
    const buttonStyle = {
        ///Dette er CSS
        backgroundColor: "red",
        color: "black",
        border: "5 px solid black"
    }; 
    return (
        //Dette er HTML
        <div>
            <button style={buttonStyle}>Click me</button>
        </div>
    );
}

export default Button;