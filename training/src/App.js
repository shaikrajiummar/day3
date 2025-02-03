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

import React from 'react';
import './Components/Navbar1.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Sidebar1 from './Components/Sidebar1';
import Sidebar2 from './Components/Sidebar2';
import Footer from './Components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
        <div className="side">
          <Sidebar1 />
          <Sidebar2 />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
