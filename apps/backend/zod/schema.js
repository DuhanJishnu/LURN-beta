import zod from "zod";

export const CreateUserSchema = zod.object({
    email: zod.string().email(),
    name: zod.string(),
    password: zod.string().min(8),
});

export const SignInUserSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
});

export const promptSchema = zod.object({
    data: zod.string(),
});
