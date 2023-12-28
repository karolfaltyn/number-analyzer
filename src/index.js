import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//generate div box from each number
const BoxNumbers = ({ numbers }) => {
  const box = numbers.map((number) => <div className='item-box' key={number}><p>{number}</p></div>)

  // check if even, odd, prime JAK TO ZROBIĆ?

  for (let i = 0; i < numbers.length; i++) {
    const bgc = document.getElementsByClassName("#");
    numbers[i] % 2 === 0 ? bgc.classList.add("isEven") : console.log("nieparzyste")
  }

  return (
    <div className='flex-box'>
      {box}
    </div>
  )
};

const Header = () => (
  <header>
    <h1>Number Generator</h1>
    <p>Even are <span id='green'>green</span>, odds are <span id='yellow'>yellow</span> and prime are <span id='red'>red</span>.</p>
  </header>
);

const Input = () => {
  const maxNumber = document.querySelectorAll('input').value;
  return (
    <div className='user-data'>
      <label>Numbers on screen: </label>
      <input type="number" defaultValue={16}></input>
    </div>
  )
}

const maxNumber = 12

const App = () => {
  const numbers = [...Array(maxNumber).keys()];
  //zapytać jak przenieść te wartości

  return (
    <div>
      <Header />
      <Input />
      <BoxNumbers numbers={numbers} />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
//createRoot co to?