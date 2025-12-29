import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Qlo by SpreeAI",
    category: "Conversational UI",
    imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop",
    bgColor: "bg-gray-100"
  },
  {
    id: 2,
    title: "FreshStash",
    category: "Ingredient Management App",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2680&auto=format&fit=crop",
    bgColor: "bg-[#b87542]"
  },
  {
    id: 3,
    title: "Wellness Tracker",
    category: "Health & Fitness",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
    bgColor: "bg-[#e8f4f8]"
  },
  {
    id: 4,
    title: "Finance Dashboard",
    category: "UX/UI Design",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    bgColor: "bg-gray-900"
  },
  {
    id: 5,
    title: "Finance Dashboard",
    category: "UX/UI Design",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    bgColor: "bg-gray-900"
  }
];

export const RecentWork = () => {
  return (
    <section id="work" className="py-32 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Selected Works</h2>
            <p className="text-gray-600 text-lg">A curated collection of projects pushing the boundaries of UX and UI.</p>
          </div>
          <button className="hidden md:block text-[#004aad] font-medium hover:text-[#0066dd] transition-colors mt-6 md:mt-0">
            View All Projects &rarr;
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative">
                {/* Image Card */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl h-[480px] relative overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-gray-100"
                >
                  {/* Full Cover Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${study.imageUrl})` }}
                  />

                  {/* Arrow Icon - Hidden by default, appears on hover */}
                  <motion.div 
                    className="absolute top-8 left-8 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300"
                  >
                    <ArrowUpRight className="w-6 h-6 text-gray-900" />
                  </motion.div>

                  {/* Hover Overlay Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-[#004aad]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>

                {/* Title and Category - Below Card, Side by Side */}
                <motion.div 
                  className="mt-6 flex items-start justify-between gap-4 transition-all duration-300 group-hover:-translate-y-1"
                >
                  <motion.h3 
                    className="text-2xl font-bold text-gray-900 transition-all duration-300 flex-1"
                  >
                    {study.title}
                  </motion.h3>
                  <motion.p 
                    className="text-base text-gray-600 transition-all duration-300 group-hover:text-gray-900 text-right"
                  >
                    {study.category}
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <button className="text-[#004aad] font-medium hover:text-[#0066dd] transition-colors">
                View All Projects &rarr;
            </button>
        </div>
      </div>
    </section>
  );
};