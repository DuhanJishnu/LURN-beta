import { Hono } from 'hono'
import authRouter from './Routes/authRoutes'

const app = new Hono()

app.get('/health', (c) => {
    return c.json({ status: 'ok' })
});

app.route('/api/v1/auth/', authRouter);

async function ai(c) {
    const apiKey = c.env.GEMINI_API_KEY

    // const apiKey = 'AIzaSyDoxjl6fZTANxImZbZq9sLmGAsB3Vre748'
    console.log({apiKey})
  
    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const data = 'full from of ww2 in shortest'
  
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
    const full_prompt = `${data}`;
  
    const result = await model.generateContent(full_prompt);
  
    console.log(result)
    return result.response.text();
  }
  

app.get('/ai', async (c) => {
  
    try {
        const res = await ai(c);
        return c.json(
            {
                message: res,
            },
            200
        );
    } catch (error) {
        console.error(error);
        return c.json(
            {
                message: 'Error',
            },
            500
        );
    }
})

export default app
