import React from 'react'
import axios from 'axios'
import { useMutation } from '@tanstack/react-query';

const ToDoAddForm = () => {

  const mutation = useMutation({
    mutationFn: (formData) => {
      return axios
      .post('https://todoapp-pz6e.onrender.com/api/tasks/', formData, {
        headers: {
          "Content-Type": "application/json",
          "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NDcxNzQ2LCJpYXQiOjE3MTk0NjA5NDYsImp0aSI6ImMwOWY2NzMwNDI1MjQ3NzA4ZGYyZWU4NjliNTVhNjExIiwidXNlcl9pZCI6MX0.xu8xOSPvsm5ClYyrDCEYRkmhLRh0-a8So7XfDGBGQxM"
        },
      })
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    mutation.mutate({ name: event.target.todo.value, description: ""})
    event.target.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Write your next task"
        />
      </label>
      <button>
        <span className="visually-hidden">Submit</span>
        <svg
          clipRule="evenodd"
          fillRule="evenodd"
          fill="#ffffff"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
        >
          <path
            d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
            fillRule="nonzero"
          />
        </svg>
      </button>
    </form>
  )
}

export default ToDoAddForm