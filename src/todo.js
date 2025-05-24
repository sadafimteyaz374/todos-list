import React, {useState} from "react";
import './todo.css';

function Todo(){
    const[l,addlist] = useState("");
    const[text, addtext] = useState([]);

    function addtodo(){
        const nval = l.trim();
        if(nval !== ""){
            addtext([...text, nval]);
            addlist("");
        }
    }
    function delitem(i){
        const nlist = text.filter((_, index) => index !== i);
        addtext(nlist);
    }
    return(
        <div className="todos"> 
            <h1>Make your plans for the day</h1>  <br/> 
           <input value={l} onChange={(e) => addlist(e.target.value)}/><br/><br/>
           <button className="add" onClick={addtodo}>Add</button>
           <br/>
           <ul>
            {text.map((text,index)=>(
                <li key={index}>
                    <br/>
                    {text} &nbsp;
                    <button className="del" onClick={() => delitem(index)}>delete</button>
                </li>
            ))}
           </ul>
        </div>
    );
}

export default Todo;