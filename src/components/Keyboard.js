import React from "react";

const Keyboard = ({buttonClick}) => {

    let characters = [['w','è', 'e', 'é', 'r', 't', 'y', 'u', 'i', 'ò', 'o', 'ó', 'p'], ['à', 'a', 'á', 's', 'ṣ', 'd', 'f', 'g', 'gb', 'h', 'j', 'k', 'l'], ['ẹ̀', 'ẹ', 'ẹ́', 'b', 'm', 'n', 'ọ̀', 'ọ', 'ọ́']]

    return(
        <div>
            Keyboard Component
            <div>
                {characters.map((arr, index) => 
                <div key={index}>
                    {arr.map((element, idx) => 
                        <button key={idx} onClick={()=> buttonClick(element)}>
                            {element.toUpperCase()}
                        </button>
                        )}
                </div>)}
            </div>
        </div>
    )
}

export default Keyboard;