import express, { response } from 'express';
import routes from './routes/index';

const app = express();
const port = 5700;


// check for port to avoid in use error testing
app.use('/', routes);
app.use('/logo', routes);

app.listen(port, () => console.log(`Server running on port ${port}`));

export default app;
