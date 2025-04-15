import React, { memo } from 'react'

const Title = memo(() => {
    console.log("i am title")
  return <h2>Our Counter App</h2>

})

export default Title
