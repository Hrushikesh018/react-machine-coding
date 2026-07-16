import { useEffect, useState } from "react"

const ReTodo=()=>{
    const [todos,setTodos] = useState(()=>{
        const updated = localStorage.getItem("todos");

        return updated ? JSON.parse(updated):[]
    })
    const [inputText,setInputText] = useState('')

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])
    const handleAddTodo=()=>{
        if(!inputText.trim()) return;
        setTodos((prev)=>[...prev,{
            id:Date.now(),
            text:inputText,
            completed:false
        }])
    }
    const handleTodoStatusChange=(id)=>{
        const updated = todos.map((todo)=>todo.id===id ? {...todo,completed:!todo.completed}:todo)
        setTodos(updated)
    }
    const handleDelete=(id)=>{
        setTodos((prev)=>prev.filter(item=>item.id!==id))
    }
    return(
        <div className="container">
            <div>
                <input type="text" onChange={(e)=>setInputText(e.target.value)} value={inputText}/>
                <button onClick={handleAddTodo}>Add todo</button>
            </div>
            <div className="todo-container">
                {todos.map((todo)=>(
                    <div key={todo.id} className="todo-card">
                        <div className="todo-content">
                            {todo.text}
                        </div>  
                        <div className="todo-actions">
                            <input type="checkbox" checked={todo.completed} onChange={()=>handleTodoStatusChange(todo.id)}/>
                            <button onClick={()=>handleDelete(todo.id)}>delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ReTodo

//styles for todo-container display flex justify content center flex direction row flex wrap wrap align items center
//todo-card display flex flex direction column align items center 
//todo actions dflex flex direction row 