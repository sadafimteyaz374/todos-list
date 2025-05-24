import React, {useState} from "react";
import './todo.css';

function Todo(){
    const[l,addlist] = useState("");
    const[text, addtext] = useState([]);

    function addtodo(){
        const nval = l.trim();
        if(nval !== ""){
            if(text.includes(nval)){
                alert("You have alreasy listed it, try another one!");
            }
            else{
                addtext([...text, nval]);
                addlist("");
            }
        }
        if(!nval){
            alert("Please enter a valid todo");
        }
    }
    function delitem(i){
        const nlist = text.filter((_, index) => index !== i);
        addtext(nlist);
    }
    return(
        <div className="todos">
            <h1>Make your plans for the day</h1>  <br/> 
           <input value={l} placeholder="Enter your todos" onChange={(e) => addlist(e.target.value) }/>
           <br/>
           <ul>
            {text.map((text,index)=>(
                <li key={index}>
                    <br/>
                    {text} &nbsp;
                    <button className="del" onClick={() => delitem(index)}>🗑</button>
                </li>
            ))}
           </ul>
           <button className="add" onClick={addtodo}>Add</button>
    
        </div>
        
    );
}

export default Todo;