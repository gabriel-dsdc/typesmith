import express from 'express';
import productRoutes from './routers/product.router';
import userRoutes from './routers/user.router';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);

export default app;
