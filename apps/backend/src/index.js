import { Hono } from 'hono'
import {cors} from 'hono/cors'

import authRouter from './Routes/authRoutes'
import aiRouter from './Routes/aiRoutes'

const app = new Hono()

app.use('*', cors());

app.get('/health', (c) => {
    return c.json({ status: 'ok' })
});

app.route('/api/v1/auth/', authRouter);
app.route('/api/v1/ai/', aiRouter);

export default app
