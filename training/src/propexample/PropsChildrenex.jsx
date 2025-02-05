import React from 'react'

const PropsChildrenex = (props) => {
    console.log(props);
  return (

    <div>
        <h1>{props.username}</h1>
        <h3>{props.company}</h3>
        {
            props.children
        }
    </div>
  )
}

export default PropsChildrenex