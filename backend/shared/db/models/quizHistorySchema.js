import   { SchemaTypes } from "mongoose";
import mongoose from "../connection.js";
const Schema= mongoose.Schema;

const quizHistorySchema = new Schema({
  userId: {
    type: SchemaTypes.ObjectId,
    ref: 'UserModel', 
    required: true,
  },
  quizType: {
    type: String,
    enum: ['general', 'error', 'idiom'],
    required: true,
  },
  quizId: {
    type: SchemaTypes.ObjectId,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
  completedAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserModel',
  }
});

export const QuizHistory = mongoose.model('QuizHistory', quizHistorySchema);