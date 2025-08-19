import axios from "axios";
import dotenv from 'dotenv';
console.log(import.meta.env.VITE_TOKEN)
dotenv.config()
const image = axios.create({
  baseURL: "https://router.huggingface.co/hf-inference/models/stabilityai/stable-diffusion-3.5-large",
  headers: {
    Authorization:`Bearer ${import.meta.env.HF_TOKEN}`,
    "Content-Type": "application/json",
  },
});

export const imageGeneration = async (userInput) => {
  try {
    const response = image.post("", 
        {
            prompt: userInput,
            sync_mode: true,
          },
          {
         
    );
    const imageUrl =response
return imageUrl;
  } catch (error) {
    console.log(error);
  }
};
