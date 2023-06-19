import './App.css';
import React, {useState} from 'react';

// const weight = null, height = null;

function App() {

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  let calBmi = (e) =>{
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter valid value.");
    }
    else{
      let bmi = (weight / (height * height) *703);
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage('You are underweight.');
      }
      else if (bmi >= 25 && bmi < 30) {
        setMessage('You are a healthy weight person.');
      }
      else{
        setMessage('You are a Overweight.');
      }
    }
  }

  let reload = () => {
    window.location.reload();
  }
    
  return (

    <div className="App">
      <h1>BMI Calculator</h1>
        <form className='formContainer' action="" onSubmit={calBmi}>
          <div className='inside'>
            <label htmlFor="">Weight (lbs) : </label>
            <input type="text" placeholder="Enter Weight value in lbs." value={weight} onChange={(e) => setWeight(e.target.value)}/>
          </div>
          <div className='inside'>
            <label htmlFor="">Height (inch) : </label>
            <input type="text" placeholder="Enter Height value in inch." value={height} onChange={(e) => setHeight(e.target.value)}/>
          </div>
          <div className='inside in2'>
            <button className='btn' type="submit">Submit</button>
            <button className='btn btn2' onClick={reload} type="submit">Reload</button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
  );
}

export default App;
