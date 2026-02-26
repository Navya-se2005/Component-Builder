// "use client"
// import { useState } from "react";
// import { Boxes } from "@/components/ui/background-boxes";
// import GeneratorPanel from "@/components/generator";
// import Output from "@/components/output";
// import PreviewPanel from "@/components/preview";
// export default function Home() {
//  const [generateCode, setGenerateCode] = useState("")
//   return (
    
//     <div className="relative min-h-screen overflow-hidden bg-transparent">
//           <div className="absolute inset-0 z-0 bg-black">
//             <Boxes/>
//           </div>
//           <div className="relative z-10 flex flex-col gap-6 p-6">
//             <div className="glass-card" >
//       <GeneratorPanel />
//       </div>
//       <div className="glass-card">
//       <Output code={generateCode} />
//       </div>
//       <div className="glass-card">
//       <PreviewPanel code={generateCode}/>
//       </div>
//       </div>
//     </div>
//   );
// }


"use client"
import {motion} from "framer-motion"
import { Boxes } from "@/components/ui/background-boxes"
export default function Home(){
  const fadeInUp = {
    initial:{opacity:0, y:30},
    animate: {opacity:1, y:0},
    transition:{duration:0.6}
  }
  const fadeInUpDelay = (delay: number) =>( {
    initial:{opacity:0, y:30},
    animate: {opacity:1, y:0},
    transition:{duration:0.6, delay}
  })
  return (
    <main className="min-h-screen relative">
      <Boxes/>
      <motion.nav className="relative z-10 px-6 py-6 flex items-center justify-between max-w-7xl mx-auto"
      initial={{opacity:0, y:-20}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.5}} >
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"> Component Builder</div>
        <div className="flex gap-8 items-center">
          <a href="#" className="text-black hover:text-gray-600 transition-colours">Features</a>
           <a href="#" className="text-black hover:text-gray-600 transition-colours">Docs</a>
           <button className="px-6 py-2 bg-gradient-to-r from-cyan-200 to-blue-300 rounded-full text-white font-medium hover:shadow-lg hover:shadow-pink-500/50 transition-all">
           Get Started
           </button>
        </div>
      </motion.nav>
      <section className="relative z-10 px-6 pt-20 pb-32 max-w-7xl mx-auto">
        <div className="text-center">
          <motion.div className="iniline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-pink-200/20 backdrop-blur-sm mb-8" {...fadeInUp}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-2 w-2 bg-pink-500"></span>

          </span>
          <span className="text-sm text-gray-400">Generate frontends with AI</span>
          </motion.div>
          <motion.h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-pink-300 to-pink-800 bg-clip-text text-transparent leading-tight" {...fadeInUpDelay(0.1)}>
            Build Beautiful <br/>
            <span className="bg-gradient-to-r from-red-200 via-red-600 bg-clip-text text-transparent">UIs in Seconds</span>
          </motion.h1>

          <motion.p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed" {...fadeInUpDelay(0.2)}>
            Transform your ideas into frontend.

          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-3 justify-center items-center" {...fadeInUpDelay(0.3)}>
            <button className="px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-black font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105">View Examples</button>
          </motion.div>
          {/* <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 max-w-4xl mx-auto" {...fadeInUpDelay(0.4)}>
            {[
              {number:""}
            ]} */}
           {/* </motion.div> */}
        </div>
      </section>
     <section className="relative z-10 px-6 py-5 max-w-7xl mx-auto">
     <motion.div className="rounded-3xl bg-gradient-to-br from-blue-800/10 to-pink-800/10 backdrop-blur-sm border border-white/10 p-8 md:p-12"
     initial={{opacity:0, y:50}}
     whileInView={{opacity:1,y:0}}
     transition={{duration:0.8}}
     viewport={{once:true}}
     >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Generate with 
            <span className="bg-gradient-to-r from-blue-200 to-pink-300 bg-clip-text text-transparent"> Natural Language</span>
          </h2>
          <p className="text-gray-400 text-lg mb-6">Describe your vision and watch AI transform your words into production-ready components wihout any design skills required.</p>
          <ul className="space-y-4">
            {[
              "Instant component generation",
              "Responsive",
              "Customizable"
            ].map((feature, index)=>(
              <motion.li 
              key={index}
              className="flex items-center gap-3 text-gray-400"
              initial={{opacity:0, x:-20}}
              whileInView={{opacity:1, x:0}}
              transition={{delay:index*0.1}}
              viewport={{once:true}}
              >
                <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13L4 4L19 7"/>

                </svg>
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-pink-800 rounded-2xl opacity-20"></div>
          <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6 border-white/10">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            </div></div>
            <pre className="text-sm text-gray-600 font-mono">
             <code>
              tell me what to write here
             </code>
            </pre>
        </div>
      </div>
     </motion.div>
     </section>

     {/* footer */}

     <footer className="relative z-10 px-6 py-12 mt-20 border-t border-white/10">
     <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-gray-500">
        Frontend Generator
      </div>
      <div className="flex gap-6">
        <a href="#" className="text-gray-500 hover:text-black transition-colors">Privacy</a>
         <a href="#" className="text-gray-500 hover:text-black transition-colors">Terms</a>
          <a href="#" className="text-gray-500 hover:text-black transition-colors">Contact</a>
      </div>
     </div>
     </footer>
    </main>
  )

}