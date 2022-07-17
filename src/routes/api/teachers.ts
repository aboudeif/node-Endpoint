import express from 'express';

const teachers = express.Router();

teachers.get('/', (req, res) => {
  res.send('Welcome to teachers page!');
});

export default teachers;