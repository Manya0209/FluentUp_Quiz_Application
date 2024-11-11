import React, { useState, useEffect, useRef } from 'react';
//import { apiClient } from '../../../shared/services/api-client.js';
import Box from '@mui/material/Box';
import {  Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import { Container } from '@mui/material';
import '../styles/syn-ant.css';

const primaryColor = '#DEB69C'; // main color
const secondaryColor = '#CD9692'; // secondary color
const accentColor = '#9C9797'; // accent color
const backgroundColor = '#FEF7E5'; // background color

export const ErrorId = () => {

  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});
  const [showExplanation, setShowExplanation]= useState(false);
  const [elapsedTime, setElapsedTime]= useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [totalTime, setTotalTime] = useState(0);

  const timerRef= useRef(null);

  const startTimer=()=>{
    clearInterval(timerRef.current); // Clear any existing intervals
    setElapsedTime(0);
    timerRef.current= setInterval(()=>{
      setElapsedTime((prevTime)=> prevTime+1);
    }, 1000)
  }

  useEffect(() => {
    fetchQuizQuestions();
  }, []);

  useEffect(() => {
    if (quizQuestions.length > 0) {
      startTimer(); // Start the timer when the first question is loaded
    }
    return () => clearInterval(timerRef.current); // Clean up the interval on component unmount
  }, [quizQuestions]);

  useEffect(() => {
    if (currentQuestionIndex > 0) {
      startTimer(); // Restart the timer when moving to a new question
    }
  }, [currentQuestionIndex]);

//   useEffect(() => {
//     if(isTimerRunning){
//       startTimer();
//       return () => clearInterval(timerRef.current);
//     }
//   }, [isTimerRunning, currentQuestionIndex]);

  const fetchQuizQuestions = async () => {
    try {
        const response =await fetch('http://localhost:1234/error-quiz/get').then((d)=>{
            return d.json()
        }).then((d)=>{
            console.log(d);       
            const shuffledQuestions = d.sort(() => 0.5 - Math.random());
            const selectedQuestions = shuffledQuestions.slice(0, 8); 
            console.log('Selected Questions:', selectedQuestions); 
            setQuizQuestions(selectedQuestions);
        }).catch((e)=>{
            console.log(e)
        })
        console.log(response);
    } catch (error) {
        console.error(error);
    }
  };

  const handleOptionSelect = (option) => {
    if (!isOptionSelected) { 
      setSelectedOption(option);
      setIsOptionSelected(true); 
      setUserAnswers((prevUserAnswers) => ({...prevUserAnswers, [currentQuestionIndex]:option}));
      setShowExplanation(true);
      clearInterval(timerRef.current);
    //   setIsTimerRunning(false);
    }
  };

  const isOptionCorrect = (option) => {
    return option === quizQuestions[currentQuestionIndex]?.correctAnswer;
  };

  const getOptionStyle = (option) => {
    const defaultStyle = { margin: '8px 0', height:'30px', backgroundColor: backgroundColor };
    if (selectedOption === option) {
      return isOptionCorrect(option) ? {...defaultStyle, backgroundColor: '#8B9467' } : {...defaultStyle, backgroundColor: secondaryColor };
    }
    return defaultStyle;
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    setTotalTime((prevTime) => prevTime + elapsedTime); // Add the elapsed time to total time

    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption('');
      setIsOptionSelected(false); 
    //setElapsedTime(0);
    //   setIsTimerRunning(true);
    } else {
      setShowScore(true);
    }
  };

  return (
    <Container className="container" >
      <Box className="quiz-page" >
        {showScore ? (
        <div className="score-section">
        <h2 style={{ color: accentColor }}>Your Score</h2>
            <p>{score} out of {quizQuestions.length} in {totalTime} seconds</p>
            <h4 style={{ color: accentColor }}>Questions and Correct Answers</h4>
            <TableContainer className= "table-container" component={Paper} style={{ backgroundColor: secondaryColor, overflowY:'auto', height:'42vh' }}>
                <Table className='table'  sx={{ minHeight: 500 }} aria-label="simple table">
                  <TableHead className='t-head'>
                  <TableRow className='t-row'>
                  <TableCell className='t-cell' style={{ backgroundColor: primaryColor, color: 'white' }}>Question Index</TableCell>
                      <TableCell className='t-cell' style={{ backgroundColor: primaryColor, color: 'white' }}>Correct Answer</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{quizQuestions.map((question, index) => (
                    <TableRow key={index} style={{
                        backgroundColor: userAnswers[index] === question.correctAnswer? '#8B9467' : '', 
                     }}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell
                      >
            {question.correctAnswer}
            </TableCell>
                    </TableRow>
                  ))}</TableBody></Table>
                  </TableContainer>
        </div>
      ) : (
        <div className="question-section">
            <h2 style={{ color: accentColor }}>Question {currentQuestionIndex + 1}</h2>
            <div className="timer">
            <TimerOutlinedIcon/> : {elapsedTime} seconds
          </div>
            <Box component="span" sx={{height:50}}>{quizQuestions[currentQuestionIndex]?.question}</Box>
            <div className="options" style={{ display: 'flex', flexDirection: 'column' }}>
              <button
                style={getOptionStyle(quizQuestions[currentQuestionIndex]?.option1)}
                onClick={() => handleOptionSelect(quizQuestions[currentQuestionIndex]?.option1)}
              >
                {quizQuestions[currentQuestionIndex]?.option1}
              </button>
            <button
              style={getOptionStyle(quizQuestions[currentQuestionIndex]?.option2)}
              onClick={() => handleOptionSelect(quizQuestions[currentQuestionIndex]?.option2)}
            >
              {quizQuestions[currentQuestionIndex]?.option2}
            </button>
            <button
              style={getOptionStyle(quizQuestions[currentQuestionIndex]?.option3)}
              onClick={() => handleOptionSelect(quizQuestions[currentQuestionIndex]?.option3)}
            >
              {quizQuestions[currentQuestionIndex]?.option3}
            </button>
            <button
              style={getOptionStyle(quizQuestions[currentQuestionIndex]?.option4)}
              onClick={() => handleOptionSelect(quizQuestions[currentQuestionIndex]?.option4)}
            >
              {quizQuestions[currentQuestionIndex]?.option4}
            </button>
            
          </div>
          <button  className="next-button" onClick={handleNextQuestion} 
          style={{
            height: 30, 
            backgroundColor: accentColor, 
            color: 'white', 
            borderRadius: 5, 
            padding: '10px 20px', 
            border: 'none', 
            cursor: 'pointer',
            width: 100,
          }}
          >
            Next
          </button>
        </div>
      )}
    </Box>
    </Container>
  );
};
