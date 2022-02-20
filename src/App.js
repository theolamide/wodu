import { useState } from 'react';
import './App.css';

import Helpers, {attempts, answerDictionary} from './components/HelpersFunctions'
import Keyboard from './components/Keyboard';

function App() {
  let nameOfTheDay = "OLAMI"
  const [answerDictionaryState, setAnswerDictionaryState] = useState((typeof(localStorage.getItem("answerDictionary")) === "object" ? localStorage.getItem("answerDictionary") : JSON.parse(localStorage.getItem("answerDictionary"))) || answerDictionary)
  // console.log("ANSWER DIC BACKGROUNDS", answerDictionaryState)
  const [currentAttKey, setCurrentAttKey] = useState(JSON.parse(localStorage.getItem("currentAtt")) || 1) // This refers to the key to the current row being attempted
  const [currentIndex, setCurrentIndex] = useState(JSON.parse(localStorage.getItem("currentIndex")) || 0) // This referes to the current index of the row being attempted
  const [attemptDict, setAttemptDict] = useState(JSON.parse(localStorage.getItem("attemptDict")) || attempts ) // This is the whole attempt object. The whole grid, if you will.

  const buttonClick = (element) => {
    if (element === 'enter'){
      let answerArr = Helpers.answerCheck(currentAttKey, nameOfTheDay, setAnswerDictionaryState, setCurrentAttKey, setCurrentIndex)
      let correct = Helpers.correctCheck(answerArr) //returns a boolean. True for correct answer and solved, False for incorrect and not solved.
      if (correct){
        // Set board status, last time played and time completed.
        localStorage.setItem("gameStatus", "WIN")
        localStorage.setItem("lastCompleted", Date.now())
        localStorage.setItem("lastTimePlayed", Date.now())
      } else {
        // Set board status and last time played
        localStorage.setItem("gameStatus", "IN_PROGRESS")
        localStorage.setItem("lastTimePlayed", Date.now())
      }
    } else if (element === '<'){
      Helpers.deleteCharacter(currentAttKey, currentIndex, setCurrentIndex, setAttemptDict, nameOfTheDay.length)
      setAttemptDict(JSON.parse(localStorage.getItem("attemptDict")))
    } else {
      if (Helpers.rowComplete(currentAttKey)&&!Helpers.play()) return
      let tempAttemptDict = {...attemptDict}
      let currentAttArr = tempAttemptDict[currentAttKey]
      // If already at the end, and element not "<", or "enter", do nothing.
      // console.log("Here after last item check")

      currentAttArr[currentIndex] = element.toUpperCase()
      tempAttemptDict[currentAttKey] = currentAttArr
      setCurrentIndex(currentIndex+1)
      setAttemptDict(tempAttemptDict)
      localStorage.setItem("currentIndex", currentIndex)
      localStorage.setItem("attemptDict", JSON.stringify(tempAttemptDict))
    }
  }

const event = new Date(Date.now());

let lastTimePlayed = localStorage.getItem("lastTimePlayed")
if (!lastTimePlayed){
  localStorage.setItem("lastTimePlayed", Date.now())
}

// console.log("FROM HELPERS", Helpers.nextDay())
// let nextDay = event.getDate() + 1
// let tomorrow = new Date()
// let tomorrowTime = tomorrow.setDate(tomorrow.getDate()+1)
// console.log(event.getDate(), typeof(event.getDate()), nextDay);
// console.log("Tomorrow", tomorrow, tomorrowTime, new Date(tomorrowTime).getHours())
// let midNight = new Date(tomorrowTime).setHours(0,0,0,0)
// console.log("Tomorrow MIDNIGHT |", new Date(midNight), "|", midNight, "|", new Date(midNight).getHours())
// console.log(event.getUTCDate())
// console.log(lastTimePlayed)
// console.log(new Date(parseInt(lastTimePlayed)).getDate())
  

  return (
    <div className="root App">
          {"wọ́dù".toUpperCase()}
          <div className="full-grid">
            <div className="grid-row">
              {attemptDict[1].map((char, index)=> <p className={`single-grid ${answerDictionaryState[1]===null ? '' : answerDictionaryState[1][index]}`} key={index}>{char}</p>)}
            </div>
            <div className="grid-row">
              {attemptDict[2].map((char, index)=> <p className={`single-grid ${answerDictionaryState[2]===null ? '' : answerDictionaryState[2][index]}`} key={index}>{char}</p>)}
            </div>
            <div className="grid-row">
              {attemptDict[3].map((char, index)=> <p className={`single-grid ${answerDictionaryState[3]===null ? '' : answerDictionaryState[3][index]}`} key={index}>{char}</p>)}
            </div>
            <div className="grid-row">
              {attemptDict[4].map((char, index)=> <p className={`single-grid ${answerDictionaryState[4]===null ? '' : answerDictionaryState[4][index]}`} key={index}>{char}</p>)}
            </div>
            <div className="grid-row">
              {attemptDict[5].map((char, index)=> <p className={`single-grid ${answerDictionaryState[5]===null ? '' : answerDictionaryState[5][index]}`} key={index}>{char}</p>)}
            </div>
            <div className="grid-row">
              {attemptDict[6].map((char, index)=> <p className={`single-grid ${answerDictionaryState[6]===null ? '' : answerDictionaryState[6][index]}`} key={index}>{char}</p>)}
            </div>
          </div>
        {/* <Grid nameOfTheDay={nameOfTheDay} /> */}
        <Keyboard 
          buttonClick={buttonClick}
        />
    </div>
  );
}

export default App;
