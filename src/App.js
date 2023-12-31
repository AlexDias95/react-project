import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from 'react';


function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }
  return (
    <div>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(0)} value={squares[0]}/>
        <Square onSquareClick={() => handleClick(1)} value={squares[1]}/>
        <Square onSquareClick={() => handleClick(2)} value={squares[2]}/>
      </div>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(3)} value={squares[3]}/>
        <Square onSquareClick={() => handleClick(4)} value={squares[4]}/>
        <Square onSquareClick={() => handleClick(5)} value={squares[5]}/>
      </div>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(6)} value={squares[6]}/>
        <Square onSquareClick={() => handleClick(7)} value={squares[7]}/>
        <Square onSquareClick={() => handleClick(8)} value={squares[8]}/>
      </div>
    </div>
  );
}

export default function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}
