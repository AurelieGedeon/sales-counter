import { useState } from "react";
import Modal from "../Modal/Modal";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const reoccurringButtons = [
    {
      name: "mascara",
      price: 7.99,
      inventory: 200,
    },
    {
      name: "lipstick",
      price: 5.99,
      inventory: 150,
    },
    {
      name: "eyeliner",
      price: 6.99,
      inventory: 100,
    },
    {
      name: "blush",
      price: 12.5,
      inventory: 75,
    },
  ];
  let totalInventory = reoccurringButtons.reduce((accumulator, button) => {
    return accumulator + button.inventory;
  }, 0);
  const handleButtonClick = (price) => {
    setCounter(counter + price);
  };

  return (
    <>
      <h1> Counter: {counter.toFixed(2)} </h1>
      <div className="button-container">
        <button onClick={() => setCounter(0)}> RESET </button>
        {reoccurringButtons.map((button) => (
          <button onClick={() => handleButtonClick(button.price)}>
            {button.name}
          </button>
        ))}
        <Modal />
      </div>
    </>
  );
}
