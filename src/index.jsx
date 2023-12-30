import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//generate div box from each number and check if even, odd, prime
const BoxNumbers = ({ numbers }) => {
  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }

    return true;
  };

  const box = numbers.map((number) => {
    let className = 'item-box';

    number % 2 === 0 ? className += ' even' : className += ' odd';

    if (isPrime(number)) {
      className += ' prime';
    }

    return <div className={className} key={number}><p>{number}</p></div>;
  });

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


//TODO: ADD FOOTER 

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