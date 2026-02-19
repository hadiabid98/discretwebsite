import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, Bot } from "lucide-react";
import { useState } from "react";

const WhatsAppWidget = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div
            className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Tooltip/Popup - Theme Matched (Blue) */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20, originX: 1, originY: 1 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        className="bg-[#121212] rounded-[1.8rem] shadow-2xl border border-white/10 w-[300px] overflow-hidden mb-2"
                    >
                        {/* Header */}
                        <div className="p-4 flex items-center justify-between bg-white/[0.02] border-b border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                    <Bot size={22} />
                                </div>
                                <div className="leading-tight">
                                    <h4 className="text-sm font-bold text-white">Discret AI</h4>
                                    <p className="text-[10px] text-primary font-bold uppercase tracking-wider">Online now</p>
                                </div>
                            </div>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsVisible(false);
                                }}
                                className="w-8 h-8 rounded-full hover:bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Message Content */}
                        <div className="p-4">
                            <div className="bg-white/5 rounded-2xl p-4 mb-4">
                                <p className="text-[13px] text-white/80 leading-relaxed font-medium">
                                    Salam! 👋 Want to see how AI can automate your business? Chat with me!
                                </p>
                            </div>

                            <a
                                href="https://wa.me/923000000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-blue-600 text-white py-3.5 rounded-2xl text-sm font-black transition-all transform active:scale-95 shadow-lg shadow-primary/20"
                            >
                                <MessageCircle size={18} fill="currentColor" />
                                Start Chat
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Toggle Button - Theme Matched (Blue) */}
            <motion.a
                href="https://wa.me/923000000000"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-[0_10px_30px_rgba(59,130,246,0.4)] relative"
            >
                <MessageCircle size={32} fill="currentColor" />
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20 pointer-events-none" />
            </motion.a>
        </div>
    );
};

export default WhatsAppWidget;
