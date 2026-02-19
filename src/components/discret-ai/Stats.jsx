import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({ value, suffix = "", duration = 2 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-50px" });

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref}>0{suffix}</span>;
};

const Stats = () => {
    const stats = [
        { label: "Active Agents", value: 120, suffix: "+" },
        { label: "Queries Handled", value: 850000, suffix: "+" },
        { label: "Conversion Lift", value: 35, suffix: "%" },
        { label: "Response Time", value: 1.5, suffix: "s" },
    ];

    return (
        <section className="py-24 px-6 bg-gradient-jet">
            <div className="max-w-7xl mx-auto glass p-12 rounded-[3rem] border-white/5 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: false }}

                            className="text-center"
                        >
                            <div className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-creamy-white/60 font-medium uppercase tracking-wider text-sm">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
