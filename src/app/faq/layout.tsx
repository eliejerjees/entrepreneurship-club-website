import type { Metadata } from 'next';
import { clubInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'FAQ',
  description: `Frequently asked questions about ${clubInfo.name}. How to join, participate, and get involved.`,
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
