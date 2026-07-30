import { ArrowRight } from "lucide-react";
import slgLogo from "@/assets/SLG_LogoLight.png";

const InitiativeBanner = () => (
  <section className="banner-dark py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">Initiatives</p>
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Beyond Our Portfolio</h2>
        <p className="text-primary-foreground/75 max-w-3xl mx-auto">
          Alongside our own investments, we back initiatives that make it easier for others to invest confidently in supported living property.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-card/10 border border-primary-foreground/10 rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="shrink-0 bg-white rounded-lg p-8 flex items-center justify-center w-48 h-48 md:w-56 md:h-56">
            <img src={slgLogo} alt="Supported Living Gateway logo" className="max-h-full max-w-full object-contain" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">Supported Living Gateway</h3>
            <p className="text-primary-foreground/75 leading-relaxed mb-6">
              Our mission is to revolutionise the provision of housing available for supported living — creating a trusted place where investors, providers and the wider community can make sustainable investments and build homes for those who need them most.
            </p>
            <a
              href="https://www.supportedlivinggateway.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold font-semibold hover:opacity-90 transition-opacity"
            >
              Visit Website <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default InitiativeBanner;
