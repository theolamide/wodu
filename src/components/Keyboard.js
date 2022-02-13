import React from "react";
import { FiDelete } from 'react-icons/fi'

const Keyboard = ({buttonClick}) => {

    let characters = [['w','è', 'e', 'é', 'r', 't', 'y', 'u', 'i', 'ò', 'o', 'ó', 'p'], ['à', 'a', 'á', 's', 'ṣ', 'd', 'f', 'g', 'gb', 'h', 'j', 'k', 'l'], ['enter', 'ẹ̀', 'ẹ', 'ẹ́', 'b', 'm', 'n', 'ọ̀', 'ọ', 'ọ́', '<']]

    return(
            <div className="root keyboard">
                {characters.map((arr, index) => 
                <div key={index}  className="keyword-row">
                    {arr.map((element, idx) => 
                        <button key={idx} className={`element ${element === 'enter' ? 'enter' : ''}`} onClick={()=> buttonClick(element)} >
                            {element === '<' ?  <FiDelete />: element.toUpperCase()}
                        </button>
                        )}
                </div>)}
            </div>
    )
}

export default Keyboard;