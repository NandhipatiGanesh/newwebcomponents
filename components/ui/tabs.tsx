"use client";
import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// All card content in one array
const cardData = [
  {
    id: "Mid-Market",
    title: "Mid-Market",
    subtitle: "Scale with confidence",
    description:
      "The power of an ERP, with none of the legacy baggage. Campfire gives mid-market finance & accounting teams an intuitive platform for audit-readiness, multi-entity consolidations, close management, and financial reporting. Everything you need for your next phase of growth, on a platform you'll actually enjoy using.",
    buttonText: "For Mid-Market",
    styles: {
      bg: "rgb(20, 45, 37)",
      text: "rgb(179, 237, 151)",
      cardBg: "rgb(70,92,70)",
      buttonBg: "rgb(183,255,183)",
    },
  },
  {
    id: "Enterprise",
    title: "Enterprise",
    subtitle: "Control without the complexity.",
    description:
      "A modern ERP built to support complex, high volume operations—across entities, currencies, and geographies. Automate consolidations, streamline audits, and get real-time visibility into global performance. Campfire gives enterprise teams the automation and clarity they need to move faster, scale smarter, and lead with confidence.",
    buttonText: "For Enterprise",
    styles: {
      bg: "rgb(48, 24, 5)",
      text: "rgb(247, 160, 97)",
      cardBg: "rgb(133,94,61)",
      buttonBg: "rgb(255,180,143)",
    },
  },
  {
    id: "Partners",
    title: "Partners",
    subtitle: "Build the future of finance.",
    description:
      "We partner with advisory firms, software platforms, and consultancies supporting modern finance & accounting teams. Deliver more value to your clients, unlock new revenue, and build the next era of finance—together.",
    buttonText: "For Partners",
    styles: {
      bg: "rgb(26, 9, 72)",
      text: "rgb(197, 180, 243)",
      cardBg: "rgb(107,92,138)",
      buttonBg: "rgb(203,182,255)",
    },
  },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("Mid-Market");
  const [indicatorX, setIndicatorX] = useState(0);
  const [indicatorW, setIndicatorW] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [direction, setDirection] = useState(0); // 👉 +1 forward, -1 backward

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  

  // Update indicator position/width when activeTab changes
  useLayoutEffect(() => {
    const idx = cardData.findIndex((c) => c.id === activeTab);
    const el = tabRefs.current[idx];
    if (el) {
      setIndicatorX(el.offsetLeft);
      setIndicatorW(el.offsetWidth);
    }
  }, [activeTab]);

  const activeData = cardData.find((c) => c.id === activeTab);
  if (!activeData) return null;

  useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth < 768);
  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  // 👉 Handle direction-aware animation
  const handleTabChange = (newId: string) => {
    const currentIndex = cardData.findIndex((c) => c.id === activeTab);
    const newIndex = cardData.findIndex((c) => c.id === newId);

    // ✅ if new tab is to the right, direction = +1, else -1
    setDirection(newIndex > currentIndex ? 1 : -1);
    setActiveTab(newId);
  };

  // ✅ Desktop variants (bottom-to-top clockwise feel)
  const desktopVariants = {
    initial: (dir: number) => ({
      opacity: 0,
      y: 100,
      rotate: dir > 0 ? -10 : 10, // forward = clockwise, backward = counter
    }),
    animate: {
      opacity: 1,
      y: 0,
      rotate: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      y: -100,
      rotate: 10, //backward need = clockwise  not opposite rotation on exit = counter reverse need
    }),
  };

  // ✅ Mobile variants (left ↔ right with direction awareness)
  const mobileVariants = {
    initial: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 100 : -100, // enter from right if going forward
    }),
    animate: { opacity: 1, x: 0 },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -100 : 100, // exit opposite
    }),
  };

  return (
    <section className="w-full md:w-[1340px] mx-auto md:h-screen h-full bg-white overflow-hidden flex items-center justify-center">
      <div
        className="px-4 py-10 w-full md:h-[80%] h-full flex flex-col lg:flex-row items-center justify-between md:gap-72 gap-4 md:rounded-[56px] rounded-none md:p-8"
        style={{ backgroundColor: activeData.styles.bg }}
      >
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6 w-full md:p-12 p-2">
          <p
            className="captilize px-6 py-2 rounded-full w-fit"
            style={{
              fontSize: "12px",
              color: activeData.styles.text,
              background:
                "linear-gradient(rgb(82, 100, 77) -43.73%, rgba(82, 100, 77, 0) 129.91%)",
            }}
          >
            Solutions
          </p>
          <h1 className="md:text-6xl text-5xl font-medium text-white max-w-md mb-4">
            Built for your next stage of{" "}
            <span style={{ color: activeData.styles.text }}>growth.</span>
          </h1>
          <p className="text-gray-300 text-xl mb-2">
            The next-gen financial platform powering modern companies.
          </p>

          {/* Tabs */}
          <div
            className="relative flex justify-between w-full gap-8 border-b cursor-pointer"
            style={{ borderColor: activeData.styles.text }}
          >
            {cardData.map((tab, i) => (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                onClick={() => handleTabChange(tab.id)}
                className="pb-2 font-semibold cursor-pointer"
                style={{
                  borderColor:
                    activeTab === tab.id
                      ? activeData.styles.text
                      : "transparent",
                  color: activeTab === tab.id ? activeData.styles.text : "gray",
                }}
              >
                {tab.title}
              </button>
            ))}

            {/* Indicator */}
            <motion.div
              className="absolute -bottom-[4px] h-2 rounded-full"
              style={{ backgroundColor: activeData.styles.text }}
              animate={{ x: indicatorX, width: indicatorW }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeData.id}
            custom={direction} // ✅ passes direction into variants
            variants={isMobile ? mobileVariants : desktopVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="rounded-3xl p-8 w-full h-full flex flex-col justify-between"
            style={{ backgroundColor: activeData.styles.cardBg }}
          >
            <h2 className="text-2xl font-bold text-white">
              {activeData.title}
            </h2>
            <p className="text-gray-300 mb-4">{activeData.subtitle}</p>
            <div className="h-32 flex items-center justify-center text-gray-400">
              ↑ grid graphic
            </div>
            <p className="text-white mb-6">{activeData.description}</p>
            <button
              className="px-8 py-4 w-[220px] rounded-full font-semibold cursor-pointer hover:opacity-90 transition"
              style={{ backgroundColor: activeData.styles.buttonBg }}
            >
              {activeData.buttonText}
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
