import express from 'express';
import path from 'path';

const routes = express.Router();

routes.get('/logo', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/img/logo.jpg'));
});

routes.get('/',(req, res) => {
  res.send('Welcome to main page!');
});

export default routes;