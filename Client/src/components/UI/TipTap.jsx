import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
export const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `<p>Hello world!</p>`,
    editable: true,
  });
  useEffect(() => {
    return () => {
      editor?.destroy();
    };
  }, [editor]);
  return (
    <div className="p-4 border rounded">
           <div className="space-x-2">
        <button onClick={() => editor.chain().focus().toggleBold().run()} className="px-2 py-1 border rounded">Bold</button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className="px-2 py-1 border rounded">Italic</button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className="px-2 py-1 border rounded">H1</button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};
