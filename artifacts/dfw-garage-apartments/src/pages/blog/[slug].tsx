import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbNav } from '@/components/BreadcrumbNav';
import { CTABanner } from '@/components/CTABanner';
import { Button } from '@/components/ui/button';
import { BLOG_POSTS, getBlogPost, type BlogPost } from '@/data/blog-posts';

interface Props {
  post: BlogPost;
  related: BlogPost[];
}

const CATEGORY_LABELS: Record<string, string> = {
  zoning: 'Zoning',
  costs: 'Costs',
  projects: 'Projects',
  tips: 'Tips',
  legislation: 'Legislation',
};

function renderMarkdown(text: string): string {
  return text
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl md:text-3xl font-serif font-bold text-primary mt-10 mb-4">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-serif font-bold text-foreground mt-8 mb-3">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-foreground">$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-accent hover:underline font-medium">$1</a>')
    .replace(/^- (.+)$/gm, '<li class="flex gap-2 text-muted-foreground font-sans"><span class="text-accent font-bold shrink-0 mt-1">—</span><span>$1</span></li>')
    .replace(/(<li[\s\S]+?<\/li>\n?)+/g, (m) => `<ul class="space-y-2 my-4">${m}</ul>`)
    .replace(/^(?!<[hul])(.+)$/gm, '<p class="text-muted-foreground font-sans leading-relaxed text-base mb-4">$1</p>')
    .replace(/<p[^>]*><\/p>/g, '');
}

export default function BlogPostPage({ post, related }: Props) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: 'DFW Garage Apartments', url: 'https://dfwgarageapartments.com' },
    datePublished: post.date,
    dateModified: post.date,
    image: `https://dfwgarageapartments.com${post.featuredImage}`,
    url: `https://dfwgarageapartments.com/blog/${post.slug}`,
  };

  return (
    <div className="bg-background">
      <SEOHead
        title={post.title}
        description={post.excerpt}
        canonical={`/blog/${post.slug}`}
        ogImage={`https://dfwgarageapartments.com${post.featuredImage}`}
        schemas={articleSchema}
      />

      {/* Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/75" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 md:px-6 pb-8">
            <BreadcrumbNav
              items={[{ label: 'Blog', href: '/blog' }, { label: post.title }]}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">

          {/* Back link */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors font-sans mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Category + Date + Author */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest px-3 py-1 flex items-center gap-1.5">
              <Tag className="w-3 h-3" />
              {CATEGORY_LABELS[post.category]}
            </span>
            <span className="text-muted-foreground text-sm font-sans flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="text-muted-foreground text-sm font-sans flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              {post.author}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6 leading-[1.1]">
            {post.title}
          </h1>

          {/* Excerpt / lead */}
          <p className="text-lg text-muted-foreground font-sans leading-relaxed mb-10 border-l-4 border-accent pl-5">
            {post.excerpt}
          </p>

          {/* Body */}
          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.body) }}
          />

          {/* CTA Banner */}
          <div className="mt-14 bg-primary p-8 md:p-10 text-white text-center">
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-white mb-3">
              Ready to Start Your Garage Apartment Project?
            </h2>
            <p className="text-white/75 font-sans mb-6">
              Schedule a free consultation and get answers specific to your property — no obligation.
            </p>
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-white rounded-none px-8 py-4 text-xs uppercase tracking-widest font-bold">
                Schedule a Free Consultation
              </Button>
            </Link>
          </div>

          {/* Related Posts */}
          {related.length > 0 && (
            <div className="mt-14">
              <h2 className="font-serif font-bold text-2xl text-primary mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {related.map(r => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="group block">
                    <div className="relative overflow-hidden aspect-video mb-3">
                      <img
                        src={r.featuredImage}
                        alt={r.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-xs text-accent font-bold uppercase tracking-widest mb-1 block">
                      {CATEGORY_LABELS[r.category]}
                    </span>
                    <h3 className="font-serif font-bold text-foreground text-base leading-snug group-hover:text-accent transition-colors mb-1">
                      {r.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-sans line-clamp-2">{r.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <CTABanner
        variant="navy"
        title="DFW Garage Apartment Experts"
        subtitle="Design, permits, and construction — all under one roof. Serving Fort Worth, Dallas, and the DFW metro."
        buttonText="Schedule a Free Consultation"
        buttonLink="/contact"
      />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: BLOG_POSTS.map(p => ({ params: { slug: p.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getBlogPost(slug);
  if (!post) return { notFound: true };

  const related = BLOG_POSTS
    .filter(p => p.slug !== slug && p.category === post.category)
    .slice(0, 2)
    .concat(BLOG_POSTS.filter(p => p.slug !== slug && p.category !== post.category).slice(0, 2 - BLOG_POSTS.filter(p => p.slug !== slug && p.category === post.category).length));

  return { props: { post, related: related.slice(0, 2) } };
};
