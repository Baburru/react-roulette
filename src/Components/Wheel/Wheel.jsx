// WheelComponent.js
import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import Modal from "react-modal";
import ResultModal from "../ResultModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faRotate);

Modal.setAppElement(document.getElementById("root"));

const data = [
  {
    option: "Questions",
    style: {
      backgroundColor: "#2A0F11",
      textColor: "#F4981B",
      modal: {
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        content: {
          padding: "3vw",
          position: "absolute",
          borderRadius: "25px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#2A0F11",
          color: "#F4981B",
          width: "85vw",
          height: "586px",
        },
      },
    },
  },
  {
    option: "Tools",
    style: {
      backgroundColor: "#141C32",
      textColor: "#46A2DA",
      modal: {
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        content: {
          position: "absolute",
          borderRadius: "25px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#141C32",
          color: "#46A2DA",
          width: "85vw",
          height: "586px",
        },
      },
    },
  },
  {
    option: "Category",
    style: {
      backgroundColor: "#19331D ",
      textColor: "#72B745",
      modal: {
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        content: {
          position: "absolute",
          borderRadius: "25px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#19331D ",
          color: "#72B745",
          width: "85vw",
          height: "586px",
        },
      },
    },
  },
  {
    option: "Challenge",
    style: {
      backgroundColor: "#430F23",
      textColor: "#E83967 ",
      modal: {
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        content: {
          position: "absolute",
          borderRadius: "25px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#430F23",
          color: "#E83967 ",
          width: "85vw",
          height: "586px",
        },
      },
    },
  },
];

function WheelComponent() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const displayResult = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    window.location.reload();
  };

  return (
    <>
      <h1>Welcome to the Photoshot spin wheel !</h1>
      <div id="wheel">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          fontSize={30}
          disableInitialAnimation
          spinDuration={0.33}
          onStopSpinning={() => {
            setMustSpin(false);
            displayResult();
          }}
        />
        <button className="spin-button" onClick={handleSpinClick}>
          <FontAwesomeIcon icon="fa-solid fa-rotate" />{" "}
        </button>
      </div>

      <ResultModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        option={data[prizeNumber].option}
        modalStyles={data[prizeNumber].style.modal}
      />
    </>
  );
}

export default WheelComponent;
