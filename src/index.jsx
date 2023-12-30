import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Header = () => (
  <header>
    <h1>Number Generator</h1>
    <p>
      Even are <span id="green">green</span>, odds are{" "}
      <span id="yellow">yellow</span> and prime are <span id="red">red</span>.
    </p>
  </header>
);

const BoxNumbers = ({ numbers }) => {
  //check if even, odd or prime and add special class
  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }

    return true;
  };

  const box = numbers.map((number) => {
    let className = "item-box";

    number % 2 === 0 ? (className += " even") : (className += " odd");

    if (isPrime(number)) {
      className += " prime";
    }

    return (
      <div className={className} key={number}>
        <p>{number}</p>
      </div>
    );
  });

  return (
    <main>
      <div className="user-data"></div>
      <div className="flex-box">{box}</div>
    </main>
  );
};

const App = () => {
  const maxNumber = window.innerWidth;

  const numbers = [...Array(maxNumber).keys()];

  return (
    <div>
      <Header />
      <BoxNumbers numbers={numbers} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
//createRoot co to?
