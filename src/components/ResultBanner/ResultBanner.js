import React from "react";

function ResultBanner({ victory, answer, numOfGuesses }) {
  return (
    <div className={`${victory ? "happy" : "sad"} banner`}>
      {victory ? (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {numOfGuesses} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default ResultBanner;
