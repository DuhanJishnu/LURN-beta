import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

const aiRouter = new Hono();

async function ai(c) {
    const apiKey = c.env.GEMINI_API_KEY

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
  

aiRouter.get('/ai', async (c) => {
  
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

export default aiRouter