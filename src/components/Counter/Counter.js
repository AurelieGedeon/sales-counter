import "./Counter.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../Modal/Modal";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [modalOpen, setModalOpen] = useState(false)

  const open = () => setModalOpen(true)
  const close = () => setModalOpen(false)

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
        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }} 
        onClick={() => setCounter(0)}> RESET </motion.button>
        {reoccurringButtons.map((button) => (
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleButtonClick(button.price)}>
            {button.name}
          </motion.button>
        ))}
        <div>
          <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="open-modal"
          onClick={() => (modalOpen ? close() : open())}>
            Add Button
          </motion.button>
          <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => null}>
            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
          </AnimatePresence>

        </div>
      </div>
    </>
  );
}
