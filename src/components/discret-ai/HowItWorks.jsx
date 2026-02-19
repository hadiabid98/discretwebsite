import { motion } from "framer-motion";
import { Search, Settings, Rocket } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Map",
        description: "We analyze your business pipeline and identify high-impact automation spots.",
        color: "bg-primary"
    },
    {
        icon: Settings,
        title: "Train",
        description: "We feed the AI your data—Fees, FAQs, and Calendars—for custom performance.",
        color: "bg-secondary"
    },
    {
        icon: Rocket,
        title: "Deploy",
        description: "Your agent goes live on WhatsApp & Web in 48 hours. Start closing leads 24/7.",
        color: "bg-accent"
    }

];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 px-6 bg-jet-black-light relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">How It Works</h2>
                    <p className="text-creamy-white/60 text-lg max-w-2xl mx-auto">
                        From analysis to deployment in less than a week.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                viewport={{ once: false }}

                                className="flex flex-col items-center text-center group"
                            >
                                <div className={`w-20 h-20 rounded-[2rem] ${step.color} shadow-lg flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10`}>

                                    <step.icon size={32} />
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-jet-black border-2 border-white/10 flex items-center justify-center text-sm font-bold">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                <p className="text-creamy-white/60 leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
