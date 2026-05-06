import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Lerakoma" className="h-10 grayscale" />
          <span className="text-xl font-bold tracking-wider text-[#D42B2B]" style={{ fontFamily: "'Roboto Slab', serif" }}>LERAKOMA</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="/#services" className="hover:text-foreground transition-colors">What We Do</a>
          <Link to="/who-we-are" className="hover:text-foreground transition-colors">Who We Are</Link>
          <Link to="/initiatives" className="hover:text-foreground transition-colors">Initiatives</Link>
          <Link to="/insights" className="hover:text-foreground transition-colors">Insights</Link>
          <Link to="/testimonials" className="hover:text-foreground transition-colors">Testimonials</Link>
          
        </div>

        <a href="#contact" className="hidden md:inline-flex rounded-md bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
          Get in Touch
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-b px-4 pb-4 flex flex-col gap-3 text-sm font-medium text-muted-foreground">
          <a href="/#services" onClick={() => setOpen(false)} className="hover:text-foreground">What We Do</a>
          <Link to="/who-we-are" onClick={() => setOpen(false)} className="hover:text-foreground">Who We Are</Link>
          <Link to="/initiatives" onClick={() => setOpen(false)} className="hover:text-foreground">Initiatives</Link>
          <Link to="/insights" onClick={() => setOpen(false)} className="hover:text-foreground">Insights</Link>
          <Link to="/testimonials" onClick={() => setOpen(false)} className="hover:text-foreground">Testimonials</Link>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
