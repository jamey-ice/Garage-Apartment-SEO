import type { GetStaticPaths, GetStaticProps } from 'next';
import CityPage from '@/views/areas/CityPage';

const CITIES = [
  'fort-worth',
  'dallas',
  'arlington',
  'mansfield',
  'aledo',
  'denton',
  'burleson',
  'southlake',
];

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: CITIES.map((city) => ({ params: { city } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { citySlug: params!.city as string },
});

export default function CityRoute({ citySlug }: { citySlug: string }) {
  return <CityPage citySlug={citySlug} />;
}
