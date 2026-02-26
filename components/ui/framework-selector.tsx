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
        "px-3 py-1.5 rounded-md border text-sm font-medium transition-all", value===fw ? "bg-white text-black border-white shadow-md scale-105" : "bg-white/5 text-white border-white/10 hover:bg-white/10"
    )}
    > {fw}</button>
))}
        </div>
    )
}
export default FrameworkSelector