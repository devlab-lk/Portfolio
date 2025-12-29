import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";

export const Footer = () => {
  return (
    <footer id="contact" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        
        <div className="container mx-auto px-6">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                    Ready to create something <br/>
                    <span className="text-[#004aad]">extraordinary?</span>
                </h2>
                <p className="text-xl text-gray-500 mb-12">
                    Whether you have a project in mind or just want to say hi, I'm always open to discussing new ideas and opportunities.
                </p>
                
                <a 
                    href="mailto:hello@thilina.design" 
                    className="px-10 py-5 bg-gray-900 text-white rounded-full text-lg font-medium hover:bg-[#004aad] transition-colors shadow-xl shadow-[#004aad]/20 mb-16"
                >
                    Say Hello
                </a>

                <div className="flex space-x-8 mb-16">
                    {[
                        { icon: Linkedin, href: "#" },
                        { icon: Twitter, href: "#" },
                        { icon: Github, href: "#" },
                        { icon: Mail, href: "#" }
                    ].map((social, i) => (
                        <a 
                            key={i} 
                            href={social.href}
                            className="p-3 rounded-full bg-gray-50 text-gray-600 hover:bg-[#004aad]/10 hover:text-[#004aad] transition-colors"
                        >
                            <social.icon className="w-6 h-6" />
                        </a>
                    ))}
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-sm text-gray-500">
                <p>© {new Date().getFullYear()} Thilina Jeewantha. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-gray-900">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-900">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
  );
};
