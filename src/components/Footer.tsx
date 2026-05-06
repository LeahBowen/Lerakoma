import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground/70 py-10">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Lerakoma" className="h-10 sepia brightness-150 opacity-70" />
        <span className="text-xl font-bold tracking-wider text-gold" style={{ fontFamily: "'Roboto Slab', serif" }}>LERAKOMA</span>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/privacy-policy" className="text-gold/60 hover:text-gold transition-colors">
          Privacy Policy
        </Link>
        <span className="text-gold/30">|</span>
        <p className="text-gold/60">© {new Date().getFullYear()} Lerakoma. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
