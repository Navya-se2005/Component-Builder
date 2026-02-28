"use client"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import{
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "./ui/card"
import { ArrowRight, Wand2 } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils";
import PromptTemplates from "./ui/prompt-templates"
import FrameworkSelector from "./ui/framework-selector"

interface GeneratorPanelProps {
  className?: string;
  onGenerate?: (code:string) => void;
}
const GeneratorPanel = ({className, onGenerate} : GeneratorPanelProps) =>{
    const [api, setApi] = useState("")
    const [desc, setDesc] = useState("")
    const [hovered, setHovered] = useState(false)
    const[framework, setFramework] = useState("React")
   const [loading, setLoading] = useState(false)

   const handleGenerate = async () => {
    if(!api && !desc) return
    setLoading(true)

    await new Promise(r => setTimeout(r, 1000))
    onGenerate ?.("code generated")
    setLoading(false)
   }
   const isDisabled = !api.trim() && !desc.trim()


  return(
    <div>
      {/* <div className="min-h-screen bg-gradient-to-br from-stone-50 via-blue-200/30 to--400  dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-900 p-4 sm:p-8">

 </div>
      */}
        <Card className={cn("w-full border border-gray-200 shadow-sm rounded-2xl", className)}>
             <CardHeader className="border-b border-gray-100 pb-4">
              <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-indigo-50">
               <Wand2 className="w-4 h-4 text-indigo-500" />
          </div>
        <CardTitle className="text-gray-800 text-base font-semibold">
          AI Frontend Generator
        </CardTitle>
        </div>
           <p className="text-xs text-gray-400 mt-1">
          Provide an API endpoint and describe what you want to build.
        </p>
      </CardHeader>

      <CardContent className="space-y-5 p-5">
        <div className="space-y-1">
        <label className="text-white font-medium text-gray-700">Backend API</label>
        <Input placeholder="Enter API URL" value={api} onChange={(e)=>setApi(e.target.value)}
        className="text-sm text-gray-800 placeholder:text-gray-400 border-gray-200 focus:ring-indigo-500"></Input>
        </div>

        {/* promp templates */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Templates
          </label>
          <PromptTemplates onSelect={setDesc}/>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700"> Target Framework</label>
          <FrameworkSelector value={framework} onChange={setFramework}/>
        </div>

        {/* decription */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <label className="text-white font-medium">Description</label>
               <span className="text-xs text-gray-400">{desc.length} chars</span>
          </div>
            <Textarea placeholder="Describe the frontend you want to generate" 
            className="min-h-[120px] resize-none text-sm text-gray-800 placeholder:text-gray-400 border-gray-200 leading-relaxed"
            value={desc} onChange={(e)=>setDesc(e.target.value)}></Textarea>

        </div>


        <Button   onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={()=> onGenerate?.("code generated")}
         className="w-full bg-purple-700 hover:bg-pink-400 text-white font-medium rounded-xl transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed ">
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>

              </svg>
              Generating...
            </span>
          ):(
             <span className="flex items-center gap-2">
              Generate UI
              <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${hovered ? "translate-x-1" : ""}`} />
            </span>
          )}
         
        </Button>
{isDisabled && (
  <p className="text-xs text-center text-gray-400">Enter an API URL to get started</p>
)}
         
      </CardContent>
         
         </Card>
       </div>
   
  )
}
export default GeneratorPanel