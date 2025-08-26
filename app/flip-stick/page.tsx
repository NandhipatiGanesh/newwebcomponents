import FlipStack from "@/components/ui/flipstack";
import HeroSection from "@/components/ui/hero";
export default function FlipStickPage() {
  const cards = [
    {
      id: 1,
      content: (
        <img
          src="https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Isabelle Carlos"
          className="w-full h-full object-cover"
        />
      ),
    },
    {
      id: 2,
      content: (
        <img
          src="https://plus.unsplash.com/premium_photo-1692340973636-6f2ff926af39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Lana Akash"
          className="w-full h-full object-cover"
        />
      ),
    },
    {
      id: 3,
      content: (
        <img
          src="https://github.com/Adityakishore0.png?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Ahdeetai"
          className="w-full h-full object-cover"
        />
      ),
    },
    {
      id: 4,
      content: (
        <img
          src="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Isabella Mendes"
          className="w-full h-full object-cover scale-x-[-1]"
        />
      ),
    },
    {
      id: 5,
      content: (
        <img
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
          alt="Meera Patel"
          className="w-full h-full object-cover"
        />
      ),
    },
  ];
  return (
    <>
      <section className="w-full h-screen  bg-[#F5F5F5] flex flex-col items-center justify-center">
        <div className="mb-4">
          <HeroSection />
        </div>

        <div className="w-full lg:hidden">
          <FlipStack cards={cards} />
        </div>
        <div className="hidden lg:flex flex-col  inset-0 overflow-visible items-center justify-center ">
          <FlipStack cards={cards} />
        </div>
        <button
          className="w-[240px] h-[58px] flex justify-center items-center gap-2 px-4 py-2 bg-black text-white cursor-pointer rounded-2xl mt-8 transition hover:bg-gradient-to-r hover:from-black hover:to-gray-800 
             hover:scale-105 active:scale-95"
          style={{
            boxShadow:
              " rgba(255, 255, 255, 0.15) 0px 0px 20px 1.64px inset, rgba(0, 0, 0, 0.13) 0px 0.839802px 0.503881px -0.3125px, rgba(0, 0, 0, 0.13) 0px 1.99048px 1.19429px -0.625px, rgba(0, 0, 0, 0.13) 0px 3.63084px 2.1785px -0.9375px, rgba(0, 0, 0, 0.13) 0px 6.03627px 3.62176px -1.25px, rgba(0, 0, 0, 0.13) 0px 9.74808px 5.84885px -1.5625px, rgba(0, 0, 0, 0.13) 0px 15.9566px 9.57398px -1.875px, rgba(0, 0, 0, 0.13) 0px 27.4762px 16.4857px -2.1875px, rgba(0, 0, 0, 0.13) 0px 50px 30px -2.5px",
          }}
        >
          Get Started
          <span className="rotate-[90deg]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>
          </span>
        </button>
      </section>
    </>
  );
}
