function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
 export default function formattedData(quizData) {
    const formatData = quizData.results.map((question) => {
      const options = question.incorrect_answers.concat(question.correct_answer);
  
      shuffleArray(options);
  
      return {
        question: question.question,
        options: options,
        correctOption: question.correct_answer,
        selectedOption: "",
        visited: false,
        attempted: false,
      };
    });
    return formatData;
  }