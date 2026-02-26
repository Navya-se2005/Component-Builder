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
import { Sparkles,ArrowRight, Zap } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils";
import PromptTemplates from "./ui/prompt-templates"
import FrameworkSelector from "./ui/framework-selector"
interface GeneratorPanelProps {
  className?: string;
}
const GeneratorPanel = ({className} : GeneratorPanelProps) =>{
    const [api, setApi] = useState("")
    const [desc, setDesc] = useState("")
    const [hovered, setHovered] = useState(false)
    const[framework, setFramework] = useState("React")
    // const [descri, setDesc] = useState("")
    // const [focused, setFocused] = useState<string | null>(null)
    // const [isGenerating, setIsGenerating] = useState(false)
    // const handleGenerate = ()=>{
    //   setIsGenerating(true)
    //   setTimeout(()=>setIsGenerating(false), 2000)
    // }
  return(
    <div>
      {/* <div className="min-h-screen bg-gradient-to-br from-stone-50 via-blue-200/30 to--400  dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-900 p-4 sm:p-8">

 </div>
      */}
        <Card className="w-full bg-white/5 border border-white/20 rounded-xl shadow-lg shadow-black/30 shadow-sm">
             <CardHeader className="border-b dark:border-neutral-800 justify-center">
        <CardTitle className="text-white font-semibold">
          AI Frontend Generator
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4 p-4">
        <div className="space-y-1">
        <label className="text-white font-medium">Backend API</label>
        <Input placeholder="Enter API URL" value={api} onChange={(e)=>setApi(e.target.value)}></Input>
        </div>

        {/* promp templates */}
        <div className="space-y-2">
          <label className="text-sm text-white/70">
            Templates
          </label>
          <PromptTemplates onSelect={setDesc}/>
        </div>

        <div className="space-y-1">
          <label className="text-white/80 font-medium text-sm"> Target Framework</label>
          <FrameworkSelector value={framework} onChange={setFramework}/>
        </div>

        {/* decription */}
        <div className="space-y-1">
            <label className="text-white font-medium">Description</label>
            <Textarea placeholder="Describe the frontend you want to generate" className="h-30 resize-none text-white"
            value={desc} onChange={(e)=>setDesc(e.target.value)}></Textarea>

        </div>
        <Button   onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
         className="w-full bg-white/5 ">Generate UI
            <span>
             <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${hovered ? 'translate-x-1' : ''}`} />
            </span>
        </Button>
      </CardContent>
         
         </Card>
       </div>
   
  )
}
export default GeneratorPanel