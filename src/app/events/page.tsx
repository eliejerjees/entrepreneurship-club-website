import type { Metadata } from 'next';
import { PageHeader, Section, Card, Tag, PhotoGrid } from '@/components';
import { clubInfo, events } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Events',
  description: `Upcoming and past events from ${clubInfo.name}. Workshops, speaker talks, hackathons, and pitch competitions.`,
};

export default function EventsPage() {
  const upcomingEvents = events.filter((e) => e.status === 'upcoming');
  const currentEvents = events.filter((e) => e.status === 'current');
  const pastEvents = events.filter((e) => e.status === 'past');

  return (
    <div className="container-narrow">
      <div className="py-10 md:py-14">
        <PageHeader
          title="Events"
          description="All our events are free and open to students. No sign-up required unless noted."
        />

        {/* Current / Ongoing */}
        {currentEvents.length > 0 && (
          <>
            <Section title="Happening now">
              <div className="space-y-4">
                {currentEvents.map((event) => (
                  <Card key={event.id} className="border-accent-200 bg-accent-50/30">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-accent-100 text-accent-700">
                        Ongoing
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {event.tags.map((tag) => (
                          <Tag key={tag} label={tag} />
                        ))}
                      </div>
                    </div>
                    <h3 className="font-medium text-neutral-900 mb-1">
                      {event.title}
                    </h3>
                    <p className="text-sm text-neutral-500 mb-3">
                      {event.time} · {event.location}
                    </p>
                    <p className="text-sm text-neutral-600">{event.description}</p>
                  </Card>
                ))}
              </div>
            </Section>

            <div className="divider" />
          </>
        )}

        {/* Upcoming Events */}
        <Section
          title="Upcoming"
          description={upcomingEvents.length === 0 ? undefined : "Mark your calendar. All events are free for students."}
        >
          {upcomingEvents.length === 0 ? (
            <p className="text-neutral-500">
              No upcoming events scheduled yet. Check back soon, or follow us on{' '}
              <a href={clubInfo.instagramUrl} className="text-link" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>{' '}
              for announcements.
            </p>
          ) : (
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} hover>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {event.tags.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                  <h3 className="font-medium text-lg text-neutral-900 mb-1">
                    {event.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mb-3">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}{' '}
                    · {event.time}
                  </p>
                  <p className="text-sm text-neutral-500 mb-3">
                    📍 {event.location}
                  </p>
                  <p className="text-neutral-600">{event.description}</p>
                </Card>
              ))}
            </div>
          )}
        </Section>

        <div className="divider" />

        {/* Past Events */}
        <Section
          title="Past events"
          description="A look back at what we've done. Photos coming soon for recent events."
        >
          {pastEvents.length === 0 ? (
            <p className="text-neutral-500">No past events to show yet.</p>
          ) : (
            <div className="space-y-10">
              {pastEvents.map((event) => (
                <div key={event.id} className="grid md:grid-cols-2 gap-6">
                  {/* Photos */}
                  <div>
                    <PhotoGrid photos={event.photos} alt={event.title} />
                  </div>

                  {/* Event Details */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {event.tags.map((tag) => (
                        <Tag key={tag} label={tag} />
                      ))}
                    </div>
                    <h3 className="font-medium text-lg text-neutral-900 mb-1">
                      {event.title}
                    </h3>
                    <p className="text-sm text-neutral-500 mb-3">
                      {new Date(event.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}{' '}
                      · {event.location}
                    </p>
                    <p className="text-neutral-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Section>

        <div className="divider" />

        {/* Regular Meetings Note */}
        <Section title="Weekly meetings">
          <Card>
            <h3 className="font-medium text-neutral-900 mb-2">Every {clubInfo.meetingTime}</h3>
            <p className="text-sm text-neutral-600 mb-3">
              In addition to special events, we have a regular weekly meeting. It's casual—we
              share updates, hear short talks, and hang out. Come whenever you can.
            </p>
            <p className="text-sm text-neutral-500">
              📍 {clubInfo.meetingLocation}
            </p>
          </Card>
        </Section>
      </div>
    </div>
  );
}
