// data.tsx

export const heroData = {
  logo: "superpower",
  navLinks: [
    { label: "How it Works", href: "#how-it-works" },
    { label: "What We Test", href: "#what-we-test" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQs", href: "#faqs" },
    { label: "Our Why", href: "#our-why" },
  ],
  authLinks: [
    { label: "Login", href: "/login" },
    { label: "Try Superpower", href: "/signup", primary: true },
  ],
  headline: "Unlock your new health intelligence",
  subheadline:
    "100+ lab tests. Every year. Detect early signs of 1,000+ conditions. All for only $17/month",
  cta: {
    text: "Join Today",
    href: "/signup",
  },
  disclaimer: "HSA/FSA eligible",
  backgroundImage: "/images/hero-bg.jpg", // put your image here
};
// data.tsx

export const headerData = {
  logo: "superpower",
  navLinks: [
    {
      label: "How it Works",
      href: "#how-it-works",
      dropdown: {
        image: {
          src: "https://superpower-website.b-cdn.net/sample-image.jpg",
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
