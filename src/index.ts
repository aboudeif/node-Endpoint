import express, { response } from 'express';
import path from 'path';
import fs from "fs";
import { request } from 'http';

const app = express();
const port = 5700;


// check for port to avoid in use error testing

app.get('/students', (req, res) => {

    res.sendFile(path.join(__dirname, '../public/img/logo.jpg'));
});

app.listen(port, () => console.log(`Server running on port ${port}`));

export default app;
