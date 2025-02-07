// import React from 'react';
// import "./Components/Navbar1.css"
// import Navbar from './Components/Navbar';
// import Main from './Components/Main';
// import Sidebar1 from './Components/Sidebar1';
// import Sidebar2 from './Components/Sidebar2';
// import Footer from './Components/Footer';
// // function App() {
// // let x =React.createElement("div" ,{className:"App"},
// // React.createElement("h1",null,"hello from react"));
// //   let username = "charan";

// import { Component } from "react";

// //   return (
// //     <div className="App">
// //       <h1>Malla Reddy University</h1>
// //       <p>CSE</p>
// //       <h2>{username}</h2><hr></hr><br></br>
// //       {100*100}
// //       <h1>hello form react</h1>

// //     </div>
// //   );
// // }


// //^ Functional Component
// // function App(){
// //   return(
// //     <div>
// //       <h1>Functionl Component</h1>
// //     </div>
// //   )
// // }

// //^ Class Component
// // class App extends React.Component{
// //   render(){
// //     return(
// //       <div>
// //         <h1>Class Component</h1>
// //       </div>
// //     )
// //   }
// // }


// //^ Arrow Function
// // function App() {
// //   return (
// //     <div className='App'>
// //       <h1>Arrow Function Component</h1>
// //     </div>
// //   );
// // }
// // export default App;



// //!component composition examples

// // import React from 'react';
// // class App extends React.Component{
// //   render(){
// //     return(
// //       <div className="app">
// //       </div>
// //     )

// //   }

// //   }
// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <Navbar />
//         <Main></Main>
//         <div className='side'>
//           <Sidebar1 />
//           <Sidebar2 />
//         </div>
//         <Footer />
//       </div>
//     )
//   }
// }
// export default App;/

// import React from 'react';
// import './Components/Navbar1.css';
// import Navbar from './Components/Navbar';
// import Main from './Components/Main';
// import Sidebar1 from './Components/Sidebar1';
// import Sidebar2 from './Components/Sidebar2';
// import Footer from './Components/Footer';

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <Navbar />
//         <Main />
//         <div className="side">
//           <Sidebar1 />
//           <Sidebar2 />
//         </div>
//         <Footer />
//       </div>
//     );
//   }
// }

// export default App;

//!props


// import React from "react";
// class CBCPropEx1 extends React.Component {
//   render() {
//     const { name, age, hobbies, address, isMarried, sendFun } = this.props;

//     return (
//       <div>
//         <h1>{name}</h1>
//         <h2>Age: {age}</h2>
        
//         <h3>Hobbies:</h3>
//         <ul>
//           {hobbies.map((hobby, index) => (
//             <li key={index}>{hobby}</li>
//           ))}
//         </ul>

//         <h3>Address:</h3>
//         <p>
//           City: {address.city}, Area: {address.area}
//         </p>

//         <h3>Status: {isMarried ? "Married" : "Not Married"}</h3>

//         <button onClick={sendFun}>Click Me</button>
//       </div>
//     );
//   }
// }

// export default CBCPropEx1;


//!props.children
// import React from 'react'
// import PropsChildrenex from './propexample/PropsChildrenex'
// import SubChildrenProps from './propexample/SubChildrenProps'

// const App =()=>{
//     return (
//       <div>
//         <PropsChildrenex username="Rajiummar" company="Google">
//         <h1>This data is passing as a props to child components</h1>
//         <SubChildrenProps></SubChildrenProps>
//         </PropsChildrenex>
        
//       </div>
//     )
//   }

//  export default App;


//change button 
// import CBCStateEx from './stateexamples/CBCStateEx';
// const App=()=> {
  
//     return (
//       <div>
//         <CBCStateEx/>
//       </div>
      
//     )
//   }

// export default App;

// import React from 'react'
// import CBCStateEx from './stateexamples/CBCStateEx'
// import FBCStateEx from './stateexamples/FBCStateEx'

// const App = () => {
//   return (
//     <div>
//       {/* <CBCStateEx/> */}
//       <FBCStateEx/>
//     </div>
//   )
// }

// export default App
import FuctionalComponent from './Components/FunctionalComponent';

const App = () => {
  return (
    <div>
    <FuctionalComponent 
      clg='MRU' city="Hyderabad"
    />  
    </div>
  );
};

export default App;