import React from 'react'

const PassingProps = (props) => {
  return (
    <div>
      <h1>{props.firstName} {props.lastName} is {props.age}</h1>
    </div>
  )
}

export default PassingProps
