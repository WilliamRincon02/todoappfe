import React from 'react'
import ToDoListItem from './ToDoListItem'

const ToDoList = ({ status, todos, setTodos }) => {
  return (
    <ol className="todo_list">
      { status === 'pending' ?
        <>
          <p>Loading...</p>
        </>
          : status === 'error' ?
        <>
          <p>Error :(</p> ? </> : <> {
            todos && todos.length > 0 ? (
              todos?.map((item, index) => (
                <ToDoListItem key={index} item={item} todos={todos} setTodos={setTodos} />
              ))
            ) : (
              <p>There are no tasks to do?</p>
            )} </>
        }
    </ol>
  )
}

export default ToDoList