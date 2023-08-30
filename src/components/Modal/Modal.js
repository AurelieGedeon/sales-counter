import { motion } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  },
};

export default function Modal({ handleClose, children }) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        drag
        onClick={(e) => e.stopPropagation()}
        className="modal-2 orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button className="close-button" onClick={handleClose}>
          X
        </button>
        {children}
      </motion.div>
    </Backdrop>
  );
}

const ModalText = ({ text }) => (
  <div className="modal-text">
    <h3>{text}</h3>
    <motion.select></motion.select>
  </div>
);
