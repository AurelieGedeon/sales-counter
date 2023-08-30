import "./Modal.css";
import "./Modal.css";
import { useState } from "react";
import { useSpring, animated } from "react-spring"

export default function Modal() {
  const [modal, setModal] = useState(false);
  const [flip, setFlip] = useState(false)

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200
  })

  const toggleModal = () => {
    setModal(!modal)
    setFlip(!flip)
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Add Button
      </button>
      {modal && (
        <animated.div className="modal" style={props}>
            <div className="overlay" onClick={toggleModal}></div>
            <div className="modal-content">
            <h2>Hello Modal!</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores optio, vel modi voluptates magni, mollitia architecto nulla debitis tempore, accusantium in tempora? Tenetur expedita ea ab consequuntur praesentium? Ut amet fugit animi illum doloribus magni vel facilis laboriosam illo delectus. Fugit deleniti mollitia itaque voluptatum nulla fugiat illo at.
            </p>
            <button className="close-modal" onClick={toggleModal}>X</button>
            </div>
        </animated.div>

      )}
    </>
  );
}
