import { motion } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";

export default function Modal2({ handleClose, text }) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
      ></motion.div>
    </Backdrop>
  );
}
