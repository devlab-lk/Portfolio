import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { AIAgent } from "./AIAgent";
import { Search, Network, Sparkles, Code, ShieldCheck, PenTool, Frame, Globe } from "lucide-react";

interface Tool {
  name: string;
  icon: any;
  color: string;
}

interface Step {
  id: number;
  title: string;
  description: string;
  tool?: Tool;
  tools?: Tool[];
}

const steps: Step[] = [
  { 
    id: 1, 
    title: "Empathize", 
    description: "AI-analyzed user sentiment & research patterns.",
    tool: { name: "Perplexity", icon: Search, color: "bg-teal-100 text-teal-700" }
  },
  { 
    id: 2, 
    title: "Define", 
    description: "Predictive problem framing & scope definition.",
    tool: { name: "n8n", icon: Network, color: "bg-orange-100 text-orange-700" }
  },
  { 
    id: 3, 
    title: "Ideate", 
    description: "Generative AI brainstorming & variation exploration.",
    tool: { name: "BMAD", icon: Sparkles, color: "bg-purple-100 text-purple-700" }
  },
  { 
    id: 4, 
    title: "Prototype", 
    description: "Rapid component generation & interaction design.",
    tools: [
      { name: "Figma", icon: PenTool, color: "bg-rose-100 text-rose-700" },
      { name: "Framer", icon: Frame, color: "bg-gray-100 text-gray-700" },
      { name: "Webflow", icon: Globe, color: "bg-blue-100 text-blue-700" }
    ]
  },
  { 
    id: 5, 
    title: "Test", 
    description: "Simulated user testing & predictive analytics.",
    tool: { name: "AutoGPT", icon: ShieldCheck, color: "bg-green-100 text-green-700" }
  },
];

const CyclingToolBadge = ({ tools, delayIndex }: { tools: Tool[], delayIndex: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tools.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [tools.length]);

  const currentTool = tools[currentIndex];

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      animate={{ y: [0, -8, 0] }}
      transition={{ 
        scale: { delay: 0.8 + (delayIndex * 0.2), type: "spring" },
        opacity: { delay: 0.8 + (delayIndex * 0.2) },
        y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: delayIndex * 0.5 }
      }}
      className={`absolute top-[-40px] z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-xl shadow-sm border border-white/50 backdrop-blur-sm transition-colors duration-500 ${currentTool.color}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTool.name}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-1.5"
        >
          <currentTool.icon className="w-3.5 h-3.5" />
          <span className="text-xs font-bold">{currentTool.name}</span>
        </motion.div>
      </AnimatePresence>
      
      {/* Connecting line to circle */}
      <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-px h-2 bg-gray-300" />
    </motion.div>
  );
};

export const DesignProcess = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to the movement of the agent along the x-axis
  const agentX = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "85%"]);

  return (
    <section id="process" className="py-32 relative bg-gray-50 overflow-hidden" ref={containerRef}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#004aad]/10 text-[#004aad] text-xs font-bold tracking-wider uppercase mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#004aad]/40 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#004aad]"></span>
            </span>
            AI-Augmented Workflow
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Intelligent Design Process</h2>
          <p className="text-gray-600 text-lg">Leveraging specialized AI agents to accelerate every stage of the product lifecycle.</p>
        </div>

        {/* Timeline Container */}
        <div className="relative py-20">
          {/* Connecting Line (Dashed) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-[#004aad]/20 -translate-y-1/2 hidden md:block" />

          {/* Animated Moving Agent */}
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-10 hidden md:block pointer-events-none px-12">
            <motion.div style={{ left: agentX }} className="relative w-16 h-16 -mt-8 -ml-8">
               <div className="relative">
                 <AIAgent state="thinking" />
                 {/* Data Beam Effect */}
                 <motion.div 
                   animate={{ height: [0, 60, 0], opacity: [0, 0.5, 0] }}
                   transition={{ duration: 1.5, repeat: Infinity }}
                   className="absolute top-full left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-[#004aad] to-transparent blur-[1px]"
                 />
               </div>
            </motion.div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 relative z-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{ delay: index * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Tool Badge (Cyclic or Static) */}
                {step.tools ? (
                  <CyclingToolBadge tools={step.tools} delayIndex={index} />
                ) : (
                   step.tool && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ 
                        scale: { delay: 0.8 + (index * 0.2), type: "spring" },
                        opacity: { delay: 0.8 + (index * 0.2) },
                        y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }
                      }}
                      className={`absolute top-[-40px] z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-xl shadow-sm border border-white/50 backdrop-blur-sm ${step.tool.color}`}
                    >
                      <step.tool.icon className="w-3.5 h-3.5" />
                      <span className="text-xs font-bold">{step.tool.name}</span>
                      
                      {/* Connecting line to circle */}
                      <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-px h-2 bg-gray-300" />
                    </motion.div>
                   )
                )}

                {/* Connection Line to Step (Vertical) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full h-20 w-px bg-gradient-to-b from-transparent to-[#004aad]/20 hidden md:block" />

                {/* Step Circle */}
                <div className="w-16 h-16 rounded-full bg-white border-4 border-[#004aad]/10 flex items-center justify-center shadow-sm mb-6 group-hover:border-[#004aad]/40 group-hover:scale-110 transition-all duration-500 z-20 relative overflow-hidden">
                  <span className="text-xl font-bold text-[#004aad] relative z-10">{index + 1}</span>
                  
                  {/* Filling Animation representing data injection */}
                  <motion.div 
                    initial={{ y: "100%" }}
                    whileInView={{ y: "0%" }}
                    transition={{ delay: 0.5 + (index * 0.2), duration: 0.8 }}
                    className="absolute inset-0 bg-[#004aad]/10 z-0"
                  />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 px-2">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};