import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import routerAuth from './routes/routeAuth.js';
import routerMain from './routes/routerMain.js';

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000;
const mongoPath = 'mongodb+srv://admin:admin@cluster0.s2pg5n5.mongodb.net/task6-messenger?retryWrites=true&w=majority';

app.use(cors({
    origin: "*"
}));
app.use(express.json({extended: true}));
app.use('/api/auth', routerAuth);
app.use('/api/main', routerMain);

async function start() {
    try {
        await mongoose
            .connect(mongoPath)
            .then(()=> console.log("DB OK"))
            .catch((e) => console.log("DB error: ", e))

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start();