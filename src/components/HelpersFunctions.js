export const attempts = {
    1: [" ", " ", " ", " ", " "],
    2: [" ", " ", " ", " ", " "],
    3: [" ", " ", " ", " ", " "],
    4: [" ", " ", " ", " ", " "],
    5: [" ", " ", " ", " ", " "],
    6: [" ", " ", " ", " ", " "]
  };
//   ["absent", "present", "correct", "present", "absent"],
export const answerDictionary = {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null
}

const Helpers = {
    rowComplete: (currentAttKey) => {
        let attemptDict = JSON.parse(localStorage.getItem("attemptDict")) || attempts
        // console.log("ATT", attemptDict, currentAttKey)
        let currentAtt = attemptDict[currentAttKey]
        let lastElement = currentAtt[currentAtt.length - 1]
        // console.log("LAST ELEMENT", lastElement)
        if(lastElement[0] === " "){
            return false
        }

        return true
    },

    boardComplete: () => {
        if (localStorage.getItem("currentAtt") >= 6){
            return true
        }

        return false
    },

    deleteCharacter: (currentAttKey, currentIndex, setCurrentIndex, setAttemptDict, answerLength) => {
        // console.log("CURRENT INDEX", currentIndex)
        let answerAttemptDict = (JSON.parse(localStorage.getItem("attemptDict")) || attempts)
        if (!Helpers.rowComplete(currentAttKey) && currentIndex >= 0){
            // console.log("IN HERE")
            let indexToDelete = answerAttemptDict[currentAttKey].indexOf(" ")
            if (indexToDelete > 0){
                indexToDelete = indexToDelete - 1
            }
            answerAttemptDict[currentAttKey][indexToDelete] = " "
            setCurrentIndex(indexToDelete)
            localStorage.setItem("currentIndex", indexToDelete)
            // console.log("ANSWER ATTEMPT", answerAttemptDict)
            localStorage.setItem("attemptDict", JSON.stringify(answerAttemptDict))
            setAttemptDict(answerAttemptDict)
        } else if (Helpers.rowComplete(currentAttKey) && answerAttemptDict[currentAttKey].length === answerLength) {
            // console.log("IN HERE 2")
            let indexToDelete = answerAttemptDict[currentAttKey].length - 1
            answerAttemptDict[currentAttKey][indexToDelete] = " "
            setCurrentIndex(indexToDelete)
            localStorage.setItem("currentIndex", indexToDelete)
            // console.log("ANSWER ATTEMPT", answerAttemptDict)
            localStorage.setItem("attemptDict", JSON.stringify(answerAttemptDict))
            setAttemptDict(answerAttemptDict)
        }
        // If at the begining, do nothing
        // If row outside of grid, do nothing
        // If in the middle, pop the last populated element
        // Update current index
    },

    answerCheck: (currentAttKey, nameOfTheDay, setAnswerDictionaryHere, setCurrentAttKey, setCurrentIndex) => {
        // Is the row complete?
        let arrToReturn = [" ", " ", " ", " ", " "]
        if (Helpers.rowComplete(currentAttKey)){
            // If Yes, get word of the day and compare.
            // While comparing index for index, populate answerDictionary will appropriate value
            let answer = nameOfTheDay.split('')
            let answerAttempt = (JSON.parse(localStorage.getItem("attemptDict")) || attempts)[currentAttKey]
            let answerColorArr = []
            // console.log("Before For Loop")
            for (let i=0; i<answer.length; i++){
                // console.log("ENTER FOR LOOP")
                if (answer[i] === answerAttempt[i]) {
                    answerColorArr[i] = "correct"
                } else if (answer.includes(answerAttempt[i])){
                    answerColorArr[i] = "present"
                } else {
                    answerColorArr[i] = "absent"
                }
                // console.log("COLOR ARR 1", answerColorArr)
            }
            // console.log("COLOR ARR 2", answerColorArr)
            let answerDictionaryFromLocal = JSON.parse(localStorage.getItem("answerDictionary")) || answerDictionary
            answerDictionaryFromLocal[currentAttKey] = answerColorArr
            let currentAtt = JSON.parse(localStorage.getItem("currentAtt")) || 1
            currentAtt += 1
            localStorage.setItem("answerDictionary", JSON.stringify(answerDictionaryFromLocal))
            localStorage.setItem("currentAtt", JSON.stringify(currentAtt))
            setAnswerDictionaryHere(answerDictionaryFromLocal)
            setCurrentAttKey(currentAtt)
            setCurrentIndex(0)
            localStorage.setItem("currentIndex", 0)
            localStorage.setItem("lastTimePlayed", Date.now())
            return answerColorArr
        }

        // Else, do nothing but return the untouched array for futher checks.
        return arrToReturn
    },

    correctCheck: (status) => {
        let toCheck = status.filter(entry => entry === 'correct')
        if (toCheck.length === 5){
            return true
        }
        return false
    },

    play: () => {
        let timeFactor = Helpers.nextDay()
        let completedBoard = Helpers.boardComplete()
        let gameStatus = localStorage.getItem("gameStatus") !== "WIN"
        let conditionsArr = [timeFactor, completedBoard, gameStatus]
        if (conditionsArr.filter(entry => entry === true).length === 3){
            return true
        }
        return false
    },

    nextDay: () => {
        let today = new Date()
        let tomorrowTime = today.setDate(today.getDate()+1)
        let midNight = new Date(tomorrowTime).setHours(0,0,0,0)
        return midNight >= Date.now()
    }

}

export default Helpers