import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, ArrowRight, CheckCircle2 } from "lucide-react";

const LeadCapture = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        whatsappNumber: "",
        industry: "realestate",
        message: ""
    });
    const [status, setStatus] = useState("idle"); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({
                    fullName: "",
                    email: "",
                    whatsappNumber: "",
                    industry: "realestate",
                    message: ""
                });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <section id="contact" className="py-24 px-6 bg-jet-black relative flex items-center justify-center min-h-[600px]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center glass p-12 rounded-[3rem] border border-primary/20 max-w-lg"
                >
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
                        <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
                    <p className="text-white/60 mb-8">
                        Thank you for reaching out. Our team will contact you on WhatsApp or Email within 24 hours.
                    </p>
                    <button
                        onClick={() => setStatus("idle")}
                        className="btn-premium"
                    >
                        Send Another Message
                    </button>
                </motion.div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-24 px-6 bg-jet-black relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}

                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to <span className="text-primary italic">Automate</span> Your Business?
                    </h2>
                    <p className="text-lg text-white/60 mb-8">
                        Book a free pipeline strategy session with our team. See exactly where an AI Agent can save you hours of manual work.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4 p-4 glass rounded-2xl border border-white/5">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <Bot size={20} />
                            </div>
                            <div>
                                <p className="font-bold">24/7 Availability</p>
                                <p className="text-sm text-white/40">Never miss a lead, even at 3 AM.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}

                    className="glass p-8 md:p-12 rounded-[3rem] border border-white/10 bg-white/[0.02]"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/40 ml-1">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="John Doe"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/40 ml-1">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary transition-colors"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/40 ml-1">WhatsApp Number</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="+92 300 0000000"
                                    value={formData.whatsappNumber}
                                    onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/40 ml-1">Industry</label>
                                <select
                                    value={formData.industry}
                                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary transition-colors appearance-none"
                                >
                                    <option value="realestate" className="bg-jet-black">Real Estate</option>
                                    <option value="health" className="bg-jet-black">Private Clinic / Health</option>
                                    <option value="edu" className="bg-jet-black">Education / Institute</option>
                                    <option value="ecommerce" className="bg-jet-black">E-commerce / SME</option>
                                    <option value="other" className="bg-jet-black">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/40 ml-1">Message (Optional)</label>
                            <textarea
                                rows="4"
                                placeholder="Tell us about your business..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-primary transition-colors resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full btn-premium disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "loading" ? "Processing..." : "Book My Strategy Session"}
                            <ArrowRight size={20} />
                        </button>

                        {status === "error" && (
                            <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default LeadCapture;
