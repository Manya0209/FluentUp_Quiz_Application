import express from 'express';
import {userController} from '../controllers/user-controller.js'

export const userRoute= express.Router();
userRoute.post('/login', userController.login);
userRoute.post('/register', userController.register);
userRoute.get('/profile', userController.profile);
userRoute.put('/change-password', userController.changePassword);
userRoute.delete('/logout', userController.logout);