import React from 'react'
import { useCounter } from '../hooks/useCounter'

const CounterApp = () => {
    const {counter,increaseHandler,decreaseHandler} = useCounter();
console.log(counter)
  return (
    <div>
        <p>The value of the Counter is {counter}</p>
        <button onClick={increaseHandler}>Increase by 1</button>

        <button onClick={decreaseHandler}>Decrease by 1</button>
      
    </div>
  )
}

export default CounterApp
