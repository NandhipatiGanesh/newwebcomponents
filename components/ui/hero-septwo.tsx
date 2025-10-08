import CardNav from '../CardNav'
import logo from './logo.svg';
export default function HeroSeptember() {

    const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];
  return (
    <section
      className="h-screen bg-[url('/GlassyffectRedColorBg.png')] bg-cover bg-center flex items-center justify-center text-center text-white"
    >
    <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
      <div className="px-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to My Website
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Your success starts here. Let’s build something amazing together.
        </p>
        <a
          href="#services"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}



