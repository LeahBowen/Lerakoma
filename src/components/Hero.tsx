import HeroBgPattern from "@/components/HeroBgPattern";

const Hero = () => (
  <section className="relative hero-gradient min-h-[85vh] flex items-center pt-16 overflow-hidden">
    <HeroBgPattern />

    <div className="container mx-auto px-4 py-20 relative z-10">
      <div className="max-w-2xl">
        <p className="text-gold font-medium text-sm tracking-widest uppercase mb-4">
          Property · Consulting · Investment
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
          Building Value Through Experience
        </h1>
        <p className="text-primary-foreground/75 text-lg mb-8 max-w-lg">
          Lerakoma is a property and consulting business founded by Mark and Leah Bowen, bringing decades of financial services and project management expertise to property investment and business growth.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#contact" className="inline-flex rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity">
            Get in Touch
          </a>
          <a href="#services" className="inline-flex rounded-md border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
            What We Do
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
