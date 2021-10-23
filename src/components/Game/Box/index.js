import React,{ useState } from "react";
import "./styles.css"

function Box(props){
    
    const[text,setText]=useState("")

    function toogleText(){
        if(text==="")
        setText(props.currentState)
        props.changeTurn(props.col,props.row)
    }

    return <div className ="box" onClick={toogleText}>
        {text}

    </div>
}
    export default Box