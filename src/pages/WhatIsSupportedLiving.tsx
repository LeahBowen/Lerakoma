import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBgPattern from "@/components/HeroBgPattern";

const WhatIsSupportedLiving = () => (
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
            Supported Living
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4">
            What Is Supported Living?
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
            Supported living is one of the fastest-growing sectors in UK property investment, yet many investors still have little understanding of what it actually involves. At its core, supported living is about providing a home — not an institution — for people with long-term support needs, giving them the independence and dignity of their own tenancy while ensuring they receive the care they require.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 font-[family-name:var(--font-heading)]">
            The Fundamentals
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Supported living describes a living arrangement where an individual with long-term support needs occupies a property under their own tenancy agreement. The critical distinction between supported living and a residential care home is that <strong>the tenancy and care are kept entirely separate</strong>. The tenant holds a genuine tenancy — with all the rights that entails — while a registered care provider delivers support services tailored to their individual needs.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            In practice, a Registered Provider or charity takes a long-term lease on a property and then lets it to the supported living tenant. This model has been driven by a national policy shift away from institutional care and towards community-based living, giving vulnerable adults the opportunity to live in ordinary homes within their local communities.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 font-[family-name:var(--font-heading)]">
            Who Benefits from Supported Living?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Supported living typically serves adults with a range of long-term needs, including:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Learning disabilities and autism",
              "Mental health conditions",
              "Physical disabilities",
              "Acquired brain injuries",
              "Complex care needs requiring 24-hour support",
              "Older people who need assistance but wish to retain independence",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-gold flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The level of support varies enormously — from a few hours of visiting support each week through to round-the-clock, one-to-one care — and is funded by local authorities, the NHS, or through personal budgets.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 font-[family-name:var(--font-heading)]">
            Why the Demand Is Growing
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Local authorities across the UK are actively seeking alternatives to costly residential care placements. Supported living is often more cost-effective for commissioners while delivering significantly better outcomes for tenants. The supply of suitable housing, however, falls well short of demand — creating a structural imbalance that shows no signs of correcting itself.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            This has not gone unnoticed by institutional investors. Large pension funds and investment funds have been quietly channelling millions of pounds into developing supported living schemes for years, viewing the sector as one of the most secure long-term property investments available.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 font-[family-name:var(--font-heading)]">
            The Investment Opportunity
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            As a property investor, you let your property to a supported living provider on a long-term lease. This means you benefit from a secure, long-term tenant while creating a safe, stable home for a vulnerable person. The advantages over traditional buy-to-let are significant:
          </p>
          <div className="space-y-6 mb-8">
            {[
              {
                title: "No Void Periods",
                desc: "Providers take the lease directly, so you are not reliant on individual tenants coming and going. Your income is consistent.",
              },
              {
                title: "Damages Covered",
                desc: "Wear and tear or damage to the property is usually the responsibility of the provider, not you as the landlord.",
              },
              {
                title: "Maintenance Managed",
                desc: "In many arrangements, the provider handles day-to-day repairs and maintenance on your behalf — removing the need for a letting agent.",
              },
              {
                title: "Higher Returns",
                desc: "When you factor in the elimination of voids, letting agent fees, and reduced maintenance costs, the net return on a supported living property can comfortably exceed a comparable open-market rental.",
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
            What Kind of Property Is Suitable?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            While there is still strong demand for larger, purpose-built schemes, there is an increasing need for individual properties within the community. The move away from institutional care has driven demand for homes with their own front door — the kind of property many investors may already have in their portfolio.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Small bungalows, one-bedroom flats, and two-bedroom houses can all be suitable for supported living, making this investment opportunity accessible to the average property investor — not just institutional funds with deep pockets.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 font-[family-name:var(--font-heading)]">
            SSAS Pension Holders: A Special Consideration
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            For those with a Small Self-Administered Scheme (SSAS), supported living opens up a particularly interesting avenue. Certain eligible supported living properties can be held within a SSAS — allowing pension holders to invest in the same type of schemes that large institutional pension funds have been using for years, with significant tax advantages.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We explore this topic in detail in our companion article,{" "}
            <Link to="/insights/supported-living-ssas" className="text-accent hover:underline">
              Why You Should Consider Supported Living Property Investment in Your SSAS
            </Link>.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 font-[family-name:var(--font-heading)]">
            Our Perspective
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Through <Link to="/initiatives" className="text-accent hover:underline">Supported Living Gateway</Link>, our team has extensive hands-on experience in this sector — acquiring, converting, and managing supported living properties across multiple tenant types. We believe this is one of the most compelling investment models available today: one that delivers strong, reliable returns while making a genuine difference to the lives of vulnerable people.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Supported living is no longer a well-kept secret reserved for institutional investors. It is an accessible, proven model for property investors who take a long-term view — and who want their investments to create real social value alongside financial returns.
          </p>

          <div className="border-t pt-8 mt-12">
            <p className="text-muted-foreground mb-4">
              Interested in learning more about supported living investment?
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

export default WhatIsSupportedLiving;
