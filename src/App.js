import { useState } from "react";
import { Header } from "./parts/Header";
import { BoxGenerator } from "./components/BoxGenerator/BoxGenerator";

export const App = () => {
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
    if (parsedInput > 9999) {
      alert("Number is to large! Max 4 digits")
    }
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
    <>
      <Header />
      <main>
        <div className="user-data">
          <label>
            Type positive number: <br />
            <input
              type="number"
              min={1}
              max={9999}
              placeholder=""
              value={userInput}
              onChange={(evt) => handleInputChange(evt.target.value)}
            />
            <button onClick={generateNumbers} className="btn">
              &#62;
            </button>
          </label>
        </div>
        <BoxGenerator numbers={numbers} />
      </main >
    </>
  );
};
