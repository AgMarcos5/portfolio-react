import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Overworld } from "./game/Overworld";
import Navbar from "./Navbar";

function Game () {

    const [overworld,setOverWorld] = useState(null);
    const canvasRef = useRef();
    const navigate = useNavigate();


    useEffect(() => {
    // Inicia juego
    const ow = new Overworld({
        element: canvasRef.current,
        navigate
    })
    ow.init();
    setOverWorld(ow);
    }, [])



   const position = (id) => {
    overworld.setPosition(id);
   }

    return (
        <div className="game-container" >
            <Navbar position={position}/>
            <canvas className="game-canvas" ref={canvasRef} width="400" height="200"></canvas>
        </div>
    )
}

export default Game;