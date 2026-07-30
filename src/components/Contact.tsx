import { Mail, Phone, Globe } from "lucide-react";
import logo from "@/assets/logo.png";

const Contact = () => (
  <section id="contact" className="section-gradient py-24">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">Contact</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-muted-foreground mb-8">
          Ready to take the next step? Reach out and we'll schedule a free 30-minute consultation.
        </p>
        <div className="space-y-3 text-sm mb-8 inline-block text-left">
          <div className="flex items-center gap-3 text-muted-foreground">
            <Mail size={18} className="text-gold" /> leah@lerakoma.com
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Phone size={18} className="text-gold" /> +44 7979 694849
          </div>
          <div className="flex items-center gap-3 text-muted-foreground">
            <Globe size={18} className="text-gold" /> www.lerakoma.com
          </div>
        </div>

        {/* Signature */}
        <div className="pt-5 border-t border-border/40 flex items-center justify-center gap-3">
          <img src={logo} alt="Lerakoma" className="h-10" />
          <span className="text-xl font-bold tracking-wider text-accent" style={{ fontFamily: "'Roboto Slab', serif" }}>LERAKOMA</span>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
