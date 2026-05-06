import logo from "@/assets/logo.png";

const HeroBgPattern = () => (
  <>
    {/* Hexagonal geometric texture */}
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1200 800"
      fill="none"
      aria-hidden="true"
    >
      <polygon points="50,200 200,290 200,470 50,560 -100,470 -100,290" fill="white" opacity="0.03" />
      <polygon points="50,200 200,290 50,380" fill="white" opacity="0.05" />
      <polygon points="50,200 -100,290 50,380" fill="white" opacity="0.035" />
      <polygon points="-100,290 50,380 -100,470" fill="white" opacity="0.025" />
      <polygon points="50,200 200,290 200,470 50,560 -100,470 -100,290" stroke="white" strokeWidth="0.8" opacity="0.06" />

      <polygon points="150,400 260,465 260,595 150,660 40,595 40,465" fill="white" opacity="0.025" />
      <polygon points="150,400 260,465 150,530" fill="white" opacity="0.04" />
      <polygon points="150,400 40,465 150,530" fill="white" opacity="0.03" />
      <polygon points="150,400 260,465 260,595 150,660 40,595 40,465" stroke="white" strokeWidth="0.6" opacity="0.05" />

      <polygon points="120,80 190,120 190,200 120,240 50,200 50,120" fill="white" opacity="0.02" />
      <polygon points="120,80 190,120 120,160" fill="white" opacity="0.035" />
      <polygon points="120,80 190,120 190,200 120,240 50,200 50,120" stroke="white" strokeWidth="0.5" opacity="0.04" />

      <line x1="0" y1="0" x2="600" y2="400" stroke="white" strokeWidth="0.5" opacity="0.025" />
      <line x1="0" y1="100" x2="500" y2="430" stroke="white" strokeWidth="0.3" opacity="0.02" />
      <line x1="0" y1="800" x2="700" y2="500" stroke="white" strokeWidth="0.4" opacity="0.02" />
    </svg>

    {/* Large greyscale logo watermark */}
    <img
      src={logo}
      alt=""
      aria-hidden="true"
      className="absolute right-[-20%] top-1/2 -translate-y-1/2 w-[500px] md:w-[600px] lg:w-[700px] opacity-[0.07] grayscale brightness-200 pointer-events-none select-none"
    />
  </>
);

export default HeroBgPattern;
