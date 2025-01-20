import React, { useState } from "react";
import {
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Paper,
  Box,
  Alert,
} from "@mui/material";
import { QuizComponentProps } from "./Types";
import { quizData } from "./Types";
import "../styles/QuizComponent.scss";

// src/components/QuizComponent.tsx
const QuizComponent: React.FC<QuizComponentProps> = ({
  type,
  onComplete,
  onBackToGuide,
}) => {
  const questions = quizData[type] || [];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>(
    new Array(questions.length).fill("")
  );
  const [showResults, setShowResults] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const checkAnswer = () => {
    const currentAnswer = answers[currentQuestion];
    const isAnswerCorrect =
      currentAnswer === questions[currentQuestion].correctAnswer;

    if (isAnswerCorrect) {
      setCorrectAnswersCount((prev) => prev + 1);
    }

    // Move to next question after delay, regardless of correct/incorrect
    setTimeout(() => {
      if (currentQuestion === questions.length - 1) {
        // Last question, show results
        setShowResults(true);
      } else {
        // Move to next question
        setCurrentQuestion(currentQuestion + 1);
      }
    }, );
  };

  if (!questions || questions.length === 0) {
    return (
      <Paper className="quiz-container">
        <Typography variant="h5" color="error">
          No questions available for this section.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={onBackToGuide}
          style={{ marginTop: '20px' }}
        >
          Back to Guide
        </Button>
      </Paper>
    );
  }

  if (showResults) {
    const finalScore = Math.min(
      (correctAnswersCount / questions.length) * 100,
      100
    );

    return (
      <Paper className="quiz-container">
        <div className="quiz-results">
          <Typography variant="h4">Quiz Results</Typography>
          <Typography variant="h5">Your Score: {finalScore}%</Typography>
          <Typography variant="body1" style={{ marginTop: "1rem" }}>
            Correct Answers: {correctAnswersCount} out of {questions.length}
          </Typography>

          {finalScore >= 70 ? (
            <>
              <Alert severity="success" style={{ margin: "1rem 0" }}>
                Congratulations! You passed the quiz!
              </Alert>
              <Box mt={3} display="flex" gap={2} justifyContent="center">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => onComplete(finalScore)}
                >
                  Continue to Next Guide
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Alert severity="error" style={{ margin: "1rem 0" }}>
                You need to get 70% or higher to pass. Please try again.
              </Alert>
              <Box mt={3} display="flex" gap={2} justifyContent="center">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setCurrentQuestion(0);
                    setAnswers(new Array(questions.length).fill(""));
                    setShowResults(false);
                    setCorrectAnswersCount(0);
                  }}
                >
                  Try Again
                </Button>
                <Button variant="outlined" onClick={onBackToGuide}>
                  Back to Guide
                </Button>
              </Box>
            </>
          )}
        </div>
      </Paper>
    );
  }

  return (
    <Paper className="quiz-container">
      <Typography variant="h5" gutterBottom>
        Question {currentQuestion + 1} of {questions.length}
      </Typography>

      <Typography variant="body1" gutterBottom>
        {questions[currentQuestion].question}
      </Typography>

      <FormControl component="fieldset" style={{ width: '100%', margin: '2rem 0' }}>
        <RadioGroup
          value={answers[currentQuestion]}
          onChange={(e) => handleAnswerSelect(e.target.value)}
        >
          {questions[currentQuestion].options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={option}
              control={<Radio />}
              label={option}
              style={{ marginBottom: '1rem' }}
            />
          ))}
        </RadioGroup>
      </FormControl>

      <Box display="flex" justifyContent="flex-end" mt={3}>
        <Button
          variant="contained"
          color="primary"
          disabled={!answers[currentQuestion]}
          onClick={checkAnswer}
        >
          {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
        </Button>
      </Box>
    </Paper>
  );
};

export default QuizComponent;