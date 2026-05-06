import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBgPattern from "@/components/HeroBgPattern";

const riskLevels = [
  {
    level: "Low Risk",
    allocation: "50–70%",
    returns: "8–10%",
    examples: ["ETFs & Index Funds", "Direct Property", "REITs"],
    color: "bg-emerald-100 border-emerald-300 text-emerald-900",
    tagColor: "bg-emerald-200 text-emerald-800",
    desc: "The foundation of any sound portfolio. These assets provide steady, reliable income and long-term capital appreciation. They form the bulk of your allocation — particularly within pension structures like a SSAS — to protect generational wealth.",
  },
  {
    level: "Medium Risk",
    allocation: "20–30%",
    returns: "10–15%",
    examples: ["3rd Party Loans", "Hedge Funds", "Alternative Assets (Wine, Whisky, Watches)"],
    color: "bg-amber-100 border-amber-300 text-amber-900",
    tagColor: "bg-amber-200 text-amber-800",
    desc: "A step up in both risk and potential return. These investments offer diversification beyond traditional markets and can generate attractive yields, but require careful due diligence and a longer time horizon.",
  },
  {
    level: "High Risk",
    allocation: "10–20%",
    returns: "15–25%",
    examples: ["Start-up Businesses", "Options Trading", "FX Funds"],
    color: "bg-orange-100 border-orange-300 text-orange-900",
    tagColor: "bg-orange-200 text-orange-800",
    desc: "Higher volatility, but with the potential for significant returns. These positions should be sized carefully and only pursued with capital you can afford to lose. They often sit outside pension wrappers in a separate investment vehicle.",
  },
  {
    level: "Very High Risk",
    allocation: "5–10%",
    returns: "25%+",
    examples: ["FX Bots", "Crypto Trading", "Opportunistic Plays"],
    color: "bg-red-100 border-red-300 text-red-900",
    tagColor: "bg-red-200 text-red-800",
    desc: "The tip of the pyramid. These speculative positions can deliver outsized gains — but also total losses. Only a small percentage of your portfolio should ever sit here, and only with full awareness of the downside.",
  },
];

const RiskPyramid = () => (
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
            The Risk Pyramid
          </h1>
          <p className="text-primary-foreground/75 text-lg max-w-lg">
            A framework for building a balanced investment portfolio through disciplined risk allocation.
          </p>
          <p className="text-primary-foreground/60 text-sm mt-4">By Mark Bowen</p>
        </div>
      </div>
    </section>

    {/* Article body */}
    <article className="flex-1 section-gradient py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">

          {/* Disclaimer */}
          <div className="bg-muted/50 border rounded-lg p-5 mb-10 text-xs text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Disclaimer:</strong> The information in this article is for educational purposes only and does not constitute financial advice. Before making any investment decision, you should consult a qualified financial advisor. Past performance is not indicative of future results.
          </div>

          {/* Intro */}
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            One of the most common mistakes investors make is failing to balance risk across their portfolio. They either play it too safe — leaving returns on the table — or concentrate too heavily in high-risk positions that can wipe out years of gains in a single downturn.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            The <strong className="text-foreground">Risk Pyramid</strong> is a framework Mark uses regularly when discussing portfolio construction. It provides a clear, visual way to think about how much of your wealth should sit at each level of risk — ensuring your portfolio is structured for both growth and protection.
          </p>

          {/* Diversification */}
          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 font-[family-name:var(--font-heading)]">
            The Power of Diversification
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            At the heart of the Risk Pyramid is diversification — spreading investments across various asset classes, sectors, and risk levels to reduce the impact of any single investment's poor performance. The goal is more consistent returns over the long term, not chasing the highest possible gain.
          </p>
          <div className="space-y-4 mb-10">
            {[
              { quote: "Diversification is the only free lunch in investing.", author: "Harry Markowitz, Pioneer of Modern Portfolio Theory" },
              { quote: "The goal of diversification is not necessarily garnering the highest returns, but allowing you to sleep well at night.", author: "Warren Buffett" },
              { quote: "The only investors who shouldn't diversify are those who are right 100% of the time.", author: "Sir John Templeton" },
            ].map((q) => (
              <blockquote key={q.author} className="border-l-4 border-accent pl-4 py-2">
                <p className="text-foreground italic mb-1">"{q.quote}"</p>
                <cite className="text-muted-foreground text-sm not-italic">— {q.author}</cite>
              </blockquote>
            ))}
          </div>

          {/* The Pyramid */}
          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 font-[family-name:var(--font-heading)]">
            Understanding the Pyramid
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The pyramid is built from the bottom up. The widest layer — low risk — carries the largest allocation of your capital. As you move up, the risk and potential return increase, but the allocation decreases proportionally. This ensures the bulk of your wealth is protected while still allowing exposure to higher-growth opportunities.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            A carefully considered investment strategy is required to secure your target return. Different asset types have different risk and return characteristics — the key is knowing how much to allocate to each.
          </p>

          {/* Risk levels */}
          <div className="space-y-6 mb-10">
            {[...riskLevels].reverse().map((r) => (
              <div key={r.level} className={`rounded-lg border p-6 ${r.color}`}>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-heading)]">
                    {r.level}
                  </h3>
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${r.tagColor}`}>
                    {r.allocation} allocation
                  </span>
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${r.tagColor}`}>
                    Target: {r.returns}
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-3 opacity-90">{r.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {r.examples.map((ex) => (
                    <span key={ex} className="text-xs bg-white/50 px-2 py-1 rounded">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* SSAS vs Non-SSAS */}
          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 font-[family-name:var(--font-heading)]">
            Structuring Risk: SSAS vs Non-SSAS
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Mark advocates separating investments across different vehicles based on their risk profile. Pension structures like a Small Self-Administered Scheme (SSAS) should hold the majority of low and medium risk assets — protecting generational wealth within a tax-efficient wrapper. Higher-risk investments are better placed in separate investment businesses, where losses won't erode your pension pot.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <div className="bg-card rounded-lg border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2 font-[family-name:var(--font-heading)]">
                SSAS (Pension)
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Majority allocation to Low and Medium risk assets. Focus on wealth retention, protection, and steady income generation for retirement.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded">Low Risk</span>
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">Medium Risk</span>
              </div>
            </div>
            <div className="bg-card rounded-lg border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2 font-[family-name:var(--font-heading)]">
                Investment Business
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Higher risk positions sit here, where the potential for both outsized gains and losses is contained away from pension assets.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">High Risk</span>
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Very High Risk</span>
              </div>
            </div>
          </div>

          {/* Putting it together */}
          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 font-[family-name:var(--font-heading)]">
            Putting It Into Practice
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            To illustrate how the pyramid works in practice: with a total portfolio of £1m and a balanced allocation across all four risk layers, a blended annual return could generate approximately £150k per year — or around £12,500 per month. The key insight is that even though the low-risk layer has the lowest percentage return, it contributes the most in absolute terms because it holds the largest share of capital.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The exact allocations should always be tailored to your personal circumstances, risk appetite, and financial goals. The pyramid is a framework — not a prescription.
          </p>

          {/* Key takeaways */}
          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 font-[family-name:var(--font-heading)]">
            Key Takeaways
          </h2>
          <ul className="space-y-3 mb-10">
            {[
              "Build your portfolio from the bottom up — secure the foundation before chasing growth",
              "Allocation to each risk layer should decrease as risk increases",
              "Diversify across asset classes, sectors, and geographies",
              "Separate pension assets from higher-risk investment activities",
              "Regularly review and rebalance as your circumstances and the market evolve",
              "Always invest within your risk tolerance — the pyramid should help you sleep at night",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-gold flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="border-t pt-8 mt-12">
            <p className="text-muted-foreground mb-4">
              Want to discuss how the Risk Pyramid framework could apply to your investment strategy?
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

export default RiskPyramid;
