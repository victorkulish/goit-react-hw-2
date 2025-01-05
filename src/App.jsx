import { useState, useEffect } from "react";
import FeedbackButtons from "./components/FeedbackButtons";
import FeedbackStats from "./components/FeedbackStats";
import "./App.css";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Загружаем данные из Local Storage
  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("feedback"));
    if (savedFeedback) {
      setFeedback(savedFeedback);
    }
  }, []);

  // Сохраняем данные в Local Storage при изменении
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const handleFeedback = (type) => {
    setFeedback((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  return (
    <div className="App">
      <h1>Sip Happens Café - Отзывы</h1>
      <FeedbackButtons onFeedback={handleFeedback} />
      <FeedbackStats feedback={feedback} />
    </div>
  );
}

export default App;
