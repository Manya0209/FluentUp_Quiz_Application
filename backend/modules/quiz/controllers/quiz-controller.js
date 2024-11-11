import { IdiomModel, QuizModel } from "../../../shared/db/models/quiz-schema.js";
import { ErrorModel } from "../../../shared/db/models/quiz-schema.js";

export const quizController = {
    async createQuestion(request,response){
      const quizInfo = request.body;
      try{
      const quiz= await QuizModel.create(quizInfo);
      if(quiz){
        console.log("quiz Added");
        response.json({ message: 'Quiz Added' });
      }
      else{
        console.log("Problem Ocuurs");
      }
      }
      catch(err){
        console.log("some error Occur",err)
      }
    },

    getAllQuizQuestions: async (request, response) => {
      try {
        const quizQuestions = await QuizModel.find();
        response.json(quizQuestions);
      } catch (error) {
        console.error(error);
        response.json({ message: 'Internal server error' });
      }
    },

    async createErrorQuestion(request,response){
      const errorQuizInfo = request.body;
      try{
      const quiz= await ErrorModel.create(errorQuizInfo);
      if(quiz){
        console.log("question Added");
        response.json({ message: 'Question Added' });
      }
      else{
        console.log("Problem Ocuured");
      }
      }
      catch(err){
        console.log("some error Occured",err)
        response.json({ message: err });
      }
    },

    getErrorQuestions: async (request, response) => {
      try {
        const errorQuestions = await ErrorModel.find();
        response.json(errorQuestions);
      } catch (error) {
        console.error(error);
        response.json({ message: 'Internal server error' });
      }
    },

    async createIdiomQuestion(request,response){
      const idiomQuizInfo = request.body;
      try{
      const quiz= await IdiomModel.create(idiomQuizInfo);
      if(quiz){
        console.log("question Added");
        response.json({ message: 'Question Added' });
      }
      else{
        console.log("Problem Ocuured");
      }
      }
      catch(err){
        console.log("some error Occured",err)
        response.json({ message: err });
      }
    },

    getIdiomQuestions: async (request, response) => {
      try {
        const idiomQuestions = await IdiomModel.find();
        response.json(idiomQuestions);
      } catch (error) {
        console.error(error);
        response.json({ message: 'Internal server error' });
      }
    },
}    