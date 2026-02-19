import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, PlayCircle, Bot, Sparkles } from "lucide-react";

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <section className="relative min-h-[85vh] flex items-center pt-32 pb-12 overflow-hidden px-6">
            {/* Background Parallax Elements */}
            <motion.div
                style={{ y: y1 }}
                className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px] -z-10"
            />
            <motion.div
                style={{ y: y2 }}
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[120px] -z-10"
            />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="z-10"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        viewport={{ once: false }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-primary uppercase tracking-widest mb-4"
                    >
                        <Bot size={14} />

                        Communication & Revenue Focused
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl font-bold text-creamy-white leading-[1.1] mb-5 tracking-tight">
                        Hire the First AI Sales Employee That Speaks <span className="text-primary italic">"Pakistani."</span>
                    </h1>

                    <p className="text-base md:text-lg text-white/50 mb-8 max-w-lg leading-relaxed">
                        Stop losing customers to language barriers and missed calls. Our AI Agents handle inquiries, book appointments, and close leads 24/7.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full sm:w-auto btn-premium !py-3 !px-6 text-sm cursor-pointer"
                        >
                            Build My AI Workforce
                            <ArrowRight size={18} />
                        </button>

                        <button className="w-full sm:w-auto btn-secondary !py-3 !px-6 text-sm">
                            <PlayCircle size={18} />
                            Watch Demo
                        </button>
                    </div>

                    {/* Benefits Badge */}
                    <div className="inline-flex flex-wrap items-center gap-x-3 gap-y-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm text-[11px] font-bold text-white/30 uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                            <Sparkles size={12} className="text-primary" />
                            Starting at PKR 20,000/mo
                        </div>
                        <div className="w-1 h-1 rounded-full bg-white/10 hidden md:block" />
                        <span>No sick days</span>
                        <div className="w-1 h-1 rounded-full bg-white/10 hidden md:block" />
                        <span>No commission</span>
                    </div>
                </motion.div>

                {/* Right Side: Phone Mockup with Bounce and Floating Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.7, y: 100 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.3
                    }}
                    className="relative flex justify-center lg:justify-end lg:pr-12"
                >
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative"
                    >
                        <div className="relative w-full max-w-[300px] aspect-[9/18] bg-[#050505] rounded-[2.5rem] border-4 border-white/10 shadow-2xl p-3 overflow-hidden">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-b-xl z-40" />

                            {/* Phone UI Header (Purple) */}
                            <div className="bg-primary/20 p-4 rounded-[1.5rem] mt-3 mb-6 flex items-center gap-3 shadow-lg border border-primary/20">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                    <Bot size={18} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-white leading-none mb-1">Discret AI</h4>
                                    <p className="text-[9px] text-primary font-bold uppercase tracking-widest">Online Now</p>
                                </div>
                            </div>

                            {/* Chat Interface */}
                            <div className="space-y-4 px-1">
                                {/* User Message - Blue */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20, scale: 0.8 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    transition={{ delay: 1.2, type: "spring" }}
                                    className="flex justify-end"
                                >
                                    <div className="bg-primary p-3 rounded-xl rounded-tr-none shadow-md">
                                        <p className="text-[10px] font-bold text-white">Salam, kya service available hai?</p>
                                    </div>
                                </motion.div>

                                {/* AI Message - Slightly different Blue or Purple */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20, scale: 0.8 }}
                                    animate={{ opacity: 1, x: 0, scale: 1 }}
                                    transition={{ delay: 2.4, type: "spring" }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-white/10 border border-white/5 p-3 rounded-xl rounded-tl-none shadow-md">
                                        <p className="text-[10px] font-bold text-white leading-relaxed">
                                            Ji bilkul! Main aap ki AI assistant hoon. Main Roman Urdu bhi samajh sakti hoon.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Waveform Animation */}
                            <div className="absolute bottom-12 left-0 right-0 px-6 flex items-end justify-center gap-1 h-12">
                                {[...Array(12)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ height: [8, Math.random() * 30 + 10, 8] }}
                                        transition={{
                                            duration: 0.7,
                                            repeat: Infinity,
                                            delay: i * 0.05,
                                            ease: "easeInOut"
                                        }}
                                        className="w-1 bg-primary/60 rounded-full"
                                    />

                                ))}
                            </div>
                            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[8px] font-bold text-white/20 uppercase tracking-[0.2em] whitespace-nowrap">
                                Voice message recognized
                            </div>
                        </div>

                        {/* Floating Brand Label */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 right-4 glass px-3 py-1.5 rounded-xl border border-white/10 shadow-2xl z-30"
                        >
                            <div className="flex items-center gap-2">
                                <Bot size={14} className="text-primary" />
                                <span className="text-[10px] font-bold">24/7 AI Sales</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
