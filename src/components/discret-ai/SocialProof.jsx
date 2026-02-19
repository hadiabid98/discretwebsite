import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const stats = [
    { label: "Years Research", value: "5+" },
    { label: "Accuracy Rate", value: "98%" },
    { label: "Languages", value: "10+" },
    { label: "Availability", value: "24/7" },
];

const SocialProof = () => {
    return (
        <section className="py-24 px-6 bg-jet-black relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[150px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* Left Column: Founder Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}

                        className="glass p-10 rounded-[2.5rem] border border-white/10 flex flex-col items-center text-center"
                    >
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mb-6 border-2 border-primary overflow-hidden">
                            <img
                                src="/about page/Screenshot 2026-02-07 201418.png"
                                alt="Abdul Hadi Abid"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-3xl font-bold mb-2">Abdul Hadi Abid</h3>
                        <p className="text-primary font-semibold text-lg mb-4">Founder and CEO</p>

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/60 mb-6 uppercase tracking-widest">
                            <GraduationCap size={14} />
                            Innovation and Entrepreneurship Consultant
                        </div>

                        <p className="text-white/40 leading-relaxed max-w-sm">
                            4 Years of experience of helping startups grow and scale. Specializing in strategic growth and tech implementation.
                        </p>
                    </motion.div>

                    {/* Right Column: Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}

                        className="glass p-10 rounded-[2.5rem] border border-white/10 flex flex-col justify-center"
                    >
                        <p className="text-xl md:text-2xl font-medium text-creamy-white italic mb-8 leading-relaxed">
                            "We built Discret AI because existing chatbots fail Pakistani users. They can't handle our code-switching, our love for voice notes, or our cultural nuances. We do."
                        </p>
                        <div className="w-full h-px bg-gradient-to-r from-primary/40 to-transparent mb-8" />
                        <p className="text-white/60 leading-relaxed">
                            <span className="text-primary font-bold">Our mission:</span> Make AI technology accessible and effective for every Pakistani business, regardless of language preference.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom Stats Grid */}
                <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: false }}

                                className="flex flex-col items-center text-center p-6 rounded-3xl bg-white/[0.02] border border-white/5"
                            >
                                <span className="text-4xl md:text-5xl font-black text-primary mb-2 tracking-tight">{stat.value}</span>
                                <span className="text-xs text-white/40 font-bold uppercase tracking-widest">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
