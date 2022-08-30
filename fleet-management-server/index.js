import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import Routes from './routes/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();

const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(bodyParser.json({extended : true}))
app.use(bodyParser.urlencoded({extended :true}))
app.use(cors());
app.use('/',Routes)
const dbusername =process.env.DB_USERNAME;
const dbpassword = process.env.DB_PASSWORD;



Connection(dbusername,dbpassword);

app.listen(PORT,() => console.log(`Server is established and running on port :${PORT}`));
//module.exports = app;