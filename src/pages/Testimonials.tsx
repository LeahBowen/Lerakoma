import { Link } from "react-router-dom";
import { useMemo } from "react";
import { Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBgPattern from "@/components/HeroBgPattern";

const testimonials = [
  {
    quote:
      "Leah always brings a professional attitude, structured approach and dependable outcome to all her deliverables. She is able to manage up and down the management hierarchy, while always using a friendly manner that glues the various teams together.",
    name: "Matthew Robinson",
    title: "Director, Solaris Consulting",
  },
  {
    quote:
      "I have worked with Leah a number of times over our careers and have never failed to be impressed by her high quality output, commitment to hard work and ceaseless good humour. She is incredibly organised and efficient, very logical and her common sense approach means she can turn her hand to anything successfully. Her genuine interest in people and concern for them means that she always becomes the glue that knits a team together and makes working with her a pleasure. I would work with her again in a heartbeat.",
    name: "Siobhan Clarke",
    title: "COO, Royal London",
  },
  {
    quote:
      "Leah brings enthusiasm and positivity to any workplace. Her ability to handle complex data sets and present them into clear and digestible formats is second to none. A clear and articulate communicator, managing key stakeholders at all levels, comes easy to Leah given her experience.",
    name: "Zara Marchetti",
    title: "M&G",
  },
  {
    quote:
      "Mark has been involved with my business for around 10 years. When we first started working together, I was operating as a typical builder with limited structure and was regularly facing issues with project overspends and overruns.\n\nSince Mark has been mentoring me and taking on a project management role within my business, we have gone from strength to strength. What began as a reasonable living as a small building firm has grown into a business with a turnover of approximately £2.5 million, alongside a portfolio of investments across multiple sectors.\n\nMark's guidance, strategic thinking and support have been instrumental in this growth, and I have complete trust in his judgment and integrity. Needless to say, I intend to continue working with Mark for the long term.",
    name: "Peter Cook",
    title: "Director, Fineva Construction Limited",
  },
  {
    quote:
      "Having Mark as part of our team adds a different dimension to our thinking, we are able to work together to a common purpose and held to the track we need to follow. The routines and disciplines are exemplary.",
    name: "Cliff Barry",
    title: "Brilliant Consulting & Training",
  },
];

const Testimonials = () => {
  const shuffled = useMemo(
    () => [...testimonials].sort(() => Math.random() - 0.5),
    []
  );

  return (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    {/* Hero */}
    <section className="relative hero-gradient pt-16 overflow-hidden">
      <HeroBgPattern />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-4">
            Client Feedback
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-4">
            Testimonials
          </h1>
          <p className="text-primary-foreground/75 text-lg max-w-lg">
            What our clients and partners say about working with the Lerakoma team.
          </p>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="flex-1 section-gradient py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-10">
          {shuffled.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-lg border shadow-sm p-8 relative"
            >
              <Quote
                size={32}
                className="text-gold/30 absolute top-6 right-6"
              />
              <p className="text-foreground text-lg leading-relaxed italic mb-6">
                "{t.quote}"
              </p>
              <p className="text-sm">
                <span className="font-semibold text-foreground">{t.name}</span>
                <span className="text-muted-foreground"> — {t.title}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
  );
};

export default Testimonials;
