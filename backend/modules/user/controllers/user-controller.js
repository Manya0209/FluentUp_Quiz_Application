import { UserModel } from "../../../shared/db/models/user-schema.js";
import { hashing } from "../../../shared/encryption/encrypt.js";
import Redirect from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { setUser } from "../../../shared/service/auth.js";

export const userController={
    async register(request, response){
        const userInfo= request.body; //post data
        //console.log('Body is ', body);
        const existingUser = await UserModel.findOne({ email: userInfo.email }).exec();
        if (existingUser) {
            return response.json({ message: 'Email Already Exists'});
        }

        userInfo.password = hashing.passwordHash(userInfo.password);
        try{
            const doc= await UserModel.create(userInfo);
            if(doc ){
                response.json({message:'Registered Successfully'});
            }
            else{
                response.json({message:'Problem in Registering'});
            }
        } 
        catch(err){
            console.log('register err', err);
            response.json({message:'Problem in Register'});
        }
    },

    async login(request, response) {
      const userInfo = request.body;
      const doc = await UserModel.findOne({ 'email': userInfo.email }).exec();
      console.log(doc);  // Log the user document
  
      if (doc && doc._id) {
          const plainPassword = userInfo.password;
          const dbPassword = doc.password;
          console.log(plainPassword + "    " + dbPassword);
  
          // Check if the password matches
          if (hashing.matchPassword(plainPassword, dbPassword)) {
              const sessionId = uuidv4();
              setUser(sessionId, doc);
  
              console.log("Setting sessionId cookie:", sessionId);
  
              // Set the cookie with session ID
              response.cookie("uid", sessionId, {
                  httpOnly: true,
                  secure: false,  // In production, set this to true if using HTTPS
                  sameSite: 'Lax'
              });
  
              // Log the response headers
              console.log("Cookie set, responding to client...", response.getHeaders());
  
              // Send the welcome message
              return response.json({ message: 'Welcome ' + doc.name });
          } else {
              // If password doesn't match
              return response.json({ message: 'Invalid Userid or Password' });
          }
      } else {
          // If user is not found
          return response.json({ message: 'Invalid Userid or Password' });
      }
  },
  

    changePassword(request, response){
        response.json({message:'Change pwd'});
    },

    async profile(req, response) {
        if (req.session && req.session.userId) {
          const userId = req.session.userId;
      
          try {
            const user = await UserModel.findById(userId).exec();
      
            if (!user) {
              return response.status(404).json({ message: 'User not found' });
            }

            response.json(user); // Return user profile data (excluding sensitive information if needed)
          } catch (err) {
            console.error(err);
            response.status(500).json({ message: 'Error retrieving profile' });
          }
        } else {
          response.status(401).json({ message: 'Unauthorized' }); // User is not logged in
          response.redirect('/login');
        }
    },

    logout(req, response){
        req.session.destroy((err) => {
            if (err) {
              console.error('Session destruction error:', err);
              response.status(500).json({ message: 'Logout failed' });
            } else {
              response.json({ message: 'Account removed successfully' });
            }
          });
    },
}