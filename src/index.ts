import express from 'express';
import path from 'path';
const app = express();
const port = 5500;

// check for port to avoid allready in use error testing
app.listen(port, () => {

});
app.get('/', (req, res) => {
    res.render(__dirname + 'html/index.html');
    
});

export default app;
