import { useEffect, useRef } from "react";
import * as fabric from "fabric";

export const CanvasEditing = () => {
  const canvasRef = useRef(null);
  const fabricCanvasRef = useRef(null); // store fabric instance

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 600,
      backgroundColor: "#f3f3f3",
    });
    fabricCanvasRef.current = canvas;

    return () => {
      canvas.dispose();
    };
  }, []);

  const handleImage = () => {
    const canvas = fabricCanvasRef.current;
    if (!canvas) return;

    const imageUrl = "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";

    fabric.Image.fromURL(imageUrl, (img) => {
      img.set({
        left: 100,
        top: 100,
        scaleX: 0.5,
        scaleY: 0.5,
      });
      canvas.add(img);
    });
  };

  return (
    <div>
      <button onClick={handleImage}>Add Image</button>
      <br />
      <canvas ref={canvasRef} />
    </div>
  );
};
