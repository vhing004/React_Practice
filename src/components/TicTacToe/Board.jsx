import { useState } from "react";
import Cell from "./Cell";
import "./game.css";

function Board() {
  const [cells, setCells] = useState([...Array(9)]);
  const [isNext, setIsNext] = useState(true);
  console.log(cells);

  // function CLICK
  const handleClick = (i) => {
    const newCells = cells.slice();

    // Nếu có thì sẽ ko lmj cả
    if (calculateWinner(newCells) || newCells[i]) {
      return;
    }

    newCells[i] = isNext ? "X" : "O";
    setCells(newCells);
    setIsNext(!isNext);
  };

  // function render Cell
  const renderCells = (i) => {
    return <Cell value={cells[i]} onClick={() => handleClick(i)} />;
  };

  // function calculate winner
  const calculateWinner = (cell) => {
    // console.log(cell);
    
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (cell[a] && cell[a] === cell[b] && cell[a] === cell[c]) {
        return cell[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(cells);
  console.log(winner);

  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isNext ? "X" : "O"}`;

  return (
    <>
      <div className="status">{status}</div>
      <div className="game_board">
        {renderCells(0)}
        {renderCells(1)}
        {renderCells(2)}
        {renderCells(3)}
        {renderCells(4)}
        {renderCells(5)}
        {renderCells(6)}
        {renderCells(7)}
        {renderCells(8)}
      </div>
    </>
  );
}
export default Board;
