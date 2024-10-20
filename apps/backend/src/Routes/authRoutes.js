import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

import { CreateUserSchema } from '../../zod/schema';

const authRoutes = new Hono();

authRoutes.post('/signin', async (c) => {
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

export default authRoutes;
