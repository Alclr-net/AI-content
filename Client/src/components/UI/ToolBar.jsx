import { HiMiniH1 } from "react-icons/hi2";
import { FiBold,FiItalic  } from "react-icons/fi";
import { FaStrikethrough ,FaUnderline,FaLink} from "react-icons/fa";
import { FaCode,FaRegCommentDots  } from "react-icons/fa6";
import { IoListSharp } from "react-icons/io5";
import { MdFormatListNumbered ,MdFormatAlignCenter,MdFormatAlignLeft,MdFormatAlignRight ,MdFormatAlignJustify} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TbPencilBolt } from "react-icons/tb";
import Image from "@tiptap/extension-image";

import "../../Style/Toolbar.css"
export const Toolbar = ({editor})=>{
   
      return( <div className="tool_container">
          
            <div id="heading-icon"
          
            > <HiMiniH1  onClick={()=>{
                  editor.chain().focus().toggleHeading({ level: 1 }).run()
              }}/>
            </div>
            <div id="bold-icon"> <FiBold
            onClick={()=>{
                editor.chain().focus().toggleBold().run()
            }}
            /></div>
            <div id="italic-icon"> <FiItalic
            onClick={()=>{
                editor.chain().focus().toggleItalic().run()
            }}
            /></div>
            <div id="strikethrough-icon"> <FaStrikethrough
            onClick={()=>{
                editor.chain().focus().toggleStrike().run()
            }}
            /></div>
            <div id="underline-icon"> <FaUnderline
            onClick={()=>{
                editor.chain().focus().toggleUnderline().run()
            }}
            /></div>
            <div id="link-icon"> <FaLink
            onClick={()=>{
                const url = window.prompt("Enter the URL")
                if(url){
                    editor.chain().focus().setLink({href:url}).run()
                }
                
            }}
            /></div>
           
            <div id="bullet-list-icon">  <IoListSharp
            onClick={()=>{
                editor.chain().focus().toggleBulletList().run()
            }}
            /></div>
            <div id="align-center-icon"> <MdFormatAlignCenter
            onClick={()=>{
                editor.chain().focus().setTextAlign("center").run()
            }}
            /></div>
            <div id="align-left-icon"><MdFormatAlignLeft
            onClick={()=>{
                editor.chain().focus().setTextAlign("left").run()
            }}
            /></div>
            <div id="align-right-icon"> <MdFormatAlignRight
            onClick={()=>{
                editor.chain().focus().setTextAlign("right").run()
            }}
            /></div>
            <div id="align-justify-icon"> <MdFormatAlignJustify
            onClick={()=>{
                editor.chain().focus().setTextAlign("justify").run()
            }}
            /></div>
            <div id="profile-icon"><CgProfile
            onClick={()=>{
                editor.chain().focus().setImage({ src: "/github.svg" }).run()
            }}
            /></div>
            <div id="edit-icon"><TbPencilBolt
            onClick={()=>{
                editor.chain().focus().toggleHighlight({color:"#e3f540"}).run()
            }}
            /></div>
            </div>
            
           
) 

}