
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

// Your actual data structure
const headerData = {
  logo: "superpower",
  navLinks: [
    {
      label: "How it Works",
      href: "#how-it-works",
      dropdown: {
        image: {
          src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop",
          title: "Unlock Your Biological Age Today",
          subtitle: "Learn more about your body",
          link: "#",
        },
        sections: [
          {
            title: "Product",
            links: [
              {
                label: "How it Works",
                href: "#",
                desc: "Get the most from your first premium health membership",
                icon: "🧬",
              },
              {
                label: "What We Test",
                href: "#",
                desc: "100+ biomarkers included in your annual superpower test panel",
                icon: "🧪",
              },
              {
                label: "Superpower for Business",
                href: "#",
                desc: "All the benefits of Superpower tailored to your team",
                icon: "👥",
              },
            ],
          },
          {
            title: "Learn More",
            links: [
              { label: "Reviews", href: "#" },
              { label: "FAQs", href: "#" },
              { label: "Our Why", href: "#" },
              { label: "Blog", href: "#" },
            ],
          },
          {
            title: "Other",
            links: [
              { label: "Privacy Policy", href: "#" },
              { label: "Informed Medical Consent", href: "#" },
              { label: "Terms & Conditions", href: "#" },
            ],
          },
        ],
      },
    },
    { label: "What We Test", href: "#what-we-test" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQs", href: "#faqs" },
    { label: "Our Why", href: "#our-why" },
  ],
  authLinks: [
    { label: "Login", href: "/login" },
    { label: "Try Superpower", href: "/signup", primary: true },
  ],
};

export default function Header() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <>
      {/* Desktop Backdrop overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-10 hidden md:block"
            onClick={() => setHovered(null)}
          />
        )}
      </AnimatePresence>

      <header className="relative z-20 flex justify-between items-center pl-6 md:pl-10 pr-2 md:pr-[10px] pt-[10px] pb-[10px] rounded-full transparent md:bg-black/80 backdrop-blur-md max-w-7xl mx-4 md:mx-auto mt-4">
        {/* Logo */}
        <div className="text-white font-extrabold text-xl">{headerData.logo}</div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-6 text-white text-md font-medium relative">
          {headerData.navLinks.map((link, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHovered(link.label)}
              onMouseLeave={() => setHovered(null)}
            >
              <a href={link.href} className="transition hover:text-orange-400">
                {link.label}
              </a>

              {/* Mega Dropdown - Only for "How it Works" */}
              {link.dropdown && (
                <AnimatePresence>
                  {hovered === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="fixed left-1/2 -translate-x-1/2 top-[80px] bg-white shadow-xl rounded-3xl p-3 flex gap-12 w-full max-w-[85rem] h-[400px] z-20"
                    >
                      {/* Left Image Card */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="w-[320px] h-full rounded-3xl overflow-hidden"
                      >
                        <a href={link.dropdown.image.link} className="block w-full h-full">
                          <img
                            src={link.dropdown.image.src}
                            alt={link.dropdown.image.title}
                            className="w-full h-full object-cover"
                          />
                        </a>
                      </motion.div>

                      {/* Right Sections */}
                      <div className="flex-1 grid grid-cols-3 gap-12 py-4">
                        {link.dropdown.sections.map((section, sIdx) => (
                          <motion.div
                            key={sIdx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 + sIdx * 0.05, duration: 0.3 }}
                          >
                            <h4 className="text-gray-400 text-[11px] font-bold uppercase tracking-wider mb-4">
                              {section.title}
                            </h4>
                            <ul className="space-y-4">
                              {section.links.map((item, lIdx) => (
                                <motion.li
                                  key={lIdx}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.2 + sIdx * 0.05 + lIdx * 0.03 }}
                                >
                                  <a
                                    href={item.href}
                                    className="block hover:text-orange-500 transition-colors duration-200 group"
                                  >
                                    {"icon" in item && "desc" in item ? (
                                      <span className="flex items-start gap-3">
                                        <span className="w-[70px] h-[70px] border border-gray-200 rounded-2xl text-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110">
                                          {item.icon}
                                        </span>
                                        <span>
                                          <p className="font-semibold text-gray-900 text-sm mb-1">
                                            {item.label}
                                          </p>
                                          <p className="text-xs text-gray-500 leading-relaxed">
                                            {item.desc}
                                          </p>
                                        </span>
                                      </span>
                                    ) : (
                                      <span className="font-medium text-gray-900 text-sm">
                                        {item.label}
                                      </span>
                                    )}
                                  </a>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="flex gap-3 items-center">
          {/* Desktop: Try Superpower Button */}
           <motion.a
            href="/login"
            className="hidden md:inline-block text-white text-sm hover:underline"
          >
            Login
          </motion.a>
          <motion.a
            href="/signup"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="hidden md:inline-block px-4 py-3 rounded-full bg-orange-500 text-white font-semibold shadow-md hover:bg-orange-600 transition"
          >
            Try Superpower
          </motion.a>
         

          {/* Mobile: Hamburger Menu */}
          {/* Mobile: 2-Line Hamburger Menu (SVG) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 17h16" />
            </svg>
          </button>

        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full bg-white z-50 shadow-2xl overflow-y-auto"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-xl font-bold text-gray-900">{headerData.logo}</h2>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Menu Items */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
                className="p-6 space-y-2"
              >
                {headerData.navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    {link.dropdown ? (
                      <div>
                        <button
                          onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                          className="w-full flex items-center justify-between py-3 text-left font-semibold text-gray-900 text-lg"
                        >
                          <span className="flex items-center gap-3">
                            <img
                              src={link.dropdown.image.src}
                              alt=""
                              className="w-8 h-8 rounded-lg object-cover"
                            />
                            {link.label}
                          </span>
                          {mobileDropdownOpen ? (
                            <ChevronUp size={20} className="text-gray-400" />
                          ) : (
                            <ChevronDown size={20} className="text-gray-400" />
                          )}
                        </button>

                        <AnimatePresence>
                          {mobileDropdownOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden pl-4 space-y-3 mt-2"
                            >
                              {link.dropdown.sections.map((section, sIdx) => (
                                <div key={sIdx} className="space-y-2">
                                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-3">
                                    {section.title}
                                  </h4>
                                  {section.links.map((item, lIdx) => (
                                    <a
                                      key={lIdx}
                                      href={item.href}
                                      className="block py-2 text-sm text-gray-600 hover:text-orange-500"
                                    >
                                      {item.label}
                                    </a>
                                  ))}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={link.href}
                        className="block py-3 text-gray-600 font-medium text-base hover:text-orange-500"
                      >
                        {link.label}
                      </a>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              {/* Bottom Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-6 space-y-3 border-t bg-white"
              >
                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Our why
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <a href="#" className="block hover:text-orange-500">Worlds healthiest </a>
                  <a href="#" className="block hover:text-orange-500">The Founder health coalition </a>
                  <a href="#" className="block hover:text-orange-500">Privacy Policy</a>
                  <a href="#" className="block hover:text-orange-500">Informed medical consent</a>
                  <a href="#" className="block hover:text-orange-500">Terms & conditions</a>
                </div>
                <a
                  href="/signup"
                  className="block w-full py-3 text-center rounded-full bg-orange-500 text-white font-semibold shadow-md hover:bg-orange-600 transition"
                >
                  Try Superpower
                </a>
                <a
                  href="/login"
                  className="block w-full py-3 text-center text-gray-900 font-medium hover:text-orange-500"
                >
                  Login
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Demo content to show effect */}
      <div className="min-h-screen bg-gradient-to-b from-orange-100 via-orange-50 to-white"></div>
    </>
  );
}