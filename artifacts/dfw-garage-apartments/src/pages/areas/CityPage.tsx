import React, { useState } from 'react';
import { Link, useParams } from 'wouter';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import notFoundImg from '@assets/2228_Hurley_Patry_Family_Garage_Apartment-29_1775501313347.jpg';

interface CityData {
  name: string;
  state: string;
  slug: string;
  heroSubtitle: string;
  intro: string;
  zoning: string;
  costContext: string;
  popularProjects: string;
  whyBuilding: string;
  faqs: { q: string; a: string }[];
}

const CITY_DATA: Record<string, CityData> = {
  'fort-worth': {
    name: 'Fort Worth',
    state: 'TX',
    slug: 'fort-worth',
    heroSubtitle: 'One of the most ADU-friendly cities in DFW — and our home market.',
    intro: 'Fort Worth is one of the most ADU-friendly cities in the Dallas–Fort Worth area. The city has no owner-occupancy requirement for ADUs, which means you can build a garage apartment and rent it to anyone — you don\'t have to live on the property. Strong rental demand in neighborhoods like Near Southside, Fairmount, Arlington Heights, and the TCU area makes Fort Worth one of the best markets in DFW for garage apartment investment.',
    zoning: 'Fort Worth permits garage conversions and new ADU construction in most residential zones. The main requirements: you must maintain equivalent covered parking (or obtain a variance), egress windows and smoke/CO detectors are required in all converted living spaces, and a building permit is mandatory for any conversion or new construction. Height limits for above-garage builds are typically 25–35 feet depending on district. No owner-occupancy requirement — one of the most investor-friendly policies in DFW. Contact the Fort Worth Development Services Department at (817) 392-8000 for address-specific confirmation.',
    costContext: 'Fort Worth sits in the middle of the DFW cost range. Labor costs are slightly lower than north Dallas suburbs like Plano or Frisco. Permit fees run $800–$2,500 for typical ADU projects. Most garage conversions in Fort Worth run $40,000–$100,000. Above-garage apartments: $80,000–$180,000. Detached ADUs: $100,000–$280,000.',
    popularProjects: 'The most common projects in Fort Worth are garage conversions in older, established neighborhoods — particularly in the 76104, 76110, and 76107 zip codes where homes often have detached garages with alley access. Above-garage apartment builds are popular in near-downtown neighborhoods where lot sizes are smaller but demand for rental units is high. Guest houses for aging parents are a growing segment in west Fort Worth neighborhoods with larger lots.',
    whyBuilding: 'Fort Worth\'s rental market is strong and growing. The city\'s population has grown significantly over the past decade, and housing supply hasn\'t kept up. Garage apartments in established neighborhoods close to downtown, TCU, and major employers rent quickly — typically $1,200–$1,800 per month depending on size and finish. Property values in Fort Worth\'s core neighborhoods have appreciated significantly, and adding an ADU typically increases assessed value by 8–15%.',
    faqs: [
      { q: 'Can I build a garage apartment in Fort Worth, TX?', a: 'Yes. Fort Worth is one of the most ADU-friendly cities in DFW. You\'ll need a building permit, and if you\'re converting an existing garage, you\'ll need to maintain equivalent covered parking or get a variance. No owner-occupancy requirement.' },
      { q: 'How much does a garage apartment cost in Fort Worth?', a: 'Most garage conversions in Fort Worth run $40,000–$100,000. Above-garage apartments run $80,000–$180,000. Detached ADUs run $100,000–$280,000. We\'ll give you a realistic range at your first meeting.' },
      { q: 'Do I need a permit for a garage apartment in Fort Worth?', a: 'Yes. Fort Worth requires a building permit for all garage conversions and new ADU construction. We handle the permit process for you — including drawings, submissions, and responding to city comments.' },
      { q: 'Can I rent out a garage apartment in Fort Worth?', a: 'Yes. Fort Worth has no owner-occupancy requirement for ADUs, which means you can rent your garage apartment to anyone without needing to live on the property. This is one of the most investor-friendly policies in DFW.' },
      { q: 'What are the ADU zoning rules in Fort Worth?', a: 'Fort Worth allows ADUs in most residential zones. Key rules: maintain equivalent parking, egress windows required, building permit required, height limits per district. We research your specific address before design begins.' },
      { q: 'How long does it take to build a garage apartment in Fort Worth?', a: 'Garage conversions typically take 3–5 months. Above-garage builds take 4–7 months. Detached ADUs take 5–9 months. Fort Worth\'s permit office is generally faster than Dallas for residential projects.' },
    ],
  },
  'dallas': {
    name: 'Dallas',
    state: 'TX',
    slug: 'dallas',
    heroSubtitle: 'A complex zoning landscape — with real opportunity for homeowners in the right neighborhoods.',
    intro: 'Dallas has a more complex ADU zoning landscape than most DFW cities, but there is real opportunity for homeowners in the right neighborhoods. Dallas uses overlay districts (ADUO — Accessory Dwelling Unit Overlay) to permit ADU construction by right in certain areas. Outside of overlay zones, homeowners can pursue a Board of Adjustment special exception. We research your specific address before any design work begins.',
    zoning: 'Dallas ADU zoning is neighborhood-specific. In areas covered by the ADUO overlay, ADU construction is permitted by right — no special exception needed. Outside the overlay, a Board of Adjustment exception is typically required. Key requirements across Dallas: separate entrance required, ADU must comply with height and setback rules of the base zoning district, parking replacement may be required. Dallas permit fees vary by project type and size. Contact Dallas Development Services at (214) 948-4480 for address-specific guidance.',
    costContext: 'Dallas has some of the higher construction costs in DFW due to labor market and permitting complexity. Expect garage conversions in the $50,000–$110,000 range. Above-garage apartments: $90,000–$200,000. Detached ADUs: $120,000–$300,000+. Permit fees can run $1,500–$4,000 for ADU projects. The complexity of Dallas permitting adds time and cost compared to smaller cities.',
    popularProjects: 'In Dallas, the most common projects are in east Dallas, Lake Highlands, and older Oak Cliff neighborhoods where detached garages are common and rental demand is strong. Above-garage apartments are popular in M-streets and Lakewood. Guest houses for multi-generational living are common in Preston Hollow and north Dallas neighborhoods with larger lots.',
    whyBuilding: 'Dallas rental demand is among the strongest in the country. The city\'s job market — anchored by major corporations, healthcare, and finance — drives consistent demand for quality rental housing. Garage apartments in desirable Dallas neighborhoods rent for $1,300–$2,200 per month. Property values in Dallas have appreciated significantly, and ADUs add measurable equity.',
    faqs: [
      { q: 'Can I build a garage apartment in Dallas, TX?', a: 'Yes, but it depends on your neighborhood. In ADUO overlay zones, ADUs are permitted by right. Outside these areas, you\'ll need a Board of Adjustment exception. We research your specific address before any design work.' },
      { q: 'How much does a garage apartment cost in Dallas?', a: 'Garage conversions in Dallas typically run $50,000–$110,000. Above-garage apartments: $90,000–$200,000. Detached ADUs: $120,000–$300,000+. Dallas permitting adds some complexity and cost compared to smaller DFW cities.' },
      { q: 'Do I need a permit for a garage apartment in Dallas?', a: 'Yes. Dallas requires permits for all ADU construction and garage conversions. If you\'re outside an ADUO overlay zone, you\'ll also need Board of Adjustment approval before permits can be issued.' },
      { q: 'Can I rent out a garage apartment in Dallas?', a: 'Yes. Dallas does not have an owner-occupancy requirement for most ADU types. You can rent your garage apartment without living on the property.' },
      { q: 'What neighborhoods in Dallas allow ADUs?', a: 'ADUO overlay zones include parts of east Dallas, Oak Cliff, and other established neighborhoods. Outside these areas, Board of Adjustment approval is needed. We check your specific address at the start of every project.' },
      { q: 'How long does it take to build a garage apartment in Dallas?', a: 'Plan for additional time in Dallas due to permitting complexity — especially if a Board of Adjustment hearing is required. Total timeline: 4–7 months for conversions, 6–10 months for new detached ADUs.' },
    ],
  },
  'arlington': {
    name: 'Arlington',
    state: 'TX',
    slug: 'arlington',
    heroSubtitle: 'A growing city with strong rental demand near major employers and entertainment destinations.',
    intro: 'Arlington sits between Fort Worth and Dallas and has one of DFW\'s most active housing markets. Home to major employers, UT Arlington, AT&T Stadium, and Globe Life Field, Arlington has steady rental demand across multiple market segments — students, young professionals, and families. The city has become more accommodating to ADU construction in recent years.',
    zoning: 'Arlington requires a building permit for all ADU construction and garage conversions. The city\'s zoning code allows ADUs in most single-family residential zones, subject to setback, height, and lot coverage requirements. Specific rules vary by zoning district. Contact Arlington Development Services at (817) 459-6502 for address-specific information.',
    costContext: 'Arlington construction costs are similar to Fort Worth. Garage conversions typically run $40,000–$95,000. Above-garage apartments: $80,000–$185,000. Detached ADUs: $100,000–$270,000. Permit fees are generally lower than Dallas.',
    popularProjects: 'In Arlington, garage conversion and detached ADU projects are common near UT Arlington for student housing. Guest houses for multi-generational living are popular in established neighborhoods. Rental ADUs are in demand near AT&T Stadium and Globe Life Field.',
    whyBuilding: 'Arlington\'s diverse employment base — from major entertainment venues to defense contractors to healthcare — creates stable, year-round rental demand. UT Arlington brings consistent student housing demand. Garage apartments typically rent for $1,100–$1,700/month in Arlington.',
    faqs: [
      { q: 'Can I build a garage apartment in Arlington, TX?', a: 'Yes. Arlington allows ADU construction in most residential zones. A building permit is required, and setback and height rules apply. We verify your specific address before design begins.' },
      { q: 'How much does a garage apartment cost in Arlington?', a: 'Garage conversions in Arlington typically run $40,000–$95,000. Above-garage apartments: $80,000–$185,000. Detached ADUs: $100,000–$270,000.' },
      { q: 'Do I need a permit for a garage apartment in Arlington?', a: 'Yes. All ADU construction and garage conversions require a building permit in Arlington. We handle the permit process for you.' },
      { q: 'Can I rent out a garage apartment in Arlington?', a: 'Yes. Arlington does not require owner-occupancy for ADU rentals in most zones.' },
      { q: 'What are the ADU setback rules in Arlington?', a: 'Setback requirements vary by zoning district in Arlington. Rear and side setbacks for accessory structures typically run 3–5 feet. We verify your specific property requirements before design.' },
      { q: 'How long does it take to build a garage apartment in Arlington?', a: 'Garage conversions: 3–5 months. Above-garage builds: 4–7 months. Detached ADUs: 5–8 months.' },
    ],
  },
  'plano': {
    name: 'Plano',
    state: 'TX',
    slug: 'plano',
    heroSubtitle: 'A high-demand suburb with strong property values and growing interest in ADU construction.',
    intro: 'Plano is one of the most desirable suburbs in DFW — strong schools, corporate headquarters, and a high quality of life drive consistent real estate demand. ADU construction in Plano has grown as homeowners look for ways to generate rental income or house family members in one of the area\'s most valuable markets.',
    zoning: 'Plano allows ADUs in single-family residential zones with specific size requirements: 400–1,100 square feet depending on lot size. The ADU must match the main home\'s architectural style. Minimum lot size requirements apply. Contact Plano Development Services at (972) 941-7151 for address-specific confirmation.',
    costContext: 'Plano sits at the higher end of DFW construction costs due to finish expectations and labor market. Garage conversions: $50,000–$110,000. Above-garage apartments: $90,000–$200,000. Detached ADUs: $120,000–$300,000. The higher property values in Plano make the investment math particularly attractive.',
    popularProjects: 'In Plano, the most common projects are detached ADUs on larger lots in established neighborhoods, and garage conversions for in-law suites. The high property values in Plano make ADU investment especially attractive — rental income often exceeds $1,500–$2,200/month.',
    whyBuilding: 'Plano\'s job market — anchored by Toyota, JPMorgan Chase, Liberty Mutual, and dozens of other corporate headquarters — drives strong, stable rental demand from professionals. Property values in Plano are among the highest in DFW, and ADUs add proportional value.',
    faqs: [
      { q: 'Can I build a garage apartment in Plano, TX?', a: 'Yes. Plano allows ADUs in single-family zones with size limits of 400–1,100 sq ft. Your lot must meet minimum size requirements. We verify your specific address before design.' },
      { q: 'How much does a garage apartment cost in Plano?', a: 'Garage conversions in Plano typically run $50,000–$110,000. Above-garage apartments: $90,000–$200,000. Detached ADUs: $120,000–$300,000.' },
      { q: 'Do I need a permit for a garage apartment in Plano?', a: 'Yes. Plano requires permits for all ADU construction. We handle the permit process from start to finish.' },
      { q: 'Can I rent out a garage apartment in Plano?', a: 'Yes. Plano does not require owner-occupancy for ADU rentals.' },
      { q: 'What size ADU can I build in Plano?', a: 'Plano limits ADUs to 400–1,100 sq ft depending on lot size. The ADU must also match the architectural style of the main home.' },
      { q: 'How long does it take to build a garage apartment in Plano?', a: 'Garage conversions: 3–5 months. Above-garage builds: 4–7 months. Detached ADUs: 5–9 months.' },
    ],
  },
  'frisco': {
    name: 'Frisco',
    state: 'TX',
    slug: 'frisco',
    heroSubtitle: 'One of the fastest-growing cities in America — with rising interest in ADU construction.',
    intro: 'Frisco has been one of the fastest-growing cities in the United States for years running. The explosive growth has driven significant housing demand, and homeowners in Frisco are increasingly exploring garage apartments and ADUs as a way to generate income or house family members in one of DFW\'s most desirable zip codes.',
    zoning: 'Frisco\'s ADU zoning requirements are established in the city\'s zoning ordinance. Requirements include setbacks, height limits, and architectural compatibility with the main home. Contact Frisco Development Services at (972) 292-5000 for address-specific guidance.',
    costContext: 'Frisco sits near the top of DFW construction costs due to high labor demand and finish expectations. Garage conversions: $50,000–$110,000. Above-garage apartments: $90,000–$210,000. Detached ADUs: $130,000–$310,000+.',
    popularProjects: 'In Frisco, detached ADUs are popular on larger lots in established neighborhoods. Multi-generational living builds — guest houses for aging parents — are a growing segment as the city\'s first wave of homeowners ages in place.',
    whyBuilding: 'Frisco\'s rental market benefits from the city\'s strong job growth, excellent schools, and high quality of life. Rental demand from young professionals and families is strong. Garage apartments in Frisco typically rent for $1,400–$2,200/month.',
    faqs: [
      { q: 'Can I build a garage apartment in Frisco, TX?', a: 'Yes. Frisco allows ADU construction subject to zoning requirements including setbacks, height limits, and architectural compatibility. We verify your specific address before design.' },
      { q: 'How much does a garage apartment cost in Frisco?', a: 'Garage conversions: $50,000–$110,000. Above-garage apartments: $90,000–$210,000. Detached ADUs: $130,000–$310,000+.' },
      { q: 'Do I need a permit for a garage apartment in Frisco?', a: 'Yes. Frisco requires permits for all ADU and garage conversion projects.' },
      { q: 'Can I rent out a garage apartment in Frisco?', a: 'Yes. Frisco does not require owner-occupancy for ADU rentals in most residential zones.' },
      { q: 'What are the ADU rules in Frisco?', a: 'Frisco requires ADUs to meet setback, height, and architectural compatibility standards. Specific rules depend on your zoning district. We research your address before design.' },
      { q: 'How long does it take to build a garage apartment in Frisco?', a: 'Garage conversions: 3–5 months. Above-garage builds: 4–7 months. Detached ADUs: 5–9 months.' },
    ],
  },
  'denton': {
    name: 'Denton',
    state: 'TX',
    slug: 'denton',
    heroSubtitle: 'A college town with strong rental demand and one of the clearer ADU ordinances in DFW.',
    intro: 'Denton is home to the University of North Texas and Texas Woman\'s University — which means strong, consistent rental demand from students, faculty, and staff. The city has also adopted a relatively clear ADU ordinance that makes garage apartment planning more predictable than in some other DFW cities.',
    zoning: 'Denton\'s ADU ordinance allows accessory dwelling units up to 800 square feet or 75% of the primary dwelling\'s floor area (whichever is less). Minimum lot size of 7,000 square feet applies. Setbacks: 5 feet from side and rear property lines. Height: maximum 20 feet. Contact Denton Development Services at (940) 349-8360 for confirmation.',
    costContext: 'Denton has some of the more affordable construction costs in DFW — lower than Plano, Frisco, and Southlake. Garage conversions: $38,000–$90,000. Above-garage apartments: $75,000–$175,000. Detached ADUs: $95,000–$250,000. The lower costs and strong rental market make Denton an attractive ADU market.',
    popularProjects: 'Rental-focused ADUs near UNT and TWU campuses. Garage conversions in the historic neighborhoods around downtown Denton. Guest houses for multi-generational living in west Denton neighborhoods.',
    whyBuilding: 'Denton\'s university population — over 50,000 students combined at UNT and TWU — creates consistent rental demand. Garage apartments near campus areas rent for $900–$1,500/month. The combination of lower construction costs and strong rental demand makes Denton one of the better ADU investment markets in DFW.',
    faqs: [
      { q: 'Can I build a garage apartment in Denton, TX?', a: 'Yes. Denton allows ADUs up to 800 sq ft or 75% of the primary dwelling. Minimum lot size of 7,000 sq ft applies. We verify your property before design begins.' },
      { q: 'How much does a garage apartment cost in Denton?', a: 'Denton is more affordable than many DFW suburbs. Garage conversions: $38,000–$90,000. Above-garage apartments: $75,000–$175,000. Detached ADUs: $95,000–$250,000.' },
      { q: 'Do I need a permit for a garage apartment in Denton?', a: 'Yes. All ADU construction in Denton requires a building permit. We handle the permit process.' },
      { q: 'Can I rent out a garage apartment in Denton?', a: 'Yes. Denton does not require owner-occupancy for ADU rentals.' },
      { q: 'What size ADU can I build in Denton?', a: 'Denton limits ADUs to the lesser of 800 sq ft or 75% of the primary dwelling\'s floor area. Minimum lot size: 7,000 sq ft.' },
      { q: 'How long does it take to build a garage apartment in Denton?', a: 'Garage conversions: 3–5 months. Detached ADUs: 5–8 months. Denton permits are generally processed in a reasonable timeframe.' },
    ],
  },
  'mckinney': {
    name: 'McKinney',
    state: 'TX',
    slug: 'mckinney',
    heroSubtitle: 'A fast-growing city with a charming historic downtown and growing ADU interest.',
    intro: 'McKinney combines historic small-town character with rapid suburban growth — one of the most appealing combinations in DFW. The city\'s historic downtown area, strong schools, and quality of life draw families and professionals alike. ADU interest has grown as McKinney\'s housing market has tightened.',
    zoning: 'McKinney\'s zoning code (Chapter 146) addresses accessory buildings and structures. ADU rules vary by zoning district. Contact McKinney Development Services at (972) 547-7477 for address-specific guidance on what\'s allowed on your property.',
    costContext: 'McKinney construction costs are similar to other north Dallas suburbs. Garage conversions: $45,000–$100,000. Above-garage apartments: $85,000–$190,000. Detached ADUs: $110,000–$280,000.',
    popularProjects: 'Detached ADUs on larger lots in McKinney\'s established neighborhoods. Garage conversions in older neighborhoods near historic downtown. Multi-generational guest houses in west McKinney.',
    whyBuilding: 'McKinney\'s strong job growth, excellent schools, and desirable lifestyle drive sustained housing demand. Rental demand from professionals and families is strong. Garage apartments typically rent for $1,200–$1,900/month in McKinney.',
    faqs: [
      { q: 'Can I build a garage apartment in McKinney, TX?', a: 'Yes. McKinney allows accessory dwelling units in residential zones, subject to Chapter 146 requirements. Specific rules depend on your zoning district.' },
      { q: 'How much does a garage apartment cost in McKinney?', a: 'Garage conversions: $45,000–$100,000. Above-garage apartments: $85,000–$190,000. Detached ADUs: $110,000–$280,000.' },
      { q: 'Do I need a permit for a garage apartment in McKinney?', a: 'Yes. McKinney requires permits for all ADU construction and garage conversions.' },
      { q: 'Can I rent out a garage apartment in McKinney?', a: 'Yes, in most residential zones. We verify your specific address and zoning before design begins.' },
      { q: 'What are the ADU rules in McKinney?', a: 'McKinney\'s Chapter 146 governs accessory buildings. Rules include setbacks, height limits, and compatibility with the main structure. We research your specific property.' },
      { q: 'How long does it take to build a garage apartment in McKinney?', a: 'Garage conversions: 3–5 months. Detached ADUs: 5–8 months.' },
    ],
  },
  'southlake': {
    name: 'Southlake',
    state: 'TX',
    slug: 'southlake',
    heroSubtitle: 'A luxury market where estate guest houses and premium ADUs command exceptional value.',
    intro: 'Southlake is one of the most affluent communities in Texas — known for large lots, luxury homes, and exceptionally high property values. ADU construction in Southlake is typically positioned at the premium end of the market: estate guest houses, luxury multi-generational suites, and custom detached structures that complement high-end primary residences.',
    zoning: 'Southlake\'s larger lots generally accommodate detached ADU structures more easily than smaller suburban lots. The city\'s zoning code governs setbacks, height limits, and architectural compatibility. Contact Southlake Planning & Development at (817) 748-8069 for address-specific guidance.',
    costContext: 'Southlake projects command premium pricing reflecting the market\'s expectations and property values. Garage conversions: $60,000–$130,000. Above-garage builds: $110,000–$230,000. Detached guest houses and ADUs: $150,000–$400,000+. The high property values in Southlake mean ADUs add proportionally more equity.',
    popularProjects: 'In Southlake, the dominant project type is the luxury detached guest house — designed for aging parents, adult children, or extended family visits. Premium finishes, accessibility features, and thoughtful design that complements the primary home are expectations, not extras.',
    whyBuilding: 'With median home values among the highest in DFW, ADU construction in Southlake adds significant equity. A premium guest house or detached ADU can add $150,000–$300,000+ to property value. The market\'s high property values and large lots make Southlake ideal for ambitious ADU projects.',
    faqs: [
      { q: 'Can I build a guest house or ADU in Southlake, TX?', a: 'Yes. Southlake\'s larger lots typically accommodate detached ADU construction. Zoning rules apply — we verify your specific address before design.' },
      { q: 'How much does a guest house cost in Southlake?', a: 'Southlake projects are premium builds. Expect $150,000–$400,000+ for a detached guest house with high-end finishes. The investment reflects the market and adds significant property value.' },
      { q: 'Do I need a permit for an ADU in Southlake?', a: 'Yes. All ADU and accessory structure construction requires permits in Southlake. We manage the permit process.' },
      { q: 'Can I build an ADA-accessible guest house in Southlake?', a: 'Absolutely. We design accessible guest houses frequently — zero-step entry, wider doorways, roll-in showers, and other features for aging-in-place.' },
      { q: 'What kind of ADU is most common in Southlake?', a: 'Detached guest houses designed for family use — especially multi-generational living for aging parents — are the dominant project type in Southlake.' },
      { q: 'How long does it take to build a guest house in Southlake?', a: 'Premium detached builds in Southlake typically run 6–10 months from first meeting to final walkthrough, reflecting the design complexity and finish level.' },
    ],
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

export default function CityPage() {
  const params = useParams<{ city: string }>();
  const city = CITY_DATA[params.city || ''];

  if (!city) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: 'CervoNeueBold, serif' }}>City Not Found</h1>
        <p className="text-gray-600 mb-8">We couldn't find that city. Please check our areas page.</p>
        <Link href="/areas"><Button className="bg-accent text-white hover:bg-accent/90">View All Cities</Button></Link>
      </div>
    );
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: city.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const otherCities = Object.values(CITY_DATA).filter(c => c.slug !== city.slug).slice(0, 6);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-card px-6 py-3 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto flex gap-2 items-center">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>›</span>
          <Link href="/areas" className="hover:text-primary transition-colors">Areas We Serve</Link>
          <span>›</span>
          <span className="text-primary font-medium">{city.name}</span>
        </div>
      </div>

      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={notFoundImg} alt={`Garage apartment in ${city.name}, TX`} className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Areas We Serve</p>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4" style={{ fontFamily: 'CervoNeueBold, serif' }}>
            Garage Apartment Builders<br />in {city.name}, Texas
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">{city.heroSubtitle}</p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wide px-8">
              Schedule a Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-lg text-gray-700 leading-relaxed">{city.intro}</p>
      </section>

      <section className="bg-card py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
            ADU and Garage Apartment Zoning in {city.name}
          </h2>
          <p className="text-gray-700 leading-relaxed">{city.zoning}</p>
          <div className="mt-6">
            <Link href="/resources/zoning-guide" className="text-accent font-semibold hover:underline flex items-center gap-1">
              Full DFW ADU Zoning Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
          What Does a Garage Apartment Cost in {city.name}?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">{city.costContext}</p>
        <Link href="/resources/cost-guide" className="text-accent font-semibold hover:underline flex items-center gap-1">
          Full Garage Apartment Cost Guide for DFW <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <section className="bg-card py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
            Popular Garage Apartment Projects in {city.name}
          </h2>
          <p className="text-gray-700 leading-relaxed">{city.popularProjects}</p>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              { label: 'Garage Conversions', href: '/services/garage-conversions', desc: '$40K–$100K · 3–5 months' },
              { label: 'Above-Garage Apartments', href: '/services/above-garage-apartments', desc: '$80K–$200K · 4–7 months' },
              { label: 'Detached ADUs', href: '/services/detached-adus', desc: '$100K–$300K+ · 5–9 months' },
            ].map(s => (
              <Link key={s.href} href={s.href}>
                <div className="bg-white border border-gray-100 rounded-lg p-5 hover:border-accent transition-colors cursor-pointer">
                  <div className="font-bold text-primary mb-1">{s.label}</div>
                  <div className="text-sm text-gray-500">{s.desc}</div>
                  <div className="text-accent text-xs font-semibold mt-2 flex items-center gap-1">Learn more <ArrowRight className="w-3 h-3" /></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
          Why {city.name} Homeowners Are Building Garage Apartments
        </h2>
        <p className="text-gray-700 leading-relaxed">{city.whyBuilding}</p>
      </section>

      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'CervoNeueBold, serif' }}>
            Frequently Asked Questions About Garage Apartments in {city.name}
          </h2>
          <div className="divide-y divide-white/10">
            {city.faqs.map(f => <FAQ key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {otherCities.length > 0 && (
        <section className="bg-card py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-primary mb-6" style={{ fontFamily: 'CervoNeueBold, serif' }}>
              We Also Build in These DFW Cities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {otherCities.map(c => (
                <Link key={c.slug} href={`/areas/${c.slug}`}>
                  <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-100">
                    <div className="font-bold text-primary">{c.name}</div>
                    <div className="text-accent text-xs font-semibold mt-1 flex items-center gap-1">View city page <ArrowRight className="w-3 h-3" /></div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link href="/areas" className="text-accent font-semibold hover:underline flex items-center gap-1">
                View all areas we serve <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="bg-accent text-white py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'CervoNeueBold, serif' }}>
            Ready to Build in {city.name}?
          </h2>
          <p className="text-white/90 mb-8 text-lg">Tell us about your property — we'll give you a realistic picture of what's possible.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-accent hover:bg-white/90 font-bold uppercase tracking-wide px-10">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
