
export const SubmissionList = async () => {
    const response = await fetch("http://localhost:8088/submissions")
    const submissions = await response.json()
   
 let submissionHtml = ""
 for (const submission of submissions) {
    submissionHtml +=`<section class="submission">
    <div>Owns Jeans? ${submission.ownsBlueJeans} </div>
    <div> Area Type foreign key? ${submission.socioLocationId}</div>
    </section>`
 }


    // Return the HTML string
    return submissionHtml
}