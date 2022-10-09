import express from 'express';
import productRoutes from './routers/product.router';
import userRoutes from './routers/user.router';
import orderRoutes from './routers/order.router';
import loginRoutes from './routers/login.router';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);
app.use('/login', loginRoutes);

export default app;
