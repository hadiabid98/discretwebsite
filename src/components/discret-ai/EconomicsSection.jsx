'use client';

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    User, Bot, TrendingDown, TrendingUp,
    MessageCircle, Languages, Mic, Paperclip,
    Zap, Globe, Shield, ChevronDown, Check,
    Image, FileVideo, Plus, Minus
} from "lucide-react";

/* ──────────────────────────────────────────────────
   CALCULATION LOGIC
   ────────────────────────────────────────────────── */
function calculateCosts({ conversations, languages, voiceNotes, fileAttachments, imgFiles, videoFiles }) {
    // ── Discret AI Cost ──────────────────────────────
    const BASE_FEE = 20000;   // includes 1,000 conv + 2 langs
    const BASE_CONV = 1000;
    const BASE_LANGS = 2;

    // Conversation overage: +5,000 per 1,000 conversations above base
    const extraConv = Math.max(0, conversations - BASE_CONV);
    const convOverage = Math.ceil(extraConv / 1000) * 5000;

    // Language overage:
    //   extra langs < 3  → 8,000 per lang
    //   extra langs >= 3 → 6,000 per lang (bulk discount)
    const extraLangs = Math.max(0, languages - BASE_LANGS);
    let langOverage = 0;
    if (extraLangs > 0) {
        langOverage = extraLangs < 3
            ? extraLangs * 8000
            : extraLangs * 6000;
    }

    // Voice notes add-on: flat PKR 15,000
    const voiceCost = voiceNotes ? 15000 : 0;

    // File attachments:
    //   Image files  → PKR 1,000 / file
    //   Video / docs (≤ 30 MB) → PKR 2,500 / file
    const imgCost = fileAttachments ? imgFiles * 1000 : 0;
    const videoCost = fileAttachments ? videoFiles * 2500 : 0;
    const fileCost = imgCost + videoCost;

    const aiTotal = BASE_FEE + convOverage + langOverage + voiceCost + fileCost;

    // ── Human Cost ───────────────────────────────────
    const agentsNeeded = Math.ceil(conversations / 500);
    const humanTotal = agentsNeeded * 40000;

    // ── Savings ──────────────────────────────────────
    const savings = humanTotal - aiTotal;
    const savingsPct = humanTotal > 0 ? Math.round((savings / humanTotal) * 100) : 0;

    return { aiTotal, humanTotal, agentsNeeded, savings, savingsPct, convOverage, langOverage };
}

const fmt = (n) => n.toLocaleString("en-PK");

/* ──────────────────────────────────────────────────
   ANIMATED NUMBER
   ────────────────────────────────────────────────── */
function AnimatedNumber({ value }) {
    return (
        <AnimatePresence mode="wait">
            <motion.span
                key={value}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.25 }}
                style={{ display: "inline-block" }}
            >
                {fmt(value)}
            </motion.span>
        </AnimatePresence>
    );
}

/* ──────────────────────────────────────────────────
   SLIDER COMPONENT
   ────────────────────────────────────────────────── */
function Slider({ label, icon: Icon, value, min, max, step, onChange, displayValue, accent = "#F68D20" }) {
    const pct = ((value - min) / (max - min)) * 100;

    return (
        <div style={{ marginBottom: "28px", position: "relative" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: `${accent}20`, display: "flex", alignItems: "center", justifyContent: "center", color: accent }}>
                        <Icon size={16} />
                    </div>
                    <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>{label}</span>
                </div>
                <span style={{ fontWeight: 800, color: accent }}>{displayValue}</span>
            </div>

            <div style={{ position: "relative", height: "32px", display: "flex", alignItems: "center" }}>
                {/* Background Track - Behind the input */}
                <div style={{ width: "100%", height: "8px", background: "rgba(255,255,255,0.08)", borderRadius: "100px", position: "relative", pointerEvents: "none" }}>
                    {/* Progress Bar */}
                    <div style={{ width: `${pct}%`, height: "100%", background: accent, borderRadius: "100px" }} />
                    {/* Visual Thumb */}
                    <div style={{
                        position: "absolute",
                        left: `calc(${pct}% - 10px)`,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: "20px", height: "20px",
                        borderRadius: "50%",
                        background: "white",
                        border: `4px solid ${accent}`,
                        boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
                        zIndex: 2
                    }} />
                </div>

                {/* Real Interaction Layer - On top of everything */}
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (!isNaN(val)) onChange(val);
                    }}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        cursor: "pointer",
                        opacity: 0,
                        zIndex: 20,
                        margin: 0,
                        WebkitAppearance: "none",
                        appearance: "none"
                    }}
                />
            </div>

            {/* Labels */}
            <div style={{
                display: "flex", justifyContent: "space-between",
                fontSize: "0.7rem", color: "rgba(255,255,255,0.3)",
                fontWeight: 600,
                marginTop: "6px"
            }}>
                <span>{fmt(min)}</span>
                <span>{max >= 20000 ? "20,000+" : fmt(max)}</span>
            </div>
        </div>
    );
}

/* ──────────────────────────────────────────────────
   TOGGLE ADD-ON
   ────────────────────────────────────────────────── */
function Toggle({ icon: Icon, label, sublabel, checked, onChange, price }) {
    return (
        <button
            onClick={() => onChange(!checked)}
            style={{
                width: "100%",
                display: "flex", alignItems: "center",
                gap: "12px",
                padding: "14px 16px",
                borderRadius: "16px",
                border: checked
                    ? "1px solid rgba(246,141,32,0.5)"
                    : "1px solid rgba(255,255,255,0.08)",
                background: checked
                    ? "rgba(246,141,32,0.08)"
                    : "rgba(255,255,255,0.03)",
                cursor: "pointer",
                transition: "all 0.25s",
                textAlign: "left"
            }}
        >
            <div style={{
                width: "36px", height: "36px", borderRadius: "10px",
                background: checked ? "rgba(246,141,32,0.2)" : "rgba(255,255,255,0.05)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: checked ? "#F68D20" : "rgba(255,255,255,0.4)",
                flexShrink: 0, transition: "all 0.25s"
            }}>
                <Icon size={18} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{
                    fontWeight: 700, fontSize: "0.85rem",
                    color: checked ? "white" : "rgba(255,255,255,0.6)",
                    margin: 0, transition: "color 0.25s"
                }}>{label}</p>
                <p style={{
                    fontSize: "0.72rem",
                    color: "rgba(255,255,255,0.35)", margin: 0
                }}>{sublabel}</p>
            </div>
            <div style={{
                display: "flex", alignItems: "center", gap: "8px", flexShrink: 0
            }}>
                <span style={{
                    fontSize: "0.75rem", fontWeight: 700,
                    color: checked ? "#F68D20" : "rgba(255,255,255,0.3)"
                }}>+{fmt(price)} PKR</span>
                <div style={{
                    width: "20px", height: "20px", borderRadius: "6px",
                    border: checked
                        ? "2px solid #F68D20"
                        : "2px solid rgba(255,255,255,0.2)",
                    background: checked ? "#F68D20" : "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.25s"
                }}>
                    {checked && <Check size={12} color="white" />}
                </div>
            </div>
        </button>
    );
}

/* ──────────────────────────────────────────────────
   FEATURE COMPARISON TABLE
   ────────────────────────────────────────────────── */
const FEATURES = [
    { label: "Availability", human: "8 hrs/day (shifts)", ai: "24/7 / 365 days", highlight: true },
    { label: "Response Time", human: "Minutes to hours", ai: "Instant (< 1 sec)", highlight: true },
    { label: "Language Support", human: "1–2 languages", ai: "Up to 10+ languages", highlight: false },
    { label: "Weekend Coverage", human: "Additional cost", ai: "Included", highlight: false },
    { label: "Sick Days", human: "Yes", ai: "Never", highlight: false },
    { label: "Training Required", human: "1–2 months", ai: "Instant deployment", highlight: true },
    { label: "Consistency", human: "Variable", ai: "Always consistent", highlight: false },
    { label: "Commission", human: "Often", ai: "0% — ever", highlight: false },
];

/* ──────────────────────────────────────────────────
   MAIN COMPONENT
   ────────────────────────────────────────────────── */
export default function EconomicsSection() {
    const [conversations, setConversations] = useState(1000);
    const [languages, setLanguages] = useState(2);
    const [voiceNotes, setVoiceNotes] = useState(false);
    const [fileAttachments, setFileAttachments] = useState(false);
    const [imgFiles, setImgFiles] = useState(1);
    const [videoFiles, setVideoFiles] = useState(1);
    const [showTable, setShowTable] = useState(false);

    const { aiTotal, humanTotal, agentsNeeded, savings, savingsPct } = useMemo(
        () => calculateCosts({ conversations, languages, voiceNotes, fileAttachments, imgFiles, videoFiles }),
        [conversations, languages, voiceNotes, fileAttachments, imgFiles, videoFiles]
    );

    const savingsPositive = savings > 0;

    return (
        <section
            id="economics"
            style={{
                padding: "96px 0",
                background: "linear-gradient(180deg, #050505 0%, #0a0a0a 100%)",
                position: "relative",
                overflow: "hidden"
            }}
        >
            {/* Ambient glow */}
            <div style={{
                position: "absolute", top: "20%", left: "50%",
                transform: "translateX(-50%)",
                width: "600px", height: "300px",
                background: "radial-gradient(ellipse, rgba(246,141,32,0.06) 0%, transparent 70%)",
                pointerEvents: "none"
            }} />

            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>

                {/* ── HEADER ──────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: "center", marginBottom: "64px" }}
                >
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: "8px",
                        padding: "6px 16px", borderRadius: "100px",
                        border: "1px solid rgba(246,141,32,0.3)",
                        background: "rgba(246,141,32,0.08)",
                        fontSize: "0.72rem", fontWeight: 800,
                        color: "#F68D20", textTransform: "uppercase",
                        letterSpacing: "0.12em", marginBottom: "20px"
                    }}>
                        <Zap size={11} />
                        Real-Time Cost Calculator
                    </div>
                    <h2 style={{
                        fontSize: "clamp(1.75rem, 5vw, 3.25rem)",
                        fontWeight: 900, lineHeight: 1.1,
                        margin: "0 0 16px 0", letterSpacing: "-0.02em"
                    }}>
                        The Cost of a{" "}
                        <span style={{ color: "#F4145C" }}>Human</span>
                        {" "}vs. The Cost of{" "}
                        <span style={{
                            background: "linear-gradient(135deg, #F68D20, #F4145C)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontStyle: "italic"
                        }}>Discret AI</span>.
                    </h2>
                    <p style={{
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                        maxWidth: "520px", margin: "0 auto", lineHeight: 1.6
                    }}>
                        Move the sliders to see your exact savings in real time.
                    </p>
                </motion.div>

                {/* ── STATIC COMPARISON CARDS ─────────── */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "16px",
                    marginBottom: "48px"
                }}>
                    {/* Human */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{
                            padding: "28px",
                            borderRadius: "24px",
                            border: "1px solid rgba(244,20,92,0.2)",
                            background: "rgba(244,20,92,0.04)",
                            backdropFilter: "blur(12px)"
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                            <div style={{
                                width: "44px", height: "44px", borderRadius: "12px",
                                background: "rgba(244,20,92,0.15)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                color: "#F4145C"
                            }}>
                                <User size={22} />
                            </div>
                            <div>
                                <p style={{ fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>Human Employee</p>
                                <p style={{ color: "#F4145C", fontSize: "0.78rem", fontWeight: 600, margin: 0 }}>Expensive & Limited</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", flexWrap: "wrap", gap: "4px" }}>
                            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>Salary / agent</span>
                            <span style={{ fontWeight: 800, fontSize: "1.1rem" }}>40,000+ PKR</span>
                        </div>
                        <div style={{ height: "6px", background: "rgba(255,255,255,0.06)", borderRadius: "100px", marginBottom: "16px" }}>
                            <div style={{ width: "80%", height: "100%", background: "rgba(244,20,92,0.5)", borderRadius: "100px" }} />
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                            {[["Training Time", "1–2 Months"], ["Availability", "8 Hrs/Day"]].map(([k, v]) => (
                                <div key={k} style={{
                                    padding: "10px 12px", borderRadius: "12px",
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.06)"
                                }}>
                                    <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", margin: "0 0 3px 0", fontWeight: 700 }}>{k}</p>
                                    <p style={{ fontWeight: 700, margin: 0, fontSize: "0.9rem" }}>{v}</p>
                                </div>
                            ))}
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "14px", color: "rgba(244,20,92,0.7)" }}>
                            <TrendingDown size={14} />
                            <span style={{ fontSize: "0.78rem" }}>High management overhead</span>
                        </div>
                    </motion.div>

                    {/* Discret AI */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{
                            padding: "28px",
                            borderRadius: "24px",
                            border: "1px solid rgba(246,141,32,0.35)",
                            background: "rgba(246,141,32,0.06)",
                            backdropFilter: "blur(12px)",
                            position: "relative", overflow: "hidden"
                        }}
                    >
                        <div style={{
                            position: "absolute", top: "-20px", right: "-20px",
                            opacity: 0.04
                        }}>
                            <Bot size={160} />
                        </div>
                        <div style={{ position: "relative" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                                <div style={{
                                    width: "44px", height: "44px", borderRadius: "12px",
                                    background: "rgba(246,141,32,0.2)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: "#F68D20"
                                }}>
                                    <Bot size={22} />
                                </div>
                                <div>
                                    <p style={{ fontWeight: 800, fontSize: "1.1rem", margin: 0 }}>Discret AI Agent</p>
                                    <p style={{ color: "#F68D20", fontSize: "0.78rem", fontWeight: 600, margin: 0 }}>Unlimited Scale</p>
                                </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", flexWrap: "wrap", gap: "4px" }}>
                                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>Subscription</span>
                                <span style={{ fontWeight: 900, fontSize: "1.3rem", color: "#F68D20", fontStyle: "italic" }}>20,000 PKR</span>
                            </div>
                            <div style={{ height: "6px", background: "rgba(255,255,255,0.06)", borderRadius: "100px", marginBottom: "16px" }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "30%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: 0.3 }}
                                    style={{
                                        height: "100%",
                                        background: "linear-gradient(90deg, #F68D2080, #F68D20)",
                                        borderRadius: "100px",
                                        boxShadow: "0 0 12px rgba(246,141,32,0.5)"
                                    }}
                                />
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                                {[["Training Time", "Instant", true], ["Availability", "24/7/365", true]].map(([k, v, hi]) => (
                                    <div key={k} style={{
                                        padding: "10px 12px", borderRadius: "12px",
                                        background: "rgba(255,255,255,0.05)",
                                        border: "1px solid rgba(255,255,255,0.08)"
                                    }}>
                                        <p style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", margin: "0 0 3px 0", fontWeight: 700 }}>{k}</p>
                                        <p style={{ fontWeight: 700, margin: 0, fontSize: "0.9rem", color: hi ? "#F68D20" : "white" }}>{v}</p>
                                    </div>
                                ))}
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "14px", color: "#4ade80" }}>
                                <TrendingUp size={14} />
                                <span style={{ fontSize: "0.78rem" }}>0% Commission | No Sick Days</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ── INTERACTIVE CALCULATOR ──────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    style={{
                        borderRadius: "32px",
                        border: "1px solid rgba(255,255,255,0.08)",
                        background: "rgba(255,255,255,0.025)",
                        backdropFilter: "blur(20px)",
                        overflow: "hidden"
                    }}
                >
                    {/* Calculator header */}
                    <div style={{
                        padding: "24px 32px",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                        background: "rgba(246,141,32,0.05)"
                    }}>
                        <h3 style={{ fontWeight: 800, fontSize: "clamp(1rem, 2.5vw, 1.3rem)", margin: 0 }}>
                            🧮 Build Your Custom Plan
                        </h3>
                        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.83rem", margin: "4px 0 0 0" }}>
                            Adjust sliders to match your business needs
                        </p>
                    </div>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "0"
                    }}>
                        {/* LEFT — Sliders + Toggles */}
                        <div style={{
                            padding: "32px",
                            borderRight: "1px solid rgba(255,255,255,0.06)"
                        }}>
                            <Slider
                                label="Monthly Conversations"
                                icon={MessageCircle}
                                value={conversations}
                                min={1000}
                                max={20000}
                                step={1000}
                                onChange={setConversations}
                                displayValue={conversations >= 20000 ? "20,000+" : `${fmt(conversations)}`}
                                accent="#F68D20"
                            />
                            <Slider
                                label="Languages Supported"
                                icon={Languages}
                                value={languages}
                                min={2}
                                max={10}
                                step={1}
                                onChange={setLanguages}
                                displayValue={languages >= 10 ? "10+" : `${languages} languages`}
                                accent="#F4145C"
                            />

                            {/* Add-ons */}
                            <p style={{
                                fontSize: "0.72rem", fontWeight: 800,
                                color: "rgba(255,255,255,0.3)",
                                textTransform: "uppercase", letterSpacing: "0.1em",
                                marginBottom: "12px"
                            }}>Optional Add-ons</p>

                            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                <Toggle
                                    icon={Mic}
                                    label="Voice Note Support"
                                    sublabel="AI understands & replies to voice"
                                    checked={voiceNotes}
                                    onChange={setVoiceNotes}
                                    price={15000}
                                />

                                {/* File Attachments toggle */}
                                <Toggle
                                    icon={Paperclip}
                                    label="File Attachments"
                                    sublabel="Images 1,000 PKR | Videos/docs 2,500 PKR"
                                    checked={fileAttachments}
                                    onChange={(v) => { setFileAttachments(v); }}
                                    price={imgFiles * 1000 + videoFiles * 2500}
                                />

                                {/* File counters — appear when toggle is on */}
                                <AnimatePresence>
                                    {fileAttachments && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                            animate={{ opacity: 1, height: "auto", marginTop: 0 }}
                                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                            transition={{ duration: 0.28 }}
                                            style={{ overflow: "hidden" }}
                                        >
                                            <div style={{
                                                marginTop: "10px",
                                                padding: "16px",
                                                borderRadius: "16px",
                                                border: "1px solid rgba(246,141,32,0.2)",
                                                background: "rgba(246,141,32,0.04)",
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "12px"
                                            }}>
                                                {/* Image files stepper */}
                                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
                                                    <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 0 }}>
                                                        <div style={{
                                                            width: "28px", height: "28px", borderRadius: "8px",
                                                            background: "rgba(246,141,32,0.15)",
                                                            display: "flex", alignItems: "center", justifyContent: "center",
                                                            color: "#F68D20", flexShrink: 0
                                                        }}>
                                                            <Image size={14} />
                                                        </div>
                                                        <div style={{ minWidth: 0 }}>
                                                            <p style={{ margin: 0, fontWeight: 700, fontSize: "0.8rem", color: "rgba(255,255,255,0.8)" }}>Image Files</p>
                                                            <p style={{ margin: 0, fontSize: "0.68rem", color: "rgba(255,255,255,0.35)" }}>PKR 1,000 / file</p>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
                                                        <button
                                                            onClick={() => setImgFiles(f => Math.max(0, f - 1))}
                                                            style={{
                                                                width: "30px", height: "30px", borderRadius: "8px",
                                                                border: "1px solid rgba(255,255,255,0.15)",
                                                                background: "rgba(255,255,255,0.06)",
                                                                color: "white", cursor: "pointer",
                                                                display: "flex", alignItems: "center", justifyContent: "center"
                                                            }}
                                                        ><Minus size={13} /></button>
                                                        <span style={{ fontWeight: 800, minWidth: "28px", textAlign: "center", color: "#F68D20" }}>{imgFiles}</span>
                                                        <button
                                                            onClick={() => setImgFiles(f => f + 1)}
                                                            style={{
                                                                width: "30px", height: "30px", borderRadius: "8px",
                                                                border: "1px solid rgba(246,141,32,0.4)",
                                                                background: "rgba(246,141,32,0.12)",
                                                                color: "#F68D20", cursor: "pointer",
                                                                display: "flex", alignItems: "center", justifyContent: "center"
                                                            }}
                                                        ><Plus size={13} /></button>
                                                        <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "rgba(255,255,255,0.4)", minWidth: "56px", textAlign: "right" }}>+{fmt(imgFiles * 1000)}</span>
                                                    </div>
                                                </div>

                                                {/* Divider */}
                                                <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

                                                {/* Video / doc files stepper */}
                                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
                                                    <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 0 }}>
                                                        <div style={{
                                                            width: "28px", height: "28px", borderRadius: "8px",
                                                            background: "rgba(244,20,92,0.15)",
                                                            display: "flex", alignItems: "center", justifyContent: "center",
                                                            color: "#F4145C", flexShrink: 0
                                                        }}>
                                                            <FileVideo size={14} />
                                                        </div>
                                                        <div style={{ minWidth: 0 }}>
                                                            <p style={{ margin: 0, fontWeight: 700, fontSize: "0.8rem", color: "rgba(255,255,255,0.8)" }}>Video / Doc Files</p>
                                                            <p style={{ margin: 0, fontSize: "0.68rem", color: "rgba(255,255,255,0.35)" }}>PKR 2,500 / file (≤ 30 MB)</p>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
                                                        <button
                                                            onClick={() => setVideoFiles(f => Math.max(0, f - 1))}
                                                            style={{
                                                                width: "30px", height: "30px", borderRadius: "8px",
                                                                border: "1px solid rgba(255,255,255,0.15)",
                                                                background: "rgba(255,255,255,0.06)",
                                                                color: "white", cursor: "pointer",
                                                                display: "flex", alignItems: "center", justifyContent: "center"
                                                            }}
                                                        ><Minus size={13} /></button>
                                                        <span style={{ fontWeight: 800, minWidth: "28px", textAlign: "center", color: "#F4145C" }}>{videoFiles}</span>
                                                        <button
                                                            onClick={() => setVideoFiles(f => f + 1)}
                                                            style={{
                                                                width: "30px", height: "30px", borderRadius: "8px",
                                                                border: "1px solid rgba(244,20,92,0.4)",
                                                                background: "rgba(244,20,92,0.12)",
                                                                color: "#F4145C", cursor: "pointer",
                                                                display: "flex", alignItems: "center", justifyContent: "center"
                                                            }}
                                                        ><Plus size={13} /></button>
                                                        <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "rgba(255,255,255,0.4)", minWidth: "56px", textAlign: "right" }}>+{fmt(videoFiles * 2500)}</span>
                                                    </div>
                                                </div>

                                                {/* Sub-total */}
                                                <div style={{
                                                    display: "flex", justifyContent: "space-between",
                                                    paddingTop: "10px",
                                                    borderTop: "1px solid rgba(255,255,255,0.06)"
                                                }}>
                                                    <span style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", fontWeight: 600 }}>Files sub-total</span>
                                                    <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#F68D20" }}>PKR {fmt(imgFiles * 1000 + videoFiles * 2500)}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* RIGHT — Results */}
                        <div style={{ padding: "32px" }}>
                            {/* AI Cost */}
                            <div style={{
                                padding: "20px 24px",
                                borderRadius: "20px",
                                border: "1px solid rgba(246,141,32,0.3)",
                                background: "rgba(246,141,32,0.07)",
                                marginBottom: "14px"
                            }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                                    <Bot size={16} color="#F68D20" />
                                    <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>
                                        DISCRET AI / MONTH
                                    </span>
                                </div>
                                <p style={{
                                    fontSize: "clamp(1.8rem, 5vw, 2.4rem)",
                                    fontWeight: 900, color: "#F68D20",
                                    margin: 0, lineHeight: 1,
                                    fontVariantNumeric: "tabular-nums"
                                }}>
                                    PKR <AnimatedNumber value={aiTotal} />
                                </p>
                                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", margin: "6px 0 0" }}>
                                    Base + overage + selected add-ons
                                </p>
                            </div>

                            {/* Human Cost */}
                            <div style={{
                                padding: "20px 24px",
                                borderRadius: "20px",
                                border: "1px solid rgba(244,20,92,0.2)",
                                background: "rgba(244,20,92,0.05)",
                                marginBottom: "14px"
                            }}>
                                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                                    <User size={16} color="#F4145C" />
                                    <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>
                                        HUMAN AGENTS / MONTH
                                    </span>
                                </div>
                                <p style={{
                                    fontSize: "clamp(1.8rem, 5vw, 2.4rem)",
                                    fontWeight: 900, color: "#F4145C",
                                    margin: 0, lineHeight: 1,
                                    fontVariantNumeric: "tabular-nums"
                                }}>
                                    PKR <AnimatedNumber value={humanTotal} />
                                </p>
                                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", margin: "6px 0 0" }}>
                                    {agentsNeeded} agent{agentsNeeded !== 1 ? "s" : ""} × PKR 40,000 each
                                </p>
                            </div>

                            {/* SAVINGS */}
                            <motion.div
                                key={savings}
                                initial={{ scale: 0.96 }}
                                animate={{ scale: 1 }}
                                style={{
                                    padding: "20px 24px",
                                    borderRadius: "20px",
                                    border: savingsPositive
                                        ? "1.5px solid rgba(74,222,128,0.4)"
                                        : "1.5px solid rgba(244,20,92,0.3)",
                                    background: savingsPositive
                                        ? "rgba(74,222,128,0.07)"
                                        : "rgba(244,20,92,0.05)",
                                }}
                            >
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px" }}>
                                    <div>
                                        <p style={{
                                            fontSize: "0.78rem", fontWeight: 700,
                                            color: "rgba(255,255,255,0.45)", margin: "0 0 8px"
                                        }}>
                                            {savingsPositive ? "🎉 YOUR MONTHLY SAVINGS" : "⚠️ AI COSTS MORE AT THIS VOLUME"}
                                        </p>
                                        <p style={{
                                            fontSize: "clamp(1.5rem, 4vw, 2rem)",
                                            fontWeight: 900,
                                            color: savingsPositive ? "#4ade80" : "#F4145C",
                                            margin: 0, lineHeight: 1
                                        }}>
                                            PKR <AnimatedNumber value={Math.abs(savings)} />
                                        </p>
                                    </div>
                                    {savingsPositive && (
                                        <div style={{
                                            padding: "8px 14px",
                                            borderRadius: "100px",
                                            background: "rgba(74,222,128,0.15)",
                                            border: "1px solid rgba(74,222,128,0.3)"
                                        }}>
                                            <span style={{
                                                fontWeight: 900, fontSize: "1.1rem",
                                                color: "#4ade80"
                                            }}>{savingsPct}% off</span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* ── FEATURE TABLE TOGGLE ─────────────── */}
                <div style={{ marginTop: "40px" }}>
                    <button
                        onClick={() => setShowTable(!showTable)}
                        style={{
                            display: "flex", alignItems: "center", gap: "8px",
                            margin: "0 auto 20px",
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "100px",
                            padding: "10px 24px",
                            color: "rgba(255,255,255,0.7)",
                            cursor: "pointer",
                            fontWeight: 600, fontSize: "0.85rem",
                            transition: "all 0.25s"
                        }}
                    >
                        <Globe size={15} />
                        {showTable ? "Hide" : "Show"} Full Feature Comparison
                        <motion.div
                            animate={{ rotate: showTable ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            <ChevronDown size={15} />
                        </motion.div>
                    </button>

                    <AnimatePresence>
                        {showTable && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.35 }}
                                style={{ overflow: "hidden" }}
                            >
                                <div style={{
                                    borderRadius: "24px",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    overflow: "hidden"
                                }}>
                                    {/* Table header */}
                                    <div style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr 1fr",
                                        background: "rgba(255,255,255,0.04)",
                                        borderBottom: "1px solid rgba(255,255,255,0.08)"
                                    }}>
                                        {["Feature", "Human Agents", "Discret AI"].map((h, i) => (
                                            <div key={h} style={{
                                                padding: "14px 16px",
                                                fontWeight: 800, fontSize: "0.75rem",
                                                textTransform: "uppercase",
                                                letterSpacing: "0.08em",
                                                color: i === 2 ? "#F68D20" : "rgba(255,255,255,0.45)",
                                                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none"
                                            }}>
                                                {h}
                                            </div>
                                        ))}
                                    </div>

                                    {FEATURES.map((row, idx) => (
                                        <div
                                            key={row.label}
                                            style={{
                                                display: "grid",
                                                gridTemplateColumns: "1fr 1fr 1fr",
                                                borderBottom: idx < FEATURES.length - 1
                                                    ? "1px solid rgba(255,255,255,0.05)"
                                                    : "none",
                                                background: idx % 2 === 0
                                                    ? "transparent"
                                                    : "rgba(255,255,255,0.015)"
                                            }}
                                        >
                                            <div style={{
                                                padding: "14px 16px",
                                                fontWeight: 700, fontSize: "0.82rem",
                                                color: "rgba(255,255,255,0.7)",
                                                borderRight: "1px solid rgba(255,255,255,0.06)"
                                            }}>
                                                {row.label}
                                            </div>
                                            <div style={{
                                                padding: "14px 16px",
                                                fontSize: "0.82rem",
                                                color: "rgba(255,255,255,0.4)",
                                                borderRight: "1px solid rgba(255,255,255,0.06)"
                                            }}>
                                                {row.human}
                                            </div>
                                            <div style={{
                                                padding: "14px 16px",
                                                fontSize: "0.82rem",
                                                fontWeight: 700,
                                                color: row.highlight ? "#F68D20" : "#4ade80"
                                            }}>
                                                {row.ai}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* ── BOTTOM CTA ───────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: "center", marginTop: "56px" }}
                >
                    <p style={{
                        color: "rgba(255,255,255,0.45)",
                        fontSize: "0.9rem", marginBottom: "20px"
                    }}>
                        Ready to cut costs and scale faster?
                    </p>
                    <a
                        href="#contact"
                        className="btn-premium"
                        style={{ display: "inline-flex", padding: "16px 40px", fontSize: "1rem" }}
                    >
                        <Shield size={18} />
                        Get My Custom AI Plan — Free
                    </a>
                </motion.div>

            </div>

            {/* Slider CSS */}
            <style>{`
                input[type=range]::-webkit-slider-thumb { display: none; }
                input[type=range]::-moz-range-thumb { display: none; }
            `}</style>
        </section>
    );
}
