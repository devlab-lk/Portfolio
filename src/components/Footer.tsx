import { Github, Linkedin, Twitter, Mail, Send } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="py-24 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">
        
        <div className="container mx-auto px-6">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                
                {/* Hand/Icon */}
                <div className="mb-8 text-[#004aad]">
                   <Send className="w-16 h-16" strokeWidth={1.5} />
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12">
                    Send project <br/>
                    enquiries
                </h2>
                
                <a 
                    href="mailto:hello@thilina.design" 
                    className="inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-200 dark:border-gray-800 rounded-full text-lg font-medium text-gray-900 dark:text-white hover:border-[#004aad] dark:hover:border-[#004aad] hover:text-[#004aad] dark:hover:text-[#004aad] transition-all duration-300 group bg-white dark:bg-gray-900"
                >
                    <Mail className="w-5 h-5 text-gray-400 group-hover:text-[#004aad] transition-colors" />
                    hello@thilina.design
                </a>

                <div className="mt-24 pt-12 border-t border-gray-100 dark:border-gray-900 w-full flex flex-col items-center">
                    <div className="text-[#004aad] font-bold text-2xl mb-4">
                        Thilina.
                    </div>
                    <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
                        For the love of design
                    </p>
                    <p className="text-xs text-gray-300 dark:text-gray-700 mt-2">
                        © {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </div>
    </footer>
  );
};