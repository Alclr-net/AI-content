import { useState } from "react";
import axios from "axios";
export const Panel = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const server = axios.create({
    baseURL: "http://localhost:3344",
  });
  const handleInput = async () => {
    try {
      const response = await server.post("/api/generate", {
        input: input,
      });
   console.log(response)
      setOutput(response.data.content);
    } catch (err) {
      console.log(err);
    }
    setInput("");
  };

  return (
    <>
      <h1>Your text content AI is here!</h1>
      <div className="input">
        <textarea
          placeholder="Assign a task or ask Anything...."
          name="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <button className="assign_task" onClick={handleInput}>
          ↑
        </button>
        {/* <code>SAME</code> */}
      </div>
      <div className="iframe">{output}</div>
    </>
  );
};
