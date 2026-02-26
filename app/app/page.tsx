"use client"
import { useState } from "react";
import { Boxes } from "@/components/ui/background-boxes";
import GeneratorPanel from "@/components/generator";
import Output from "@/components/output";
import PreviewPanel from "@/components/preview";
export default function Home() {
 const [generateCode, setGenerateCode] = useState("")
  return (
    
    <div className="relative min-h-screen overflow-hidden bg-transparent">
          <div className="absolute inset-0 z-0 bg-black">
            <Boxes/>
          </div>
          <div className="relative z-10 flex flex-col gap-6 p-6">
            <div className="glass-card" >
      <GeneratorPanel />
      </div>
      <div className="glass-card">
      <Output code={generateCode} />
      </div>
      <div className="glass-card">
      <PreviewPanel code={generateCode}/>
      </div>
      </div>
    </div>
  );
}