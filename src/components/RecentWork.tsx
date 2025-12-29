import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Clock, TrendingUp, Users } from "lucide-react";

interface Stat {
  label: string;
  value: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  bgColor: string;
  darkBgColor: string;
  textColor: string;
  darkTextColor: string;
  stats: Stat[];
  tags?: string[];
}

const caseStudies: Project[] = [
  {
    id: 1,
    title: "Qlo by SpreeAI",
    category: "Conversational UI",
    description: "Co-founded one of the most sought-after t-shirt brands in India. Over half our customers come back for more. Constantly sold out.",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop",
    bgColor: "bg-[#FDFBF7]",
    darkBgColor: "dark:bg-[#1a1814]",
    textColor: "text-gray-900",
    darkTextColor: "dark:text-gray-100",
    stats: [
      { label: "Timeline", value: "5 years" },
      { label: "Revenue", value: "0 → ₹12cr" },
      { label: "Fans", value: "180k +" }
    ]
  },
  {
    id: 2,
    title: "FreshStash",
    category: "SaaS Platform",
    description: "Laid the foundation for clean, low-code software which is a delight to use. Created a visual language & insights design system that gets out of your way.",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2680&auto=format&fit=crop",
    bgColor: "bg-[#F0EEFF]",
    darkBgColor: "dark:bg-[#1a1625]",
    textColor: "text-[#4A3AFF]",
    darkTextColor: "dark:text-[#8a80ff]",
    stats: [
      { label: "Timeline", value: "2 years" },
      { label: "Used By", value: "1k → 10k teams" },
      { label: "Github Stars", value: "5k → 16k" }
    ]
  },
  {
    id: 3,
    title: "Sleepy Owl",
    category: "D2C Brand",
    description: "Brought accessible good coffee to the masses. Converted millions from coffee drinkers to coffee enthusiasts, without the usual snobbery.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
    bgColor: "bg-[#FF6B4A]",
    darkBgColor: "dark:bg-[#4a150a]",
    textColor: "text-white",
    darkTextColor: "dark:text-gray-100",
    stats: [
      { label: "Timeline", value: "4 years" },
      { label: "Followers", value: "4k → 80k" },
      { label: "Revenue", value: "12x" }
    ]
  },
  {
    id: 4,
    title: "Last9",
    category: "DevTools",
    description: "Made a set of retro/tech illustrations and merch for a tech event. Visitors loved the retro aesthetic. Sold out.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    bgColor: "bg-[#F3F4F6]",
    darkBgColor: "dark:bg-[#1f2937]",
    textColor: "text-gray-900",
    darkTextColor: "dark:text-gray-100",
    stats: [
      { label: "Revenue", value: "Probably" },
      { label: "Fun", value: "100%" }
    ]
  },
  {
    id: 5,
    title: "Bunawat",
    category: "E-commerce",
    description: "Rebranded and brought a forty-year-old clothing store online. Added help tools for low-tech audiences, plus FaceTime with sales staff.",
    imageUrl: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2670&auto=format&fit=crop",
    bgColor: "bg-[#FAE8C8]",
    darkBgColor: "dark:bg-[#3d2f1a]",
    textColor: "text-[#5C4033]",
    darkTextColor: "dark:text-[#d4bca6]",
    stats: [
      { label: "Timeline", value: "6 months" },
      { label: "Followers", value: "2k → 12k" },
      { label: "Accessible", value: "Yes" }
    ]
  }
];

export const RecentWork = () => {
  return (
    <section id="work" className="pb-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-6">


        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-[2.5rem] ${study.bgColor} ${study.darkBgColor} transition-colors duration-300`}
            >
              <div className="flex flex-col lg:flex-row min-h-[500px] lg:h-[600px]">
                {/* Content Side */}
                <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-between z-10">
                  <div>
                    <h3 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${study.textColor} ${study.darkTextColor}`}>
                      {study.title}
                    </h3>
                    <p className={`text-lg md:text-xl leading-relaxed opacity-90 mb-8 max-w-md ${study.textColor} ${study.darkTextColor}`}>
                      {study.description}
                    </p>
                    
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold tracking-wide uppercase transition-colors
                        ${study.textColor === "text-white" 
                          ? "bg-white text-black hover:bg-gray-100" 
                          : "bg-gray-900 text-white hover:bg-black dark:bg-white dark:text-gray-900"}
                      `}
                    >
                      View Study
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>

                  <div className="mt-12 pt-8 border-t border-black/10 dark:border-white/10">
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                      {study.stats.map((stat, i) => (
                        <div key={i}>
                          <p className={`text-sm font-bold uppercase tracking-wider opacity-60 mb-1 ${study.textColor} ${study.darkTextColor}`}>
                            {stat.label}
                          </p>
                          <p className={`text-lg font-semibold ${study.textColor} ${study.darkTextColor}`}>
                            {stat.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image Side */}
                <div className="flex-1 relative min-h-[300px] lg:min-h-full">
                  <div className="absolute inset-0 lg:left-0 lg:-bottom-20 lg:right-[-10%] transition-transform duration-500 group-hover:scale-105">
                     <div className="h-full w-full p-8 lg:p-12 flex items-center justify-center">
                        <img 
                          src={study.imageUrl} 
                          alt={study.title}
                          className="w-full h-full object-cover rounded-2xl shadow-2xl rotate-[-2deg] group-hover:rotate-0 transition-all duration-500"
                        />
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
            <button className="text-gray-900 dark:text-white text-lg font-medium hover:text-[#004aad] dark:hover:text-[#004aad] transition-colors flex items-center justify-center gap-2 mx-auto group">
                View All Projects 
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
        </div>
      </div>
    </section>
  );
};