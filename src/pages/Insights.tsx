import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBgPattern from "@/components/HeroBgPattern";

const articles = [
  {
    slug: "what-is-supported-living",
    title: "What Is Supported Living?",
    excerpt:
      "An introduction to supported living — what it is, who it serves, why demand is growing, and how property investors can access this secure, socially impactful investment model.",
    date: "April 2026",
    category: "Supported Living",
  },
  {
    slug: "supported-living-ssas",
    title: "Why You Should Consider Supported Living Property Investment in Your SSAS",
    excerpt:
      "Exploring how SSAS pension holders can invest in eligible supported living property — the tax benefits, the HMRC rules, and why hands-on experience matters when entering this specialist sector.",
    date: "April 2026",
    category: "Supported Living",
  },
  {
    slug: "the-risk-pyramid",
    title: "The Risk Pyramid",
    excerpt:
      "A framework for building a balanced investment portfolio. Mark explores how disciplined risk allocation across four layers — from low to very high — can protect wealth while still capturing growth.",
    date: "April 2026",
    category: "Investment",
  },
  {
    slug: "investment-risk-management",
    title: "Investment Risk Management",
    excerpt:
      "Understanding and managing risk is fundamental to successful property investment. We explore key frameworks and practical strategies for protecting and growing your portfolio.",
    date: "April 2026",
    category: "Investment",
  },
];

const Insights = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    {/* Hero */}
    <section className="relative hero-gradient pt-16 overflow-hidden">
      <HeroBgPattern />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl">
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-4">
            Knowledge Base
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-4">
            Insights
          </h1>
          <p className="text-primary-foreground/75 text-lg max-w-lg">
            Thought leadership and practical guidance from the Lerakoma team.
          </p>
        </div>
      </div>
    </section>

    {/* Articles grid */}
    <section className="flex-1 section-gradient py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <Link
              key={a.slug}
              to={`/insights/${a.slug}`}
              className="group bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col"
            >
              <div className="p-6 flex flex-col flex-1">
                <span className="text-gold text-xs font-semibold uppercase tracking-wider mb-2">
                  {a.category}
                </span>
                <h2 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors font-[family-name:var(--font-heading)]">
                  {a.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {a.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {a.date}
                  </span>
                  <span className="flex items-center gap-1 text-accent font-medium group-hover:gap-2 transition-all">
                    Read more <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Insights;
