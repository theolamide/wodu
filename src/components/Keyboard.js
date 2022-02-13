import React from "react";

const Keyboard = ({buttonClick}) => {

    let characters = [['w','è', 'e', 'é', 'r', 't', 'y', 'u', 'i', 'ò', 'o', 'ó', 'p'], ['à', 'a', 'á', 's', 'ṣ', 'd', 'f', 'g', 'gb', 'h', 'j', 'k', 'l'], ['enter', 'ẹ̀', 'ẹ', 'ẹ́', 'b', 'm', 'n', 'ọ̀', 'ọ', 'ọ́', '<']]

    return(
        <div>
            Keyboard Component
            <div>
                {characters.map((arr, index) => 
                <div key={index}>
                    {arr.map((element, idx) => 
                        <button key={idx} onClick={()=> buttonClick(element)}>
                            {element === '<' ? <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 25 25" width="25">
    <path fill="black" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>
  </svg> : element.toUpperCase()}
                        </button>
                        )}
                </div>)}
            </div>
        </div>
    )
}

export default Keyboard;