import ".../App.css";
import "./Modal.css";
import { useState } from "react";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Add Button
      </button>
      <div className="modal">
        <div className="overlay"></div>
        <div className="modal-content">
          <h2>Hello Modal!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores optio, vel modi voluptates magni, mollitia architecto nulla debitis tempore, accusantium in tempora? Tenetur expedita ea ab consequuntur praesentium? Ut amet fugit animi illum doloribus magni vel facilis laboriosam illo delectus. Fugit deleniti mollitia itaque voluptatum nulla fugiat illo at.
          </p>
        </div>
      </div>
    </>
  );
}
