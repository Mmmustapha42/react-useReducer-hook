import './App.css';
import React, {useState, useReducer} from 'react';
import {Todo} from './Todo'

  function reducer(todos, action) {

    switch (action.type) {
      case 'add todo':
        return [...todos, newTodo(action.payload.name)]
        case 'toggle todo':
          return todos.map(todo => {
            if (todo.id === action.payload.id){
              return {...todo, complete: !todo.complete}
            }
            return todo
          })
          case 'delete todo':
            return todos.filter(todo => todo.id !==action.payload.id)
        default:
          return todos
    }
   /* switch (action.type){
      case "increment":
        return {count: state.count + 1}
        case "decrement":
          return {count: state.count - 1}
          default:
            return state
    }*/
  }

  function newTodo(name){
    return {id:Date.now(), name:name, complete: false}
  }


function App() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({type:'add todo', payload: {name: name}})
    setName('')
  }

  /*function increment() {
    dispatch({type: 'increment'})
  }

  function decrement() {
    dispatch({type: "decrement"})
  }*/

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type='text' value={name} onChange={e => setName(e.target.value)}/>
    </form>

    {todos.map(todo => {
      return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
    })}
    </>
  );
}

export default App;
