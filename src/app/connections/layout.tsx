import type { Metadata } from 'next';
import { clubInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Student Connections',
  description: `Find co-founders and collaborators for your startup projects at ${clubInfo.university}. Post your project or join an existing team.`,
};

export default function ConnectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
