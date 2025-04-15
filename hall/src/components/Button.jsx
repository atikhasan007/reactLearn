import React, { memo } from 'react'

const Button = memo(({handler}) => {

    // handler = #00456
    //  handler = #454gg3 
    console.log("i am Button")


  return (
    <button onClick={handler}>Increase by 1</button>
  )
});

export default Button
