import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bookRoute from './route/book_route.js';
import userRoute from "./route/user_route.js";

const app = express()

app.use(cors());
app.use(express.json())

dotenv.config();

const PORT=process.env.PORT || 4001;
const URI=process.env.MongoDBURI;

//connect to mongodb
try{
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
}catch(error){
    console.log('Error connecting to MongoDB', error);
}



// Defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);


app.get('/', (req, res) => {
  res.send('Mern dictionary')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})