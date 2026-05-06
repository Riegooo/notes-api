import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import page_route from './routes/page_route';
import user_route from './routes/user_route';
import note_route from './routes/notes_route';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', page_route);
app.use('/users', user_route);
app.use('/notes', note_route);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is Listening on port : ${process.env.PORT}`);
});