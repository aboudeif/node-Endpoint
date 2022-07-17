import express from 'express';
import students from './api/students';
import teachers from './api/teachers';
import path from 'path';

const routes = express.Router();



routes.get('/',(req, res) => {
  res.send('Welcome to main page!');
});

routes.use('/students', students);
routes.use('/teachers', teachers);

routes.get('/logo', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/img/logo.jpg'));
});

export default routes;