import dotenv from 'dotenv';
dotenv.config()
import mongoose from 'mongoose';

const url = process.env.MONGO_URL

mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
}).then(() => console.log('DB is connected'))
.catch(error => console.log(error))