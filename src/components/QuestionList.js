import React, { useState, useEffect } from 'react';
import QuestionItem from './QuestionItem';

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.error('Error fetching questions:', error));
  }, []);

  function handleQuestionDeleted(id) {
    setQuestions(prevQuestions => prevQuestions.filter(question => question.id !== id));
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(question => (
          <QuestionItem
            key={question.id}
            question={question}
            onQuestionDeleted={handleQuestionDeleted}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;