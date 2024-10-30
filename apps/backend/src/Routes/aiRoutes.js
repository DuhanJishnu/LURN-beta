import { Hono } from "hono";

import { promptSchema } from "../../zod/schema";

const aiRouter = new Hono();

aiRouter.get("/health", (c) => {
    return c.json({ status: "ok" });
});

async function ai(c, prompt) {
    const apiKey = c.env.GEMINI_API_KEY;

    const { GoogleGenerativeAI } = require("@google/generative-ai");

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const result = await model.generateContent(prompt);

    const final_data = JSON.parse(result.response.text().replace(/```json\n|\n```|```javascript\n/g, ""));

    return final_data;
}


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
        const full_prompt = `Create 10 mzq on ${body.data}. Each question should be dictionary with keys: "question_text" for the que "option_1" through "option_4" for each option "correct_option" specifying correct answer's key (like "option_1"). return a JSON list only with each question structured as dictionary. Use double quotes for all keys and ensure there are no extra spaces.`;
 
        const response = await ai(c, full_prompt);

        return c.json(response, 200);
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

aiRouter.post("/mindmap", async (c) => {
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
        // const full_prompt = `Create 10 mzq on ${body.data}. Each question should be dictionary with keys: "question_text" for the que "option_1" through "option_4" for each option "correct_option" specifying correct answer's key (like "option_1"). return a JSON list only with each question structured as dictionary. Use double quotes for all keys and ensure there are no extra spaces.`;
 
        // const response = await ai(c, full_prompt);

        // return c.json(response, 200);
        return c.json([
            {message: "Not implemented yet"}
        ], 200);
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

aiRouter.post("/compare", async (c) => {
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
        const full_prompt = `compare ${body.data}. Return array of size > 10 that contains objects with "key1" as 'category' having only 2 possible values the name of objects to be compared and key2 as 'value' having values the comparison values. don't write names of category in comparison data and keep concise`;
 
        const response = await ai(c, full_prompt);

        return c.json(response, 200);
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

aiRouter.post("/flowchart", async (c) => {
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
        const full_prompt = `I want to perform a task related to ${body.data}. Please generate an array of steps I need to follow, where each element of the array is a string representing a single step. Only return the array, no explanations or additional information. Each step should be concise and clear`;
 
        const response = await ai(c, full_prompt);

        return c.json(response, 200);
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

aiRouter.post("/flashcard", async (c) => {
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
        const full_prompt = `Generate an array of 10 concise question and answer pairs about ${body.data}, formatted as JavaScript objects. Use "q" and "a" for the question and answer keys. Keep answers brief and appropriate for flashcards. Return only the array`;
 
        const response = await ai(c, full_prompt);

        return c.json(response, 200);
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
