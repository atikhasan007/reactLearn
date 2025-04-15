import React, { useCallback, useState } from 'react';
import Title from '../components/Title';
import CounterAppTitle from '../components/CounterAppTitle';
import Button from '../components/Button';

const CounterApp = () => {
  console.log("i am counter app");
     const [counter, setCounter] = useState(15);
     const [counter2, setCounter2] = useState(10);


        const increaseHandler = useCallback(() =>{
            setCounter((prev)=> prev + 1);
        },[]) //reference create hoy as like #00456 #454gg3


        const increaseHandler2 = useCallback(() =>{
            setCounter2((prev)=> prev + 1);
        } ,[])// reference create hoy #34568 #Kgf5567
      
  return (
    <div>
         <Title/>
       <div className='counter-app-1'>
                <CounterAppTitle value={counter}/>
               <Button handler={increaseHandler}/>

                
       </div>
         <hr/>

       <div className='counter-app-2'>
                <CounterAppTitle value={counter2}/>
             <Button handler={increaseHandler2}/>

                
       </div>
    </div>
  )
}

export default CounterApp
