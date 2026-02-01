import Link from 'next/link';
import { Section, Card, Tag, PhotoGrid, Button } from '@/components';
import { clubInfo, events } from '@/lib/data';

export default function HomePage() {
  // Get upcoming and recent past events for the homepage
  const upcomingEvents = events.filter((e) => e.status === 'upcoming').slice(0, 2);
  const recentEvents = events.filter((e) => e.status === 'past').slice(0, 2);

  return (
    <div className="container-narrow">
      {/* Hero - kept simple and human */}
      <section className="py-16 md:py-20">
        <h1 className="font-display text-3xl md:text-4xl text-neutral-900 mb-4">
          {clubInfo.name}
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 mb-6 max-w-content">
          We're a community of students at {clubInfo.university} interested in building things.
          Whether you have a startup idea or just want to learn, you're welcome here.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="/about" variant="primary">
            Learn more about us
          </Button>
          <Button href="/events" variant="secondary">
            See upcoming events
          </Button>
        </div>
      </section>

      <div className="divider" />

      {/* Quick Info */}
      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h3 className="font-medium text-neutral-900 mb-1">Weekly meetings</h3>
            <p className="text-sm text-neutral-600 mb-2">{clubInfo.meetingTime}</p>
            <p className="text-sm text-neutral-500">{clubInfo.meetingLocation}</p>
          </Card>
          <Card>
            <h3 className="font-medium text-neutral-900 mb-1">Open to everyone</h3>
            <p className="text-sm text-neutral-600">
              All majors, all experience levels. No application required—just show up.
            </p>
          </Card>
          <Card>
            <h3 className="font-medium text-neutral-900 mb-1">Get in touch</h3>
            <p className="text-sm text-neutral-600 mb-2">
              Questions? Ideas? Want to collaborate?
            </p>
            <a href={`mailto:${clubInfo.email}`} className="text-sm text-link">
              {clubInfo.email}
            </a>
          </Card>
        </div>
      </Section>

      <div className="divider" />

      {/* What We Do */}
      <Section title="What we do">
        <div className="space-y-4 text-neutral-600">
          <p>
            We host events that help students learn the fundamentals of starting something new:
            workshops on idea validation, talks from local founders, pitch competitions with real
            prizes, and hackathons where you can go from idea to prototype in a weekend.
          </p>
          <p>
            We also try to connect people. Use our{' '}
            <Link href="/connections" className="text-link">
              Student Connections board
            </Link>{' '}
            to find co-founders and collaborators, or just come to our weekly meetings to meet
            others who are building things.
          </p>
        </div>
      </Section>

      <div className="divider" />

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <>
          <Section
            title="Coming up"
            description="Events happening soon. All events are free for students."
          >
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <Card key={event.id} hover>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div>
                      <h3 className="font-medium text-neutral-900 mb-1">
                        {event.title}
                      </h3>
                      <p className="text-sm text-neutral-500 mb-2">
                        {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric',
                        })}{' '}
                        · {event.time} · {event.location}
                      </p>
                      <p className="text-sm text-neutral-600">{event.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {event.tags.map((tag) => (
                        <Tag key={tag} label={tag} />
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <Button href="/events" variant="ghost">
                View all events →
              </Button>
            </div>
          </Section>

          <div className="divider" />
        </>
      )}

      {/* Recent Happenings */}
      {recentEvents.length > 0 && (
        <>
          <Section title="Recent happenings">
            <div className="grid md:grid-cols-2 gap-6">
              {recentEvents.map((event) => (
                <div key={event.id}>
                  <PhotoGrid
                    photos={event.photos}
                    alt={event.title}
                  />
                  <h3 className="font-medium text-neutral-900 mt-3 mb-1">
                    {event.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mb-2">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                  <p className="text-sm text-neutral-600">{event.description}</p>
                </div>
              ))}
            </div>
          </Section>

          <div className="divider" />
        </>
      )}

      {/* How to Get Involved */}
      <Section title="How to get involved">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-neutral-900 mb-2">Come to a meeting</h3>
            <p className="text-sm text-neutral-600 mb-3">
              The easiest way to get involved. We meet every {clubInfo.meetingTime.toLowerCase()} in{' '}
              {clubInfo.meetingLocation}. No sign-up needed.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-neutral-900 mb-2">Join our email list</h3>
            <p className="text-sm text-neutral-600 mb-3">
              We send ~2 emails per month about upcoming events and opportunities.
              Low volume, no spam.
            </p>
            {/* TODO: Add email signup form or link to signup */}
            <Button
              href={`mailto:${clubInfo.email}?subject=Add me to the email list`}
              variant="secondary"
              size="sm"
            >
              Sign up for updates
            </Button>
          </div>
          <div>
            <h3 className="font-medium text-neutral-900 mb-2">Find a collaborator</h3>
            <p className="text-sm text-neutral-600 mb-3">
              Have a project? Need teammates? Check the Connections board to find people
              with complementary skills.
            </p>
            <Button href="/connections" variant="secondary" size="sm">
              Browse connections
            </Button>
          </div>
          <div>
            <h3 className="font-medium text-neutral-900 mb-2">Follow along</h3>
            <p className="text-sm text-neutral-600 mb-3">
              Stay updated on Instagram and LinkedIn for event photos, announcements,
              and startup content.
            </p>
            <div className="flex gap-2">
              <Button href={clubInfo.instagramUrl} variant="ghost" size="sm" external>
                Instagram
              </Button>
              <Button href={clubInfo.linkedinUrl} variant="ghost" size="sm" external>
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
