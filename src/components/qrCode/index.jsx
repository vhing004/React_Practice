import { useRef, useState } from "react";
import QRCode from "react-qr-code";
import "./qr.css";

function QrCode() {
  const [value, setValue] = useState("");
  const [qr, setQr] = useState("");

  const ref = useRef();

  const handleConfirm = () => {
    setValue("");
    setQr(value);
    ref.current.focus();
  };
  return (
    <div className="wrapper">
      <div className="input">
        <input
          ref={ref}
          placeholder="Enter value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleConfirm}>Confirm</button>
      </div>
      <QRCode value={qr} />
    </div>
  );
}

export default QrCode;
