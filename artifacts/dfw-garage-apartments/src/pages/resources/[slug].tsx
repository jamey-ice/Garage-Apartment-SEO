import type { GetStaticPaths, GetStaticProps } from 'next';
import ResourcePage from '@/views/resources/ResourcePage';

const SLUGS = ['cost-guide', 'zoning-guide', 'texas-adu-laws', 'financing-options', 'garage-apartment-vs-adu', 'rental-income'];

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: SLUGS.map((slug) => ({ params: { slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { resourceSlug: params!.slug as string },
});

export default function ResourceRoute({ resourceSlug }: { resourceSlug: string }) {
  return <ResourcePage resourceSlug={resourceSlug} />;
}
