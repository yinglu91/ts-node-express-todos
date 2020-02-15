import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import todoRouters from './routes/todos';

// https://ert.udemy.com/course/understanding-typescript/learn/lecture/16950324#overview max
// node & express with typescript

const app = express();

app.use(json());

app.use('/todos', todoRouters);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
