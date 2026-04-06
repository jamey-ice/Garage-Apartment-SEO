import Link from "next/link";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-primary py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <BreadcrumbNav items={[{ label: "Privacy Policy" }]} />
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mt-4">Privacy Policy</h1>
          <p className="text-white/70 font-sans mt-2">Last updated: January 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none font-sans text-gray-700 space-y-8">

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-3">Who We Are</h2>
            <p>DFW Garage Apartments is a marketing brand operated by 6th Ave Homes, located at 2228 6th Avenue, Fort Worth, TX 76110. This Privacy Policy describes how we collect, use, and protect your personal information when you use our website at dfwgarageapartments.com.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-3">Information We Collect</h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Name, email address, and phone number when you submit a contact form or consultation request</li>
              <li>Information about your property and project type when you fill out our intake form</li>
              <li>Email address if you subscribe to receive our free resource guides</li>
            </ul>
            <p className="mt-3">We also collect certain information automatically when you visit our website, including your IP address, browser type, pages visited, and referring URL through standard web analytics tools.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-3">How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Respond to your consultation requests and inquiries</li>
              <li>Send you the free guides and resources you request</li>
              <li>Follow up about your garage apartment or ADU project</li>
              <li>Improve our website and understand how visitors use it</li>
              <li>Send occasional project updates or educational content (you can unsubscribe at any time)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-3">Sharing Your Information</h2>
            <p>We do not sell, rent, or trade your personal information to third parties. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Service providers who help us operate our website and communicate with you (such as email platforms)</li>
              <li>Our team at 6th Ave Homes who will contact you about your project</li>
            </ul>
            <p className="mt-3">We will not share your information with any third party without your consent, except as required by law.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-3">Cookies</h2>
            <p>Our website uses cookies and similar technologies to improve your browsing experience and analyze traffic. You can control cookie settings through your browser preferences. Disabling cookies may affect some features of the site.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-3">Data Security</h2>
            <p>We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure. However, no internet transmission is completely secure, and we cannot guarantee the absolute security of your data.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-3">Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal information at any time by contacting us at <a href="mailto:hello@dfwgarageapartments.com" className="text-accent hover:underline">hello@dfwgarageapartments.com</a>. We will respond to your request within 30 days.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-primary mb-3">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <div className="mt-3 bg-card p-5 rounded">
              <p className="font-bold text-primary">6th Ave Homes / DFW Garage Apartments</p>
              <p>2228 6th Avenue, Fort Worth, TX 76110</p>
              <p><a href="mailto:hello@dfwgarageapartments.com" className="text-accent hover:underline">hello@dfwgarageapartments.com</a></p>
              <p>(817) 555-0100</p>
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
