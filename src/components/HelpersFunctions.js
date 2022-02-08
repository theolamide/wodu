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
        console.log("ATT", attemptDict, currentAttKey)
        let currentAtt = attemptDict[currentAttKey]
        let lastElement = currentAtt[currentAtt.length - 1]
        if(lastElement[0] === " "){
            return false
        }

        return true
    },

    answerCheck: (currentAttKey, nameOfTheDay, setAnswerDictionaryHere, setCurrentAttKey, setCurrentIndex) => {
        // Is the row complete?
        if (Helpers.rowComplete(currentAttKey)){
            // If Yes, get word of the day and compare.
            // While comparing index for index, populate answerDictionary will appropriate value
            let answer = nameOfTheDay.split('')
            let answerAttempt = (JSON.parse(localStorage.getItem("attemptDict")) || attempts)[currentAttKey]
            let answerColorArr = []
            console.log("Before For Loop")
            for (let i=0; i<answer.length; i++){
                // console.log("ENTER FOR LOOP")
                if (answer[i] === answerAttempt[i]) {
                    answerColorArr[i] = "correct"
                } else if (answer.includes(answerAttempt[i])){
                    answerColorArr[i] = "present"
                } else {
                    answerColorArr[i] = "absent"
                }
                console.log("COLOR ARR 1", answerColorArr)
            }
            console.log("COLOR ARR 2", answerColorArr)
            answerDictionary[currentAttKey] = answerColorArr
            let currentAtt = JSON.parse(localStorage.getItem("currentAtt")) || 1
            currentAtt += 1
            localStorage.setItem("answerDictionary", JSON.stringify(answerDictionary))
            localStorage.setItem("currentAtt", JSON.stringify(currentAtt))
            setAnswerDictionaryHere(answerDictionary)
            setCurrentAttKey(currentAtt)
            setCurrentIndex(0)

        }

            // If no, do nothing
    },

}

export default Helpers