import React, { useState, useEffect } from 'react';
//import { apiClient } from '../../../shared/services/api-client.js';
import Box from '@mui/material/Box';
import {  Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

import { Container } from '@mui/material';

const primaryColor = '#DEB69C'; // main color
const secondaryColor = '#CD9692'; // secondary color
const accentColor = '#9C9797'; // accent color
const backgroundColor = '#FEF7E5'; // background color

export const AdvanceLevel = () => {

  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [userAnswers, setUserAnswers] = useState({});

  useEffect(() => {
    fetchQuizQuestions();
  }, []);

  const fetchQuizQuestions = async () => {
    try {
      const response =await fetch('').then((d)=>{
        return d.json()
      }).then((d)=>{
        console.log(d);        
        setQuizQuestions(d); 
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

    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption('');
      setIsOptionSelected(false); 
    } else {
      setShowScore(true);
    }
  };

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', backgroundColor: backgroundColor, height:'86vh', marginTop:'62px'}}>
      <Box className="quiz-page" style={{ padding: 20, backgroundColor: primaryColor, justifyContent:'center', alignItems:'center', margin:'auto', width:'90%', height:'70vh' }}>
        {showScore ? (
        <div className="score-section">
        <h2 style={{ color: accentColor }}>Your Score</h2>
            <p>{score} out of {quizQuestions.length}</p>
            <h4 style={{ color: accentColor }}>Questions and Correct Answers</h4>
            <TableContainer component={Paper} style={{ backgroundColor: secondaryColor, overflowY:'auto', height:'42vh' }}>
                <Table sx={{ minHeight: 500 }} aria-label="simple table">
                  <TableHead>
                  <TableRow>
                  <TableCell style={{ backgroundColor: primaryColor, color: 'white' }}>Question Index</TableCell>
                      <TableCell style={{ backgroundColor: primaryColor, color: 'white' }}>Correct Answer</TableCell>
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
        <Box className="question-section">
            <h2 style={{ color: accentColor }}>Question {currentQuestionIndex + 1}</h2>
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
        </Box>
      )}
    </Box>
    </Container>
  );
};
