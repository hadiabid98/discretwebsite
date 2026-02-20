import { motion } from "framer-motion";
import { Play, Pause, Volume2, User, Bot } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const AudioDemo = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // Toggle Play/Pause
    const handleToggle = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(err => console.log("Audio play failed:", err));
        }
        setIsPlaying(!isPlaying);
    };

    // Reset UI when audio ends
    const handleEnded = () => {
        setIsPlaying(false);
    };

    return (
        <section className="py-24 px-6 bg-jet-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Don't Believe It? <span className="text-primary italic">Listen</span> to Discret AI in Action.
                    </h2>
                    <p className="text-creamy-white/60 text-lg">
                        A Real Estate inquiry in Roman Urdu.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto glass p-6 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border border-white/10 relative">
                    {/* Audio Tag */}
                    <audio
                        ref={audioRef}
                        src="/audio/AI audio proof (online-audio-converter.com).mp3"
                        onEnded={handleEnded}
                        preload="metadata"
                    />

                    <div className="absolute top-0 right-0 p-8 opacity-10 hidden md:block">
                        <Volume2 size={120} />
                    </div>

                    <div className="space-y-6 md:space-y-8 relative">
                        {/* User Inquiry */}
                        <div className="flex gap-3 md:gap-4 items-start">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 shrink-0">
                                <User size={18} />
                            </div>
                            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none">
                                <p className="text-[10px] md:text-xs font-medium text-white/40 mb-1 uppercase tracking-wider">Customer (Audio)</p>
                                <p className="text-sm md:text-lg leading-snug">"Salam, Bahria Town walay project ki payment plan send karden."</p>
                            </div>
                        </div>

                        {/* Audio Player UI */}
                        <div className="bg-jet-black/50 border border-white/5 p-4 md:p-6 rounded-[2rem] flex items-center gap-4 md:gap-6">
                            <button
                                onClick={handleToggle}
                                className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-primary/40 shrink-0"
                            >
                                {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
                            </button>
                            <div className="flex-1 space-y-2 overflow-hidden">
                                <div className="flex justify-between text-[10px] md:text-xs text-white/40 mb-1">
                                    <span>{isPlaying ? "0:04" : "0:00"}</span>
                                    <span>0:15</span>
                                </div>
                                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mb-3">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: isPlaying ? "30%" : "0%" }}
                                        className="h-full bg-primary"
                                    />
                                </div>
                                <div className="flex gap-1 h-4 md:h-6 items-center">
                                    {[...Array(20)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ height: isPlaying ? [4, Math.random() * 12 + 4, 4] : 4 }}
                                            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
                                            className="w-1 bg-primary/40 rounded-full"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* AI Reply */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex gap-3 md:gap-4 items-start justify-end"
                        >
                            <div className="bg-primary/20 border border-primary/20 p-4 rounded-2xl rounded-tr-none text-right">
                                <p className="text-[10px] md:text-xs font-medium text-primary mb-1 uppercase tracking-wider">Discret AI (Reply)</p>
                                <p className="text-sm md:text-lg leading-snug">"Walaikum Assalam! Ji zaroor. Bahria Town Phase 8 ke liye 3 saal ka plan attach kar raha hoon. Kya aap site visit karna chahengay?"</p>
                            </div>
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                <Bot size={18} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AudioDemo;
