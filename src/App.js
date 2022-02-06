import { useState } from 'react';
import './App.css';

import Helpers, {attempts} from './components/HelpersFunctions'
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';

function App() {
  const [currentAtt, setCurrentAtt] = useState(JSON.parse(localStorage.getItem("currentAtt")) || 1)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [attemptDict, setAttemptDict] = useState(JSON.parse(localStorage.getItem("attemptDict")) || attempts )

  const buttonClick = (element) => {
    let tempAttemptDict = {...attemptDict}
    let currentAttArr = tempAttemptDict[currentAtt]
    // If already at the end, and element not "<", do nothing.
    console.log("HERE")
    if (Helpers.rowComplete(currentAtt)) return
    console.log("HERE 2")

    currentAttArr[currentIndex] = element.toUpperCase()
    tempAttemptDict[currentAtt] = currentAttArr
    setCurrentIndex(currentIndex+1)
    setAttemptDict(tempAttemptDict)
    localStorage.setItem("attemptDict", JSON.stringify(tempAttemptDict))
  }
  let nameOfTheDay = "Olami"

  return (
    <div className="App">
          {"wọ́dù".toUpperCase()}
          <div className="full-grid">
            {attemptDict[currentAtt].map((char, index)=> <p className="single-grid" key={index}>{char}</p>)}
          </div>
          <div className="full-grid">
            {attemptDict[2].map((char, index)=> <p className="single-grid" key={index}>{char}</p>)}
          </div>
          <div className="full-grid">
            {attemptDict[3].map((char, index)=> <p className="single-grid" key={index}>{char}</p>)}
          </div>
          <div className="full-grid">
            {attemptDict[4].map((char, index)=> <p className="single-grid" key={index}>{char}</p>)}
          </div>
          <div className="full-grid">
            {attemptDict[5].map((char, index)=> <p className="single-grid" key={index}>{char}</p>)}
          </div>
          <div className="full-grid">
            {attemptDict[6].map((char, index)=> <p className="single-grid" key={index}>{char}</p>)}
          </div>
        {/* <Grid nameOfTheDay={nameOfTheDay} /> */}
        <Keyboard 
          buttonClick={buttonClick}
        />
    </div>
  );
}

export default App;
