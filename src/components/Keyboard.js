import React from "react";
import { FiDelete } from 'react-icons/fi'
// FiDelete

const Keyboard = ({buttonClick}) => {

    let characters = [['w','è', 'e', 'é', 'r', 't', 'y', 'u', 'i', 'ò', 'o', 'ó', 'p'], ['à', 'a', 'á', 's', 'ṣ', 'd', 'f', 'g', 'gb', 'h', 'j', 'k', 'l'], ['enter', 'ẹ̀', 'ẹ', 'ẹ́', 'b', 'm', 'n', 'ọ̀', 'ọ', 'ọ́', '<']]

    return(
            <div 
            style={{
                // border: '1px solid black', 
                height: '200px', 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',

            }}>
                {characters.map((arr, index) => 
                <div key={index} 
                style={{
                        // border: '1px solid red', 
                        height: '30%'}}>
                    {arr.map((element, idx) => 
                        <button key={idx} onClick={()=> buttonClick(element)} 
                        style={{
                            // border: '1px solid green',
                            height: '58px',
                            width: '50px',
                            flex: '1',
                            margin: '0 6px 0 0'
                        }}>
                            {element === '<' ?  <FiDelete />: element.toUpperCase()}
                        </button>
                        )}
                </div>)}
            </div>
    )
}

export default Keyboard;