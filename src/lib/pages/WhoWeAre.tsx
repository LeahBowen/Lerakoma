import { Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBgPattern from "@/components/HeroBgPattern";
import markImg from "@/assets/mark-bowen.jpg";
import leahImg from "@/assets/leah-bowen.jpg";

const founders = [
  {
    name: "Mark Bowen",
    role: "Co-Founder & Director",
    linkedin: "https://www.linkedin.com/in/mark--bowen/",
    image: markImg,
    paragraphs: [
      "Mark spent over 30 years in financial services, holding senior roles and leading major change programmes across technology, people and process. He left the City in 2016, freelanced as a project management trainer, then took a hands-on turn working as an apprentice site labourer before project managing a full refurbishment of a Grade II listed property on Harley Street. He continues to consult for that building company, which has grown from a small local firm into one taking on large-scale projects across London.",
      "Alongside building the Lerakoma portfolio, Mark spotted a gap in property education. Courses on investment strategy were everywhere; guidance on how to actually deliver a refurbishment — on budget, to schedule, with proper risk management — was not. He co-founded a training company with a business partner to fill it, running courses for new property investors in project management, budgeting and communication. Leah supported the in-person delivery as the programme grew.",
      "The pandemic ended in-person training overnight. Mark looked at the property market — student lets empty, short-term rentals stalled, investors stretched — and at care providers unable to find suitable housing, and saw a clear opportunity to connect the two. He was part of the founding team that launched Supported Living Gateway in 2020 to do exactly that.",
      "Mark and Leah hold a SSAS — a self-administered company pension that gives trustees direct control over where the money goes. They manage it together, investing in small businesses, property investor lending, crypto and supported living rather than handing decisions to a fund manager.",
      "Mark now spends most of his time consulting and mentoring businesses — mainly in construction and small companies looking to grow — and has developed a practical specialism in AI for small businesses, using it to build websites and applications that would previously have needed a dedicated development team.",
    ],
  },
  {
    name: "Leah Bowen",
    role: "Co-Founder & Director",
    linkedin: "https://www.linkedin.com/in/leah-mullerworth-bowen/",
    image: leahImg,
    paragraphs: [
      "Leah has 25 years of experience in project office and change management roles across multiple industries, most of it spent in financial services supporting large-scale transformation programmes in the City of London. She left her full-time City role in 2020 to focus on ventures closer to home.",
      "In the years before that, she supported the in-person delivery of property project management courses Mark had developed — practical training for new investors covering refurbishment delivery, risk, budgeting and communication. The pandemic closed that model. The property market was under pressure, care providers needed housing, and Leah and Mark joined a wider founding team to launch Supported Living Gateway in 2020. Leah ran the operational side of the business, drawing on her background in organisational management.",
      "She and Mark hold a SSAS — a self-administered company pension giving trustees direct control over investment decisions. They manage it together, putting capital into small businesses, property investor lending, crypto and supported living. Each investment is assessed on its own merits, in sectors they know from direct experience. Leah also trades options, using the same research-led approach that has characterised her career.",
      "Leah now manages Lerakoma's portfolio day to day — handling the administrative, operational and compliance requirements across each property. She has also developed a strong focus on AI for small businesses, using it to improve operational processes and strengthen social media and marketing. Her change management background shapes how she applies it: less about the tools, more about embedding them into how a business actually runs.",
    ],
  },
];

const WhoWeAre = () => (
  <>
    <Navbar />
    <main className="pt-16">
      <section className="relative hero-gradient py-20 overflow-hidden">
        <HeroBgPattern />
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-2">
            Our Story
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Who We Are
          </h1>
          <p className="text-primary-foreground/75 max-w-2xl mx-auto text-lg">
            With combined experience spanning over 55 years in financial services, property and business management, Mark and Leah bring a hands-on, research-led approach to everything they do.
          </p>
        </div>
      </section>

      {/* Founder bios */}
      {founders.map((f, i) => (
        <section
          key={f.name}
          className={i % 2 === 0 ? "bg-background py-20" : "section-gradient py-20"}
        >
          <div className="container mx-auto px-4">
            <div className={`flex flex-col md:flex-row gap-10 items-start max-w-5xl mx-auto ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
              {/* Photo */}
              <div className="shrink-0 w-full md:w-64">
                <img
                  src={f.image}
                  alt={f.name}
                  className="w-full aspect-[3/4] object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Bio text */}
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-1">{f.name}</h2>
                <div className="flex items-center gap-3 mb-6">
                  <p className="text-gold font-medium text-sm">{f.role}</p>
                  <a href={f.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-7 h-7 rounded bg-gold text-white hover:bg-gold/85 transition-colors">
                    <Linkedin className="w-4 h-4" fill="white" />
                  </a>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  {f.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
    <Footer />
  </>
);

export default WhoWeAre;
