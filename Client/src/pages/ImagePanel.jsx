import { useState } from "react";
import { imageGeneration } from "./imgAPI";
export const ImgPanel = () => {
  const [textTo, setTextTo] = useState("");
  const [outputImg, setOutputImg] = useState("");
  const handleImageGeneration = async (e) => {
    e.preventDefault();
    try {
      const response = await imageGeneration(textTo);
      console.log(response);
      
    const imageUrl = URL.createObjectURL(response);
    setOutputImg(imageUrl);

    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
      <h1>Write text to generate a post about any topic.</h1>
      <form
       onSubmit={(e) => handleImageGeneration(e)}
      >
        <textarea
          className="image_textarea"
          placeholder="enter text to generate image"
          name="image"
          value={textTo}
          onChange={(e) => setTextTo(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="Image_submission"
         
        >
          ↑
        </button>
      </form>
      <div
        className="huggingf_output"
        style={{
          backgroundImage: `url(${outputImg})`,
          backgroundSize: "cover",
          height: "50vh",
          width: "50vh",
        }}
      ></div>
    </>
  );
};
