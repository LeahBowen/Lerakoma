import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBgPattern from "@/components/HeroBgPattern";

const SupportedLivingSSAS = () => (
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
            Why You Should Consider Supported Living Property Investment in Your SSAS
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
            Small Self-Administered Schemes (SSAS) are pension arrangements designed for small business owners, offering a flexible and tax-efficient way to invest for the future. While most SSAS holders focus on commercial property, stocks, or bonds, there is a lesser-known opportunity that combines strong financial returns with genuine social impact: investing in supported living property.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 font-[family-name:var(--font-heading)]">
            What Is Supported Living Investment?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Supported living provides specialist accommodation for vulnerable adults — people with learning disabilities, mental health conditions, physical disabilities, or other complex needs — who require varying levels of care and support to live as independently as possible. As an investor, you provide the property, and a registered care provider manages the tenants and delivers care services.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The sector is underpinned by consistent demand. Local authorities are actively seeking alternatives to costly residential care placements, and the supply of suitable housing falls well short of need. This structural imbalance creates a compelling investment case.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 font-[family-name:var(--font-heading)]">
            Can You Hold Supported Living Property in a SSAS?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            SSAS pensions are generally prohibited from holding residential property under strict HMRC regulations — breaching these rules can result in severe tax penalties. However, the HMRC pension tax manual outlines specific exceptions where certain types of property are <strong>not</strong> classified as residential, provided particular conditions are met.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            One such exception applies to some forms of supported living accommodation. This opens up an interesting avenue for SSAS holders interested in the care sector. However, it is crucial to understand that not all supported living properties qualify.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 font-[family-name:var(--font-heading)]">
            Key Considerations
          </h2>
          <div className="space-y-6 mb-8">
            {[
              {
                title: "Limited Scope",
                desc: "The HMRC exception does not cover the entire supported living market. For instance, properties providing care for care leavers do not qualify. Only properties catering to certain groups of individuals, as outlined in the HMRC guidelines, are eligible.",
              },
              {
                title: "Children's Homes",
                desc: "Notably, children's homes are often allowable to be held within a SSAS — an area many investors overlook.",
              },
              {
                title: "Professional Guidance Is Essential",
                desc: "Always consult with your SSAS administrator and a qualified financial adviser before making any decisions. Attempting to circumvent the rules can result in hefty fines. Strict adherence to HMRC guidelines is non-negotiable.",
              },
              {
                title: "Regulations Change",
                desc: "HMRC rules evolve over time. Staying informed about current legislation and seeking up-to-date advice is critical to protecting your investment.",
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
            The Tax Benefits
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If a supported living property meets the HMRC criteria, holding it within a SSAS offers significant advantages:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Tax-Free Growth — any increase in the property's value is free from capital gains tax",
              "Tax-Free Income — rental income received within the SSAS is not subject to income tax",
              "Business Efficiency — for those already operating in the care sector, this can be a highly tax-efficient way to own properties used in the business",
              "Pension Growth — rental yields and capital appreciation compound within a tax-sheltered environment, accelerating long-term pension growth",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-gold flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 font-[family-name:var(--font-heading)]">
            Choosing the Right Mentor
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Supported living property investment is a specialist sector. If you are considering entering it — particularly through a SSAS — it is essential to work with people who have first-hand, hands-on experience, not just theoretical knowledge.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A good mentor should have a clear and proven track record in acquiring, converting, and managing supported living properties. They should be able to protect you from making costly mistakes because they have trodden the path before you. Look for someone with experience in negotiating leases, navigating planning changes, and managing the complexities of dealing with care providers and local authorities.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            As a rule of thumb: if someone is a full-time coach or educator in supported living but is not actively investing themselves, ask why. Ideally, a good mentor will still be sourcing and building their own portfolio to keep up with current trends, updated legislation, and market conditions. Knowledge without hands-on experience is nothing more than theory.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 font-[family-name:var(--font-heading)]">
            Our Experience
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Through <Link to="/initiatives" className="text-accent hover:underline">Supported Living Gateway</Link>, our team has over 70 years of combined experience in property investing, with a portfolio exceeding £8 million and 56 supported living units currently under management across varied tenant types. Several members of the team are also SSAS pension trustees, giving us direct, practical knowledge of this investment route.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The potential tax benefits of holding eligible supported living property within a SSAS are significant — but so are the risks if not done correctly. This is a complex area that requires careful navigation, meticulous planning, and expert guidance. For those willing to invest the time and due diligence, it can be a powerful strategy that delivers strong financial returns while creating homes for those who need them most.
          </p>

          <div className="border-t pt-8 mt-12">
            <p className="text-muted-foreground mb-4">
              Want to learn more about supported living property investment or explore SSAS opportunities?
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

export default SupportedLivingSSAS;
