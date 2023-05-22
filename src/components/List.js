import React , {useState} from "react";

const List =({item})=>{
    const [red,setRed]=useState(false);

    return <p>{item}</p>
} 

export default List