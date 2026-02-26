"use client"
import { Button } from "./button"
const  templates = [
    {
        label:"Dashboard UI",
        value: "Create a responsive admin dashboard using React, Tailwind css,top navbar, charts, tables and dark mode support"
    },
    {
label: "Admin Panel",
value:"Create a full-featured admin panel with user management table, analytics card, forms, filters, and dark themes"
    },
    {
label: "Longin Page",
value:"Create a responsive login and signup UI using React and Tailwind CSS with form validation, gradient background, and modern card layout."
    },
    {
label:"Blog UI",
value:"Create a modern blog website UI with list, featured posts, gategories, search bar and article page layout"
    }
]
interface PromptProps{
    onSelect:(value:string)=>void
}
const PromptTemplates = ({ onSelect}:PromptProps)=>{
return (
    <div className="flex flex-wrap gap-2">
        {templates.map((item)=>(
            <Button key={item.label}
            variant="outline"
            size="sm"
            onClick={()=>onSelect(item.value)}
            className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                {item.label}
            </Button>
        ))}

    </div>
)

  
}
export default PromptTemplates