import { motion } from "framer-motion";
import { Mic, Zap, Globe, Check, X } from "lucide-react";

const advantages = [
    {
        icon: Zap,
        title: "Code-Switching Engine",
        description: "Mix English and Urdu? No problem. We understand 'Yaar, price kya hai?' just as well as 'What is the price?'",
        color: "from-primary/20 to-secondary/20"
    },

    {
        icon: Mic,
        title: "Voice-Native Experience",
        description: "60% of Pakistanis prefer Voice Notes over typing. Our AI listens to audio and replies instantly.",
        color: "from-accent/20 to-secondary/20"
    },

    {
        icon: Globe,
        title: "Omnichannel Presence",
        description: "One brain, everywhere. Your AI agent lives on your Website, WhatsApp, and Instagram simultaneously.",
        color: "from-orange-500/20 to-red-500/20"
    }

];

const AdvantageGrid = () => {
    return (
        <section id="advantage" className="py-24 px-6 bg-jet-black-light relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Most AI Bots Break When You Speak <span className="text-primary italic">"Desi."</span> We Don't.
                    </h2>
                    <p className="text-creamy-white/60 text-lg max-w-2xl mx-auto">
                        We built our own NLP engine specifically for the Pakistani market, culture, and slang.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {advantages.map((adv, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: false }}
                            className="glass p-8 rounded-3xl border border-white/5 relative group hover:border-primary/30 transition-colors"

                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${adv.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none`} />
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <adv.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{adv.title}</h3>
                            <p className="text-creamy-white/60 leading-relaxed">
                                {adv.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Comparison Table */}
                <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[2.5rem] border border-white/10 overflow-hidden relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                                    <X size={20} />
                                </div>
                                <h4 className="text-xl font-bold text-red-500">Other AI Bots</h4>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Break on mixed language input",
                                    "Text-only, no voice support",
                                    "Limited to one platform",
                                    "Struggles with Pakistani accents"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-creamy-white/40">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/40 mt-2" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
                            <div className="relative">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Check size={20} />
                                    </div>
                                    <h4 className="text-xl font-bold text-primary">Discret AI</h4>

                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "Fluent in English, Urdu, and Roman Urdu",
                                        "Voice-first: Understands audio messages",
                                        "Omnichannel: Lives on WhatsApp, Web, Meta",
                                        "Cultural Nuance: Understands local slang"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-creamy-white/80 font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvantageGrid;
