import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader, Section, Card, Button } from '@/components';
import { clubInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'About',
  description: `Learn about ${clubInfo.name} at ${clubInfo.university}. Our mission, history, and what we do for student entrepreneurs.`,
};

export default function AboutPage() {
  return (
    <div className="container-narrow">
      <div className="py-10 md:py-14">
        <PageHeader
          title="About us"
          description="A student-run community for anyone interested in startups, side projects, and building things."
        />

        {/* Mission / Who We Are */}
        <Section>
          <div className="space-y-4 text-neutral-600 max-w-content">
            <p>
              {clubInfo.name} is a registered student organization at {clubInfo.university}.
              We exist to help students explore entrepreneurship—whether that means starting
              a company, joining an early-stage team, or just learning how startups work.
            </p>
            <p>
              We're not a pre-professional club with competitive applications or résumé-building
              requirements. We're a community. Some of our members are actively building startups.
              Others are just curious. Both are welcome.
            </p>
            <p>
              Our goal is to make entrepreneurship accessible: to demystify it, to provide
              practical skills, and to connect students with each other and with the broader
              startup ecosystem.
            </p>
          </div>
        </Section>

        <div className="divider" />

        {/* What We Offer */}
        <Section title="What we offer">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-medium text-neutral-900 mb-2">Weekly meetings</h3>
              <p className="text-sm text-neutral-600">
                Every {clubInfo.meetingTime.split(',')[0].toLowerCase()}, we gather to share
                updates, hear short talks, and work on projects together. It's informal—come
                when you can.
              </p>
            </Card>
            <Card>
              <h3 className="font-medium text-neutral-900 mb-2">Workshops</h3>
              <p className="text-sm text-neutral-600">
                Hands-on sessions covering practical skills: idea validation, MVP building,
                customer interviews, pitching, and more. Led by E-Board members and guest
                instructors.
              </p>
            </Card>
            <Card>
              <h3 className="font-medium text-neutral-900 mb-2">Speaker events</h3>
              <p className="text-sm text-neutral-600">
                We bring in founders, investors, and operators to share real stories—not just
                success narratives, but honest accounts of what building a company is actually
                like.
              </p>
            </Card>
            <Card>
              <h3 className="font-medium text-neutral-900 mb-2">Pitch competitions</h3>
              <p className="text-sm text-neutral-600">
                Each semester, we run a pitch competition with cash prizes. It's a chance to
                get feedback on your idea from real judges and practice communicating your
                vision.
              </p>
            </Card>
            <Card>
              <h3 className="font-medium text-neutral-900 mb-2">Hackathons</h3>
              <p className="text-sm text-neutral-600">
                Startup Weekend–style events where you form teams, validate an idea, and build
                a prototype in 48-54 hours. Great for meeting people and learning by doing.
              </p>
            </Card>
            <Card>
              <h3 className="font-medium text-neutral-900 mb-2">Connections board</h3>
              <p className="text-sm text-neutral-600">
                An online board where students can post projects seeking collaborators or browse
                opportunities to join someone else's team.{' '}
                <Link href="/connections" className="text-link">
                  Check it out →
                </Link>
              </p>
            </Card>
          </div>
        </Section>

        <div className="divider" />

        {/* History */}
        <Section title="Our story">
          <div className="space-y-4 text-neutral-600 max-w-content">
            <p>
              {clubInfo.name} was founded in 2018 by a small group of students who wanted a
              space to talk about startup ideas without judgment. The first meetings were just
              5-6 people in a dorm common room.
            </p>
            <p>
              Since then, we've grown to over 100 active members across all colleges and majors.
              We've hosted dozens of events, awarded thousands in pitch competition prizes, and
              helped connect students who've gone on to start real companies together.
            </p>
            <p>
              We're proud of how far we've come, but we try to maintain that original spirit:
              informal, welcoming, and focused on learning together.
            </p>
          </div>
        </Section>

        <div className="divider" />

        {/* Values */}
        <Section title="What we believe">
          <div className="space-y-6 max-w-content">
            <div>
              <h3 className="font-medium text-neutral-900 mb-1">Learning by doing</h3>
              <p className="text-sm text-neutral-600">
                The best way to learn entrepreneurship is to try something. We encourage members
                to start projects, even small ones, and learn from the experience.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-neutral-900 mb-1">Failure is data</h3>
              <p className="text-sm text-neutral-600">
                Most ideas don't work out. That's normal. We try to create a space where it's
                safe to share failures and learn from them.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-neutral-900 mb-1">Diverse teams win</h3>
              <p className="text-sm text-neutral-600">
                Good startups need varied perspectives. We actively welcome members from all
                majors, backgrounds, and experience levels.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-neutral-900 mb-1">Community over competition</h3>
              <p className="text-sm text-neutral-600">
                We're not competing with each other. When one member succeeds, it's good for
                everyone. We share resources, make introductions, and help each other out.
              </p>
            </div>
          </div>
        </Section>

        <div className="divider" />

        {/* Get Involved CTA */}
        <Section title="Want to get involved?">
          <div className="space-y-4 max-w-content">
            <p className="text-neutral-600">
              The easiest way is to come to a meeting. We meet every {clubInfo.meetingTime} in{' '}
              {clubInfo.meetingLocation}. No need to sign up—just show up.
            </p>
            <p className="text-neutral-600">
              You can also follow us on social media or join our email list to stay updated
              on events.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="/events" variant="primary">
                See upcoming events
              </Button>
              <Button href="/team" variant="secondary">
                Meet the E-Board
              </Button>
              <Button href="/faq" variant="ghost">
                Read the FAQ
              </Button>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
