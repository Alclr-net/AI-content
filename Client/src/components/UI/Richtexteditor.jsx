import { Toolbar } from "../UI/ToolBar";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";
import Underline from "@tiptap/extension-underline";
import "../../Style/Discription.css";
import Link from "@tiptap/extension-link";
import TextAlign from '@tiptap/extension-text-align'
import Image from "@tiptap/extension-image";
import Highlight from '@tiptap/extension-highlight'
export const RichTextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight.configure({ multicolor: true }),
      Underline,
      Image,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        alignments: ['left', 'center', 'right', 'justify'],
      }),
      Link.configure({
        openOnClick: true,
        autolink: false,
        defaultProtocol: "https",
        protocols: ["http", "https"],
        HTMLAttribute: {
          target: "_blank",
          rel: "noopener noreferrer nofollow",
        },
        isAllowedUri: (url, ctx) => {
          try {
            let userUrl ;
            try{
             userUrl = new URL(url);
            }catch{
              userUrl = new URL(`${ctx.defaultProtocol}://${url}`);
            }
            if (!ctx.defaultValidate(userUrl.href)) return false;
            const disallowedProtocols = ["ftp", "file", "mailto"];
            const protocol = userUrl.protocol.replace(":", "");
            if (disallowedProtocols.includes(protocol)) return false;
            return true;
          } catch (error) {
            return false;
          }
        },
       
        
      }),
    ],
    content: `<p>Hello world!</p>`,
    editable: true,
  });
  useEffect(() => {
    return () => {
      editor?.destroy();
    };
  }, [editor]);

  return (
    <div>
      {editor && <Toolbar editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
};
