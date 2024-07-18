import express from "express"
import { PORT, mongodburi} from "./config.js";
import mongoose from 'mongoose'
import { Book } from "./models/bookmodel.js";
import booksRoute from "./routes/booksRoutes.js"
import cors from 'cors'

const app = express();

app.use(express.json());
//MiddleWare to handle CORS Policy
//#1 - Allow all origins with default of cors(*)
app.use(cors())
//#2 - Allow Custom Origins
// app.use(cors({
//     origin: 'http://localhost:5555',
//     method: ['GET', 'POST', 'PUT','DELETE'],
//     allowedHeaders: ['Content-Type'],
// }))


app.get('/', (req, res)=>{
    console.log(req);
    return res.status(234).send();
})

app.use('/books', booksRoute);

mongoose
    .connect(mongodburi)
    .then(()=>{
        console.log('App connected to database');
        app.listen(PORT, ()=>{
            console.log(`App is listening to port ${PORT}`)
        })
    })
    .catch((error)=>{
        console.log(error);
    })