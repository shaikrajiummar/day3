import React, { useState } from 'react'

const FBCStateEx = () => {
    // const data = React.useState(100);
    // console.log(data);

    const [value , setValue] = useState(1000);
    // console.log(value);
    let changeValue=()=>{
        setValue(1);
    }
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={changeValue}>Change value</button>
    </div>
  )
}

export default FBCStateEx