import express from'express';
import { quizController } from '../controllers/quiz-controller.js';

export const quizRoute= express.Router();
quizRoute.post('/quiz', quizController.createQuestion);
quizRoute.get('/quiz/get', quizController.getAllQuizQuestions);

quizRoute.post('/error-quiz', quizController.createErrorQuestion);
quizRoute.get('/error-quiz/get', quizController.getErrorQuestions);

quizRoute.post('/idiom-quiz', quizController.createIdiomQuestion);
quizRoute.get('/idiom-quiz/get', quizController.getIdiomQuestions);