import React, { memo } from 'react'

const CounterAppTitle = memo(({value}) => {
    console.log('i am counterapptitle')
  return  <p>The value of the Counter is {value}</p>
})

export default CounterAppTitle
