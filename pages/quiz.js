import Question from "@/components/question";
import { useState, useEffect } from "react";
import Timer from "@/components/timer";
import { useRouter } from "next/router";
import formattedData from "@/utils/format";


const Quiz = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [id, setId] = useState(0);
  const [quizData, setQuizData] = useState(formattedData(props.quizData));



  const handleId = (e) => {
    setId(e.target.id - 1);
    quizData[e.target.id - 1].visited = true;
    setQuizData(quizData);
  };


  const handlePrev = () => {
    const temp_id = id == 0 ? id : id - 1;
    setId(temp_id);
    quizData[id].visited = true;
    setQuizData(quizData);
  };

  const handleNext = () => {
    const temp_id = id == quizData.length - 1 ? id : id + 1;
    quizData[id].visited = true;
    setQuizData(quizData);
    setId(temp_id);
  };

  const handleQuestion = (option) => {
    quizData[id].selectedOption = option;
    quizData[id].visited = true;
    quizData[id].attempted = true;
    setQuizData(quizData);
  };

  const handleSubmit = () => {
    localStorage.setItem("isSubmitted", true);
    localStorage.setItem("userResponse", JSON.stringify(quizData));
    router.push("/result");
  };

  useEffect(() => {
    // Retrieving data from localStorage
    const storedName = localStorage.getItem("userName");
    const storedEmail = localStorage.getItem("userEmail");

    if(!storedName || !storedEmail){
      router.push('/');
    }

    if (storedName) {
      setName(storedName);
    }
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  
  return (
    <>
      <div className="container-1">
        <p className="constainer-text-1">Quiz funnel</p>
        <div className="constainer-text-1 time-box">
          <Timer onTimerComplete={handleSubmit} />
        </div>
        <div className="user-info">
          <p>{name}</p>
          <p className="user-email">{email}</p>
        </div>
      </div>

      <div className="quiz-container">
        <div className="q-left">
          <Question
            data={quizData[id]}
            id={id}
            onClick={handleQuestion}
          ></Question>
          <div className="q-move">
            <p style={{ backgroundColor: "#FA00FF" }} onClick={handlePrev}>
              Prev
            </p>
            <p style={{ backgroundColor: "#1854EF" }} onClick={handleNext}>
              Next
            </p>
          </div>
        </div>
        <div className="q-right">
          <p style={{ textAlign: "center", width:"200px", margin:"0 auto"}}>Question Dashboard</p>
          <div className="question-nav">
            {quizData.map((question, idx) => {
              return (
                <p
                  key={idx}
                  id={idx + 1}
                  className={
                    idx === id
                      ? "q-nav b-class"
                      : question.attempted
                      ? "g-class q-nav"
                      : !question.visited
                      ? "w-class q-nav"
                      : "r-class q-nav"
                  }
                  onClick={handleId}
                >
                  {idx + 1}
                </p>
              );
            })}
          </div>
          <p className="q-submit" onClick={handleSubmit}>
            Submit
          </p>
          <div className="instruction">
            <div style={{ display: "flex" }}>
              <p className="instruction-r"></p>
              <p style={{ marginLeft: "15px", width: "270px" }}>
                This means you visited the question but not attempted
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <p className="instruction-g"></p>
              <p style={{ marginLeft: "15px", width: "270px" }}>
                This means you attempted the question
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <p className="instruction-b"></p>
              <p style={{ marginLeft: "15px", width: "270px" }}>
                This point to current question
              </p>
            </div>
            <div style={{ display: "flex" }}>
              <p className="instruction-w"></p>
              <p style={{ marginLeft: "15px", width: "270px" }}>
                This means you didn't visited the question
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const response = await fetch("https://opentdb.com/api.php?amount=15");
  const data = await response.json();
  return {
    props: {
      quizData: JSON.parse(JSON.stringify(data)),
    },
  };
}

export default Quiz;
