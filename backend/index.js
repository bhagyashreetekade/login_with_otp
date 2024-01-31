// index.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
//import authRoutes from './routes/auth.js';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// ROUTES
//app.use('/auth', authRoutes);

// MONGOOSE SETUP 
const PORT = process.env.PORT || 6001;

mongoose.connect(process.env.DATABASE_URL).then(() => {
  console.log(`Connected to MongoDB`);
  // Add your routes and middleware here
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
}).catch((error) => console.error(`Failed to connect to MongoDB: ${error}`));
