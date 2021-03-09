import express, { Express } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import todoRoutes from './routes/todos.routes';
import authRoutes from './routes/auth.routes';
import config from 'config';

const app: Express = express();
const bodyParser = require('body-parser');

const PORT: string | number = config.get('port') || 4000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(todoRoutes);
app.use('/api/auth', authRoutes);

const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.set('useFindAndModify', false);

mongoose
	.connect(config.get('mongoUri'), options)
	.then(() =>
		app.listen(PORT, () =>
			console.log(`Server running on http://localhost:${PORT}`)
		)
	)
	.catch((error) => {
		throw error;
	});
