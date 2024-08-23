import "./game.css";

function Cell(item) {

  return (
    <div className="game_cell" onClick={item.onClick}>
      {item.value}
    </div>
  );
}

export default Cell;
