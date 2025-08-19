import{readFile} from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
  
  export const readPrompt = async(textFile)=>{
    const currentFile = fileURLToPath(import.meta.url);
    const dirName = path.dirname(currentFile);
    const rootDir = path.dirname(dirName);
    const promptPath = path.join(rootDir,"Prompts",textFile)
        const textPrompt =    await readFile(promptPath,"utf-8");
  return textPrompt;
 }
