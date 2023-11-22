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
      <h2>Résultat</h2>
      {option.toLowerCase() === "challenge" && (
        <p>{randomOutput ? randomOutput.challenge : "Aucun défi trouvé"}</p>
      )}
      {option.toLowerCase() === "category" && (
        <p>
          {randomOutput ? randomOutput.category : "Aucune catégorie trouvée"}
        </p>
      )}
      {option.toLowerCase() === "tools" && (
        <div>
          <p>
            Tool name:{" "}
            {randomOutput ? randomOutput.toolname : "Aucun outil trouvé"}
          </p>
          <p>
            Définition:{" "}
            {randomOutput
              ? randomOutput.definition
              : "Aucune définition trouvée"}
          </p>
        </div>
      )}
      {option.toLowerCase() === "questions" && (
        <div>
          <p>
            Question:{" "}
            {randomOutput ? randomOutput.question : "Aucune question trouvée"}
          </p>
          <p>
            Answer:{" "}
            {randomOutput ? randomOutput.answer : "Aucune réponse trouvée"}
          </p>
        </div>
      )}
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default ResultModal;
