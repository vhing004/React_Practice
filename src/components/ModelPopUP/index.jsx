import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

function ModalPopUp() {
  const [enable, setEnable] = useState(false);
  const handleClose = () => {
    setEnable(!enable);
  };
  return (
    <div className="">
      <button onClick={() => setEnable(!enable)}>Open Modal</button>
      {enable && (
        <Modal
          id={"custom-id"}
          onClose={handleClose}
          header={"Day la Header do may"}
          body={"Content nam het o day nay thang ngu"}
          footer={"Viet loi tran troi vao day di may"}
        />
      )}
    </div>
  );
}

export default ModalPopUp;
