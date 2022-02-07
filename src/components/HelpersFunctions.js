export const attempts = {
    1: [" ", " ", " ", " ", " "],
    2: [" ", " ", " ", " ", " "],
    3: [" ", " ", " ", " ", " "],
    4: [" ", " ", " ", " ", " "],
    5: [" ", " ", " ", " ", " "],
    6: [" ", " ", " ", " ", " "]
  };

const Helpers = {
    rowComplete: (currentAttIndex) => {
        let attemptDict = JSON.parse(localStorage.getItem("attemptDict")) || attempts
        let currentAtt = attemptDict[currentAttIndex]
        console.log(currentAtt)
        let lastElement = currentAtt.pop()
        if(lastElement[0] === " "){
            console.log("In here")
            return false
        }

        return true
    }
}

export default Helpers