import zod from 'zod';

export const CreateUserSchema = zod.object({
    email: zod.string().email(),
    name: zod.string(),
    password: zod.string().min(8),
});