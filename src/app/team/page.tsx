import type { Metadata } from 'next';
import { PageHeader, Section, Card } from '@/components';
import { clubInfo, teamMembers } from '@/lib/data';

export const metadata: Metadata = {
  title: 'E-Board',
  description: `Meet the Executive Board of ${clubInfo.name}. The students who keep things running.`,
};

// Placeholder avatar component
function AvatarPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  return (
    <div className="w-24 h-24 rounded-full bg-neutral-100 flex items-center justify-center">
      <span className="text-2xl font-medium text-neutral-400">{initials}</span>
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="container-narrow">
      <div className="py-10 md:py-14">
        <PageHeader
          title="E-Board"
          description="The students who organize events, manage operations, and keep the club running. Have questions? Reach out to any of us."
        />

        {/* Team Grid */}
        <Section>
          <div className="grid md:grid-cols-2 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.id} className="flex gap-4">
                {/* Photo placeholder */}
                <div className="flex-shrink-0">
                  {/* TODO: Replace with actual photos using next/image */}
                  <AvatarPlaceholder name={member.name} />
                  {/* Uncomment when photos are available:
                  <div className="w-24 h-24 rounded-full bg-neutral-100 overflow-hidden relative">
                    <Image
                      src={`/photos/${member.photo}`}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  */}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-neutral-900">{member.name}</h3>
                  <p className="text-sm text-accent-600 mb-1">{member.role}</p>
                  <p className="text-sm text-neutral-500 mb-2">
                    {member.major} · {member.year}
                  </p>
                  <p className="text-sm text-neutral-600 mb-3">{member.bio}</p>

                  {/* LinkedIn link */}
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-accent-600 transition-colors"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <div className="divider" />

        {/* Join Leadership */}
        <Section title="Want to join the E-Board?">
          <div className="max-w-content space-y-4 text-neutral-600">
            <p>
              E-Board elections happen each spring for the following academic year. To be
              eligible, you should be an active member who has attended meetings and events
              consistently.
            </p>
            <p>
              We also have committee roles throughout the year for members who want to take
              on more responsibility without a full E-Board commitment—things like helping
              plan specific events, managing social media, or running workshops.
            </p>
            <p>
              If you're interested, come to meetings and talk to any current E-Board member.
              We're always looking for people who want to help.
            </p>
          </div>
        </Section>

        <div className="divider" />

        {/* Contact */}
        <Section title="Get in touch">
          <p className="text-neutral-600 mb-4">
            Have a question, suggestion, or want to collaborate? Reach out to the whole team
            at{' '}
            <a href={`mailto:${clubInfo.email}`} className="text-link">
              {clubInfo.email}
            </a>
            , or message any E-Board member individually on LinkedIn.
          </p>
        </Section>
      </div>
    </div>
  );
}
