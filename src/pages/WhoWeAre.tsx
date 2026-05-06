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
      "Mark spent over 30 years in financial services in a number of senior roles, leading major change programmes across technology, people and process. In 2016 he left the City, spending time freelancing as a project management trainer before moving into the construction sector — working as an apprentice site labourer and going on to project manage a full refurbishment of a Grade II listed property on Harley Street for Fineva Construction. Mark continues to consult for Fineva, which has since grown from a small local firm into a company taking on large-scale projects across London.",
      "Building the Lerakoma portfolio in parallel, Mark noticed that while property investment training was widely available, almost none of it addressed how to actually deliver a project — on budget, on time, and with proper risk management. He co-founded a training company with a business partner to address that gap, developing courses that equipped new property investors with the project management and communication skills needed to refurbish safely and professionally. Leah supported the delivery of the in-person training as the courses gained momentum.",
      "When the pandemic brought face-to-face training to a halt, Mark turned his attention to what was happening in the wider property market. With investors under pressure — student lets empty, short-term rentals stalled — and care providers struggling to find suitable housing, he saw an opportunity to connect the two. That thinking led to the founding of Supported Living Gateway in 2020, as part of a wider founding team.",
      "Mark and Leah are joint trustees of a SSAS — a self-administered company pension scheme that gives trustees direct control over their investment decisions. Rather than leaving the fund in the hands of a traditional fund manager, they manage it together, deploying capital into areas they know well — including small businesses, property investor lending, crypto and supported living.",
      "Mark also actively trades FX and gold, drawing on his financial background to navigate currency and commodities markets.",
      "Today Mark focuses his time on consulting and mentoring — working with businesses and entrepreneurs looking to grow — alongside managing Lerakoma's portfolio and investor relationships.",
    ],
  },
  {
    name: "Leah Bowen",
    role: "Co-Founder & Director",
    linkedin: "https://www.linkedin.com/in/leah-mullerworth-bowen/",
    image: leahImg,
    paragraphs: [
      "Leah has 25 years of experience across multiple industries in project office and change management roles, the majority of which was spent in financial services supporting large-scale transformation programmes in the City of London. In 2020 she left her full-time City role to focus on ventures closer to home.",
      "In the years prior, alongside building the Lerakoma portfolio, she had been involved in delivering property project management training — supporting the in-person courses Mark had developed to help new investors apply professional PM skills to their refurbishment projects. When the pandemic made that model unworkable, the focus shifted. With the property market under strain and care providers in urgent need of suitable accommodation, Leah and Mark were part of a wider founding team that launched Supported Living Gateway in 2020. Leah took on the operational running of the business, drawing on her background in organisational management and delivery.",
      "As joint trustees of their SSAS company pension, Leah and Mark take a hands-on approach to managing their fund — making investment decisions together across a range of asset classes including small businesses, property investor lending, crypto and supported living. The structure suits them well; every decision is deliberate, research-led and based on sectors they have direct experience in.",
      "Leah also trades options, applying the same structured approach that has characterised her career.",
      "Leah now concentrates on managing Lerakoma's portfolio day to day — overseeing the administrative, operational and compliance requirements of each property — alongside her continued trading activity.",
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
