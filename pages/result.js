import ResultQuestion from "@/components/resultQuestion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Result = () => {
  const [quizData, setQuizData] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router  = useRouter()

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const storedEmail = localStorage.getItem("userEmail");
    const quizdata = localStorage.getItem("userResponse");
    const result = JSON.parse(quizdata);
    setQuizData(result);
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
  if (quizData == null) {
    return <>Something went wrong</>;
  }
  const correctAnswersCount = quizData.filter((question) => question.correctOption === question.selectedOption).length;
  const handleLogout = ()=>{
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userResponse")
    router.push("/")
  }

  return (
    <>
      <div className="container-1">
        <p className="constainer-text-1">Quiz funnel</p>
        <div className="user-info">
          <p>{name}</p>
          <p className="user-email">{email}</p>
        </div>
      </div>
      <div className="result-container">
        
        <div className="r-result">
          {/* <p style={{textAlign:"center"}}>Hello {name}, Thank you for participating in the quiz. Please check your score below.</p> */}
          <div className="r-result-container">
            <p>Result Dashboard</p>
            <h1>{correctAnswersCount} / 15</h1>
            <p>Percentage Score : {(correctAnswersCount * 100 / 15).toFixed(2)}%</p>
            <p>Correct Answer : {correctAnswersCount}</p>
            <p>Incorrect Answer : {15-correctAnswersCount}</p>
          </div>
          <p className="logout" onClick={handleLogout}>Log Out</p>
        </div>
        
        <div className="l-result">
          <ResultQuestion data = {quizData}/>
        </div>
      </div>
    </>
  );
};

export default Result;
