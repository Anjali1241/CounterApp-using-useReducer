import { useReducer,  } from 'react'

import './App.css'

function App() {

  const initialState = { count: 0 }
  const reducer = (state, action) => {
    if (action.type == "INCREMENT") {
      return { count: action.payload + state.count }
    }
    if (action.type == "DECREMENT") {
      return { count:state.count- action.payload  }
    }
    if (action.type == "RESET") {
      return { count: action.payload }
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <h1>App using useReducer hook</h1>
      <p>{state.count}</p>
      <button className="button" onClick={()=>dispatch({type:"INCREMENT",payload:1})}>Increment</button>
      <button className="button" onClick={()=>dispatch({type:"DECREMENT",payload:1})}>Decrement</button>
      <button className="button" onClick={()=>dispatch({type:"RESET",payload:0})}>Reset</button>
    </>
  )
}

export default App
