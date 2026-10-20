import PortalClient from '../components/PortalClient';

const DEFAULT_SLUG = process.env.NEXT_PUBLIC_DEFAULT_SLUG || 'anbude-cafe';

export const metadata = {
  title: 'Guest Dining Portal — Renza',
  description: 'Welcome! View our menu, share feedback, and connect with us.',
};

export default function Home() {
  return <PortalClient params={{ slug: DEFAULT_SLUG }} />;
}
