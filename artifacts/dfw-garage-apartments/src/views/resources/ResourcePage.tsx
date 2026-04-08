import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';

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
          '**Mansfield / Aledo / Burleson:** Garage conversions $40K–$100K | Above-garage $80K–$185K | Detached ADU $100K–$270K. Affordable labor markets with lower permit complexity than north Dallas suburbs.',
          '**Denton:** Garage conversions $38K–$90K | Above-garage $75K–$175K | Detached ADU $95K–$250K. One of the most affordable DFW markets.',
          '**Arlington / Southlake:** Generally in the $45K–$130K range for conversions, up to $400K+ for premium detached builds in Southlake.',
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
        heading: 'Mansfield ADU Zoning',
        body: [
          '**What\'s allowed:** ADUs permitted in residential zones subject to setback, height, and lot coverage requirements. **Owner-occupancy:** Not required in most zones. **Permits:** Building permit required. Contact: Mansfield Building Services, (817) 276-4220.',
        ],
      },
      {
        heading: 'Aledo / Parker County ADU Zoning',
        body: [
          '**What\'s allowed:** City of Aledo and Parker County unincorporated areas allow ADUs; county unincorporated properties often have fewer restrictions than incorporated cities. Larger lot sizes typical. Contact Parker County Development Services for address-specific guidance.',
        ],
      },
      {
        heading: 'Denton ADU Zoning',
        body: [
          '**What\'s allowed:** ADUs up to 800 sq ft or 75% of primary dwelling floor area (lesser applies). **Lot size:** Minimum 7,000 sq ft. **Setbacks:** 5 ft side and rear. **Height:** Maximum 20 ft. **Owner-occupancy:** Not required. **Permits:** Building permit required. Contact: Denton Development Services, (940) 349-8360. One of the clearest and most predictable ADU ordinances in DFW.',
        ],
      },
      {
        heading: 'Burleson, Arlington & Southlake',
        body: [
          '**Burleson:** ADUs permitted subject to standard zoning requirements. Contact Burleson Community Development, (817) 426-9600.',
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
      { q: 'What\'s the smallest lot I can build an ADU on in DFW?', a: 'Minimum lot sizes vary by city. Denton requires 7,000 sq ft. Fort Worth\'s minimums vary by district. Mansfield and Burleson have their own requirements. We verify your specific lot before design.' },
      { q: 'Do I need owner-occupancy to rent an ADU in DFW?', a: 'Most DFW cities — including Fort Worth, Dallas, and Arlington — do not require owner-occupancy for ADU rentals. Some cities may have specific rules. We verify this for your address.' },
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
  'garage-apartment-vs-adu': {
    slug: 'garage-apartment-vs-adu',
    title: 'Garage Apartment vs. Detached ADU',
    pageTitle: 'Garage Apartment vs. Detached ADU: Which Is Right for You? | DFW Garage Apartments',
    h1: 'Garage Apartment vs. Detached ADU: Which Should You Build?',
    intro: 'Both add livable space to your property — but they solve different problems and come with different costs, timelines, and trade-offs. Here\'s how to decide which is right for your property and your goals.',
    sections: [
      {
        heading: 'What\'s the Difference?',
        body: [
          '**Garage apartment** is a broad term that covers two distinct types of build: a garage conversion (turning an existing garage into livable space) and an above-garage apartment (adding a second story over an existing garage). Both use your existing garage footprint as the starting point.',
          '**Detached ADU** (Accessory Dwelling Unit) is a completely separate, self-contained structure built on your property — its own foundation, its own walls, its own roof. It shares no structure with your home or existing garage. It\'s essentially a second small house on the same lot.',
          'The distinction matters because the type of build determines cost, timeline, zoning requirements, design flexibility, and the long-term value it adds to your property.',
        ],
      },
      {
        heading: 'Cost Comparison',
        body: [
          '**Garage conversion: $40,000–$100,000.** The most affordable path. You\'re finishing what\'s already there — walls, roof, and foundation exist. Main costs are insulation, HVAC, electrical upgrades, plumbing rough-in (if adding a kitchen or bath), and finish work.',
          '**Above-garage apartment: $80,000–$200,000.** Moderate cost. You\'re keeping the garage below and adding a full apartment on top. Structural work (floor system, staircase, exterior walls, roof) adds cost over a conversion, but you\'re still building on an existing footprint.',
          '**Detached ADU (new build): $100,000–$300,000+.** Highest upfront cost because you\'re starting from scratch: new foundation, new framing, new MEP systems, new exterior. But the finished product is the most versatile and highest-value structure you can add.',
          '**Rule of thumb:** Conversions cost the least. Above-garage apartments fall in the middle. Detached ADUs cost the most but add the most value and flexibility.',
        ],
      },
      {
        heading: 'Which Generates More Rental Income?',
        body: [
          '**Detached ADU wins on rental income**, both in monthly rent and long-term appreciation. A standalone structure with no shared walls, its own entrance, and its own yard or outdoor area commands a premium. In DFW, a well-finished detached ADU rents for $1,400–$2,500/month depending on size and location.',
          '**Garage conversions and above-garage apartments** typically rent for $1,000–$1,800/month. Still strong cash flow, but tenants often prefer a fully detached structure for privacy.',
          '**However, the payback period is similar or better for conversions**, because the upfront cost is so much lower. A $75,000 garage conversion generating $1,300/month pays for itself in under 5 years. A $200,000 detached ADU generating $1,800/month takes 9–10 years.',
          '**If maximizing monthly cash flow is your goal,** detached ADU. **If fastest payback is the goal,** garage conversion.',
        ],
      },
      {
        heading: 'Design Flexibility',
        body: [
          '**Detached ADU: Maximum flexibility.** You\'re starting with a blank slate — you can design any floor plan, any size (within lot limits), any orientation. Single-story or two-story. Studio, one-bedroom, or two-bedroom. The only constraints are your lot and local zoning.',
          '**Above-garage apartment: Constrained by the garage footprint.** Your floor plan is roughly the size and shape of the garage below. You can make some adjustments at the edges, but you\'re largely locked into that footprint.',
          '**Garage conversion: Most constrained.** You\'re working with the interior dimensions of the existing garage — ceiling height, door locations, structural walls. Good designers can do a lot with a single-car or two-car garage, but you\'re working within tight limits.',
        ],
      },
      {
        heading: 'Timeline to Build',
        body: [
          '**Garage conversion: 8–14 weeks** from permit approval to move-in. The fastest option because no new structural work is needed.',
          '**Above-garage apartment: 14–22 weeks.** More structural work means a longer build, but still faster than starting from scratch.',
          '**Detached ADU: 16–28 weeks.** Site prep, foundation, framing, envelope, then MEP and finishes. All from zero. The most complex project with the most phases.',
          'All timelines begin after permit approval — permit timelines vary by city. Fort Worth is typically 4–8 weeks. Dallas can take longer depending on the project and district.',
        ],
      },
      {
        heading: 'Zoning and Permitting Differences',
        body: [
          '**Garage conversions** are generally the simplest to permit. Most DFW cities treat them as interior remodels with specific requirements for egress, HVAC, and electrical. The structural work is minimal, so inspections are straightforward.',
          '**Above-garage apartments** require structural engineering and are reviewed more carefully, but they\'re still building on an existing structure within the existing building envelope.',
          '**Detached ADUs** require full new-construction permitting. In some DFW cities (particularly Dallas), detached ADUs outside designated overlay zones require additional approvals. Fort Worth, Denton, and Mansfield have more streamlined paths for detached ADUs.',
          '**Key zoning factor:** Lot coverage. Adding a detached structure takes up more of your lot footprint, which is subject to maximum lot coverage rules. Every city is different. We verify your property before any design work begins.',
        ],
      },
      {
        heading: 'Side-by-Side Summary',
        body: [
          '**Garage Conversion:** Cost $40K–$100K | Timeline 8–14 weeks | Rental income $1,000–$1,600/mo | Design flexibility: Limited | Best for: Fastest payback, tight budgets',
          '**Above-Garage Apartment:** Cost $80K–$200K | Timeline 14–22 weeks | Rental income $1,200–$1,800/mo | Design flexibility: Moderate | Best for: Keeping the garage, adding a full unit',
          '**Detached ADU:** Cost $100K–$300K+ | Timeline 16–28 weeks | Rental income $1,400–$2,500/mo | Design flexibility: Maximum | Best for: Highest income, maximum privacy, most added value',
        ],
      },
      {
        heading: 'How to Decide',
        body: [
          '**Choose a garage conversion if:** You need the most affordable path, you want the fastest timeline, you don\'t need the garage anymore, and you\'re OK with a compact floor plan.',
          '**Choose an above-garage apartment if:** You want to keep functional garage space below, you have an existing garage in good structural condition, and you want more square footage than a conversion offers.',
          '**Choose a detached ADU if:** You want maximum income, maximum privacy for tenants, the most design flexibility, and you\'re thinking about long-term property value over upfront cost.',
          'Not sure? We\'ll look at your property — your lot, your existing garage (if any), your zoning district — and give you a straight recommendation. No sales pitch, just what makes sense for your specific situation.',
        ],
      },
    ],
    faqs: [
      { q: 'Is a garage apartment the same as an ADU?', a: 'Not exactly. "Garage apartment" usually refers to a conversion or above-garage build using an existing garage. "Detached ADU" is a new standalone structure. Both are types of ADUs broadly speaking, but they\'re different types of builds.' },
      { q: 'Which is cheaper — a garage apartment or a detached ADU?', a: 'Garage apartments (conversions and above-garage) are less expensive than detached ADUs. Conversions start at $40K. Detached ADUs typically start at $100K.' },
      { q: 'Can I build a detached ADU if I already have a garage?', a: 'In most DFW cities, yes — as long as your lot coverage allows it. We verify this for your specific property before design begins.' },
      { q: 'Which type of ADU rents for the most in DFW?', a: 'Detached ADUs typically command the highest rents — $1,400–$2,500/month — because of the privacy and independence they offer. Garage conversions typically rent for $1,000–$1,600/month.' },
      { q: 'Does a detached ADU increase property value more than a garage conversion?', a: 'Generally yes. A detached ADU adds more square footage and more versatility, which translates to more appraised value. However, garage conversions also add meaningful value — typically $50,000–$90,000 in the DFW market.' },
    ],
    ctaHeading: 'Not Sure Which Type Is Right for Your Property?',
  },
  'rental-income': {
    slug: 'rental-income',
    title: 'Rental Income Guide',
    pageTitle: 'Garage Apartment Rental Income in DFW: What to Expect (2026)',
    h1: 'Garage Apartment Rental Income in Dallas–Fort Worth: A Realistic Guide',
    intro: 'What can you actually charge for a garage apartment in DFW? What\'s the realistic payback period? How do you set up a rental and stay out of trouble? Here\'s the complete picture — no hype.',
    sections: [
      {
        heading: 'DFW Garage Apartment Rental Rates (2026)',
        body: [
          'Rental income from a garage apartment in DFW depends on three things: location, size, and finish quality. Here\'s what you can realistically expect in today\'s market:',
          '**Fort Worth (Fairmount, Mistletoe Heights, Westover Hills, Cityview):** Studio/efficiency $900–$1,300/mo | 1BR $1,100–$1,600/mo | 2BR $1,400–$1,900/mo',
          '**Dallas (Lakewood, M Streets, Oak Cliff, Greenway Parks):** Studio $1,100–$1,500/mo | 1BR $1,300–$1,800/mo | 2BR $1,600–$2,200/mo',
          '**Mansfield, Burleson, Aledo:** Studio $850–$1,200/mo | 1BR $1,050–$1,500/mo | 2BR $1,300–$1,800/mo',
          '**Denton (near UNT/TWU):** Studio $800–$1,100/mo | 1BR $950–$1,300/mo | 2BR $1,200–$1,600/mo',
          '**Southlake, Westlake area:** Premium market. Detached ADUs with high-end finishes: $1,800–$2,800/mo.',
          'These are long-term rental rates. Short-term rental (Airbnb/VRBO) rates can be 20–50% higher in the right neighborhoods, but require additional licensing and management.',
        ],
      },
      {
        heading: 'What Drives Rental Income?',
        body: [
          '**Location is the biggest driver.** A 600 sq ft garage apartment in Fairmount (Fort Worth) or the M Streets (Dallas) will rent for significantly more than the same unit in a suburban market, because walkability, proximity to employment, and neighborhood desirability all affect what renters will pay.',
          '**Private entrance is critical.** Renters pay a premium for a completely separate entrance — ideally from the alley or from the rear of the property, not through your home. This single design decision can add $100–$200/month in achievable rent.',
          '**Full kitchen vs. kitchenette.** A full kitchen (range, dishwasher, full refrigerator) commands higher rents and attracts more stable long-term tenants. A kitchenette is fine for short-term rentals but limits your tenant pool for long-term leasing.',
          '**In-unit laundry.** A washer/dryer hookup or stacked unit significantly increases rental value — especially in markets where laundromat access is limited. Worth the $2,000–$4,000 installation cost.',
          '**Finish quality.** LVP flooring, quartz counters, updated fixtures, and a modern bathroom add $100–$300/month in achievable rent over basic-finish units.',
          '**Parking.** Off-street parking is expected in most DFW submarkets. If you\'re converting a garage to a living unit, ensure the tenant has a designated parking space on the property.',
        ],
      },
      {
        heading: 'Payback Period by Build Type',
        body: [
          '**Garage conversion ($65,000 build cost, $1,300/mo rent):** Gross payback ~50 months (4.2 years). Excellent return.',
          '**Above-garage apartment ($140,000, $1,600/mo):** Gross payback ~88 months (7.3 years). Strong return considering the property value increase.',
          '**Detached ADU ($200,000, $1,800/mo):** Gross payback ~111 months (9.3 years). Longer payback, but adds the most property value and the most rental income over time.',
          'These are gross payback calculations (build cost ÷ annual rent). Net payback accounting for vacancy, property tax on added value, maintenance, and insurance will be longer — but the investment thesis holds in most DFW markets because rental demand is strong and property values have appreciated consistently.',
          '**The property value increase is separate from rental income.** A garage conversion that costs $65,000 often adds $70,000–$100,000 in appraised value. That\'s on top of the rental income. When you factor both in, the total return is typically 1.2–1.8x the build cost.',
        ],
      },
      {
        heading: 'Long-Term vs. Short-Term Rental: Which Is Better?',
        body: [
          '**Long-term rental (12-month lease) advantages:** Stable income. Lower management burden. No nightly turnover, no cleaning fees, no listing management. Your tenant is responsible for day-to-day utilities.',
          '**Short-term rental (Airbnb/VRBO) advantages:** Higher per-night revenue, especially in strong tourist or event markets. Flexibility to use the unit yourself. But: higher management burden, higher vacancy during off-seasons, and more wear and tear.',
          '**Fort Worth and DFW STR rules:** Fort Worth requires a short-term rental permit. Dallas has restrictions in some residential zones. Other DFW cities have varying rules. Always verify local STR ordinances before committing to a short-term rental strategy.',
          '**Our recommendation for most clients:** Start with long-term rental. It\'s simpler to manage, provides stable cash flow, and is lower-risk. Once you understand the unit and the rental market, you can evaluate whether short-term makes sense.',
        ],
      },
      {
        heading: 'Setting Up Your Rental: Practical Steps',
        body: [
          '**Get a lease.** Use a Texas-specific residential lease — the Texas Apartment Association (TAA) lease is the standard. Don\'t use a generic internet template.',
          '**Screen tenants.** Run credit, background, and income verification. Income should be at least 3x monthly rent. This step prevents most landlord-tenant problems.',
          '**Set the right rent.** Price based on the market, not your costs. Search Zillow, Apartments.com, and Facebook Marketplace for comparable units in your neighborhood. Price within 5–10% of comps.',
          '**Collect a security deposit.** Texas law allows up to one month\'s rent as a security deposit for residential properties. Document the unit\'s condition thoroughly at move-in.',
          '**Understand landlord obligations.** Texas law requires landlords to maintain a habitable unit, make repairs within a reasonable time, and follow specific procedures for entering the unit. Familiarize yourself with Chapter 92 of the Texas Property Code.',
          '**Insurance.** Your standard homeowner\'s policy typically does not cover a rental unit. Add a landlord policy or a dwelling fire policy to protect the structure and your liability.',
        ],
      },
      {
        heading: 'Tax Treatment of Rental Income',
        body: [
          '**Rental income is taxable.** Income from a long-term or short-term rental is reported on Schedule E (long-term) or Schedule C (short-term) of your federal tax return.',
          '**Depreciation is your biggest deduction.** The IRS allows you to depreciate a residential rental property over 27.5 years. On a $100,000 garage apartment, that\'s a ~$3,636/year deduction that reduces your taxable rental income without any cash outlay.',
          '**Other deductible expenses:** Mortgage interest (if financed), property taxes on the unit, repairs and maintenance, insurance, advertising, property management fees, and utilities paid by the landlord.',
          '**Important distinction:** Repairs are immediately deductible. Improvements are depreciated over time. A leaky faucet repair is a deduction. New flooring is an improvement. Your CPA can help you classify correctly.',
          '**Consult a CPA.** Rental income tax treatment has nuances — passive activity rules, short-term rental treatment, and potential self-employment tax if you provide hotel-like services. A CPA who works with real estate investors is worth the cost.',
        ],
      },
    ],
    faqs: [
      { q: 'How much can I charge for rent on a garage apartment in DFW?', a: 'Depends on location, size, and finish. Most garage apartments in DFW rent for $1,000–$2,200/month for long-term leases. Detached ADUs in premium neighborhoods can reach $2,500+. Short-term rentals can earn 20–50% more per month but require more management.' },
      { q: 'How long does it take to pay back a garage apartment?', a: 'Gross payback (build cost ÷ annual rent) ranges from 4–9 years depending on the build type and rental rate. Factor in the property value increase and the total return is typically 1.2–1.8x the build cost over 10 years.' },
      { q: 'Do I need a license to rent a garage apartment in Fort Worth?', a: 'Long-term rentals do not require a special license. Short-term rentals (under 30 days) require a short-term rental permit from the City of Fort Worth. Other DFW cities have their own rules.' },
      { q: 'Can I do Airbnb in my garage apartment in Texas?', a: 'Yes, subject to local city rules. Fort Worth requires a short-term rental permit. Dallas has restrictions in some zones. Always verify your city\'s STR ordinance before marketing your unit on Airbnb or VRBO.' },
      { q: 'What\'s the most important factor for rental income on a garage apartment?', a: 'Location is the biggest driver, followed by having a private entrance, full kitchen, and in-unit laundry. These four factors together can add $300–$600/month over a comparable unit without them.' },
    ],
    ctaHeading: 'Want to Know What Your Garage Apartment Could Rent For?',
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
      <SEOHead
        title={resource.pageTitle}
        description={resource.intro}
        canonical={`/resources/${resource.slug}`}
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dfwgarageapartments.com/" },
              { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://dfwgarageapartments.com/resources" },
              { "@type": "ListItem", "position": 3, "name": resource.title, "item": `https://dfwgarageapartments.com/resources/${resource.slug}` }
            ]
          }
        ]}
      />
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
