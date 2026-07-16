    import { useState } from 'react'
    import './Todo.css'
    const Todo=()=>{
        const [todos,setTodos]=useState([])
        const [todo,setTodo]=useState('')
        const handleSave=()=>{
            setTodos(prev=>[...prev,{id:Date.now(),text:todo,checked:false}])
            setTodo('')
        }
        const handleDelete=(id)=>{
            console.log(id,'hhh')
            // const filtered = todos.filter(item=>item.id!=id)
            // console.log(filtered,'sdhsdjh')
            setTodos(prev=>prev.filter(item=>item.id!=id))
        }
        const checked=(id)=>{
            setTodos(prev=>prev.map(item=>item.id===id ? {...item , checked:!item.checked} : item))
        }
        const count = todos.filter(todo=>todo.checked).length
    
        return(
            <div>
                {todos.map((item)=>(
                    <div key={item.id} className='todo'>
                        {/* <div>
                            {item.name}
                        </div> */}
                        <div>
                            {item.text}
                        </div>
                        <input type='checkbox' onChange={()=>checked(item.id)}/>
                        <button onClick={()=>handleDelete(item.id)}>delete</button>
                    </div>

                ))}
                <div>total Count:{count}/{todos.length}</div>
                <input onChange={(e)=>setTodo(e.target.value)} value={todo}/>
                <button onClick={handleSave}>Add</button>
                
            </div>
        )
    }

    export default Todo