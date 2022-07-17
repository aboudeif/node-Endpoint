import express from 'express';

const students = express.Router();

students.get('/', (req, res) => {
  res.send('Welcome to students page!');
});

export default students;