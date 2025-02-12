// import React, { useEffect, useState } from "react";

// const UseEffectEx = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount(100);
//     }, 4000);

//     document.title = "MRU";
//   }, [count]);

//   return (
//     <div>
//       <h1>{count}</h1>
//     </div>
//   );
// };

// export default UseEffectEx;




import React, { useEffect, useState } from 'react'

const UseEffectEx = () => {
    // const[count,setCount]=React.useState(0);
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount(100);
    //     },4000)
    //     document.title="MRU";
    // },[count])
    const [users,setusers]=useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(
            response => response.json().then(data=>{
                setusers(data);
            })
        ).catch(err=>console.log(err))
    })
  return (
  
    <div className='parent'>
        {
            users.map((user,index)=>{
                return(
                    <div key={index}>
                        <h1>{user.name}</h1>
                        <h3>{user.email}</h3>
                    </div>
                )})
        }
    </div>
    
  )
}

export default UseEffectEx