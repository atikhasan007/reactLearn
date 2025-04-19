import React from 'react'
import {useSelector,useDispatch} from 'react-redux';

const App = () => {
  const counter = useSelector((storeState)=>storeState.counter)
  const theme = useSelector((storeState)=> storeState.theme);

  const dispatch = useDispatch();


  const incrementHandler =  (payload) =>{
    dispatch({type:'counter/increment', payload: payload})
  }

  const decrementHandler = (payload) =>{
    dispatch({type:'counter/decrement', payload: payload})
  }
  return (
    <div  style={{
      backgroundColor:theme.bgColor,
      color: theme.textColor
    }} className='App'>
       <div className='counter-app'>
       <p>The value of the counter is {counter}</p>
      <button onClick={()=>incrementHandler(1)}>increase by 1</button>
      <button onClick={()=>decrementHandler(1)}>decrease by 1</button>
      <button onClick={()=>incrementHandler(5)}>increase by 5</button>
      <button onClick={()=>decrementHandler(3)}>decrease by 3</button>
       </div>

       <hr/>

       <div className='theme'>
           <div className='btn-group-bg'>
           <button onClick={()=>dispatch({
            type:'theme/changeBgColor',
            payload:'black'
           })}>Change Bg color to Black</button>
           <button onClick={()=>dispatch({
            type:'theme/changeBgColor',
            payload:'yellow'
           })}>Change Bg color to Yellow</button>
           <button onClick={()=>dispatch({
            type:'theme/changeBgColor',
            payload:'red'
           })}>change bg color to Red</button>
           </div>

           <div className='btn-group-front'>
           <button onClick={()=>dispatch({
            type:"theme/changeFontColor",
            payload:'green'
           })}>Change text Color to green</button>
           <button onClick={()=>dispatch({
            type:"theme/changeFontColor",
            payload:'purple'
           })}>Change text color to purple</button>
           <button onClick={()=>dispatch({
            type:"theme/changeFontColor",
            payload:'blue'
           })}>change text color to blue</button>
           </div>

         <button onClick={()=>dispatch({
          type:'theme/resetTheme'
          
         })}>Reset Theme</button>
           
       </div>
      
    </div>
  )
}

export default App
