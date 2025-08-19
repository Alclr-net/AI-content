import axios from "axios";
import { readPrompt } from "../../utils/loadPrompts.js";
const API_URL = axios.create({
    baseURL:"https://openrouter.ai/api/v1/chat/completions",
      headers: {
    Authorization: 'Bearer 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',
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