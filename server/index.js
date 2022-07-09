import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './route/posts.js';
import userRoutes from './route/users.js';


 const app = express();
 dotenv.config();
 
 
 app.use(bodyparser.json({limit : "300mb", extended: true}));
 app.use(bodyparser.urlencoded({limit : "300mb", extended: true}));
 app.use(cors());
 //taken all route in the file post.js and start /posts
 app.use('/posts',postRoutes);
 app.use('/user',userRoutes);

 //start connect to database on cloud 

 const PORT = process.env.PORT || 5000;

 app.listen(PORT,()=>console.log(`Server running on port : ${PORT}`));

mongoose.connect(process.env.CONNECTION_URL)
.then(()=>console.log(`Connection on MONGODB Start .....`));