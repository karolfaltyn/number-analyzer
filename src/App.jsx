import { useState } from "react";
import { Header } from "./parts/Header";
import { BoxGenerator } from "./components/BoxGenerator/BoxGenerator";
// import { Footer } from "./parts/Footer/Footer";

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
    <>
      <Header />
      <main>
        <div className="user-data">
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
        </div>
        <BoxGenerator numbers={numbers} />
      </main>
      {/* <Footer /> */}
    </>
  );
};
