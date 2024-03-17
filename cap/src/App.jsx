import { useState } from 'react'
import APIForm from './Components/APIform';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

  const [inputs, setInputs] = useState({
    url: "",
    format: "",
    no_ads: "",
    no_cookie_banners: "",
    width: "",
    height: "",
  });

  return (
    <>
      <div>
      
       
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      <p className="read-the-docs">
       
       
      </p>
      </div>
    </>
  )
}

export default App
