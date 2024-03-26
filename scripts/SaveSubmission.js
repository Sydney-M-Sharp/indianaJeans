import { saveSurveySubmission } from "./TransientState.js"


const handleSurveySubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === "saveSubmission") {
        
        saveSurveySubmission()
    }
}



export const SaveSubmission = () => {

    document.addEventListener("click", handleSurveySubmissionClick)

    let html = "<div><button id='saveSubmission'> Save Submission</button></div>"
    return html
}

 