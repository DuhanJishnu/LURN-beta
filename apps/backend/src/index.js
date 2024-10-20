import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { CreateUserSchema } from '../zod/schema'

const app = new Hono()

app.get('/health', (c) => {
    return c.json({ status: 'ok' })
});

app.post('/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();

  const parsed = CreateUserSchema.safeParse(body);
  if (!parsed.success) {
      return c.json(
          {
              message: 'Wrong inputs',
          },
          400
      );
  }

  try {
      const existingUser = await prisma.user.findFirst({
          where: {
              email: body.email
          },
      });

      if (existingUser) {
          return c.json(
              {
                  message: 'User already exists',
              },
              400
          );
      }
      const res = await prisma.user.create({
          data: body,
      });
      return c.json(
          {
              message: 'Created User',
          },
          200
      );
  } catch (error) {
      console.error(error);
      return c.json(
          {
              message: 'Error creating User',
          },
          500
      );
  } finally {
      await prisma.$disconnect();
  }
})

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
