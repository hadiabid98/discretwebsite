import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hospital, Home, GraduationCap, ShoppingBag } from "lucide-react";

const options = [
    {
        id: "clinic",
        label: "Private Clinic",
        icon: Hospital,
        title: "The Patient Coordinator that never sleeps.",
        description: "It answers queries, explains procedures in Urdu, and fills your appointment calendar while you rest."
    },
    {
        id: "realestate",
        label: "Real Estate Agency",
        icon: Home,
        title: "The Lead Qualifier that works for 0% commission.",
        description: "It filters serious buyers from 'window shoppers,' schedules site visits, and follows up instantly."
    },
    {
        id: "education",
        label: "Education/Institute",
        icon: GraduationCap,
        title: "The Admissions Officer that handles thousands of students.",
        description: "It answers FAQs about fees, deadlines, and courses, ensuring no student is left confused."
    },
    {
        id: "ecommerce",
        label: "E-commerce/SME",
        icon: ShoppingBag,
        title: "The 24/7 Sales Support.",
        description: "It handles order tracking, product questions, and complaints instantly, reducing your return rate."
    }
];

const SelfSelectionBar = () => {
    const [selected, setSelected] = useState(options[0]);

    return (
        <section id="solutions" className="py-24 px-6 bg-jet-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-12">
                    I am looking to automate my...
                </h2>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {options.map((option) => (
                        <button
                            key={option.id}
                            onClick={() => setSelected(option)}
                            className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all border ${selected.id === option.id
                                ? "bg-primary/20 border-primary text-primary shadow-lg shadow-primary/10"
                                : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"
                                }`}
                        >
                            <option.icon size={20} />
                            <span className="font-semibold">{option.label}</span>
                        </button>
                    ))}
                </div>

                {/* Dynamic Content */}
                <div className="relative min-h-[300px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selected.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="glass p-8 md:p-12 rounded-[2.5rem] max-w-4xl w-full border border-white/10"
                        >
                            <div className="flex flex-col md:flex-row items-center gap-8">
                                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <selected.icon size={48} />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                                        {selected.title}
                                    </h3>
                                    <p className="text-lg md:text-xl text-creamy-white/70 leading-relaxed mb-6">
                                        "{selected.description}"
                                    </p>
                                    <button
                                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                        className="btn-premium !py-2 !px-5 text-sm cursor-pointer"
                                    >
                                        Book for this Industry
                                    </button>
                                </div>

                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default SelfSelectionBar;
