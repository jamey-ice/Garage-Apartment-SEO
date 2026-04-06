import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-lg w-full text-center">
        <p className="text-accent font-sans font-bold uppercase tracking-widest text-sm mb-4">404 — Page Not Found</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
          This Page Doesn't Exist
        </h1>
        <p className="text-gray-600 font-sans text-lg mb-8">
          Looks like this page moved or never existed. Here are some good places to start:
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Link href="/" className="bg-accent text-white font-bold uppercase tracking-wide text-sm px-6 py-3 hover:bg-accent/90 transition-colors">
            Go Home
          </Link>
          <Link href="/contact" className="border-2 border-primary text-primary font-bold uppercase tracking-wide text-sm px-6 py-3 hover:bg-primary hover:text-white transition-colors">
            Schedule a Consultation
          </Link>
        </div>
        <div className="border-t border-gray-200 pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <Link href="/services" className="text-primary hover:text-accent transition-colors font-sans">Services</Link>
          <Link href="/areas" className="text-primary hover:text-accent transition-colors font-sans">Areas We Serve</Link>
          <Link href="/resources" className="text-primary hover:text-accent transition-colors font-sans">Resources</Link>
          <Link href="/about" className="text-primary hover:text-accent transition-colors font-sans">About Us</Link>
        </div>
      </div>
    </div>
  );
}
