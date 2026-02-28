"use client"
import { useState } from "react";
import { Boxes } from "@/components/ui/background-boxes";
import GeneratorPanel from "@/components/generator";
import Output from "@/components/output";
import PreviewPanel from "@/components/preview";
import { Code2, Eye, Sparkles } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
export default function Home() {
 const [generateCode, setGenerateCode] = useState("")
  return (
    <>
   <div className="min-h-screen bg-gray-50">
    <header className="border-b bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-indigo-500" />
       <h1 className="text-lg font-semibold text-gray-800 tracking-tight">Component Builder</h1>
      </div>
    </header>
    </div> 
    <main className="max-w-screen-xl mx-auto px-6 py-4">
      <div className="flex flex-col lg:flex-row gap-6 min-h-[calc(100vh-73px)]">
        <div className="w-full lg:w-[420px] lg:flex-shrink-0" >
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sticky top-24">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Generator</h2>
          <GeneratorPanel onGenerate={setGenerateCode}/>
          </div>
        </div>
        <div className="flex-1 min-w-0 flex flex-col">
          <Tabs defaultValue="preview" className="w-full flex-1 flex flex-col">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex-1 flex flex-col">
              <div className="border-b border-gray-100 px-4 pt-4">
                <TabsList className="bg-gray-100 rounded-lg p-1 h-auto">
                  <TabsTrigger value="preview" className="flex items-center gap-1.5 text-sm px-4 py-1.5 rounded-md data-[state=active]:bg-white data-[state-active]:shadow-sm data-[state=active]:text-indigo-600">
                    <Eye className="w-3.5 h-3.5" />
                    Preview
                  </TabsTrigger>
                  <TabsTrigger value="code" className="flex items-center gap-1.5 text-sm px-4 py-2 round-md data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-indigo-600">
                   <Code2 className="w-3 h-3"/>
                   Code
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="preview" className="m-0 flex-1">
                <div className="h-full min-h-[500px] p-6">
                  {generateCode ? (
                    <PreviewPanel code={generateCode}/>
                   ): (
                    <EmptyState icon = {<Eye className="w-8 h-8"/>} message="The component preview will appear here"/>
                   )}
                </div>
              </TabsContent>

              <TabsContent value="code" className="m-0">
                <div className="min-h-[500px] p-6">
                  {generateCode ? (
                    <Output code={generateCode}/>
                   ) : (
                    <EmptyState icon={<Code2 className="w-8 h-8"/>} message="Generated code will appear here"/>
                   )}
                </div>
              </TabsContent>

            </div>
          </Tabs>
        </div>
      </div>
    </main>
    
    </>
  );
}
function EmptyState({icon, message} : {icon: React.ReactNode; message:string}){
  return(
    <div className="flex flex-col items-center justify-center h-[460px] text-gray-300 gap-3">
    <div className="p-4 rounded-full bg-gray-50 border border-gray-100">
      {icon}
    </div>
    <p className="text-sm text-gray-400 text-center max-w-xs">{message}</p>
    </div>
  );
}