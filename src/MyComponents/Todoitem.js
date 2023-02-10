import React from 'react'

const Todoitem = ({ todo, onDelete }) => {
  return (
    <>
      <div>
        <br />
        <p>This is task no : <strong>{todo.sno}</strong></p>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
      </div>
      <hr />
    </>


  )
}

export default Todoitem
