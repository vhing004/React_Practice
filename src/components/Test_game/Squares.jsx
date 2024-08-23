import './game.css'

function Squares(prop) {
    return ( 
        <div className="game_squares" onClick={prop.onClick}>{prop.value}</div>
     );
}

export default Squares;