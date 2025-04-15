import React, { useState } from 'react';
import Title from '../components/Title';
import CounterAppTitle from '../components/CounterAppTitle';

const CounterApp = () => {
  console.log("i am counter app");
     const [counter, setCounter] = useState(15);
     const [counter2, setCounter2] = useState(10);
        const increaseHandler = () =>{
            setCounter((prev)=> prev + 1);
        }


        const increaseHandler2 = () =>{
            setCounter2((prev)=> prev + 1);
        }
      
  return (
    <div>
         <Title/>
       <div className='counter-app-1'>
                <CounterAppTitle value={counter}/>
                <button onClick={increaseHandler}>Increase by 1</button>

                
       </div>
         <hr/>

       <div className='counter-app-2'>
                <CounterAppTitle value={counter2}/>
                <button onClick={increaseHandler2}>Increase by 1</button>

                
       </div>
    </div>
  )
}

export default CounterApp
