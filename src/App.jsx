import { useReducer, } from 'react'

import './App.css'

function App() {

  const initialState = { count: 0 }
  const reducer = (state, action) => {
    if (action.type == "INCREMENT") {
      return { count: action.payload + state.count }
    }
    if (action.type == "DECREMENT") {
      return { count: state.count - action.payload }
    }
    if (action.type == "RESET") {
      return { count: action.payload }
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className='bg-slate-400 h-screen
     text-center flex flex-col items-center justify-center'>
      <h1 className="my-2 text-4xl">App using useReducer hook</h1>
      <p className='text-4xl my-4 animate-bounce'>{state.count}</p>
      <div className="text-white">
        <button className="bg-slate-800 m-2 p-2 rounded-md hover:bg-slate-100 hover:text-black" onClick={() => dispatch({ type: "INCREMENT", payload: 1 })}>Increment</button>
        <button className="bg-slate-800 m-2 p-2 rounded-md hover:bg-slate-100 hover:text-black" onClick={() => dispatch({ type: "DECREMENT", payload: 1 })}>Decrement</button>
        <button className="bg-slate-800 m-2 p-2 rounded-md hover:bg-slate-100 hover:text-black" onClick={() => dispatch({ type: "RESET", payload: 0 })}>Reset</button>
      </div>
    </div>
  )
}

export default App
