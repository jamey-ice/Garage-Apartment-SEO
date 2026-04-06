import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Section {
  heading: string;
  body: string | string[];
}

interface ResourceData {
  slug: string;
  title: string;
  pageTitle: string;
  h1: string;
  intro: string;
  sections: Section[];
  faqs: { q: string; a: string }[];
  ctaHeading: string;
}

const RESOURCES: Record<string, ResourceData> = {
  'cost-guide': {
    slug: 'cost-guide',
    title: 'Cost Guide',
    pageTitle: 'How Much Does a Garage Apartment Cost in DFW? (2026 Guide)',
    h1: 'How Much Does a Garage Apartment Cost in Dallas–Fort Worth?',
    intro: 'Real cost ranges for building a garage apartment in DFW — from garage conversions to detached ADUs. Here\'s what drives the price and what you should budget for in 2026.',
    sections: [
      {
        heading: 'Garage Apartment Cost Ranges in DFW',
        body: [
          'The cost of building a garage apartment in DFW depends significantly on the type of build. Here are realistic ranges based on projects we\'ve completed across Fort Worth, Dallas, and surrounding cities:',
          '**Garage Conversion: $40,000–$100,000.** Converting an existing attached or detached garage into livable space. The most cost-effective option because you\'re finishing what\'s already there — foundation, walls, and roof exist. Main cost drivers: plumbing rough-in, electrical upgrades, HVAC, insulation, and finish level.',
          '**Above-Garage Apartment: $80,000–$200,000.** Building a full living unit above an existing garage. You keep the garage below. Cost is higher than a conversion because you\'re adding new square footage, new structural work, and new MEP systems.',
          '**Detached ADU (New Build): $100,000–$300,000+.** A standalone structure built from the ground up. Maximum design flexibility, highest rental income potential, and the highest upfront cost. Site conditions (slope, utility proximity, access) significantly affect price.',
          '**Cost per square foot:** $150–$350 depending on the type of build and finish level. Conversions tend to sit at the lower end of this range; premium detached builds at the upper end.',
        ],
      },
      {
        heading: 'What Drives the Cost of a Garage Apartment?',
        body: [
          '**Size of the space.** More square footage = more materials and labor. Simple math, but worth stating.',
          '**New build vs. conversion.** Converting an existing structure is almost always less expensive than building new because you\'re not starting from scratch on foundation, framing, or roofing.',
          '**Plumbing and electrical.** Adding a kitchen and bathroom to a space that has neither is a significant cost item. Running new supply lines, drain lines, and electrical panel upgrades add up. If the structure already has plumbing roughed in, costs are lower.',
          '**Foundation requirements.** Detached new builds require a foundation (slab or pier-and-beam). This is one of the larger line items on any ground-up project.',
          '**Design and finish level.** Basic finish (LVP flooring, stock cabinets, standard fixtures) costs significantly less than premium finish (hardwood, custom millwork, designer fixtures). Finish level is one of the biggest cost levers you control.',
          '**Site conditions.** A flat lot with easy access and utilities nearby costs less than a sloped lot, a tight alleyway, or a property where utilities need to be extended far.',
          '**City permit fees.** Permit fees vary by city. Fort Worth and Denton tend to be more affordable. Dallas permit fees are higher and the process takes longer.',
        ],
      },
      {
        heading: 'Garage Apartment Cost by City',
        body: [
          '**Fort Worth:** Garage conversions $40K–$100K | Above-garage $80K–$180K | Detached ADU $100K–$280K. Permit fees $800–$2,500. One of the most cost-effective DFW markets.',
          '**Dallas:** Garage conversions $50K–$110K | Above-garage $90K–$200K | Detached ADU $120K–$300K. Higher permit complexity and fees vs. Fort Worth.',
          '**Plano / Frisco:** Garage conversions $50K–$110K | Above-garage $90K–$210K | Detached ADU $130K–$310K. Higher labor costs and finish expectations in these markets.',
          '**Denton:** Garage conversions $38K–$90K | Above-garage $75K–$175K | Detached ADU $95K–$250K. One of the most affordable DFW markets.',
          '**Arlington / McKinney / Southlake:** Generally in the $45K–$130K range for conversions, up to $400K+ for premium detached builds in Southlake.',
        ],
      },
      {
        heading: 'How to Budget for a Garage Apartment Project',
        body: [
          '**Total cost = construction + permits + design + contingency.** Many homeowners budget for construction only and are surprised by the rest. Here\'s how to think about it: permits typically add $800–$4,000 depending on city and project type. Design is typically included in our fee. Contingency: budget 10–15% for unknowns, especially on conversions where the existing structure may reveal surprises during demo.',
          '**Cost-plus vs. fixed bid.** We work on a cost-plus basis, which means you see exactly what we spend — materials, labor, subcontractors — plus our overhead and profit. This is more transparent than a fixed bid, where the contractor builds margin into the number to cover unknowns and you never see the actual costs.',
          '**Financing.** Most homeowners finance garage apartment projects through home equity loans, HELOCs, or construction-to-permanent loans. Some use cash. We can refer you to lenders who specialize in ADU financing in DFW.',
        ],
      },
      {
        heading: 'Is a Garage Apartment a Good Investment?',
        body: [
          '**Rental income potential.** A well-finished garage apartment in a desirable DFW neighborhood rents for $1,200–$2,400 per month depending on size and location. A $80,000 garage conversion generating $1,400/month pays for itself in under 5 years — before accounting for property value increase.',
          '**Property value increase.** Adding livable square footage increases both assessed and market value. A $60,000 garage conversion typically adds $50,000–$90,000 in property value, depending on the market. Above-garage apartments and detached ADUs add proportionally more.',
          '**Payback period.** Depends on the cost of the build and the rental income generated. Garage conversions typically pay back in 5–8 years via rental income. Detached ADUs take longer — 8–12 years — but generate the most income and add the most value.',
          '**Comparison to other home improvements.** Kitchen and bathroom remodels typically return 60–80 cents on the dollar. A well-done ADU can return $1.00–$1.50+ on the dollar when you factor in rental income potential.',
        ],
      },
    ],
    faqs: [
      { q: 'How much does a garage apartment cost in DFW?', a: 'Garage conversions run $40,000–$100,000. Above-garage apartments run $80,000–$200,000. Detached ADUs run $100,000–$300,000+. The exact cost depends on type of build, size, site conditions, and finish level.' },
      { q: 'What\'s included in the cost?', a: 'Our cost includes design, permit management, and all construction — framing, MEP, insulation, drywall, flooring, fixtures, and finish. We work cost-plus, so you see exactly what we spend.' },
      { q: 'Are there financing options for garage apartments?', a: 'Yes. Home equity loans, HELOCs, and construction-to-permanent loans are the most common options. We can refer you to lenders who specialize in ADU projects in DFW.' },
      { q: 'How much can I charge for rent on a garage apartment in DFW?', a: 'Depends on location, size, and finish. Most garage apartments in DFW rent for $1,200–$2,400/month. Well-finished units in desirable neighborhoods command the upper end of that range.' },
      { q: 'How long does it take to pay off a garage apartment?', a: 'Garage conversions typically pay back in 5–8 years via rental income. Detached ADUs take 8–12 years. Both generate positive cash flow throughout.' },
    ],
    ctaHeading: 'Get a Realistic Estimate for Your Project',
  },
  'zoning-guide': {
    slug: 'zoning-guide',
    title: 'ADU Zoning Guide',
    pageTitle: 'ADU Zoning Guide: DFW City-by-City Rules (2026) | DFW Garage Apartments',
    h1: 'ADU Zoning Guide for Dallas–Fort Worth: City-by-City Rules',
    intro: 'Complete ADU and garage apartment zoning guide for every major city in Dallas–Fort Worth. What\'s allowed, lot requirements, setbacks, permits, and owner-occupancy rules — updated for 2026.',
    sections: [
      {
        heading: 'Understanding ADU Zoning in Texas',
        body: [
          '**What zoning means for your project.** Zoning rules determine whether you can build an ADU on your property, how big it can be, where it can be placed, and whether you need to live on the property to rent it. Every city in DFW has its own rules — there\'s no statewide standard (yet).',
          '**By-right vs. special exception.** A "by-right" permit means you automatically qualify as long as you meet the code requirements — no hearings, no discretionary approval. A "special exception" requires a hearing before a board, which adds time, cost, and uncertainty. Fort Worth\'s straightforward approach is mostly by-right. Dallas requires special exceptions in many neighborhoods.',
          '**Texas ADU legislation.** Texas has been moving toward more ADU-friendly statewide policy, though local municipalities still control zoning. We monitor legislative changes that affect DFW cities.',
        ],
      },
      {
        heading: 'Fort Worth ADU Zoning',
        body: [
          '**What\'s allowed:** Garage conversions, above-garage apartments, and detached ADUs are permitted in most residential zones. **Lot size:** Minimum 6,000 sq ft in most districts. **Setbacks:** Varies by district — typically 5 ft side, 5 ft rear for detached ADUs. **Height:** 25–35 ft maximum depending on district. **Owner-occupancy:** Not required — you can rent without living on property. **Parking:** Must maintain equivalent covered parking or obtain a variance for garage conversions. **Permits:** Building permit required for all ADU work. Contact: Fort Worth Development Services, (817) 392-8000.',
        ],
      },
      {
        heading: 'Dallas ADU Zoning',
        body: [
          '**What\'s allowed:** ADU construction depends on overlay district. ADUO (Accessory Dwelling Unit Overlay) zones permit ADUs by right. Outside overlay zones, Board of Adjustment approval required. **Lot size:** Varies by district. **Setbacks:** Per base zoning district. **Height:** Per base district. **Owner-occupancy:** Not required in most zones. **Parking:** Replacement parking may be required. **Permits:** Building permit required; Board of Adjustment hearing required outside ADUO zones. Contact: Dallas Development Services, (214) 948-4480.',
        ],
      },
      {
        heading: 'Plano ADU Zoning',
        body: [
          '**What\'s allowed:** ADUs permitted in single-family zones. **Size limit:** 400–1,100 sq ft depending on lot size. **Lot size:** Minimum 7,500 sq ft. **Architectural compatibility:** ADU must match or complement main home style. **Setbacks:** Rear and side setbacks apply per district. **Owner-occupancy:** Not required. **Permits:** Building permit required. Contact: Plano Development Services, (972) 941-7151.',
        ],
      },
      {
        heading: 'Frisco ADU Zoning',
        body: [
          '**What\'s allowed:** ADUs permitted subject to zoning ordinance requirements. **Setbacks, height, and compatibility** requirements apply. Contact Frisco Development Services at (972) 292-5000 for address-specific guidance, as rules vary by zoning district.',
        ],
      },
      {
        heading: 'Denton ADU Zoning',
        body: [
          '**What\'s allowed:** ADUs up to 800 sq ft or 75% of primary dwelling floor area (lesser applies). **Lot size:** Minimum 7,000 sq ft. **Setbacks:** 5 ft side and rear. **Height:** Maximum 20 ft. **Owner-occupancy:** Not required. **Permits:** Building permit required. Contact: Denton Development Services, (940) 349-8360. One of the clearest and most predictable ADU ordinances in DFW.',
        ],
      },
      {
        heading: 'McKinney, Arlington & Southlake',
        body: [
          '**McKinney:** Chapter 146 governs accessory buildings. Rules vary by zoning district. Contact McKinney Development Services, (972) 547-7477.',
          '**Arlington:** ADUs permitted in most single-family zones subject to setback, height, and lot coverage limits. Contact Arlington Development Services, (817) 459-6502.',
          '**Southlake:** Larger lots generally accommodate detached structures. Architectural compatibility standards apply. Contact Southlake Planning & Development, (817) 748-8069.',
        ],
      },
      {
        heading: 'A Note on Accuracy',
        body: 'Zoning codes change. The information above reflects our best current knowledge as of early 2026, but we verify every address individually before any design work begins. Never rely solely on this guide — always confirm with your city\'s development services department or let us verify your specific property.',
      },
    ],
    faqs: [
      { q: 'Can I build a garage apartment in Fort Worth without an owner-occupancy requirement?', a: 'Yes. Fort Worth has no owner-occupancy requirement for ADUs. You can rent your garage apartment to anyone without living on the property.' },
      { q: 'Does Dallas allow garage apartments?', a: 'Yes, but it depends on your neighborhood. In ADUO overlay zones, ADUs are permitted by right. Outside these zones, Board of Adjustment approval is required.' },
      { q: 'What\'s the smallest lot I can build an ADU on in DFW?', a: 'Minimum lot sizes vary by city. Denton requires 7,000 sq ft. Plano requires 7,500 sq ft. Fort Worth\'s minimums vary by district. We verify your specific lot before design.' },
      { q: 'Do I need owner-occupancy to rent an ADU in DFW?', a: 'Most DFW cities — including Fort Worth, Dallas, and Plano — do not require owner-occupancy for ADU rentals. Some cities may have specific rules. We verify this for your address.' },
      { q: 'What happens if my ADU doesn\'t comply with zoning?', a: 'Unpermitted ADUs can result in fines, required removal, and problems at resale. Every project we build is fully permitted and inspected. No shortcuts.' },
    ],
    ctaHeading: 'Not Sure What\'s Allowed on Your Property?',
  },
  'texas-adu-laws': {
    slug: 'texas-adu-laws',
    title: 'Texas ADU Laws',
    pageTitle: 'Texas ADU Laws and Regulations (2026) | DFW Garage Apartments',
    h1: 'Texas ADU Laws: What Homeowners in DFW Need to Know',
    intro: 'Texas state law affects what your city can and cannot restrict when it comes to ADU construction. Here\'s what\'s changed, what\'s coming, and what it means for your garage apartment project in DFW.',
    sections: [
      {
        heading: 'How Texas ADU Law Works',
        body: [
          'In Texas, zoning authority is primarily held by municipalities — cities set their own rules for what can be built in residential areas, including ADUs. There is no single statewide ADU ordinance that overrides local city codes.',
          'However, the Texas Legislature has taken increasing interest in housing affordability, and there have been efforts to preempt local zoning restrictions on ADUs — similar to what California did with SB 9 and SB 10. Monitoring these legislative developments matters for DFW homeowners considering ADU construction.',
        ],
      },
      {
        heading: 'Recent Legislative Developments',
        body: [
          'Texas has seen multiple ADU-related bills introduced in recent legislative sessions. The most significant trend: proposals to limit cities\' ability to prohibit ADUs outright in single-family zones. Some bills have passed; others have stalled.',
          'The practical effect for DFW homeowners: cities that were previously restrictive on ADUs may face pressure to liberalize their codes. Fort Worth and Denton already have relatively permissive ordinances. Dallas has been moving toward broader ADUO overlay coverage.',
          'We monitor Texas ADU legislation actively and will update this guide when significant changes occur.',
        ],
      },
      {
        heading: 'Texas Building Codes for ADUs',
        body: [
          'Texas residential construction follows the International Residential Code (IRC), with state and local amendments. Key requirements that affect ADU construction:',
          '**Egress windows:** Required in all sleeping rooms — minimum 5.7 sq ft opening, 24" height, 20" width, maximum 44" sill height.',
          '**Fire separation:** When living space is built above or adjacent to a garage, a 1-hour fire-rated assembly is required between the garage and living area.',
          '**Mechanical systems:** HVAC, plumbing, and electrical must meet IRC and local amendments. Mini-split HVAC systems are popular and code-compliant for ADUs.',
          '**Accessibility:** Standard residential ADUs are not required to be ADA-accessible unless the owner chooses to incorporate those features (which we do frequently for aging-in-place builds).',
        ],
      },
      {
        heading: 'Short-Term Rental Rules for ADUs in Texas',
        body: [
          'Texas does not have a statewide law governing short-term rentals (Airbnb, VRBO). Individual cities regulate short-term rentals independently.',
          'In DFW: Fort Worth requires a short-term rental license. Dallas has restrictions on short-term rentals in some residential zones. Other DFW cities vary. If you\'re planning to use your garage apartment as a short-term rental, verify local STR rules before finalizing your plans.',
        ],
      },
    ],
    faqs: [
      { q: 'Does Texas have a statewide ADU law?', a: 'Not yet — but the Legislature has been active. Local cities still control most ADU zoning. We monitor legislative changes and update our guidance accordingly.' },
      { q: 'Can Texas cities ban ADUs entirely?', a: 'This has been an active debate in the Texas Legislature. Some bills have limited municipal authority to prohibit ADUs outright. The landscape continues to evolve.' },
      { q: 'Do Texas ADUs need to be ADA accessible?', a: 'Standard residential ADUs are not required to be ADA accessible. However, we design accessible ADUs frequently for aging-in-place and multi-generational living.' },
      { q: 'Can I do Airbnb in my garage apartment in Texas?', a: 'It depends on your city. Short-term rental rules vary across DFW. Fort Worth requires a license. Dallas has restrictions in some zones. We recommend verifying local STR rules before building for that purpose.' },
      { q: 'What building code applies to ADUs in Texas?', a: 'The International Residential Code (IRC) applies, with state and local amendments. Key requirements: egress windows in sleeping rooms, 1-hour fire separation between garage and living space, compliant MEP systems.' },
    ],
    ctaHeading: 'Have Questions About Your Specific Property?',
  },
  'financing-options': {
    slug: 'financing-options',
    title: 'Financing Options',
    pageTitle: 'How to Finance a Garage Apartment in DFW (2026 Guide)',
    h1: 'How to Finance a Garage Apartment in Dallas–Fort Worth',
    intro: 'Most homeowners don\'t pay cash for garage apartment construction. Here are the most common financing options, how they work, and how to decide which is right for your project.',
    sections: [
      {
        heading: 'Home Equity Loan (Second Mortgage)',
        body: [
          'A home equity loan lets you borrow against the equity in your home as a lump sum, with a fixed interest rate and fixed monthly payment. It\'s one of the most straightforward ways to finance ADU construction.',
          '**Best for:** Projects with a well-defined, fixed budget. You know what you\'re building, you know roughly what it costs, and you want a predictable monthly payment.',
          '**Typical loan amounts:** $40,000–$300,000 depending on your equity position. Most lenders will loan up to 80–90% of your home\'s appraised value minus your current mortgage balance.',
          '**Current rates (2026):** Home equity loan rates vary with market conditions. Check with your bank or a local credit union for current rates.',
          '**Drawback:** You receive the full amount upfront and pay interest on all of it immediately, even if construction takes months.',
        ],
      },
      {
        heading: 'HELOC (Home Equity Line of Credit)',
        body: [
          'A HELOC is a revolving line of credit secured by your home equity. You draw from it as needed during construction and only pay interest on what you\'ve used.',
          '**Best for:** Projects where costs will be disbursed over time. You draw as the project progresses, reducing interest costs vs. a lump-sum home equity loan.',
          '**How it works:** Lender approves a credit limit. You draw during a "draw period" (typically 5–10 years) and then repay during a "repayment period." Interest rates are variable.',
          '**Drawback:** Variable rate means your payment can change. If rates rise significantly, your cost increases.',
        ],
      },
      {
        heading: 'Construction-to-Permanent Loan',
        body: [
          'A construction loan funds the build in stages (draws), then converts to a permanent mortgage when construction is complete. This is more complex to obtain but purpose-built for ADU construction.',
          '**Best for:** Larger projects ($150,000+) where the ADU significantly increases your property value. The loan converts to a standard mortgage, which may be tax-deductible.',
          '**Drawback:** More documentation required. Lender will require plans, permits, and sometimes a cost breakdown from your contractor. Not all lenders offer these products.',
        ],
      },
      {
        heading: 'Cash-Out Refinance',
        body: [
          'If your current mortgage rate is similar to current market rates, a cash-out refinance can be an efficient way to access equity. You refinance your mortgage at a higher balance and receive the difference in cash.',
          '**Best for:** Homeowners with significant equity and a current mortgage rate close to market rates.',
          '**Drawback:** Not ideal if your current mortgage rate is significantly lower than current market rates — you\'d be refinancing a favorable rate away.',
        ],
      },
      {
        heading: 'ADU-Specific Lending Programs',
        body: [
          'Some lenders have developed ADU-specific loan products that take projected rental income into account when qualifying borrowers. These products are becoming more common as ADU construction grows nationally.',
          'In Texas, a few community banks and credit unions offer programs designed for ADU financing. We can refer you to lenders we\'ve worked with on DFW projects.',
        ],
      },
    ],
    faqs: [
      { q: 'What\'s the best way to finance a garage apartment?', a: 'It depends on your equity position, current mortgage rate, and project size. HELOCs work well for phased projects. Home equity loans are good for fixed-scope projects. We can refer you to lenders who specialize in ADU financing in DFW.' },
      { q: 'Can I use a HELOC to finance a garage apartment?', a: 'Yes. A HELOC is one of the most common financing methods for ADU construction in DFW. You draw as needed and only pay interest on what you\'ve used.' },
      { q: 'Do banks lend on garage apartments as rental property?', a: 'ADU financing is typically structured as a home equity product (HELOC, home equity loan, or cash-out refi) rather than a rental property investment loan. Some lenders will count projected rental income toward qualification.' },
      { q: 'How much equity do I need to finance a garage apartment?', a: 'Most lenders require you to maintain at least 10–20% equity in your home after the loan. So if your home is worth $400,000 and you owe $200,000, you have significant borrowing capacity.' },
      { q: 'Is the interest on an ADU loan tax deductible?', a: 'Home equity interest may be deductible if the proceeds are used to "buy, build, or substantially improve" the home — which ADU construction qualifies as. Consult a tax professional for your specific situation.' },
    ],
    ctaHeading: 'Ready to Discuss Your Project Budget?',
  },
};

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button className="w-full text-left flex justify-between items-start gap-4 font-semibold text-primary text-base" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        {open ? <ChevronUp className="w-5 h-5 flex-shrink-0 text-accent" /> : <ChevronDown className="w-5 h-5 flex-shrink-0 text-accent" />}
      </button>
      {open && <p className="mt-3 text-gray-600 leading-relaxed">{a}</p>}
    </div>
  );
}

function renderBody(body: string | string[]) {
  const lines = Array.isArray(body) ? body : [body];
  return lines.map((line, i) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} className="text-gray-700 leading-relaxed mb-3">
        {parts.map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j} className="text-primary">{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
      </p>
    );
  });
}

export default function ResourcePage({ resourceSlug }: { resourceSlug?: string } = {}) {
  const router = useRouter();
  const slug = resourceSlug || (router.query.slug as string) || '';
  const resource = RESOURCES[slug];

  if (!resource) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: 'CervoNeueBold, serif' }}>Resource Not Found</h1>
        <p className="text-gray-600 mb-8">We couldn\'t find that resource. Check out all our guides below.</p>
        <Link href="/resources"><Button className="bg-accent text-white hover:bg-accent/90">View All Resources</Button></Link>
      </div>
    );
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: resource.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-card px-6 py-3 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto flex gap-2 items-center">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>›</span>
          <Link href="/resources" className="hover:text-primary transition-colors">Resources</Link>
          <span>›</span>
          <span className="text-primary font-medium">{resource.title}</span>
        </div>
      </div>

      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Resource Guide</p>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
            {resource.h1}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">{resource.intro}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {resource.sections.map((section) => (
          <div key={section.heading} className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-4" style={{ fontFamily: 'CervoNeueBold, serif' }}>{section.heading}</h2>
            {renderBody(section.body)}
          </div>
        ))}
      </div>

      <section className="bg-card py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-primary mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
            Frequently Asked Questions
          </h2>
          <div>
            {resource.faqs.map(f => <FAQ key={f.q} {...f} />)}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <h3 className="text-lg font-bold text-primary mb-4">Related Resources</h3>
        <div className="flex flex-wrap gap-4 text-sm">
          {Object.values(RESOURCES).filter(r => r.slug !== resource.slug).map(r => (
            <Link key={r.slug} href={`/resources/${r.slug}`} className="text-accent hover:underline font-medium flex items-center gap-1">
              {r.title} <ArrowRight className="w-3 h-3" />
            </Link>
          ))}
          {[
            { label: 'Our Process', href: '/process' },
            { label: 'Services Overview', href: '/services' },
            { label: 'Areas We Serve', href: '/areas' },
          ].map(l => (
            <Link key={l.href} href={l.href} className="text-accent hover:underline font-medium flex items-center gap-1">
              {l.label} <ArrowRight className="w-3 h-3" />
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-accent text-white py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'CervoNeueBold, serif' }}>
            {resource.ctaHeading}
          </h2>
          <p className="text-white/90 mb-8 text-lg">Schedule a free consultation — no pressure, no obligation. We'll give you straight answers about what\'s possible on your property.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-accent hover:bg-white/90 font-bold uppercase tracking-wide px-10">
              Schedule a Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
