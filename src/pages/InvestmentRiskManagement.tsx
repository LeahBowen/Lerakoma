import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBgPattern from "@/components/HeroBgPattern";

const InvestmentRiskManagement = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    {/* Hero */}
    <section className="relative hero-gradient pt-16 overflow-hidden">
      <HeroBgPattern />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <Link
            to="/insights"
            className="inline-flex items-center gap-1 text-gold text-sm font-medium mb-6 hover:gap-2 transition-all"
          >
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <p className="text-gold font-medium text-sm tracking-widest uppercase mb-4">
            Investment
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4">
            Investment Risk Management
          </h1>
          <p className="text-primary-foreground/60 text-sm">April 2026</p>
        </div>
      </div>
    </section>

    {/* Article body */}
    <article className="flex-1 section-gradient py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-lg prose-gray">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Effective risk management is the cornerstone of sustainable property investment. Whether you're an experienced investor or entering the market for the first time, understanding the key risks — and how to mitigate them — can mean the difference between long-term success and costly mistakes.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 font-[family-name:var(--font-heading)]">
            Why Risk Management Matters
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Property investment carries inherent risks: market fluctuations, interest rate changes, tenant voids, regulatory shifts, and unexpected maintenance costs. A disciplined approach to identifying and quantifying these risks allows investors to make informed decisions and protect their capital.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 font-[family-name:var(--font-heading)]">
            Key Risk Categories
          </h2>
          <div className="space-y-6 mb-8">
            {[
              {
                title: "Market Risk",
                desc: "Property values and rental yields are influenced by macroeconomic conditions, local supply and demand, and broader market sentiment. Diversification across locations and property types helps reduce exposure.",
              },
              {
                title: "Financial Risk",
                desc: "Leverage amplifies both gains and losses. Interest rate movements can significantly impact mortgage costs. Stress-testing your portfolio against rate rises is essential.",
              },
              {
                title: "Operational Risk",
                desc: "Void periods, problem tenants, and maintenance costs can erode returns. Professional property management and thorough tenant referencing mitigate these risks.",
              },
              {
                title: "Regulatory & Compliance Risk",
                desc: "Tax changes, licensing requirements, and building regulations evolve constantly. Staying informed and seeking professional advice ensures compliance and avoids penalties.",
              },
              {
                title: "Liquidity Risk",
                desc: "Property is inherently illiquid. Planning for adequate cash reserves and understanding realistic exit timelines are critical for financial resilience.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-lg border p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 font-[family-name:var(--font-heading)]">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 font-[family-name:var(--font-heading)]">
            Our Approach
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            At Lerakoma, we draw on decades of experience in financial services and project management to help clients build resilient investment strategies. Our approach combines rigorous quantitative analysis with practical, real-world insight:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Comprehensive due diligence on every opportunity",
              "Scenario modelling and stress-testing of projected returns",
              "Portfolio diversification strategies tailored to your risk appetite",
              "Ongoing monitoring and proactive risk reporting",
              "Clear exit planning and contingency frameworks",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-gold flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 font-[family-name:var(--font-heading)]">
            Getting Started
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Whether you're looking to review an existing portfolio or explore new investment opportunities, we're here to help. Our consultative approach ensures that risk management is embedded in every decision — not treated as an afterthought.
          </p>

          <div className="border-t pt-8 mt-12">
            <p className="text-muted-foreground mb-4">
              Interested in discussing how we can help manage your investment risk?
            </p>
            <a
              href="/#contact"
              className="inline-flex rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </article>

    <Footer />
  </div>
);

export default InvestmentRiskManagement;
