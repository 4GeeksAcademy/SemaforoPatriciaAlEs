import React from "react";
import { useState } from "react";

export const Semaforo = () => {

    const [color, setColor] = useState("luzRoja")

    const changeColor = (val) => {
        setColor(val)
        console.log(val);
    }
    
    return (
        <>
            <h2>Aqui iria mi semaforo</h2>
            <div className="contenedorSemaforo">
                <div className={`luzRoja ${color == "luzRoja" ? "luzRoja glow" : "luzRoja"}`} onClick={()=>changeColor("luzRoja")}></div>
                <div className={`luzAmbar ${color == "luzAmbar" ? "luzAmbar glow" : "luzAmbar"}`} onClick={()=>changeColor("luzAmbar")}></div>
                <div className={`luzVerde ${color == "luzVerde" ? "luzVerde glow" : "luzVerde"}`} onClick={()=>changeColor("luzVerde")}></div>
            </div>
        </>
    )
}