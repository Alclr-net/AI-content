import axios from "axios";
import dotenv from 'dotenv';
import { readPrompt } from "../../utils/loadPrompts.js";
const API_URL = axios.create({
    baseURL:"https://openrouter.ai/api/v1/chat/completions",
      headers: {
    Authorization:`Bearer ${import.meta.env.HF1_TOKEN}`,
    'Content-Type': 'application/json',
  },
})
export const postInput = async(prompt)=>{
    try{
      const systemPromptForText = await readPrompt("TextGeneration.txt")
 const response  = await API_URL.post("",{
    model: "deepseek/deepseek-r1-0528:free",
    messages: [
      {
         role: "system",
         content:systemPromptForText,
      },
      {
        role: "user",
        content: prompt,
      }
    ]
 })
return(response.data.choices[0].message.content) 
}catch(err){
    console.log(err);
 }
} 