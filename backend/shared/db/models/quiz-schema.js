import   { SchemaTypes } from "mongoose";
import mongoose from "../connection.js";
const Schema= mongoose.Schema;
const quizSchema= new Schema({
    'question': {type:SchemaTypes.String, required:true, unique:true },
    'option1': {type:SchemaTypes.String, required:true},
    'option2': {type:SchemaTypes.String, required:true},
    'option3': {type:SchemaTypes.String, required:true},
    'option4': {type:SchemaTypes.String, required:true},
    'correctAnswer': {type:SchemaTypes.String, required:true},
});

const errorSchema= new Schema({
    'question': {type:SchemaTypes.String, required:true, unique:true },
    'option1': {type:SchemaTypes.String, required:true},
    'option2': {type:SchemaTypes.String, required:true},
    'option3': {type:SchemaTypes.String, required:true},
    'option4': {type:SchemaTypes.String, required:true},
    'correctAnswer': {type:SchemaTypes.String, required:true},
    
});

const idiomSchema= new Schema({
    'question': {type:SchemaTypes.String, required:true, unique:true },
    'option1': {type:SchemaTypes.String, required:true},
    'option2': {type:SchemaTypes.String, required:true},
    'option3': {type:SchemaTypes.String, required:true},
    'option4': {type:SchemaTypes.String, required:true},
    'correctAnswer': {type:SchemaTypes.String, required:true},
    
});

export const QuizModel= mongoose.model('questions', quizSchema);
export const ErrorModel= mongoose.model('error_identification_db', errorSchema);
export const IdiomModel= mongoose.model('idiom_phrases', idiomSchema);