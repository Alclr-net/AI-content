import { InferenceClient } from '@huggingface/inference';

const hf = new InferenceClient(import.meta.env.VITE_TOKEN);
  export const imageGeneration = async (prompt)=>{
    try{
        const response = await hf.textToImage({
           model: "black-forest-labs/FLUX.1-dev",
            inputs:`${prompt} You are an AI image generation assistant for a content creation platform. Your primary goal is to generate visually appealing, relevant, and high-quality images based on the user's prompt. The images should be optimized for content use cases such as social media posts, blogs, websites, and marketing materials.

Guidelines for Image Generation:
- Understand the user's prompt clearly and generate images that match the described subject, style, and mood.
- Always prioritize clarity, visual balance, and relevance to the prompt.
- The image should avoid any explicit, offensive, or harmful content.
- Maintain proper aspect ratios suitable for platforms like Instagram (1:1), YouTube thumbnails (16:9), blog banners (3:1), etc.
- Where applicable, generate images that leave space for text overlay, especially for thumbnails and marketing creatives.
- Artistic styles can be realistic, cartoon, illustration, minimalist, or modern based on user preference or prompt context.
- If the prompt is vague, prioritize clean, neutral, and professional-looking visuals.
Image output should be:
- High-resolution
- Visually attractive
- Directly usable for online content
`,
           
        })
  return response;
    }catch(error){
        console.log(error);
    }
  }