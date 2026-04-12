import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';
const notFoundImg = '/images/2228_Hurley_Patry_Family_Garage_Apartment-29_1775501313347.jpg';

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
    heroSubtitle: 'One of the most ADU-friendly cities in DFW â and our home market.',
    intro: 'Fort Worth is one of the most ADU-friendly cities in the DallasâFort Worth area. The city has no owner-occupancy requirement for ADUs, which means you can build a garage apartment and rent it to anyone â you don\'t have to live on the property. Strong rental demand in neighborhoods like Near Southside, Fairmount, Arlington Heights, and the TCU area makes Fort Worth one of the best markets in DFW for garage apartment investment.',
    zoning: 'Fort Worth permits garage conversions and new ADU construction in most residential zones. The main requirements: you must maintain equivalent covered parking (or obtain a variance), egress windows and smoke/CO detectors are required in all converted living spaces, and a building permit is mandatory for any conversion or new construction. Height limits for above-garage builds are typically 25â35 feet depending on district. No owner-occupancy requirement â one of the most investor-friendly policies in DFW. Contact the Fort Worth Development Services Department at (817) 392-8000 for address-specific confirmation.',
    costContext: 'Fort Worth sits in the middle of the DFW cost range. Labor costs are slightly lower than north Dallas suburbs. Permit fees run $800â$2,500 for typical ADU projects. Most garage conversions in Fort Worth run $40,000â$100,000. Above-garage apartments: $80,000â$180,000. Detached ADUs: $100,000â$280,000.',
    popularProjects: 'The most common projects in Fort Worth are garage conversions in older, established neighborhoods â particularly in the 76104, 76110, and 76107 zip codes where homes often have detached garages with alley access. Above-garage apartment builds are popular in near-downtown neighborhoods where lot sizes are smaller but demand for rental units is high. Guest houses for aging parents are a growing segment in west Fort Worth neighborhoods with larger lots.',
    whyBuilding: 'Fort Worth\'s rental market is strong and growing. The city\'s population has grown significantly over the past decade, and housing supply hasn\'t kept up. Garage apartments in established neighborhoods close to downtown, TCU, and major employers rent quickly â typically $1,200â$1,800 per month depending on size and finish. Property values in Fort Worth\'s core neighborhoods have appreciated significantly, and adding an ADU typically increases assessed value by 8â15%.',
    faqs: [
      { q: 'Can I build a garage apartment in Fort Worth, TX?', a: 'Yes. Fort Worth is one of the most ADU-friendly cities in DFW. You\'ll need a building permit, and if you\'re converting an existing garage, you\'ll need to maintain equivalent covered parking or get a variance. No owner-occupancy requirement.' },
      { q: 'How much does a garage apartment cost in Fort Worth?', a: 'Most garage conversions in Fort Worth run $40,000â$100,000. Above-garage apartments run $80,000â$180,000. Detached ADUs run $100,000â$280,000. We\'ll give you a realistic range at your first meeting.' },
      { q: 'Do I need a permit for a garage apartment in Fort Worth?', a: 'Yes. Fort Worth requires a building permit for all garage conversions and new ADU construction. We handle the permit process for you â including drawings, submissions, and responding to city comments.' },
      { q: 'Can I rent out a garage apartment in Fort Worth?', a: 'Yes. Fort Worth has no owner-occupancy requirement for ADUs, which means you can rent your garage apartment to anyone without needing to live on the property. This is one of the most investor-friendly policies in DFW.' },
      { q: 'What are the ADU zoning rules in Fort Worth?', a: 'Fort Worth allows ADUs in most residential zones. Key rules: maintain equivalent parking, egress windows required, building permit required, height limits per district. We research your specific address before design begins.' },
      { q: 'How long does it take to build a garage apartment in Fort Worth?', a: 'Garage conversions typically take 3â5 months. Above-garage builds take 4â7 months. Detached ADUs take 5â9 months. Fort Worth\'s permit office is generally faster than Dallas for residential projects.' },
    ],
  },
  'dallas': {
    name: 'Dallas',
    state: 'TX',
    slug: 'dallas',
    heroSubtitle: 'A complex zoning landscape â with real opportunity for homeowners in the right neighborhoods.',
    intro: 'Dallas has a more complex ADU zoning landscape than most DFW cities, but there is real opportunity for homeowners in the right neighborhoods. Dallas uses overlay districts (ADUO â Accessory Dwelling Unit Overlay) to permit ADU construction by right in certain areas. Outside of overlay zones, homeowners can pursue a Board of Adjustment special exception. We research your specific address before any design work begins.',
    zoning: 'Dallas ADU zoning is neighborhood-specific. In areas covered by the ADUO overlay, ADU construction is permitted by right â no special exception needed. Outside the overlay, a Board of Adjustment exception is typically required. Key requirements across Dallas: separate entrance required, ADU must comply with height and setback rules of the base zoning district, parking replacement may be required. Dallas permit fees vary by project type and size. Contact Dallas Development Services at (214) 948-4480 for address-specific guidance.',
    costContext: 'Dallas has some of the higher construction costs in DFW due to labor market and permitting complexity. Expect garage conversions in the $50,000â$110,000 range. Above-garage apartments: $90,000â$200,000. Detached ADUs: $120,000â$300,000+. Permit fees can run $1,500â$4,000 for ADU projects. The complexity of Dallas permitting adds time and cost compared to smaller cities.',
    popularProjects: 'In Dallas, the most common projects are in east Dallas, Lake Highlands, and older Oak Cliff neighborhoods where detached garages are common and rental demand is strong. Above-garage apartments are popular in M-streets and Lakewood. Guest houses for multi-generational living are common in Preston Hollow and north Dallas neighborhoods with larger lots.',
    whyBuilding: 'Dallas rental demand is among the strongest in the country. The city\'s job market â anchored by major corporations, healthcare, and finance â drives consistent demand for quality rental housing. Garage apartments in desirable Dallas neighborhoods rent for $1,300â$2,200 per month. Property values in Dallas have appreciated significantly, and ADUs add measurable equity.',
    faqs: [
      { q: 'Can I build a garage apartment in Dallas, TX?', a: 'Yes, but it depends on your neighborhood. In ADUO overlay zones, ADUs are permitted by right. Outside these areas, you\'ll need a Board of Adjustment exception. We research your specific address before any design work.' },
      { q: 'How much does a garage apartment cost in Dallas?', a: 'Garage conversions in Dallas typically run $50,000â$110,000. Above-garage apartments: $90,000â$200,000. Detached ADUs: $120,000â$300,000+. Dallas permitting adds some complexity and cost compared to smaller DFW cities.' },
      { q: 'Do I need a permit for a garage apartment in Dallas?', a: 'Yes. Dallas requires permits for all ADU construction and garage conversions. If you\'re outside an ADUO overlay zone, you\'ll also need Board of Adjustment approval before permits can be issued.' },
      { q: 'Can I rent out a garage apartment in Dallas?', a: 'Yes. Dallas does not have an owner-occupancy requirement for most ADU types. You can rent your garage apartment without living on the property.' },
      { q: 'What neighborhoods in Dallas allow ADUs?', a: 'ADUO overlay zones include parts of east Dallas, Oak Cliff, and other established neighborhoods. Outside these areas, Board of Adjustment approval is needed. We check your specific address at the start of every project.' },
      { q: 'How long does it take to build a garage apartment in Dallas?', a: 'Plan for additional time in Dallas due to permitting complexity â especially if a Board of Adjustment hearing is required. Total timeline: 4â7 months for conversions, 6â10 months for new detached ADUs.' },
    ],
  },
  'arlington': {
    name: 'Arlington',
    state: 'TX',
    slug: 'arlington',
    heroSubtitle: 'A growing city with strong rental demand near major employers and entertainment destinations.',
    intro: 'Arlington sits between Fort Worth and Dallas and has one of DFW\'s most active housing markets. Home to major employers, UT Arlington, AT&T Stadium, and Globe Life Field, Arlington has steady rental demand across multiple market segments â students, young professionals, and families. The city has become more accommodating to ADU construction in recent years.',
    zoning: 'Arlington requires a building permit for all ADU construction and garage conversions. The city\'s zoning code allows ADUs in most single-family residential zones, subject to setback, height, and lot coverage requirements. Specific rules vary by zoning district. Contact Arlington Development Services at (817) 459-6502 for address-specific information.',
    costContext: 'Arlington construction costs are similar to Fort Worth. Garage conversions typically run $40,000â$95,000. Above-garage apartments: $80,000â$185,000. Detached ADUs: $100,000â$270,000. Permit fees are generally lower than Dallas.',
    popularProjects: 'In Arlington, garage conversion and detached ADU projects are common near UT Arlington for student housing. Guest houses for multi-generational living are popular in established neighborhoods. Rental ADUs are in demand near AT&T Stadium and Globe Life Field.',
    whyBuilding: 'Arlington\'s diverse employment base â from major entertainment venues to defense contractors to healthcare â creates stable, year-round rental demand. UT Arlington brings consistent student housing demand. Garage apartments typically rent for $1,100â$1,700/month in Arlington.',
    faqs: [
      { q: 'Can I build a garage apartment in Arlington, TX?', a: 'Yes. Arlington allows ADU construction in most residential zones. A building permit is required, and setback and height rules apply. We verify your specific address before design begins.' },
      { q: 'How much does a garage apartment cost in Arlington?', a: 'Garage conversions in Arlington typically run $40,000â$95,000. Above-garage apartments: $80,000â$185,000. Detached ADUs: $100,000â$270,000.' },
      { q: 'Do I need a permit for a garage apartment in Arlington?', a: 'Yes. All ADU construction and garage conversions require a building permit in Arlington. We handle the permit process for you.' },
      { q: 'Can I rent out a garage apartment in Arlington?', a: 'Yes. Arlington does not require owner-occupancy for ADU rentals in most zones.' },
      { q: 'What are the ADU setback rules in Arlington?', a: 'Setback requirements vary by zoning district in Arlington. Rear and side setbacks for accessory structures typically run 3â5 feet. We verify your specific property requirements before design.' },
      { q: 'How long does it take to build a garage apartment in Arlington?', a: 'Garage conversions: 3â5 months. Above-garage builds: 4â7 months. Detached ADUs: 5â8 months.' },
    ],
  },
  'mansfield': {
    name: 'Mansfield',
    state: 'TX',
    slug: 'mansfield',
    heroSubtitle: 'A growing Tarrant County suburb where garage apartments are a smart investment close to Fort Worth.',
    intro: 'Mansfield sits at the heart of Tarrant County â close enough to Fort Worth and Arlington for easy commuting, with a strong local identity, excellent schools (Mansfield ISD), and a housing market that rewards smart property investment. Homeowners in Mansfield are increasingly turning to garage apartments and ADUs as a way to generate rental income or house family members without building new.',
    zoning: 'Mansfield allows accessory dwelling units in residential zones subject to setback, height, and lot coverage requirements. Contact Mansfield Building Services at (817) 276-4200 for address-specific guidance on what your property allows.',
    costContext: 'Mansfield construction costs are mid-range for the DFW area. Garage conversions: $40,000â$95,000. Above-garage apartments: $80,000â$180,000. Detached ADUs: $100,000â$260,000. The combination of reasonable costs and growing property values makes the investment math attractive.',
    popularProjects: 'Garage conversions for rental income or in-law suites are the most common project type in Mansfield. Detached ADUs on larger lots are also popular as the city\'s newer neighborhoods often feature larger parcels. Multi-generational living builds have grown significantly.',
    whyBuilding: 'Mansfield\'s proximity to Fort Worth, Arlington, and major employment corridors drives steady rental demand. Garage apartments in Mansfield typically rent for $950â$1,500/month. The Mansfield ISD draws families, creating strong demand for well-designed living space.',
    faqs: [
      { q: 'Can I build a garage apartment in Mansfield, TX?', a: 'Yes. Mansfield allows ADUs in residential zones subject to setback, height, and lot coverage requirements. We verify your specific address before design begins.' },
      { q: 'How much does a garage apartment cost in Mansfield?', a: 'Garage conversions in Mansfield typically run $40,000â$95,000. Above-garage apartments: $80,000â$180,000. Detached ADUs: $100,000â$260,000.' },
      { q: 'Do I need a permit for a garage apartment in Mansfield?', a: 'Yes. All ADU construction in Mansfield requires a building permit. We handle the permit process from start to finish.' },
      { q: 'Can I rent out a garage apartment in Mansfield?', a: 'Yes. Mansfield does not require owner-occupancy for ADU rentals in most residential zones. We verify your specific address.' },
      { q: 'What size ADU can I build in Mansfield?', a: 'ADU size in Mansfield depends on your lot size and zoning district. We research your specific property before design to confirm what\'s possible.' },
      { q: 'How long does it take to build a garage apartment in Mansfield?', a: 'Garage conversions: 3â5 months. Above-garage builds: 4â7 months. Detached ADUs: 5â8 months.' },
    ],
  },
  'aledo': {
    name: 'Aledo',
    state: 'TX',
    slug: 'aledo',
    heroSubtitle: 'Parker County\'s premier address â large lots, top-ranked schools, and room to build.',
    intro: 'Aledo is one of the most sought-after addresses in the Fort Worth metro â known for Aledo ISD (consistently one of Texas\'s top-ranked school districts), large residential lots, and a close-knit community feel. The generous lot sizes common in Aledo and Parker County make detached ADUs and guest houses especially feasible, and the area\'s high quality of life drives strong demand for thoughtfully designed living space.',
    zoning: 'Properties in the Aledo area fall under either City of Aledo or Parker County jurisdiction depending on location. Parker County unincorporated areas have fewer ADU restrictions than most city jurisdictions. City of Aledo zoning applies within city limits. Contact Aledo City Hall at (817) 441-7016 or Parker County for guidance specific to your address.',
    costContext: 'Aledo and Parker County construction costs are mid-range, though finish expectations in this market tend to be higher. Garage conversions: $42,000â$100,000. Above-garage apartments: $82,000â$185,000. Detached ADUs and guest houses: $110,000â$290,000.',
    popularProjects: 'Detached guest houses and multi-generational living suites are the dominant project type in Aledo â the large lots make them highly feasible. Garage conversions for in-law suites or rental income are also common, particularly in neighborhoods closer to Aledo\'s town center.',
    whyBuilding: 'Aledo\'s reputation for excellent schools and quality of life makes it a magnet for families â and a strong rental market for well-designed garage apartments and guest houses. Rental rates in the Aledo area typically run $1,000â$1,600/month. Large lots also mean ADU projects can be designed with real separation and privacy.',
    faqs: [
      { q: 'Can I build a garage apartment in Aledo, TX?', a: 'Yes. Most properties in the Aledo/Parker County area can accommodate ADU construction, particularly those on larger lots. Rules depend on whether your property is inside city limits or in unincorporated Parker County.' },
      { q: 'How much does a garage apartment cost in Aledo?', a: 'Garage conversions: $42,000â$100,000. Above-garage apartments: $82,000â$185,000. Detached ADUs and guest houses: $110,000â$290,000.' },
      { q: 'Do I need a permit for a garage apartment in Aledo?', a: 'Yes. Whether you\'re inside Aledo city limits or in Parker County, ADU construction requires permits. We handle the process for you.' },
      { q: 'Can I rent out a garage apartment in Aledo?', a: 'Yes. We verify your specific property\'s requirements before design begins.' },
      { q: 'What size ADU can I build in Aledo?', a: 'Lot sizes in Aledo are often large enough for substantial detached ADUs. Specific size limits depend on your zoning and whether you\'re in city limits or Parker County. We research your property before design.' },
      { q: 'How long does it take to build a garage apartment in Aledo?', a: 'Garage conversions: 3â5 months. Detached ADUs and guest houses: 5â9 months depending on complexity.' },
    ],
  },
  'denton': {
    name: 'Denton',
    state: 'TX',
    slug: 'denton',
    heroSubtitle: 'A college town with strong rental demand and one of the clearer ADU ordinances in DFW.',
    intro: 'Denton is home to the University of North Texas and Texas Woman\'s University â which means strong, consistent rental demand from students, faculty, and staff. The city has also adopted a relatively clear ADU ordinance that makes garage apartment planning more predictable than in some other DFW cities.',
    zoning: 'Denton\'s ADU ordinance allows accessory dwelling units up to 800 square feet or 75% of the primary dwelling\'s floor area (whichever is less). Minimum lot size of 7,000 square feet applies. Setbacks: 5 feet from side and rear property lines. Height: maximum 20 feet. Contact Denton Development Services at (940) 349-8360 for confirmation.',
    costContext: 'Denton has some of the more affordable construction costs in DFW â lower than north DFW suburbs and Southlake. Garage conversions: $38,000â$90,000. Above-garage apartments: $75,000â$175,000. Detached ADUs: $95,000â$250,000. The lower costs and strong rental market make Denton an attractive ADU market.',
    popularProjects: 'Rental-focused ADUs near UNT and TWU campuses. Garage conversions in the historic neighborhoods around downtown Denton. Guest houses for multi-generational living in west Denton neighborhoods.',
    whyBuilding: 'Denton\'s university population â over 50,000 students combined at UNT and TWU â creates consistent rental demand. Garage apartments near campus areas rent for $900â$1,500/month. The combination of lower construction costs and strong rental demand makes Denton one of the better ADU investment markets in DFW.',
    faqs: [
      { q: 'Can I build a garage apartment in Denton, TX?', a: 'Yes. Denton allows ADUs up to 800 sq ft or 75% of the primary dwelling. Minimum lot size of 7,000 sq ft applies. We verify your property before design begins.' },
      { q: 'How much does a garage apartment cost in Denton?', a: 'Denton is more affordable than many DFW suburbs. Garage conversions: $38,000â$90,000. Above-garage apartments: $75,000â$175,000. Detached ADUs: $95,000â$250,000.' },
      { q: 'Do I need a permit for a garage apartment in Denton?', a: 'Yes. All ADU construction in Denton requires a building permit. We handle the permit process.' },
      { q: 'Can I rent out a garage apartment in Denton?', a: 'Yes. Denton does not require owner-occupancy for ADU rentals.' },
      { q: 'What size ADU can I build in Denton?', a: 'Denton limits ADUs to the lesser of 800 sq ft or 75% of the primary dwelling\'s floor area. Minimum lot size: 7,000 sq ft.' },
      { q: 'How long does it take to build a garage apartment in Denton?', a: 'Garage conversions: 3â5 months. Detached ADUs: 5â8 months. Denton permits are generally processed in a reasonable timeframe.' },
    ],
  },
  'burleson': {
    name: 'Burleson',
    state: 'TX',
    slug: 'burleson',
    heroSubtitle: 'South Fort Worth\'s growing neighbor â affordable lots and a strong case for ADU investment.',
    intro: 'Burleson sits just south of Fort Worth, straddling Tarrant and Johnson counties â close to everything Fort Worth offers while maintaining its own distinct community character. Growing steadily with new residential development and a strong sense of community, Burleson homeowners are increasingly building garage apartments and ADUs to generate rental income or create flexible living space for family.',
    zoning: 'Burleson allows accessory dwelling units in residential zones. Rules cover setbacks, lot coverage, height, and utility connections. Contact Burleson Development Services at (817) 426-9600 for address-specific guidance on your property.',
    costContext: 'Burleson offers some of the more affordable ADU construction costs in the greater Fort Worth area, reflecting the local labor market and land costs. Garage conversions: $38,000â$88,000. Above-garage apartments: $75,000â$170,000. Detached ADUs: $95,000â$250,000.',
    popularProjects: 'Garage conversions for rental income are the most popular project type in Burleson. Detached ADUs on the area\'s larger lots are a growing trend. Multi-generational builds â especially for parents or adult children â are a natural fit for Burleson\'s family-oriented community.',
    whyBuilding: 'Burleson\'s proximity to Fort Worth employment, medical corridors, and major highways makes it a practical base for renters. Garage apartments in Burleson typically rent for $850â$1,350/month. Lower construction costs relative to the north DFW suburbs mean better return-on-investment math for income-focused projects.',
    faqs: [
      { q: 'Can I build a garage apartment in Burleson, TX?', a: 'Yes. Burleson allows ADUs in residential zones subject to setback, lot coverage, and utility requirements. We verify your specific address before design begins.' },
      { q: 'How much does a garage apartment cost in Burleson?', a: 'Garage conversions in Burleson typically run $38,000â$88,000. Above-garage apartments: $75,000â$170,000. Detached ADUs: $95,000â$250,000.' },
      { q: 'Do I need a permit for a garage apartment in Burleson?', a: 'Yes. All ADU and garage conversion construction in Burleson requires building permits. We manage the permit process.' },
      { q: 'Can I rent out a garage apartment in Burleson?', a: 'Yes. We verify your specific address and zoning requirements before design to confirm rental use.' },
      { q: 'What size ADU can I build in Burleson?', a: 'ADU size depends on your lot size and zoning district. We research your specific property before design to determine what\'s allowed.' },
      { q: 'How long does it take to build a garage apartment in Burleson?', a: 'Garage conversions: 3â5 months. Detached ADUs: 5â8 months from first consultation to final walkthrough.' },
    ],
  },
  'benbrook': {
    name: 'Benbrook',
    state: 'TX',
    slug: 'benbrook',
    heroSubtitle: 'A lakeside Tarrant County community with established neighborhoods and strong ADU demand.',
    intro: 'Benbrook sits just southwest of Fort Worth along the shores of Lake Benbrook â a close-in community with an established feel, mature trees, and neighborhoods full of homes built in the 1960s through 1990s. That older housing stock means a large supply of detached garages well-suited for conversion projects. Homeowners here are building ADUs for rental income, aging parents, and adult children who want to live nearby without sharing a house.',
    zoning: 'Benbrook falls under Tarrant County and City of Benbrook jurisdiction. ADUs and accessory structures are permitted subject to setback, height, and lot coverage requirements. All construction requires a building permit. Contact Benbrook Planning & Development at (817) 249-3000 for address-specific guidance on what\'s allowed on your property.',
    costContext: 'Benbrook tracks closely with Fort Worth pricing â one of the most cost-effective markets in Tarrant County. Garage conversions: $38,000â$95,000. Above-garage apartments: $75,000â$175,000. Detached ADUs: $95,000â$260,000. Permit fees are typically lower than larger DFW cities.',
    popularProjects: 'Garage conversions in established neighborhoods with detached two-car garages. Detached ADUs on larger lots near the lake. In-law suite builds for multi-generational families â a strong and growing segment in Benbrook.',
    whyBuilding: 'Benbrook\'s proximity to Fort Worth (10â15 minutes to downtown), Lake Benbrook recreation, and stable neighborhoods make it an attractive market for long-term rental ADUs. A well-finished garage apartment here can rent for $950â$1,400/month â delivering strong cash-on-cash returns given the lower construction costs.',
    faqs: [
      { q: 'Can I build a garage apartment in Benbrook, TX?', a: 'Yes. Benbrook allows ADU and accessory structure construction subject to city zoning requirements. We verify your specific property before any design work begins.' },
      { q: 'How much does a garage apartment cost in Benbrook?', a: 'Garage conversions in Benbrook typically run $38,000â$95,000. Above-garage apartments are $75,000â$175,000. Detached ADUs range from $95,000â$260,000.' },
      { q: 'Do I need a permit for a garage conversion in Benbrook?', a: 'Yes. All structural changes and living space conversions require a building permit in Benbrook. We handle the permit process for you.' },
      { q: 'What\'s the rental market like in Benbrook?', a: 'Strong and consistent. The lakeside location and proximity to Fort Worth make Benbrook ADUs attractive to renters. Expect $950â$1,400/month depending on size and finish.' },
    ],
  },
  'haltom-city': {
    name: 'Haltom City',
    state: 'TX',
    slug: 'haltom-city',
    heroSubtitle: 'A working-class Tarrant County suburb with strong rental demand and affordable build costs.',
    intro: 'Haltom City is a dense, established suburb immediately northeast of Fort Worth â one of the most affordable markets in Tarrant County for both homeownership and construction. The city\'s older housing stock includes thousands of homes with detached garages that are ideal candidates for conversion to rental units. With strong rental demand from workers in the nearby North Fort Worth employment corridors, ADUs in Haltom City deliver some of the best cash-on-cash returns in the metro.',
    zoning: 'Haltom City permits accessory structures and dwelling units subject to city zoning ordinance requirements. All construction requires building permits. Contact Haltom City Community Development at (817) 834-0515 for address-specific zoning confirmation.',
    costContext: 'Haltom City is one of the most affordable ADU markets in DFW. Garage conversions: $35,000â$85,000. Above-garage apartments: $70,000â$160,000. Detached ADUs: $90,000â$235,000. Lower land and labor costs than central Fort Worth make Haltom City attractive for investment-focused ADU projects.',
    popularProjects: 'High-volume rental ADU conversions of detached garages â the core project type here. Investors and homeowners alike are capitalizing on the older housing stock and strong renter demand. Multi-generational builds for extended families are also common.',
    whyBuilding: 'Haltom City\'s renter-heavy demographic and proximity to major employers make it a reliable ADU rental market. Garage apartments here rent for $850â$1,300/month. With lower construction costs than most DFW cities, the ROI math works well for investment-focused projects.',
    faqs: [
      { q: 'Can I build a garage apartment in Haltom City, TX?', a: 'Yes. Haltom City allows ADU construction subject to its zoning ordinance. We confirm your specific address and zoning before beginning any design work.' },
      { q: 'How much does a garage conversion cost in Haltom City?', a: 'Haltom City is one of the most affordable ADU markets in DFW. Garage conversions run $35,000â$85,000. Detached ADUs range from $90,000â$235,000.' },
      { q: 'What\'s the rental demand like in Haltom City?', a: 'Strong. The city\'s working-class renter base and proximity to Fort Worth employment create consistent demand for affordable rental units. Expect $850â$1,300/month for a well-finished ADU.' },
      { q: 'Do I need a permit for an ADU in Haltom City?', a: 'Yes. All residential construction requires permits in Haltom City. We manage the entire permit process.' },
    ],
  },
  'white-settlement': {
    name: 'White Settlement',
    state: 'TX',
    slug: 'white-settlement',
    heroSubtitle: 'A west Fort Worth Tarrant County suburb near NAS JRB with strong military and defense worker rental demand.',
    intro: 'White Settlement is a small, tight-knit city on the west side of Fort Worth â home to Naval Air Station Joint Reserve Base Fort Worth and a significant population of military families, defense contractors, and Lockheed Martin employees. That employment base creates steady, reliable rental demand for smaller units like garage apartments. The city\'s affordable housing stock and older detached garages make it a practical market for both garage conversions and new detached ADU builds.',
    zoning: 'White Settlement permits accessory structures subject to city zoning requirements. Building permits are required for all construction. Contact White Settlement Community Development at (817) 246-4971 for address-specific guidance.',
    costContext: 'White Settlement offers affordable ADU construction costs comparable to Haltom City and Benbrook. Garage conversions: $36,000â$88,000. Above-garage apartments: $72,000â$165,000. Detached ADUs: $92,000â$245,000.',
    popularProjects: 'Rental-focused garage conversions serving the military and defense worker rental market. Multi-generational builds for families close to the base. Detached ADUs on larger lots in the western sections of the city.',
    whyBuilding: 'The NAS JRB Fort Worth rental market is uniquely stable â military families rotate in and out on predictable schedules, creating consistent turnover demand for quality short- and long-term rentals. A well-finished ADU near the base can rent for $900â$1,350/month.',
    faqs: [
      { q: 'Can I build a garage apartment in White Settlement, TX?', a: 'Yes. White Settlement allows ADU and accessory structure construction subject to city zoning. We verify your address before any design work begins.' },
      { q: 'What makes White Settlement a good ADU market?', a: 'The proximity to NAS JRB Fort Worth and Lockheed Martin creates a stable base of renters â military families and defense workers who need quality housing close to work.' },
      { q: 'How much does a garage apartment cost in White Settlement?', a: 'Garage conversions typically run $36,000â$88,000. Detached ADUs range from $92,000â$245,000.' },
      { q: 'Do I need a permit for an ADU in White Settlement?', a: 'Yes. Building permits are required for all construction. We handle the permit process start to finish.' },
    ],
  },
  'hurst': {
    name: 'Hurst',
    state: 'TX',
    slug: 'hurst',
    heroSubtitle: 'Part of the HEB mid-cities market â centrally located between Fort Worth and Dallas with strong rental demand.',
    intro: 'Hurst is the northernmost of the three HEB cities (Hurst, Euless, Bedford) â an established mid-cities suburb strategically positioned between Fort Worth and Dallas along the Highway 183 corridor. The city\'s proximity to DFW Airport, major employers like Bell Helicopter and American Airlines, and easy access to both downtowns creates strong, diverse rental demand. Older neighborhoods with detached garages are common, and the ADU market here is driven by both renters and multi-generational families.',
    zoning: 'Hurst permits ADUs and accessory structures in residential zones subject to setback, height, and lot coverage requirements. Building permits required for all construction. Contact Hurst Community Development at (817) 788-7000 for address-specific confirmation.',
    costContext: 'Hurst tracks with mid-range DFW pricing. Garage conversions: $40,000â$95,000. Above-garage apartments: $80,000â$180,000. Detached ADUs: $100,000â$260,000. Proximity to DFW Airport and major employers supports strong rental rates.',
    popularProjects: 'Rental ADUs serving the DFW Airport and Bell Helicopter employee base. Multi-generational guest houses for established HEB-area families. Garage conversions in the city\'s older established neighborhoods.',
    whyBuilding: 'Hurst\'s central location makes it one of the most versatile rental markets in Tarrant County â close to DFW Airport, major employment centers, and both downtowns. ADUs here rent for $1,000â$1,500/month. The combination of location and affordable construction costs creates strong ROI.',
    faqs: [
      { q: 'Can I build a garage apartment in Hurst, TX?', a: 'Yes. Hurst allows ADU construction in residential zones. We verify your specific property and zoning before design begins.' },
      { q: 'How much does a garage apartment cost in Hurst?', a: 'Garage conversions in Hurst typically run $40,000â$95,000. Detached ADUs range from $100,000â$260,000.' },
      { q: 'What\'s the rental market like in Hurst?', a: 'Strong and diverse. DFW Airport, Bell Helicopter, American Airlines, and easy access to both downtowns drive consistent rental demand. Expect $1,000â$1,500/month for a well-finished ADU.' },
      { q: 'Do I need a permit for an ADU in Hurst?', a: 'Yes. All construction requires permits in Hurst. We handle the entire permit process.' },
    ],
  },
  'euless': {
    name: 'Euless',
    state: 'TX',
    slug: 'euless',
    heroSubtitle: 'Minutes from DFW Airport â one of the most diverse and renter-friendly cities in Tarrant County.',
    intro: 'Euless sits at the geographic center of the DFW metroplex â minutes from DFW International Airport, adjacent to the Dallas Cowboys and Texas Rangers facilities, and surrounded by major employment corridors. The city is one of the most diverse in Tarrant County, with a large renter population and steady demand for quality housing. Garage apartments and ADUs here serve airport and hospitality workers, healthcare professionals, and families who want affordable access to both Fort Worth and Dallas.',
    zoning: 'Euless permits ADUs and accessory structures in residential zones subject to city zoning requirements. All construction requires building permits. Contact Euless Planning & Zoning at (817) 685-1600 for address-specific guidance.',
    costContext: 'Euless offers competitive ADU construction costs reflecting its mid-cities location. Garage conversions: $40,000â$95,000. Above-garage apartments: $80,000â$185,000. Detached ADUs: $100,000â$265,000.',
    popularProjects: 'Rental ADUs for the airport and hospitality worker market. Garage conversions in established neighborhoods. Detached ADUs for multi-generational families.',
    whyBuilding: 'Euless\'s proximity to DFW Airport and the sports and entertainment district creates one of the most reliable rental markets in Tarrant County. ADUs here attract long-term renters who work nearby. Expect $1,000â$1,500/month for a well-finished unit.',
    faqs: [
      { q: 'Can I build a garage apartment in Euless, TX?', a: 'Yes. Euless allows ADU construction subject to city zoning requirements. We verify your address and zoning before design begins.' },
      { q: 'How much does a garage apartment cost in Euless?', a: 'Garage conversions run $40,000â$95,000. Detached ADUs range from $100,000â$265,000.' },
      { q: 'What makes Euless a good ADU market?', a: 'The proximity to DFW Airport and major employers creates steady rental demand. ADUs here rent to long-term tenants who value the central location.' },
      { q: 'Do I need a permit for an ADU in Euless?', a: 'Yes. All residential construction requires permits. We manage the permit process from start to finish.' },
    ],
  },
  'bedford': {
    name: 'Bedford',
    state: 'TX',
    slug: 'bedford',
    heroSubtitle: 'The most established of the HEB cities â mature neighborhoods and strong multi-generational ADU demand.',
    intro: 'Bedford is the southernmost and most established of the three HEB cities â known for its quality schools, mature neighborhoods, and long-tenured homeowners. The city sits between Euless and Hurst along the mid-cities corridor, offering easy access to DFW Airport, major employers, and both downtowns. ADU projects in Bedford are heavily driven by multi-generational living â homeowners adding space for aging parents or adult children â alongside a growing segment of rental-focused builds.',
    zoning: 'Bedford permits ADUs and accessory structures in residential zones subject to setback, height, and lot coverage requirements. Building permits are required for all construction. Contact Bedford Planning & Development at (817) 952-2100 for address-specific guidance.',
    costContext: 'Bedford pricing is comparable to Hurst and Euless. Garage conversions: $42,000â$100,000. Above-garage apartments: $82,000â$185,000. Detached ADUs: $105,000â$270,000. The city\'s established neighborhoods and quality housing stock support strong resale and rental values.',
    popularProjects: 'Multi-generational guest houses for families who have lived in Bedford for decades. Garage conversions in older established neighborhoods. Above-garage apartment builds for homeowners who want to keep garage parking but add rental income.',
    whyBuilding: 'Bedford\'s stable, established character attracts quality long-term tenants. ADUs here rent for $1,050â$1,550/month. The city\'s strong school district and central DFW location mean low vacancy rates and tenant quality above the metro average.',
    faqs: [
      { q: 'Can I build a garage apartment in Bedford, TX?', a: 'Yes. Bedford allows ADU construction in residential zones. We verify your specific address before any design work begins.' },
      { q: 'How much does an ADU cost in Bedford?', a: 'Garage conversions typically run $42,000â$100,000. Detached ADUs range from $105,000â$270,000.' },
      { q: 'What\'s the most common ADU type in Bedford?', a: 'Multi-generational guest houses are the most common project â homeowners adding space for aging parents or adult children who want independent living nearby.' },
      { q: 'Do I need a permit to add living space above my garage in Bedford?', a: 'Yes. Above-garage apartment construction requires a building permit. We design structurally sound builds that meet all Bedford code requirements.' },
    ],
  },
  'north-richland-hills': {
    name: 'North Richland Hills',
    state: 'TX',
    slug: 'north-richland-hills',
    heroSubtitle: 'One of the largest Tarrant County suburbs â established neighborhoods, large lots, and growing ADU demand.',
    intro: 'North Richland Hills is one of the largest cities in Tarrant County, covering a large swath of northeast Fort Worth territory with a mix of established 1970sâ1990s neighborhoods and newer development near the 820 loop. The city has a diverse housing stock â many homes with detached garages, large corner lots, and alley-accessed properties that are well-suited for ADU projects. NRH is an increasingly popular market for both rental ADUs and multi-generational builds.',
    zoning: 'North Richland Hills permits accessory structures and ADUs in residential zones subject to city zoning requirements. Building permits are required for all construction. Contact NRH Development Services at (817) 427-6300 for address-specific guidance.',
    costContext: 'NRH pricing is competitive with Fort Worth. Garage conversions: $40,000â$98,000. Above-garage apartments: $80,000â$182,000. Detached ADUs: $100,000â$265,000. The city\'s large lot sizes make detached ADU builds particularly practical.',
    popularProjects: 'Detached ADUs on larger corner lots and alley-accessed properties. Garage conversions in the city\'s mature established neighborhoods. Multi-generational living builds for NRH families with aging parents.',
    whyBuilding: 'North Richland Hills combines the affordability of northeast Tarrant County with access to major employment corridors along Loop 820 and the Northeast Mall area. ADUs here rent for $1,000â$1,500/month. The city\'s size and diverse neighborhoods create multiple sub-markets for rental demand.',
    faqs: [
      { q: 'Can I build a garage apartment in North Richland Hills, TX?', a: 'Yes. NRH allows ADU and accessory structure construction subject to city zoning. We verify your property before beginning design.' },
      { q: 'How much does a garage apartment cost in North Richland Hills?', a: 'Garage conversions run $40,000â$98,000. Detached ADUs range from $100,000â$265,000.' },
      { q: 'Does NRH have any owner-occupancy requirements for ADUs?', a: 'We verify this for your specific address. Many Tarrant County cities do not require owner-occupancy. Contact us for a free property assessment.' },
      { q: 'What ADU type works best on a large NRH lot?', a: 'Larger lots in NRH are excellent for detached ADUs â standalone structures that maximize privacy for both the homeowner and tenant.' },
    ],
  },
  'keller': {
    name: 'Keller',
    state: 'TX',
    slug: 'keller',
    heroSubtitle: 'A fast-growing north Tarrant County suburb with large lots and strong demand for premium ADU builds.',
    intro: 'Keller is one of the fastest-growing cities in Tarrant County â a planned, upscale suburb in the northern reaches of the metro known for excellent schools, large lots, and high household incomes. The ADU market in Keller skews toward premium builds: detached guest houses for aging parents, luxury in-law suites, and high-spec above-garage apartments that complement large primary residences. Homeowners here are building for family, not just for rental income.',
    zoning: 'Keller permits ADUs and accessory structures in residential zones subject to the city\'s zoning ordinance, including setback, height, and lot coverage rules. Building permits are required for all construction. Contact Keller Community Development at (817) 743-4000 for address-specific guidance.',
    costContext: 'Keller is a premium market reflecting higher incomes and finish expectations. Garage conversions: $50,000â$115,000. Above-garage apartments: $95,000â$210,000. Detached ADUs: $120,000â$320,000. The city\'s large lots and high property values mean ADUs add significant equity.',
    popularProjects: 'Premium detached guest houses for multi-generational family living. Luxury above-garage apartments that function as independent suites for adult children. High-spec in-law suites with full amenities and accessibility features.',
    whyBuilding: 'Keller\'s large lots, high incomes, and strong property values create ideal conditions for premium ADU investment. A well-designed detached guest house here can add $120,000â$250,000 to property value. Even rental-focused builds benefit from Keller\'s proximity to DFW Airport and major employers.',
    faqs: [
      { q: 'Can I build a guest house or ADU in Keller, TX?', a: 'Yes. Keller allows ADU and accessory structure construction subject to city zoning. We verify your specific address and lot before design.' },
      { q: 'How much does a guest house cost in Keller?', a: 'Keller projects are typically premium builds. Detached guest houses run $120,000â$320,000. Above-garage apartments are $95,000â$210,000.' },
      { q: 'What\'s the most common ADU project in Keller?', a: 'Premium detached guest houses for aging parents and adult children â designed for independent living with high-end finishes and accessibility features.' },
      { q: 'Do I need a permit for an ADU in Keller?', a: 'Yes. All construction requires permits in Keller. We handle the full permit process.' },
    ],
  },
  'colleyville': {
    name: 'Colleyville',
    state: 'TX',
    slug: 'colleyville',
    heroSubtitle: 'A premium northeast Tarrant County community â large estate lots and luxury ADU builds.',
    intro: 'Colleyville is one of the most affluent cities in Tarrant County â situated between Keller, Southlake, and Grapevine in the northeastern corner of the county. Estate-sized lots, luxury primary residences, and high-income homeowners define the market. ADU construction in Colleyville is almost exclusively at the premium end: architect-designed guest houses, luxury detached suites, and high-spec above-garage apartments that match the quality of the primary home. If you\'re building in Colleyville, you\'re building for legacy.',
    zoning: 'Colleyville permits ADUs and accessory structures in residential zones subject to the city\'s zoning requirements. Architectural compatibility is expected. All construction requires building permits. Contact Colleyville Planning & Zoning at (817) 788-7210 for address-specific guidance.',
    costContext: 'Colleyville is comparable to Southlake in pricing. Garage conversions: $60,000â$130,000. Above-garage apartments: $110,000â$230,000. Detached ADUs and guest houses: $150,000â$450,000+. Premium finishes are standard, and property values support the investment.',
    popularProjects: 'Luxury detached guest houses designed for aging parents or extended family. Premium above-garage suites that function as private residences. Custom ADU builds that match the architectural style of the primary home.',
    whyBuilding: 'Colleyville\'s estate-lot character and premium property values create ideal conditions for high-end ADU investment. A luxury guest house here can add $150,000â$350,000+ to property value. The city\'s proximity to DFW Airport and Southlake Town Square makes it attractive for executive-level long-term rentals.',
    faqs: [
      { q: 'Can I build a guest house or ADU in Colleyville, TX?', a: 'Yes. Colleyville allows ADU and accessory structure construction in residential zones. We verify your specific address and lot before beginning design.' },
      { q: 'How much does a luxury guest house cost in Colleyville?', a: 'Colleyville projects are premium builds. Detached guest houses typically run $150,000â$450,000+, reflecting the market\'s finish expectations and property values.' },
      { q: 'What style of ADU fits Colleyville homes?', a: 'Architecturally matched guest houses that complement the primary residence. We design for cohesion â the guest house should look like it belongs.' },
      { q: 'Do I need a permit for an ADU in Colleyville?', a: 'Yes. All construction requires permits in Colleyville. We manage the full permit and design process.' },
    ],
  },
  'southlake': {
    name: 'Southlake',
    state: 'TX',
    slug: 'southlake',
    heroSubtitle: 'A luxury market where estate guest houses and premium ADUs command exceptional value.',
    intro: 'Southlake is one of the most affluent communities in Texas â known for large lots, luxury homes, and exceptionally high property values. ADU construction in Southlake is typically positioned at the premium end of the market: estate guest houses, luxury multi-generational suites, and custom detached structures that complement high-end primary residences.',
    zoning: 'Southlake\'s larger lots generally accommodate detached ADU structures more easily than smaller suburban lots. The city\'s zoning code governs setbacks, height limits, and architectural compatibility. Contact Southlake Planning & Development at (817) 748-8069 for address-specific guidance.',
    costContext: 'Southlake projects command premium pricing reflecting the market\'s expectations and property values. Garage conversions: $60,000â$130,000. Above-garage builds: $110,000â$230,000. Detached guest houses and ADUs: $150,000â$400,000+. The high property values in Southlake mean ADUs add proportionally more equity.',
    popularProjects: 'In Southlake, the dominant project type is the luxury detached guest house â designed for aging parents, adult children, or extended family visits. Premium finishes, accessibility features, and thoughtful design that complements the primary home are expectations, not extras.',
    whyBuilding: 'With median home values among the highest in DFW, ADU construction in Southlake adds significant equity. A premium guest house or detached ADU can add $150,000â$300,000+ to property value. The market\'s high property values and large lots make Southlake ideal for ambitious ADU projects.',
    faqs: [
      { q: 'Can I build a guest house or ADU in Southlake, TX?', a: 'Yes. Southlake\'s larger lots typically accommodate detached ADU construction. Zoning rules apply â we verify your specific address before design.' },
      { q: 'How much does a guest house cost in Southlake?', a: 'Southlake projects are premium builds. Expect $150,000â$400,000+ for a detached guest house with high-end finishes. The investment reflects the market and adds significant property value.' },
      { q: 'Do I need a permit for an ADU in Southlake?', a: 'Yes. All ADU and accessory structure construction requires permits in Southlake. We manage the permit process.' },
      { q: 'Can I build an ADA-accessible guest house in Southlake?', a: 'Absolutely. We design accessible guest houses frequently â zero-step entry, wider doorways, roll-in showers, and other features for aging-in-place.' },
      { q: 'What kind of ADU is most common in Southlake?', a: 'Detached guest houses designed for family use â especially multi-generational living for aging parents â are the dominant project type in Southlake.' },
      { q: 'How long does it take to build a guest house in Southlake?', a: 'Premium detached builds in Southlake typically run 6â10 months from first meeting to final walkthrough, reflecting the design complexity and finish level.' },
    ],
  },
};

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/20 py-4">
      <button className="w-full text-left flex justify-between items-start gap-4 font-semibold text-white text-base" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        {open ? <ChevronUp className="w-5 h-5 flex-shrink-0 text-accent" /> : <ChevronDown className="w-5 h-5 flex-shrink-0 text-accent" />}
      </button>
      {open && <p className="mt-3 text-white/80 leading-relaxed">{a}</p>}
    </div>
  );
}

export default function CityPage({ citySlug }: { citySlug?: string } = {}) {
  const router = useRouter();
  const slug = citySlug || (router.query.city as string) || '';
  const city = CITY_DATA[slug];

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
      <SEOHead
        title={`Garage Apartment Builders in ${city.name}, TX â ADU Construction`}
        description={`Build a garage apartment or ADU in ${city.name}, TX. We handle design, permits, and construction. Local experts who know ${city.name}'s zoning rules. Free consultation.`}
        canonical={`/areas/${city.slug}`}
        schemas={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dfwgarageapartments.com/" },
              { "@type": "ListItem", "position": 2, "name": "Areas We Serve", "item": "https://dfwgarageapartments.com/areas" },
              { "@type": "ListItem", "position": 3, "name": city.name, "item": `https://dfwgarageapartments.com/areas/${city.slug}` }
            ]
          }
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-card px-6 py-3 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto">
          <BreadcrumbNav items={[{ label: 'Areas We Serve', href: '/areas' }, { label: city.name }]} />
        </div>
      </div>

      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={notFoundImg} alt={`Garage apartment in ${city.name}, TX`} className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Areas We Serve</p>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4" style={{ fontFamily: 'CervoNeueBold, serif' }}>
            Garage Apartment Builders <br />in {city.name}, Texas
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
              { label: 'Garage Conversions', href: '/services/garage-conversions', desc: '$40Kâ$100K Â· 3â5 months' },
              { label: 'Above-Garage Apartments', href: '/services/above-garage-apartments', desc: '$80Kâ$200K Â· 4â7 months' },
              { label: 'Detached ADUs', href: '/services/detached-adus', desc: '$100Kâ$300K+ Â· 5â9 months' },
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
          <p className="text-white/90 mb-8 text-lg">Tell us about your property â we'll give you a realistic picture of what's possible.</p>
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
