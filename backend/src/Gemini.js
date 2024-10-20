require('dotenv').config();
const apiKey = process.env.GEMINI_API_KEY;
console.log({apiKey})

const { GoogleGenerativeAI } = require("@google/generative-ai");
data = 'full from of ww2 in shortest'

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
  const full_prompt = `${data}`;
  
  const result = await model.generateContent(full_prompt);

  console.log(result)