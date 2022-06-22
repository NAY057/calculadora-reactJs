/*eslint no-eval: 0*/
import React, { useState } from "react";
import words from 'lodash.words'
import Result from "./components/Result";
import Funtions from "./components/Funtions";
import Numbers from "./components/Numbers";
import MathOperations from "./components/MathOperations";
import "./App.css";

const App = () => {
    // debugger
    // asi se detiene pa app para debuggear errores
    // const clickHanlerFuntion = text=>{
    //     console.log('button: ',text)
    // }
    const [texto, setTexto] = useState("");
    const items = words(texto, /[^-^+^*^/^]+/g)
    const value = items.length > 0 ? items[items.length-1] : '0'
    return (
        <main className="react-calculator">
            {/* <Result value={texto} prop2="parametro2" /> */}
            <Result value={value} prop2="parametro2" />
            <Numbers
                onClickNumber={(nubr) => {
                    console.log("number: ", nubr);
                    setTexto(`${texto}${nubr}`);
                }}
            />
            <Funtions
                onClickClear={(clear) => {
                    console.log("content clear: ", clear);
                    setTexto("");
                }}
                onClickDelete={() => {
                    if (texto.length > 0){
                        const new_texto = texto.substring(0, texto.length - 1)
                        console.log("Deleted")
                        setTexto(new_texto)
                    }
                }}
            />
            <MathOperations
                onClickOperation={(operations) => {
                    console.log("Operation: ", operations);
                    setTexto(`${texto}${operations}`);
                }}
                onClickEqual={(equal) => {
                    console.log("Equal: ", equal);
                    setTexto(eval(texto).toString());
                }}
            />
        </main>
    );
};

export default App;
