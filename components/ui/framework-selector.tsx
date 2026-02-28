"use client"
import { cn } from "@/lib/utils"
const frameworks = [
    "HTML",
    "React",
    "Next.js",
    
]
interface Frame{
    value:string;
    onChange:(value:string)=>void
}
const FrameworkSelector = ({value, onChange}: Frame)=>{
    return(
        <div className="flex flex-wrap gap-2">
{frameworks.map((fw)=>(
    <button
    key={fw}
    onClick={()=>onChange(fw)}
    className={cn(
        "px-3 py-1.5 rounded-md border text-sm font-medium transition-all",
         value===fw ? "bg-violet-100 text-violet-700 border-violet-300 shadow-sm scale-105" : "bg-white text-gray-500 border-gray-200 hover:bg-violet-50 hover:text-violet-600 hover:border-violet-200"
    )}
    > {fw}</button>
))}
        </div>
    )
}
export default FrameworkSelector