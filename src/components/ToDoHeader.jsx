import React from 'react'

const ToDoHeader = ({ todos_completed, total_todos }) => {
  return (
    <>
      <header>
        <img src="https://cdn-icons-png.flaticon.com/512/6194/6194029.png" alt="To Do List Icon" />
        <img src="https://ww2.ufps.edu.co/public/archivos/elementos_corporativos/Logo-nuevo-horizontal.png" alt="UFPS Logo"></img>
      </header>
      <section className="todoheader_section">
        <div>
          <h1>Welcome, Joe Snow </h1>
          <p>To Do APP</p>
        </div>
        <div>
          {todos_completed}/{total_todos}
        </div>
      </section>
    </>
  )
}

export default ToDoHeader