import React, {useState} from "react";
import SingleGrid from "./SingleGrid";

const Grid = ({nameOfTheDay}) => {
    // let rowGrid = Array(nameOfTheDay.length).fill(<SingleGrid />)
    // let fullGrid = Array(6).fill(rowGrid)
    // fullGrid[0][1]= nameOfTheDay[0]
    const [gridIndex, setGridIndex] = useState(0)
    let fullGrid = new Array(6)
    for (let i=0; i<fullGrid.length; i++){
        fullGrid[i] = new Array(nameOfTheDay.length).fill(<SingleGrid index={i} nameOfTheDay={nameOfTheDay}/>)

    }
    return(
        <>
        {fullGrid.map((singleRow, index)=> 
            <span key={index} className="full-grid">
                {singleRow}
            </span>
            )}
        </>
    )
}

export default Grid;