import Link from "next/link";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-primary py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <BreadcrumbNav items={[{ label: "Terms of Service" }]} />
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mt-4">Terms of Service</h1>
          <p className="text-white/70 font-sans mt-2">Last updated: January 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none font-sans text-gray-700 space-y-8">

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-3">Acceptance of Terms</h2>
            <p>By accessing or using dfwgarageapartments.com (the "Site"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this Site. The Site is operated by 6th Ave Homes ("we," "us," or "our").</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-3">Informational Purpose</h2>
            <p>The content on this Site — including cost estimates, timelines, zoning information, and construction guidance — is provided for general informational purposes only. It does not constitute a contract, guarantee, or binding proposal. Actual project costs, timelines, and feasibility depend on your specific property, location, and project scope, which can only be assessed through a formal consultation.</p>
            <p className="mt-3">Cost ranges mentioned on this Site are estimates based on typical DFW projects and may vary significantly based on material costs, site conditions, design complexity, and permitting requirements at the time of your project.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-3">No Legal or Zoning Advice</h2>
            <p>Information on this Site about zoning rules, ADU regulations, HOA requirements, and local ordinances is provided as a general guide only. Regulations change frequently and vary by jurisdiction. You should verify all zoning and permitting requirements with your local city or county offices and consult a licensed attorney for legal advice specific to your situation.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-3">Intellectual Property</h2>
            <p>All content on this Site — including text, photographs, graphics, logos, and design — is owned by 6th Ave Homes or its licensors and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or use any content from this Site without our express written permission.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-3">Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, 6th Ave Homes and DFW Garage Apartments shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of, or inability to use, this Site or its content. Our total liability for any claim related to this Site shall not exceed $100.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-3">External Links</h2>
            <p>This Site may contain links to third-party websites. We do not endorse or control those sites and are not responsible for their content or practices. Visiting external links is at your own risk.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-3">Changes to These Terms</h2>
            <p>We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated date. Your continued use of the Site after changes are posted constitutes your acceptance of the updated terms.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-3">Governing Law</h2>
            <p>These Terms are governed by the laws of the State of Texas. Any disputes arising from these Terms or your use of this Site shall be resolved in the courts of Tarrant County, Texas.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-3">Contact</h2>
            <div className="bg-card p-5 rounded mt-3">
              <p className="font-bold text-primary">6th Ave Homes / DFW Garage Apartments</p>
              <p>2228 6th Avenue, Fort Worth, TX 76110</p>
              <p><a href="mailto:hello@dfwgarageapartments.com" className="text-accent hover:underline">hello@dfwgarageapartments.com</a></p>
            </div>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-accent font-bold hover:underline font-sans">&larr; Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
