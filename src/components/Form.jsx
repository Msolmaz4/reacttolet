import React,{useState} from "react";


function Form() {

const [input,setInput] =useState()
const [todos,SetTodos] =useState([])

const handleSubmit=(event) => {
    event.preventDefault();
    SetTodos([...todos,{title:input,completed:false}])
    
    setInput('')

}
 function denemeD1(e)  {
     setInput(e.target.value)
     console.log(e.target.value)
 }

 const handleDelete = ({index}) =>{
     SetTodos(todos.filter((todo)=> todo.index !==index));
 }
    return(
        <form onSubmit={handleSubmit}>
        <input type='text' 
        placeholder="enter a " 
        className="task-input"
        value={input}
        onChange={denemeD1}
        />
        <button className="button-add" type="submit">ADD</button>

        <div>
            {
                todos.map((todo,index)=>(
                    <li className="list-item" key={index}>
                        {todo.title}
                        <button className="button-complete task-button">
<i className="fa fa-check-circle">complet</i>
</button>
<button className="button-edit task-button">
<i className="fa fa-edit">edit</i>
</button>
<button className="button-delete task-button" onClick={()=>handleDelete(todo)}>
<i className="fa fa-trash">de</i>
</button>
                    </li>



                ))
            }
            <div>
           
           
           
                
            

        </div>
        </div>
        
    </form>
    
    )
}
export default Form;