import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { increment,decrement } from './store/action-creator/counter';
import { changeBgColor,changTextColor,resetTheme } from './store/action-creator/theme';
const App = () => {
  const counter = useSelector((storeState)=>storeState.counter)
  const theme = useSelector((storeState)=> storeState.theme);

  const dispatch = useDispatch();


  return (
    <div  style={{
      backgroundColor:theme.bgColor,
      color: theme.textColor
    }} className='App'>
       <div className='counter-app'>
       <p>The value of the counter is {counter}</p>
      <button onClick={()=>dispatch(increment(1))}>increase by 1</button>
      <button onClick={()=>dispatch(decrement(1))}>decrease by 1</button>
      <button onClick={()=>dispatch(increment(5))}>increase by 5</button>
      <button onClick={()=>dispatch(decrement(3))}>decrease by 3</button>
       </div>

       <hr/>

       <div className='theme'>
           <div className='btn-group-bg'>
           <button onClick={()=>dispatch(changeBgColor("black"))}>Change Bg color to Black</button>
           <button onClick={()=>dispatch(changeBgColor("yellow"))}>Change Bg color to Yellow</button>
           <button onClick={()=>dispatch(changeBgColor("red"))}>change bg color to Red</button>
           </div>

           <div className='btn-group-front'>
           <button onClick={()=>dispatch(changTextColor("green"))}>Change text Color to green</button>
           <button onClick={()=>dispatch(changTextColor("purple"))}>Change text color to purple</button>
           <button onClick={()=>dispatch(changTextColor("blue"))}>change text color to blue</button>
           </div>

         <button onClick={()=>dispatch(resetTheme())}>Reset Theme</button>
           
       </div>
      
    </div>
  )
}

export default App
