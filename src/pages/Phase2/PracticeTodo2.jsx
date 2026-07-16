import { useEffect, useState } from "react"

const PracticeTodo2=()=>{
    const [todos,setTodos] = useState(()=>{
        const curr = localStorage.getItem('todos')

        return curr ? JSON.parse(curr) :[]
    })
    const [inputText,setInputText] = useState('')
    const handleAddTodos=()=>{
        if(!inputText.trim()){
            return;
        }
        setTodos(prev=>[...prev,{
            id:Date.now(),
            text:inputText,
            completed:false
        }])
        setInputText('')
    }
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])
    const handleTodoChange=(id)=>{
        const updated = todos.map(item=>item.id ===id ? {...item,completed:!item.completed}:item)
        setTodos(updated)
    }
    const handleDelete=(id)=>{
        setTodos(prev=>prev.filter(item=>item.id!==id))
    }   
    return(
        <div>
            <input type="text" onChange={(e)=>setInputText(e.target.value)} value={inputText}/>
            <button onClick={handleAddTodos}>
                Add todo
            </button>
            <div className="todo-container">
                {todos.map((todo)=>(
                    <div className="todo" key={todo.id}>
                        <div className="actions">
                            <input type="checkbox" checked={todo.completed} onChange={()=>handleTodoChange(todo.id)} />
                            <button onClick={()=>handleDelete(todo.id)}>delete</button>
                        </div>
                        <div>
                            {todo.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}   
//todo container display flex align items center justify content center flex direction row 
//same for actions but flex direction column
//text we have to give flex 1 so that it occupies its required space
export default PracticeTodo2