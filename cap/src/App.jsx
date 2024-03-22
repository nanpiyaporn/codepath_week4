import { useState } from 'react';
import APIForm from './components/APIForm';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  // Define submitForm function
  const submitForm = () => {
    // Implement the functionality you want when the form is submitted
    console.log("Form submitted!");
  };

  const [inputs, setInputs] = useState({
    url: "",
    format: "",
    no_ads: "",
    no_cookie_banners: "",
    width: "",
    height: "",
  });

  return (
    <div className="whole-page">
      <h1>Build Your Own Screenshot! 📸</h1>
      
      <APIForm
        inputs={inputs}
        handleChange={(e) =>
          setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value.trim(),
          }))
        }
        onSubmit={submitForm} // Pass the submitForm function as onSubmit prop
      />
      <br />
    </div>
  );
}

export default App;
