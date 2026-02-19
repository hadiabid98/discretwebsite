import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin, ArrowUpRight } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-jet-black border-t border-white/5 py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/Discret Logo Colored.png" alt="Discret Logo" className="h-8 w-auto" />
                        </div>
                        <p className="text-creamy-white/50 text-sm leading-relaxed mb-6">
                            Pioneering linguistic AI for the Pakistani market. Enabling businesses to communicate across boundaries without compromise.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-creamy-white/60 hover:bg-primary/20 hover:text-primary transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold mb-6">Product</h4>
                        <ul className="space-y-4 text-sm text-creamy-white/50">
                            {["Features", "Integration", "Pricing", "Demo"].map((item) => (
                                <li key={item} className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1 group">
                                    {item}
                                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-creamy-white/50">
                            {["About Us", "Careers", "Privacy Policy", "Terms of Service"].map((item) => (
                                <li key={item} className="hover:text-primary transition-colors cursor-pointer">{item}</li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-creamy-white/30">
                    <p>© 2024 Discret AI. All rights reserved.</p>
                    <p>Handcrafted in Islamabad 🇵🇰</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
