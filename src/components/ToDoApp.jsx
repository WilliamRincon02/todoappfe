import React, { useState, useEffect} from 'react'
import ToDoList from './ToDoList';
import ToDoHeader from './ToDoHeader';
import ToDoAppForm from './TodoAppForm';
import {
  useQuery,
} from '@tanstack/react-query';
import axios from 'axios'

const ToDoApp = () => {

  const [todos, setTodos] = useState([]);

  const {data, status } = useQuery({
    queryKey: ['dataTasks'],
    queryFn: () =>
      axios
        .get('https://todoapp-pz6e.onrender.com/api/tasks/',{
          headers: {
            "Content-Type": "application/json",
            "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NDcxNzQ2LCJpYXQiOjE3MTk0NjA5NDYsImp0aSI6ImMwOWY2NzMwNDI1MjQ3NzA4ZGYyZWU4NjliNTVhNjExIiwidXNlcl9pZCI6MX0.xu8xOSPvsm5ClYyrDCEYRkmhLRh0-a8So7XfDGBGQxM"
          },
        })
  })

  useEffect(() => {
    const storedTodos = data?.data?.results;
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, [data]);

  const todos_completed = todos.filter((todo) => todo.completed === true )?.length;
  const total_todos = todos.length;

  return (
    <div className="wrapper">
      <ToDoHeader todos_completed={todos_completed} total_todos={total_todos} />
      <ToDoAppForm todos={todos} setTodos={setTodos} />
      <ToDoList status={status} todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default ToDoApp