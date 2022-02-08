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
        let currentAtt = attemptDict[currentAttKey]
        console.log("HERE 1 HERE", currentAtt)
        let lastElement = currentAtt[currentAtt.length - 1]
        console.log("HERE 2 HERE", currentAtt)
        if(lastElement[0] === " "){
            console.log("In here")
            return false
        }

        return true
    },

    answerCheck: (currentAtt, nameOfTheDay) => {
        // Is the row complete?
            // If Yes, get word of the day and compare.
            // While comparing index for index, populate answerDictionary will appropriate value

            // If no, do nothing
    }
}

export default Helpers