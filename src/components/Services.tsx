import { Building2, TrendingUp, Shield, Users } from "lucide-react";

const services = [
  { icon: Building2, title: "Property Investment", desc: "Strategic portfolio management across residential and supported living sectors." },
  { icon: TrendingUp, title: "Consulting & Mentoring", desc: "Hands-on guidance for businesses and entrepreneurs looking to grow, overcome challenges, and reach their potential." },
  { icon: Shield, title: "Project Management", desc: "Delivering construction projects on budget, on time, and with proper risk management." },
  { icon: Users, title: "Investor Relations", desc: "Transparent, research-led investment partnerships built on trust and experience." },
];

const Services = () => (
  <section id="services" className="section-gradient py-24">
    <div className="container mx-auto px-4">
      <p className="text-accent font-medium text-sm tracking-widest uppercase mb-2 text-center">What We Do</p>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">What We Do</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s) => (
          <div key={s.title} className="bg-card rounded-lg p-6 border hover:shadow-lg transition-shadow">
            <div className="w-11 h-11 rounded-md bg-gold/10 flex items-center justify-center mb-4">
              <s.icon className="text-gold" size={22} />
            </div>
            <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
