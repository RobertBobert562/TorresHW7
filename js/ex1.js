/* HW 7
   Example 1 JavaScript code
*/

console.log("Torres Output from HW 7 Example 1");

// List of questions (statement + answer)
const questions = [
    {
      statement: "2+2?",
      answer: "2+2 = 4"
    },
    {
      statement: "In which year did Christopher Columbus discover America?",
      answer: "1492"
    },
    {
      statement:
        "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
      answer: "The E letter"
    }
  ];
  
  // Get the content div element from the HTML
  const contentDiv = document.getElementById("content");
  
  // Loop through each question in the array
  for (let i = 0; i < questions.length; i++) {
    // Create a new <p> element to display the question
    const questionPara = document.createElement("p");
    questionPara.textContent = questions[i].statement;
  
    // Create a new <button> element to show the answer
    const showButton = document.createElement("button");
    showButton.textContent = "Show the answer";
  
    // Add an event listener to the button to show the answer and remove the button
    showButton.addEventListener("click", function() {
      const answerPara = document.createElement("p");
      answerPara.textContent = questions[i].answer;
      contentDiv.replaceChild(answerPara, showButton);
    });
  
    // Add the question and button to the page
    contentDiv.appendChild(questionPara);
    contentDiv.appendChild(showButton);
  }
  