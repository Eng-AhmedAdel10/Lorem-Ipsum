import React , {useState} from "react";

const Form =({generate})=>{
    const [count,setCount]=useState(0);

    const handleChange=(e)=>{
        setCount(e.target.value)
    }

    return(
        <form>
            <label htmlFor="number">Paragraphs:</label>
            <input type="number" value={count} id="number" onChange={handleChange}/>
            <button onClick={(e)=>{
                e.preventDefault();
                generate(count)
            }}>generate</button>
        </form>
    )
} 

export default Form