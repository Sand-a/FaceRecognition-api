import express from 'express';
import bcrypt from 'bcrypt-nodejs';
import cors from 'cors';
import knex from 'knex';
import register from './controllers/register.js';
import signin from './controllers/signin.js';
import profile from './controllers/profile.js';
import image from './controllers/image.js';
import imageurl from './controllers/imageurl.js';

const db = knex ({
    client: 'pg',
    connection: { 
      host : '127.0.0.1',
      port : 5432,
      user : 'sandrineanid',
      password : '',
      database : 'FaceRecognition'
    }
  });

const app = express();

 
app.use(express.json()); 

app.use(cors());

app.get('/', (req,res) => {res.send('sucess')} )

app.post('/signin',(req, res) => { signin(req, res, db, bcrypt) })

app.post('/register', (req, res) => { register(req, res, db, bcrypt) })

app.get('/profile/:id', (req,res)=>{ profile(req, res ,db) })

app.put('/image',(req, res) => { image(req, res, db) })

app.post('/imageurl',(req, res) => { imageurl(req, res) })



app.listen(3000, ()=>{ console.log('App is running NOW on post 3000!!')})
