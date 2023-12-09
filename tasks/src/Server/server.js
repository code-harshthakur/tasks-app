import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import { connect, connection } from 'mongoose';
import taskRoutes from './Routes/taskRoutes';

const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(json());

// Database Connection
connect('mongodb://localhost/todoApp', { useNewUrlParser: true, useUnifiedTopology: true });
connection.once('open', () => {
    console.log('Connected to MongoDB');
});

// Routes
app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
