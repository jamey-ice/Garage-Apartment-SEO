import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blog-posts';

const CATEGORY_LABELS: Record<string, string> = {
  zoning: 'Zoning',
  costs: 'Costs',
  projects: 'Projects',
  tips: 'Tips',
  legislation: 'Legislation',
};

const CATEGORY_COLORS: Record<string, string> = {
  zoning: 'bg-blue-50 text-blue-700',
  costs: 'bg-green-50 text-green-700',
  projects: 'bg-purple-50 text-purple-700',
  tips: 'bg-amber-50 text-amber-700',
  legislation: 'bg-red-50 text-red-700',
};

export default function Blog() {
  const [featured, ...rest] = BLOG_POSTS;

  return (
    <div className="bg-background min-h-screen">
      <SEOHead
        title="Garage Apartment Blog — DFW ADU News, Tips & Guides"
        description="Expert articles on garage apartments and ADUs in Dallas–Fort Worth. Costs, zoning, permits, financing, and project stories from the DFW Garage Apartments team."
        canonical="/blog"
        schemas={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://dfwgarageapartments.com/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://dfwgarageapartments.com/blog" }
          ]
        }}
      />

      <div className="bg-primary text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <BreadcrumbNav items={[{ label: 'Blog' }]} />
          <span className="uppercase tracking-widest text-xs font-bold text-accent block mb-3">Insights & Guides</span>
          <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-4">
            The DFW Garage Apartment Blog
          </h1>
          <p className="text-white/80 text-lg max-w-xl font-sans">
            Practical articles on costs, zoning, permits, and financing — from the team that builds garage apartments across Dallas–Fort Worth.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">

        {/* Featured Post */}
        <div className="mb-16">
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-xl overflow-hidden">
              <div className="relative overflow-hidden h-64 lg:h-auto min-h-64">
                <img
                  src={featured.featuredImage}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="bg-white p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 ${CATEGORY_COLORS[featured.category]}`}>
                    {CATEGORY_LABELS[featured.category]}
                  </span>
                  <span className="text-xs text-muted-foreground font-sans">
                    {new Date(featured.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <h2 className="font-serif font-bold text-2xl md:text-3xl text-primary mb-4 leading-snug group-hover:text-accent transition-colors">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground font-sans text-base leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <span className="text-accent font-bold text-xs uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {rest.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <div className="relative overflow-hidden aspect-video mb-4">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className={`text-xs font-bold uppercase tracking-widest px-2.5 py-1 ${CATEGORY_COLORS[post.category]}`}>
                    {CATEGORY_LABELS[post.category]}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground font-sans">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {post.author}
                </span>
              </div>

              <h3 className="font-serif font-bold text-lg text-foreground mb-2 leading-snug group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>

        {/* Lead Magnet CTA */}
        <div className="bg-primary rounded-none p-8 md:p-12 text-white text-center max-w-3xl mx-auto">
          <span className="text-accent text-xs uppercase tracking-widest font-bold block mb-3">Free Resource</span>
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-white mb-4">
            Download Our Free DFW Garage Apartment Guide
          </h2>
          <p className="text-white/70 font-sans mb-6 max-w-xl mx-auto">
            Zoning basics, real cost ranges, timeline expectations, and the questions to ask before you hire anyone. Everything in one place.
          </p>
          <Link href="/#lead-magnet">
            <Button className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wide rounded-none">
              Get the Free Guide <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
