import React from "react";

function Button ({message, title, enabled}) {
return(
    <button disabled={{enabled}}
    type="button"
    onClick={() => console.log({message})}>
    {title}</button>
)
}

export default Button