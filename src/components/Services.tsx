import { Cpu, Building2, TrendingUp, Shield } from "lucide-react";

const services = [
  { icon: Cpu, title: "AI Enablement & Web Development", desc: "Expert AI guidance that helps small businesses improve operations, build capability and fill skills gaps, alongside professional website design and development." },
  { icon: Building2, title: "Property Investment", desc: "Direct investment in residential and supported-living property, backed by careful research, considered acquisitions and a focus on long-term value." },
  { icon: TrendingUp, title: "Consulting & Mentoring", desc: "Practical advice and hands-on mentoring that helps business owners solve problems, strengthen their strategy and grow with confidence." },
  { icon: Shield, title: "Project Management", desc: "Construction project oversight from planning to completion, with firm control over contractors, budgets, schedules and risks." },
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
