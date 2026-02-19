import { motion } from "framer-motion";
import { Zap, Mic, Globe, Shield, MessageCircle, BarChart } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
            y: -12,
            scale: 1.02,
            transition: { duration: 0.3, ease: "easeOut" }
        }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: false, margin: "-100px" }}
        className="glass p-8 rounded-[2.5rem] group relative overflow-hidden transition-all border border-white/5 hover:border-primary/30 shadow-2xl shadow-black/40"
    >
        {/* Hover Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Animated Icon Container */}
        <div className="relative w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:rotate-6 transition-all duration-300">
            <Icon className="text-primary group-hover:scale-110 transition-transform duration-300" size={30} />
            {/* Simple Glow behind icon */}
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        <h3 className="relative text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="relative text-creamy-white/60 leading-relaxed group-hover:text-creamy-white/80 transition-colors duration-300">
            {description}
        </p>
    </motion.div>
);

const Features = () => {
    const features = [
        {
            icon: MessageCircle,
            title: "Code-Switching Engine",
            description: "Mix English and Urdu? No problem. We understand 'Yaar, price kya hai?' just as well as 'What is the price?'",
        },
        {
            icon: Mic,
            title: "Voice-Native Experience",
            description: "60% of Pakistanis prefer Voice Notes. Our AI listens to audio and replies instantly in a natural tone.",
        },
        {
            icon: Globe,
            title: "Omnichannel Presence",
            description: "One brain, everywhere. Your AI agent lives on your Website, WhatsApp, and Instagram simultaneously.",
        },
        {
            icon: Shield,
            title: "Data Sovereignty",
            description: "Secure, enterprise-grade infrastructure. Your customer data stays private and encrypted at all times.",
        },
        {
            icon: BarChart,
            title: "Real-time Analytics",
            description: "Track performance, conversion rates, and customer sentiment through an intuitive dashboard.",
        },
        {
            icon: Zap,
            title: "Instant Deployment",
            description: "Go live in days, not months. Our pre-trained base models understand the Pakistani market context out-of-the-box.",
        },
    ];

    return (
        <section id="solutions" className="py-24 px-6 bg-jet-black relative">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto text-center mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    className="text-3xl md:text-5xl font-bold mb-6"

                >
                    Most AI Bots Break When You Speak <span className="text-primary italic">"Desi."</span> We Don't.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: false }}
                    className="text-creamy-white/60 max-w-2xl mx-auto text-lg"

                >
                    Built specifically for the linguistic nuances of Pakistan. From Roman Urdu to heavy regional accents, we've got you covered.
                </motion.p>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        {...feature}
                        delay={index * 0.1}
                    />
                ))}
            </div>
        </section>
    );
};

export default Features;
