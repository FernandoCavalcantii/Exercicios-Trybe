import express from 'express';

import 'express-async-errors';
import errorMiddleware from './Middlewares/ErrorMiddleware';

import PlantsRoutes from './routes/plants.routes';

const PORT = 8000;
const app = express();

app.use(express.json());

app.use(PlantsRoutes);

app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});