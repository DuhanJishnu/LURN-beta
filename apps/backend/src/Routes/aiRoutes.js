import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

import { promptSchema } from "../../zod/schema";

const aiRouter = new Hono();

aiRouter.get("/health", (c) => {
    return c.json({ status: "ok" });
});

async function ai(c) {
    const apiKey = c.env.GEMINI_API_KEY;

    console.log({ apiKey });

    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const data = "full from of ww2 in shortest";

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const full_prompt = `${data}`;

    const result = await model.generateContent(full_prompt);

    console.log(result);
    return result.response.text();
}

async function quiz(c, data) {
    const apiKey = c.env.GEMINI_API_KEY;

    const { GoogleGenerativeAI } = require("@google/generative-ai");

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const full_prompt = `Create a mcq quiz on: ${data} and return valid json string use double quotes no spaces key for que as 'question_text' and 'option_1' respecively and corect ans key as 'correct_option'just return a list of dict no extras"`;

    const result = await model.generateContent(full_prompt);

    return result.response.text();
}

aiRouter.get("/ai", async (c) => {
    try {
        const res = await ai(c);
        return c.json(
            {
                message: res,
            },
            200,
        );
    } catch (error) {
        console.error(error);
        return c.json(
            {
                message: "Error",
            },
            500,
        );
    }
});

aiRouter.post("/quiz", async (c) => {
    const body = await c.req.json();

    const parsed = promptSchema.safeParse(body);

    if (!parsed.success) {
        return c.json(
            {
                message: "Wrong inputs",
            },
            400,
        );
    }

    try {
        const response = await quiz(c, body.data);
        const questions = JSON.parse(response.replace(/```json\n|\n```/g, ""));

        return c.json(questions, 200);
    } catch (error) {
        console.error(error);
        return c.json(
            {
                message: "Server Error",
            },
            500,
        );
    }
});

export default aiRouter;
