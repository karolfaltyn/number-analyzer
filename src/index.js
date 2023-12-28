import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//generate div box from each number
const Box_numbers = ({ numbers }) => {
  const box = numbers.map((number) => <div className='item-box'><p>{number}</p></div>)
  return (
    <div className='flex-box'>
      {box}
    </div>
  )
};


const Header = (props) => (
  <header>
    <h1>Number Generator</h1>
    <p>Even are green, odds are yellow and prime are red.</p>
  </header>
);

const Input = () => <input></input>

const App = () => {
  const max_numbers = window.screen.height;
  const numbers = [...Array(max_numbers).keys()];

  // const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      <Header numbers={numbers} />
      <Input />
      <Box_numbers numbers={numbers} />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);