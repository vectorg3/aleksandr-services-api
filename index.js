import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

mongoose.set('strictQuery', false);
mongoose
    .connect('mongodb+srv://admin:392311@alexander-service.ij3kre5.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('Database Connected');
    })
    .catch((err) => {
        console.log('Database Error', err);
    });

const app = express();

app.use(cors());
app.use(express.json());

app.post('/', () => {

});

app.listen(process.env.PORT || 4444, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log('Server started');
});