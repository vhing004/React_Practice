import { useState } from "react";
import Squares from "./Squares";
import "./game.css";

function Board() {
  const [squares, setSquares] = useState([...Array(9)]);
  const [isNext, setIsNext] = useState(true);

  const handleClick = (i) => {
    const newSquare = squares.slice();
    if (caculateWinner(newSquare) || newSquare[i]) {
      return;
    }
    newSquare[i] = isNext ? "X" : "O";
    setSquares(newSquare);
    setIsNext(!isNext);
  };

  const caculateWinner = (val) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];

      if (val[a] && val[a] === val[b] && val[a] === val[c]) {
        return val[a];
      }
    }
    return null;
  };

  const render = (i) => {
    return <Squares value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const winner = caculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isNext ? "X" : "O"}`;

  return (
    <>
      <div className="game_status">{status}</div>
      <div className="game_boards">
        {render(0)}
        {render(1)}
        {render(2)}
        {render(3)}
        {render(4)}
        {render(5)}
        {render(6)}
        {render(7)}
        {render(8)}
      </div>
    </>
  );
}

export default Board;
