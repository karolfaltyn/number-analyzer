import React, { useState } from "react";
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
  // Function to check if a number is prime
  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }

    return true;
  };

  //Check if even, odd, prime and generate div with special class
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

  return <div className="flex-box">{box}</div>;
};

//TODO: ADD FOOTER WITH GITHUB LINK

const App = () => {
  // State to manage the user's input for the number of boxes
  const [userInput, setUserInput] = useState("");

  // State to manage the generated numbers
  const [numbers, setNumbers] = useState([]);

  // Function to handle user input change
  const handleInputChange = (value) => {
    setUserInput(value);
  };

  // Function to generate numbers based on user input
  const generateNumbers = () => {
    const parsedInput = parseInt(userInput);

    //FIXME: SET MAX NUMBER
    if (!isNaN(parsedInput) && parsedInput > 0) {
      const numbersArray = Array.from(
        { length: parsedInput },
        (_, index) => index + 1
      );
      setNumbers(numbersArray);
    } else {
      alert("Please enter a valid positive number.");
    }
  };

  return (
    <div>
      <Header />
      <main className="user-data">
        <label>
          Type positive number:
          <input
            type="number"
            min={1}
            value={userInput}
            onChange={(evt) => handleInputChange(evt.target.value)}
          />
        </label>
        <button onClick={generateNumbers}>&#62;</button>
      </main>
      <BoxNumbers numbers={numbers} />
      {/* <Footer /> */}
    </div>
  );
};

//FIXME: CHANGE RENDER METHOD TO createRoot (REACT 18)
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
