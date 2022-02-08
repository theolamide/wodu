import { useState } from 'react';
import './App.css';

import Helpers, {attempts, answerDictionary} from './components/HelpersFunctions'
import Grid from './components/Grid';
import Keyboard from './components/Keyboard';

function App() {
  let nameOfTheDay = "OLAMI"
  const [answerDictionaryHere, setAnswerDictionaryHere] = useState(localStorage.getItem("answerDictionary") || answerDictionary)
  const [currentAttKey, setCurrentAttKey] = useState(JSON.parse(localStorage.getItem("currentAtt")) || 1) // This refers to the key to the current row being attempted
  const [currentIndex, setCurrentIndex] = useState(JSON.parse(localStorage.getItem("currentIndex")) || 0) // This referes to the current index of the row being attempted
  const [attemptDict, setAttemptDict] = useState(JSON.parse(localStorage.getItem("attemptDict")) || attempts ) // This is the whole attempt object. The whole grid, if you will.

  const buttonClick = (element) => {
    if (element === 'enter'){
      Helpers.answerCheck(currentAttKey, nameOfTheDay, setAnswerDictionaryHere, setCurrentAttKey, setCurrentIndex)
    } else if (element === '<'){
      return
    } else {
      let tempAttemptDict = {...attemptDict}
      let currentAttArr = tempAttemptDict[currentAttKey]
      // If already at the end, and element not "<", or "enter", do nothing.
      if (Helpers.rowComplete(currentAttKey)) return
      console.log("Here after last item check")

      currentAttArr[currentIndex] = element.toUpperCase()
      tempAttemptDict[currentAttKey] = currentAttArr
      setCurrentIndex(currentIndex+1)
      setAttemptDict(tempAttemptDict)
      localStorage.setItem("attemptDict", JSON.stringify(tempAttemptDict))
    }
  }
  

  return (
    <div className="App">
          {"wọ́dù".toUpperCase()}
          <div className="full-grid">
            {attemptDict[1].map((char, index)=> <p className={`single-grid ${answerDictionaryHere[1]===null ? '' : answerDictionaryHere[1][index]}`} key={index}>{char}</p>)}
          </div>
          <div className="full-grid">
            {attemptDict[2].map((char, index)=> <p className={`single-grid ${answerDictionaryHere[2]===null ? '' : answerDictionaryHere[2][index]}`} key={index}>{char}</p>)}
          </div>
          <div className="full-grid">
            {attemptDict[3].map((char, index)=> <p className={`single-grid ${answerDictionaryHere[3]===null ? '' : answerDictionaryHere[3][index]}`} key={index}>{char}</p>)}
          </div>
          <div className="full-grid">
            {attemptDict[4].map((char, index)=> <p className={`single-grid ${answerDictionaryHere[4]===null ? '' : answerDictionaryHere[4][index]}`} key={index}>{char}</p>)}
          </div>
          <div className="full-grid">
            {attemptDict[5].map((char, index)=> <p className={`single-grid ${answerDictionaryHere[5]===null ? '' : answerDictionaryHere[5][index]}`} key={index}>{char}</p>)}
          </div>
          <div className="full-grid">
            {attemptDict[6].map((char, index)=> <p className={`single-grid ${answerDictionaryHere[6]===null ? '' : answerDictionaryHere[6][index]}`} key={index}>{char}</p>)}
          </div>
        {/* <Grid nameOfTheDay={nameOfTheDay} /> */}
        <Keyboard 
          buttonClick={buttonClick}
        />
    </div>
  );
}

export default App;
