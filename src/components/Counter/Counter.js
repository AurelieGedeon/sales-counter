import "./Counter.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../Modal/Modal.js";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [modalOpen, setModalOpen] = useState(false)
  const [reoccurringButtons, setReoccurringButtons] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)

  const open = () => setModalOpen(true)
  const close = () => setModalOpen(false)


  const makeupList = [
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
    {
      name: "highlighter",
      price: 22.99,
      inventory: 200
    },
    {
      name: "primer",
      price: 17.99,
      inventory: 200
    },
    {
      name: "contour",
      price: 8.99,
      inventory: 200
    }
  ]
  // let totalInventory = reoccurringButtons.reduce((accumulator, button) => {
  //   return accumulator + button.inventory;
  // }, 0);
  const handleButtonClick = (price) => {
    setCounter(counter + price);
  };

  const handleProductPush = (selectedProductName) => {
    const selectedProduct = makeupList.find(product => product.name === selectedProductName)
    if (selectedProduct){
      setReoccurringButtons((existingButtons) => [...existingButtons, selectedProduct])
      setSelectedProduct(null)
      close()
    }
  }

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
            {modalOpen && 
            <Modal modalOpen={modalOpen} handleClose={close}>
              <h3>Select Your Product</h3>
              <motion.select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}>
                <option value="">--Select--</option>
                {makeupList.map((product) => (
                  <option key={product.name} value={product.name}>{product.name}</option>
                ))}
              </motion.select>
              <button type="button" onClick={() => handleProductPush(selectedProduct)}>Save</button>
            </Modal>}
          </AnimatePresence>

        </div>
      </div>
    </>
  );
}
