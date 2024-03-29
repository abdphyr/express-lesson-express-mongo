import express from 'express';
import { categoryRouter } from './routes/categories';
import { customerRouter } from './routes/customers';
import { courseRouter } from './routes/courses';
import { enrollmentRouter } from './routes/enrollments';
import { Request, Response } from 'express';
import { connectdb } from './db/db.config';
import helmet from 'helmet';

const app = express();
connectdb()

app.use(express.json());
app.use(express.urlencoded())
app.use(helmet())

app.use('/api/categories', categoryRouter)
app.use('/api/customers', customerRouter)
app.use('/api/courses', courseRouter)
app.use('/api/enrollments', enrollmentRouter)

app.get('/', (req: Request, res: Response) => {
    res.send("Bu data")
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`${port} ishga tushmoqda ...`)
})