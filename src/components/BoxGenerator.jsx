import { isPrime } from "../utils/isPrime";
import "../assets/style/BoxGenerator.css";

export const BoxGenerator = ({ numbers }) => {
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
