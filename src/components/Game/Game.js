import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessesList from "../GuessesList";
import ResultBanner from '../ResultBanner';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guessesList, setGuessesList] = React.useState([]);
  const [victory, setVictory] = React.useState(false);

  const handleGuess = () => {

    const validatedGuess = checkGuess(guess, answer);

    const nextGuess = {
      letters: validatedGuess.map(({letter, status}) => ({ letter, status, id: crypto.randomUUID() })),
    };

    const nextGuessesList = [
      ...guessesList,
      nextGuess,
    ];

    if(guess === answer) {
      setVictory(true);
    }

    setGuessesList(nextGuessesList);
    setGuess("");
  };

  const gameEnded = victory || guessesList.length >= NUM_OF_GUESSES_ALLOWED;

  return (
    <>
      <GuessesList guessesList={guessesList} />
      <GuessInput guess={guess} setGuess={setGuess} handleGuess={handleGuess} />
      {gameEnded && <ResultBanner victory={victory} answer={answer} numOfGuesses={guessesList.length} />}
    </>
  );
}

export default Game;
