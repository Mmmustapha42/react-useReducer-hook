import React from 'react'

export const Todo = ({todo, dispatch}) => {
  return (
    <div>
        <span style={{color: todo.complete ? '#AAA' : '#000'}}>{todo.name}</span>
        <button onClick={() => dispatch({type:'toggle todo',
         payload: {id:todo.id}})}>Toggle</button>
        <button>Delete</button>

    </div>
  )
}
