import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Laptops from './laptops'
import Mobiles from './Mobiles.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Laptops/>
    <Mobiles/>
   </div>
  )
}

export default App;
