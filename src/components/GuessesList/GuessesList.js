import React from "react";
import { range } from "../../utils";
import { NUM_OF_LETTERS_PER_WORD, NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessesList({ guessesList }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <p className="guess" key={num}>
          {guessesList[num] ? (
            <>
              {guessesList[num].letters.map(({ letter, id, status }) => (
                <span key={id} className={`cell ${status}`}>
                  {letter}
                </span>
              ))}
            </>
          ) : (
            <>
              {range(NUM_OF_LETTERS_PER_WORD).map((num) => (
                <span key={num} className="cell">
                  {undefined}
                </span>
              ))}
            </>
          )}
        </p>
      ))}
    </div>
  );
}

export default GuessesList;
