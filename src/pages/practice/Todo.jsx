    import { useEffect, useState } from "react"

    const Todo=()=>{
        const [todos,setTodos] = useState(()=>{
            const curr = localStorage.getItem("todos")

            return curr ? JSON.parse(curr) :[]
        })
        const [ input,setInput] = useState('')

        useEffect(()=>{
            localStorage.setItem(JSON.stringify(todos))
        },[todos])
        const handleAddTodos=()=>{
            if(!input.trim()){
                return;
            }
            setTodos(prev=>[...prev,{
                id:Date.now(),
                text:input,
                completed:false
            }])
            setInput('')
        }
        const handleItemChange=(id)=>{
            const updated = todos.map(item=>item.id===id ? {...item, completed : !item.completed}:item)
            setTodos(updated)
            // setTodos(prev=>prev.filter(item=>item.id===id ? {...item,
            //     completed:!item.completed
            // } : item))
        }
        const handleDelete=(id)=>{
            setTodos(prev=>prev.filter(item=>item.id !==id))
        }
        return(
            <div>
                <input value={input} onChange={(e)=>setInput(e.target.value)} type="text"/>
                <button onClick={handleAddTodos}>Add Todo</button>
                {todos.map((item)=>(
                    <div key={item.id}>
                        <div>
                            {item.text}
                        </div>
                        <input type="checkbox" checked={item.completed} onChange={()=>handleItemChange(item.id)}/>
                        <div onClick={()=>handleDelete(item.id)}>delete</div>
                    </div>
                ))
                }
            </div>
        )
    }

    export default Todo