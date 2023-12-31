import "../../assets/style/index.css";
import "../../assets/style/Header.css";

export const Header = () => (
  <header>
    <h1>Number Generator</h1>
    <p>
      Even are <span id="green">green</span>, odds are{" "}
      <span id="yellow">yellow</span> and prime are <span id="red">red</span>.
    </p>
  </header>
);
