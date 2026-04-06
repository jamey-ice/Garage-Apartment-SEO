export interface Project {
  slug: string;
  title: string;
  city: string;
  neighborhood: string;
  projectType: 'garage-conversion' | 'above-garage' | 'detached-adu' | 'guest-house';
  projectTypeLabel: string;
  size: number;
  year: number;
  timeline: string;
  excerpt: string;
  heroImage: string;
  images: string[];
  story: string;
  scopeOfWork: string[];
  keyFeatures: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: 'fairmount-garage-conversion-fort-worth',
    title: 'Fairmount Garage Conversion',
    city: 'Fort Worth',
    neighborhood: 'Fairmount',
    projectType: 'garage-conversion',
    projectTypeLabel: 'Garage Conversion',
    size: 600,
    year: 2025,
    timeline: '4 months',
    excerpt: 'A 600 sq ft garage conversion in the heart of Fairmount — transformed into a fully independent rental unit that generates $1,700/month.',
    heroImage: '/images/Bethany_-_8_27_211937Fairmount-30_1775501331346.jpg',
    images: [
      '/images/Bethany_-_8_27_211937Fairmount-30_1775501331346.jpg',
      '/images/2228_Hurley_Patry_Family_Garage_Apartment-40_1775501313347.jpg',
      '/images/2228_Hurley_Patry_Family_Garage_Apartment-29_1775501313347.jpg',
      '/images/2228_Hurley_Patry_Family_Garage_Apartment-80_1775501313347.jpg',
    ],
    story: `The homeowners in Fairmount had a 600 square foot detached garage that had been used for storage for years. They wanted to convert it into a rental unit — but they were nervous about the Fort Worth permit process and didn't know whether the existing structure could meet residential code.

We started with a structural assessment. The garage had solid framing and a good foundation — ideal for conversion. The main challenges were running plumbing to a structure that had none, upgrading the electrical panel, and adding egress windows to meet Fort Worth's residential code requirements.

The design focused on maximizing every square foot: an open kitchen and living area, a full bath with a walk-in shower, and a bedroom tucked behind a partial wall with built-in storage. We matched the exterior brick and trim to the 1940s primary home so the converted unit looked like it had always been part of the property.

The unit was rented within two weeks of completion at $1,700/month. The homeowners' payback period is approximately 6 years.`,
    scopeOfWork: [
      'Structural assessment and framing repairs',
      'Full plumbing rough-in (new water and sewer connections)',
      'Electrical upgrade — new 100-amp subpanel',
      'HVAC installation (mini-split system)',
      'Insulation and drywall throughout',
      'Egress window installation (Fort Worth code requirement)',
      'Custom kitchen with full-size appliances',
      'Full bathroom with walk-in shower',
      'LVP flooring throughout',
      'Exterior paint and trim to match primary home',
      'Building permit coordination with City of Fort Worth',
    ],
    keyFeatures: [
      'Separate entrance',
      'Full kitchen with dishwasher',
      'Walk-in shower',
      'Mini-split HVAC',
      'Private fenced patio',
    ],
  },
  {
    slug: 'mistletoe-heights-above-garage-apartment',
    title: 'Mistletoe Heights Above-Garage Apartment',
    city: 'Fort Worth',
    neighborhood: 'Mistletoe Heights',
    projectType: 'above-garage',
    projectTypeLabel: 'Above-Garage Apartment',
    size: 780,
    year: 2024,
    timeline: '6 months',
    excerpt: 'A 780 sq ft apartment built above a newly constructed two-car garage in one of Fort Worth\'s most sought-after historic neighborhoods.',
    heroImage: '/images/2223_Mistletoe-6_1775501313346.jpg',
    images: [
      '/images/2223_Mistletoe-6_1775501313346.jpg',
      '/images/2223_Mistletoe-25_1775501313346.jpg',
      '/images/2253_6th_Ave-20_1775501313348.jpg',
      '/images/2253_6th_Ave-35_1775501331344.jpg',
    ],
    story: `The homeowners in Mistletoe Heights wanted two things: a new two-car garage to replace their crumbling single-car structure, and a rentable living space they could use as income or eventually move family into. Building the apartment above the new garage solved both problems simultaneously.

Because we were constructing the garage from scratch, we could engineer the foundation and framing specifically to support a second story. This gave us more design flexibility than an above-garage build on an existing structure — we could optimize the layout from the ground up.

The 780 square foot apartment features a one-bedroom layout with a full kitchen, dining area, and living room. A covered exterior staircase provides independent access from the side of the property. The architectural style was designed to complement the 1930s Craftsman primary home — exposed rafter tails, cedar columns, and painted brick that matched the existing palette.

The unit was listed at $1,950/month and rented within 10 days of completion.`,
    scopeOfWork: [
      'Demo of existing single-car garage structure',
      'New two-car garage foundation (concrete slab, engineered for two-story load)',
      'Garage framing, roofing, and exterior',
      'Second-story apartment framing above garage',
      'Separate utility connections (electrical meter, water sub-meter)',
      'Covered exterior staircase with wrought iron railing',
      'Full kitchen with custom cabinetry',
      'Full bathroom with tub/shower combo',
      'HVAC (separate mini-split from garage)',
      'Fire-rated assembly between garage and living space (per Fort Worth code)',
      'Craftsman-style exterior details to match primary home',
      'Building permit coordination with City of Fort Worth',
    ],
    keyFeatures: [
      'Separate exterior entrance',
      'Separate electrical meter',
      'Fire-rated floor assembly',
      'Full kitchen and bath',
      'Two-car garage below retained',
    ],
  },
  {
    slug: 'bellair-guest-house-fort-worth',
    title: 'Bellair Drive Guest House',
    city: 'Fort Worth',
    neighborhood: 'Bellaire Drive',
    projectType: 'guest-house',
    projectTypeLabel: 'Guest House',
    size: 850,
    year: 2024,
    timeline: '7 months',
    excerpt: 'An 850 sq ft detached guest house built for aging parents — single-story, ADA-accessible features, and architecturally matched to a 1960s brick home.',
    heroImage: '/images/Bethany_-_8_19_21BellaireDrDB-15_1775501331346.jpg',
    images: [
      '/images/Bethany_-_8_19_21BellaireDrDB-15_1775501331346.jpg',
      '/images/2228_Hurley_Patry_Family_Garage_Apartment-107_1775501313348.jpg',
      '/images/301_rustic_view-8-6-20-14_1775501313346.jpg',
      '/images/4205_Glenwood-33_Emily_Jolliff_1775501331345.jpg',
    ],
    story: `The homeowners on Bellaire Drive wanted their aging parents close — but not living inside the primary home. Their parents were still fully independent but at a stage where single-story living and accessible features were becoming important.

The goal was a guest house that didn't look or feel like an accommodation. It needed to be a real home: comfortable, private, and designed for long-term living — not a glorified spare room.

We designed an 850 square foot single-story structure that matched the brick and roofline of the 1960s primary home. The layout prioritized accessibility without making the space feel clinical: zero-step entry from the carport, 36-inch doorways throughout, a walk-in shower with fold-down seat and grab bars, and lower counter heights in the kitchen.

The parents moved in six months after the project began. Their daughter told us it was the best decision they'd made in years — they can see each other daily without anyone feeling like they're in someone else's space.`,
    scopeOfWork: [
      'Site survey and lot coverage calculation',
      'Slab-on-grade foundation with zero-step entry',
      'Full framing, roofing, and exterior (brick to match primary home)',
      'Full plumbing, electrical, and HVAC connections',
      'ADA-accessible bathroom with roll-in shower and grab bars',
      '36-inch doorways throughout',
      'Lower kitchen countertops for accessibility',
      'Covered carport connection to main house',
      'Separate utility connections',
      'Landscaping and site restoration',
      'Building permit coordination with City of Fort Worth',
    ],
    keyFeatures: [
      'Single-story layout',
      'Zero-step entry',
      'ADA-accessible bathroom',
      '36" doorways throughout',
      'Connected covered walkway to main home',
    ],
  },
  {
    slug: 'arlington-detached-adu-rental',
    title: 'Arlington Detached ADU',
    city: 'Arlington',
    neighborhood: 'South Arlington',
    projectType: 'detached-adu',
    projectTypeLabel: 'Detached ADU',
    size: 720,
    year: 2025,
    timeline: '8 months',
    excerpt: 'A 720 sq ft detached ADU in South Arlington built as a dedicated rental unit near UT Arlington — generating $1,800/month from day one.',
    heroImage: '/images/2253_6th_Ave-38_1775501331344.jpg',
    images: [
      '/images/2253_6th_Ave-38_1775501331344.jpg',
      '/images/2253_6th_Ave-42_1775501331345.jpg',
      '/images/2253_6th_Ave-52_1775501331345.jpg',
      '/images/2228_Hurley_Patry_Family_Garage_Apartment-29_1775501313347.jpg',
    ],
    story: `The homeowners in South Arlington had a large backyard and a clear goal: build a rental unit that would attract graduate students or young professionals near the University of Texas at Arlington campus.

We started with a site analysis to identify the optimal placement — accounting for setbacks, the existing utility connections, and preserving the mature trees at the back of the lot. The ADU was positioned to maximize privacy from the primary home while maintaining easy access from the alley.

The 720 square foot design is efficient and well-appointed: an open living and kitchen area, a large bedroom with walk-in closet, a full bath, and a stacked washer/dryer alcove. We installed separate utility meters so the tenant has direct control over utility billing — a feature that makes the unit easier to rent and reduces the homeowner's administrative burden.

The unit was rented to a UTA graduate student at $1,800/month within three weeks of completion.`,
    scopeOfWork: [
      'Site survey and placement planning',
      'Alley-access setback verification',
      'Pier and beam foundation',
      'Full framing, roofing, and hardie board exterior',
      'Separate electrical meter installation',
      'Full plumbing and water sub-meter',
      'Mini-split HVAC system',
      'Stacked washer/dryer connections',
      'Full kitchen with stainless appliances',
      'Full bathroom with tub/shower',
      'LVP flooring throughout',
      'Fenced private yard area',
      'Building permit coordination with City of Arlington',
    ],
    keyFeatures: [
      'Separate electrical and water meters',
      'Alley access entrance',
      'Walk-in closet',
      'In-unit washer/dryer',
      'Private fenced yard',
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find(p => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return PROJECTS.map(p => p.slug);
}
