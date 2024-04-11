import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesquevel
        arcu nulla. Maecenas ut rhoncus ipsum. Nunc a c ursus nunc, id rhoncus
        ligula. Phasellus eu porttitor ipsum. Nullam viverra enim eu maximus
        mollis. Maecenas lacinia venenatis nulla, ac rutrum
      </p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
