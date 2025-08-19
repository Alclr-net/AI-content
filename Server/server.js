import express from "express";
import { postInput } from "./AuthApi/LLM.js";
;
const server = express();
const PORT = 3344;
import cors from "cors";
server.use(cors());
server.use(express.json());
server.post("/api/generate", async (req, res) => {
  try {
    const userInput = req.body.input;
    const aiContent = await postInput(userInput);
    // const aiContent = "getting data";
    res.json({ content: aiContent });
  } catch (error) {
    res.send("error Caused!");
  }
});

server.listen(PORT, () => {
  console.log(`Your application is running on server ${PORT}`);
});
