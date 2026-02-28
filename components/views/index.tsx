import { ViewType } from "../context/sidebar-context"
import { FolderOpen, History, Globe, Code2, Settings, Wand2 } from "lucide-react"
import GeneratorPanel from "@/components/generator"
import Output from "@/components/output"
import PreviewPanel from "@/components/preview"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Code } from "lucide-react"

function EmptyView({ icon, title, description }: {icon:React.ReactNode, title:string, description:string}){
    return(
        <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-centwer gap-3">
            <div className="p-4 rounded-full bg-gray-50 border border-gray-100 text-gray-300">{icon} </div>
                <h2 className="text-base font-semibold text-gray-700">
                {title}
                </h2>
                <p className="text-sm text-gray-400 max-w-xs">
                     {description}
                </p>
           
        </div>
    )
}
function BuilderView(){
    const [generatedCode, setGeneratedCode] = useState("")
    return(
        <div className="flex flex-col lg:flex-row gap-6 h-full">
            <div className="w-full lg:w-[420px] lg:flex-shrink-0">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sticky top-6">
                    <GeneratorPanel onGenerate={setGeneratedCode}/>
                </div>
            </div>
             <div className="flex-1 min-w-0">
        <Tabs defaultValue="preview" className="w-full">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="border-b border-gray-100 px-4 pt-4">
              <TabsList className="bg-gray-100 rounded-lg p-1 h-auto">
                <TabsTrigger value="preview" className="flex items-center gap-1.5 text-sm px-4 py-1.5 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-violet-600">
                  <Eye className="w-3.5 h-3.5" /> Preview
                </TabsTrigger>
                <TabsTrigger value="code" className="flex items-center gap-1.5 text-sm px-4 py-1.5 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-violet-600">
                  <Code className="w-3.5 h-3.5" /> Code
                </TabsTrigger>
              </TabsList>
            </div>
              <TabsContent value="preview" className="m-0 min-h-[500px] p-6">
              {generatedCode ? <PreviewPanel code={generatedCode} /> : (
                <EmptyView icon={<Eye className="w-8 h-8" />} title="Nothing to preview" description="Generate a component to see it live here" />
              )}
            </TabsContent>
            <TabsContent value="code" className="m-0 min-h-[500px] p-6">
              {generatedCode ? <Output code={generatedCode} /> : (
                <EmptyView icon={<Code className="w-8 h-8" />} title="No code yet" description="Generated code will appear here" />
              )}
            </TabsContent>
          </div>
        </Tabs>
      </div>
        </div>
        
    )
}
export function ActiveView({view}:{view:ViewType}){
    switch(view){
        case "builder":
        return <BuilderView/>
        case "collections":
            return <EmptyView icon={<FolderOpen className="w-8 h-8"/>} title="Collections" description="Organize your generated components into collections"/>
        case "history":
                return <EmptyView icon={<History className="w-8 h-8"/>} title="History" description="The previously generated components will appear here"/>
        case "environments":
                return <EmptyView icon={<Globe className="w-8 h-8"/>} title="Environments" description="Manage API environments"/>
    
         case "apis":
                return <EmptyView icon={<Code2 className="w-8 h-8"/>} title="APIs" description="Browse and manage your saved APIs"/>
    
        case "settings":
                return <EmptyView icon={<Settings className="w-8 h-8"/>} title="Settings" description="Configure your wrkspace preferences"/>
    
    }
}
