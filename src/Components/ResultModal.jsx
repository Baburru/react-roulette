import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import challenges from "../data/challenges.json";
import categories from "../data/category.json";
import tools from "../data/tools.json";
import questions from "../data/questions.json";

const ResultModal = ({ isOpen, closeModal, option, modalStyles }) => {
  const [randomOutput, setRandomOutput] = useState(null);

  useEffect(() => {
    if (isOpen) {
      if (option.toLowerCase() === "challenge") {
        const randomChallengeIndex = Math.floor(
          Math.random() * challenges.length
        );
        setRandomOutput(challenges[randomChallengeIndex]);
      } else if (option.toLowerCase() === "category") {
        const randomCategoryIndex = Math.floor(
          Math.random() * categories.length
        );
        setRandomOutput(categories[randomCategoryIndex]);
      } else if (option.toLowerCase() === "tools") {
        const randomToolIndex = Math.floor(Math.random() * tools.length);
        setRandomOutput(tools[randomToolIndex]);
      } else if (option.toLowerCase() === "questions") {
        const randomQuestionIndex = Math.floor(
          Math.random() * questions.length
        );
        setRandomOutput(questions[randomQuestionIndex]);
      }
    }
  }, [isOpen, option]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      appElement={document.getElementById("root")}
      style={modalStyles}
    >
      <button onClick={closeModal}>Close X</button>
      {option.toLowerCase() === "challenge" && (
        <p
          style={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "50px",
            margin: "0",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            maxWidth: "380px",
          }}
        >
          {randomOutput ? randomOutput.challenge : "Aucun défi trouvé"}
        </p>
      )}
      {option.toLowerCase() === "category" && (
        <p
          style={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "50px",
            margin: "0",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            maxWidth: "380px",
          }}
        >
          {randomOutput ? randomOutput.category : "Aucune catégorie trouvée"}
        </p>
      )}
      {option.toLowerCase() === "tools" && (
        <div>
          <p
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "30px",
              marginTop: "70px",
            }}
          >
            Tool name:{" "}
            {randomOutput ? randomOutput.toolname : "Aucun outil trouvé"}
          </p>
          <p
            style={{
              transform: "rotate(180deg)",
              textAlign: "center",
              fontSize: "20px",
              position: "absolute",
              maxWidth: "380px",
              bottom: "50px",
            }}
          >
            Définition:{" "}
            {randomOutput
              ? randomOutput.definition
              : "Aucune définition trouvée"}
          </p>
        </div>
      )}
      {option.toLowerCase() === "questions" && (
        <div>
          <p
            style={{
              fontWeight: "bold",
              textAlign: "center",
              fontSize: "30px",
              marginTop: "70px",
            }}
          >
            Question:{" "}
            {randomOutput ? randomOutput.question : "Aucune question trouvée"}
          </p>
          <p
            style={{
              transform: "rotate(180deg)",
              textAlign: "center",
              fontSize: "20px",
              position: "absolute",
              maxWidth: "380px",
              bottom: "50px",
            }}
          >
            Answer:{" "}
            {randomOutput ? randomOutput.answer : "Aucune réponse trouvée"}
          </p>
        </div>
      )}
    </Modal>
  );
};

export default ResultModal;
