import { useEffect, useState } from "react";

const PracticeTodo = () => {
  const [todos, setTodos] = useState(()=>{
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos):[]
  });
  const [text, setText] = useState("");

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  const handleAddTodo = () => {
    if (!text.trim()) {
      return;
    }
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: text,
        completed: false,
      },
    ]);
    setText("")
  };
  const handleTodoCompleted = (id) => {
    const updated = todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item,
    );

    setTodos(updated);
  };
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div>
      <div>
        <input
          value={text}
          name="todo"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add todo</button>
      </div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <div>{todo.text}</div>
          <button onClick={()=>handleDelete(todo.id)}>delete</button>
          <div>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleTodoCompleted(todo.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PracticeTodo;
