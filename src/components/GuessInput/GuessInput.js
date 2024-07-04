import React from "react";
import { NUM_OF_LETTERS_PER_WORD } from "../../constants";

function GuessInput({ guess, setGuess, handleGuess }) {
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        handleGuess();
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        pattern={`[a-zA-Z]{${NUM_OF_LETTERS_PER_WORD}}`}
      />
    </form>
  );
}

export default GuessInput;
