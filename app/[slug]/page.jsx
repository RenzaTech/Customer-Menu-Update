import PortalClient from '../../components/PortalClient';

export async function generateMetadata({ params }) {
  const slug = params?.slug || 'anbude-cafe';
  return {
    title: `Dining Hub — ${slug}`,
    description: 'Welcome to your digital table experience.',
  };
}

export default function DynamicRestaurantPage({ params, searchParams }) {
  const initialView = searchParams?.view || 'hub';
  return <PortalClient params={params} initialView={initialView} />;
}
