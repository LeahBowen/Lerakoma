import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    <article className="flex-1 section-gradient pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose prose-lg prose-gray">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-[family-name:var(--font-heading)]">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm mb-10">Last updated: April 2026</p>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Lerakoma Ltd ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-10 mb-3 font-[family-name:var(--font-heading)]">
            1. Information We Collect
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We may collect the following types of information:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              "Personal details you provide via our contact form (name, email address, phone number, message content)",
              "Technical data such as your IP address, browser type, operating system, and browsing behaviour collected automatically via cookies and similar technologies",
              "Usage data including pages visited, time spent on the site, and referral sources",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold text-foreground mt-10 mb-3 font-[family-name:var(--font-heading)]">
            2. How We Use Your Information
          </h2>
          <ul className="space-y-2 mb-6">
            {[
              "To respond to enquiries submitted through our contact form",
              "To improve our website and user experience",
              "To comply with legal obligations",
              "To send relevant communications if you have opted in to receive them",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold text-foreground mt-10 mb-3 font-[family-name:var(--font-heading)]">
            3. Legal Basis for Processing
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We process your personal data under the following legal bases as set out in the UK GDPR: your consent (e.g. when you submit a contact form), our legitimate interests (e.g. improving our services), and compliance with legal obligations.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-10 mb-3 font-[family-name:var(--font-heading)]">
            4. Data Sharing
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who assist us in operating our website or conducting our business, provided they agree to keep this information confidential. We may also disclose information where required by law.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-10 mb-3 font-[family-name:var(--font-heading)]">
            5. Data Retention
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Contact form submissions are retained for up to 24 months unless you request earlier deletion.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-10 mb-3 font-[family-name:var(--font-heading)]">
            6. Cookies
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our website may use cookies to enhance your browsing experience. Cookies are small text files stored on your device. You can control cookie preferences through your browser settings. Disabling cookies may affect the functionality of certain parts of the site.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-10 mb-3 font-[family-name:var(--font-heading)]">
            7. Your Rights
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Under the UK GDPR, you have the right to:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              "Access the personal data we hold about you",
              "Request correction of inaccurate or incomplete data",
              "Request deletion of your personal data",
              "Object to or restrict our processing of your data",
              "Request data portability",
              "Withdraw consent at any time where processing is based on consent",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed mb-6">
            To exercise any of these rights, please contact us using the details below.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-10 mb-3 font-[family-name:var(--font-heading)]">
            8. Third-Party Links
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our website may contain links to external sites that are not operated by us. We have no control over the content and privacy practices of those sites and encourage you to review their privacy policies.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-10 mb-3 font-[family-name:var(--font-heading)]">
            9. Security
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We take reasonable technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-10 mb-3 font-[family-name:var(--font-heading)]">
            10. Changes to This Policy
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this page periodically.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-10 mb-3 font-[family-name:var(--font-heading)]">
            11. Contact Us
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us at:
          </p>
          <div className="bg-card rounded-lg border p-6">
            <p className="text-foreground font-semibold mb-1">Lerakoma Ltd</p>
            <p className="text-muted-foreground text-sm">
              Email:{" "}
              <a href="mailto:info@lerakoma.co.uk" className="text-accent hover:underline">
                info@lerakoma.co.uk
              </a>
            </p>
          </div>
        </div>
      </div>
    </article>

    <Footer />
  </div>
);

export default PrivacyPolicy;
