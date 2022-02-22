import React from "react";
import { FiDelete } from 'react-icons/fi'
import { buttonBackground } from "./HelpersFunctions";

const Keyboard = ({buttonClick}) => {

    let characters = [['w','è', 'e', 'é', 'r', 't', 'y', 'u', 'i', 'ò', 'o', 'ó', 'p'], ['à', 'a', 'á', 's', 'ṣ', 'd', 'f', 'g', 'gb', 'h', 'j', 'k', 'l'], ['enter', 'ẹ̀', 'ẹ', 'ẹ́', 'b', 'm', 'n', 'ọ̀', 'ọ', 'ọ́', '<']]

    let gameStatus = localStorage.getItem("gameStatus") === "WIN"

    let characterStatus = {
        'e': 'correct',
        'g': 'present',
        'n': 'absent'
    }

    let elementIn = (element) => {
        if (element in characterStatus){
            return true
        }

        return false
    }

    return(
            <div className="root keyboard">
                {characters.map((arr, index) => 
                <div key={index}  className="keyboard-row">
                    {arr.map((element, idx) => 
                        <button 
                            key={idx} 
                            className={`element ${elementIn(element) ? characterStatus[element] : ''} ${element === 'enter' ? 'enter' : ''}`} 
                            onClick={()=> buttonClick(element)} 
                            disabled={gameStatus ? true : false}
                            >
                            {element === '<' ?  <FiDelete />: element.toUpperCase()}
                        </button>
                        )}
                </div>)}
            </div>
    )
}

export default Keyboard;