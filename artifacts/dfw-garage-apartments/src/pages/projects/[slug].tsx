import { GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, MapPin, Square, Clock, Calendar, CheckCircle2, X } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';
import { CTABanner } from '@/components/CTABanner';
import { Button } from '@/components/ui/button';
import { PROJECTS, getProject, type Project } from '@/data/projects';

interface Props {
  project: Project;
  related: Project[];
}

export default function ProjectPage({ project, related }: Props) {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dfwgarageapartments.com/' },
      { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://dfwgarageapartments.com/projects' },
      { '@type': 'ListItem', position: 3, name: project.title, item: `https://dfwgarageapartments.com/projects/${project.slug}` },
    ],
  };

  const reviewSchema = project.testimonial ? {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: 'DFW Garage Apartments by 6th Ave Homes',
      url: 'https://dfwgarageapartments.com',
    },
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    name: `${project.projectTypeLabel} in ${project.city}, TX`,
    reviewBody: project.testimonial.quote,
    author: { '@type': 'Person', name: project.testimonial.author },
    datePublished: `${project.year}-01-01`,
  } : null;

  const schemas = reviewSchema
    ? [breadcrumbSchema, reviewSchema]
    : breadcrumbSchema;

  return (
    <div className="bg-background">
      <SEOHead
        title={`${project.projectTypeLabel} in ${project.city}, TX — ${project.title}`}
        description={project.excerpt}
        canonical={`/projects/${project.slug}`}
        ogImage={`https://dfwgarageapartments.com${project.heroImage}`}
        schemas={schemas}
      />

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setLightboxImg(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightboxImg}
            alt="Project photo"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      {/* Hero */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={project.heroImage}
          alt={`${project.projectTypeLabel} in ${project.city}, TX by DFW Garage Apartments`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 md:px-6 pb-8">
            <BreadcrumbNav
              items={[{ label: 'Projects', href: '/projects' }, { label: project.title }]}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">

          {/* Back link */}
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors font-sans mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            All Projects
          </Link>

          {/* Header */}
          <div className="mb-8">
            <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-2">{project.projectTypeLabel}</span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
              {project.projectTypeLabel} in {project.city}, TX
            </h1>

            {/* Project info bar */}
            <div className="flex flex-wrap gap-6 py-5 border-y border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
                <MapPin className="w-4 h-4 text-accent" />
                <span>{project.neighborhood}, {project.city}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
                <Square className="w-4 h-4 text-accent" />
                <span>{project.size.toLocaleString()} sq ft</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
                <Clock className="w-4 h-4 text-accent" />
                <span>{project.timeline}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
                <Calendar className="w-4 h-4 text-accent" />
                <span>Completed {project.year}</span>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {project.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightboxImg(img)}
                className={`relative overflow-hidden group cursor-zoom-in ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
              >
                <img
                  src={img}
                  alt={`${project.city} ${project.projectTypeLabel} by DFW Garage Apartments — photo ${i + 1}`}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${i === 0 ? 'h-64 md:h-80' : 'h-32 md:h-40'}`}
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
              </button>
            ))}
          </div>

          {/* Story */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">The Project</h2>
              {project.story.split('\n\n').map((para, i) => (
                <p key={i} className="text-muted-foreground font-sans leading-relaxed mb-4 text-base">
                  {para}
                </p>
              ))}
            </div>

            <div className="space-y-6">
              {/* Key Features */}
              <div className="bg-card p-6 border-l-4 border-accent">
                <h3 className="font-serif font-bold text-foreground text-lg mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {project.keyFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm font-sans text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-primary p-6 text-white text-center">
                <h3 className="font-serif font-bold text-lg mb-2">Want something similar?</h3>
                <p className="text-white/70 text-sm font-sans mb-4">Let's talk about your property and what's possible.</p>
                <Link href="/contact">
                  <Button className="bg-accent hover:bg-accent/90 text-white rounded-none px-6 py-3 text-xs uppercase tracking-widest font-bold w-full">
                    Schedule a Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Scope of Work */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">Scope of Work</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.scopeOfWork.map((item, i) => (
                <div key={i} className="flex items-start gap-3 py-3 border-b border-border last:border-0">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm font-sans text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {project.testimonial && (
            <div className="mb-12 bg-card border-l-4 border-accent p-6 md:p-8">
              <svg className="w-8 h-8 text-accent/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-base md:text-lg font-sans text-foreground leading-relaxed mb-4 italic">
                &ldquo;{project.testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-sans font-semibold text-foreground">{project.testimonial.author}</span>
                <span className="text-sm font-sans text-muted-foreground">— {project.testimonial.location}</span>
              </div>
            </div>
          )}

          {/* Related Projects */}
          {related.length > 0 && (
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">More Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {related.map(r => (
                  <Link key={r.slug} href={`/projects/${r.slug}`} className="group block">
                    <div className="relative overflow-hidden aspect-video mb-3">
                      <img
                        src={r.heroImage}
                        alt={`${r.city} ${r.projectTypeLabel} by DFW Garage Apartments`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <span className="text-xs text-accent font-bold uppercase tracking-widest block">{r.projectTypeLabel}</span>
                        <span className="text-white font-serif font-bold text-sm">{r.neighborhood}, {r.city}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <CTABanner
        variant="navy"
        title="Start Your DFW Garage Apartment Project"
        subtitle="One team handles design, permits, and construction — from first conversation to final walkthrough."
        buttonText="Schedule a Free Consultation"
        buttonLink="/contact"
      />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: PROJECTS.map(p => ({ params: { slug: p.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const project = getProject(slug);
  if (!project) return { notFound: true };

  const related = PROJECTS
    .filter(p => p.slug !== slug)
    .slice(0, 2);

  return { props: { project, related } };
};
