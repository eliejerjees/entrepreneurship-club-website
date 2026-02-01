import type { Metadata } from 'next';
import { PageHeader, Section, Card } from '@/components';
import { clubInfo, resourcesSheetUrl, resourcesSheetEmbedUrl } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Resources',
  description: `Startup resources compiled by ${clubInfo.name}. Tools, templates, funding opportunities, and more.`,
};

export default function ResourcesPage() {
  return (
    <div className="container-narrow">
      <div className="py-10 md:py-14">
        <PageHeader
          title="Resources"
          description="A collection of resources we've found useful. Tools, templates, reading lists, funding opportunities, and more."
        />

        {/* Description */}
        <Section>
          <div className="space-y-4 text-neutral-600 max-w-content">
            <p>
              Below is a spreadsheet we maintain with resources for student entrepreneurs.
              It includes things like:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Free tools and software for students</li>
              <li>Grant and funding opportunities</li>
              <li>Pitch deck templates</li>
              <li>Recommended books and podcasts</li>
              <li>Local accelerators and incubators</li>
              <li>Useful contacts and mentors</li>
            </ul>
            <p>
              We update it periodically. If you know of a resource that should be included,
              let us know at{' '}
              <a href={`mailto:${clubInfo.email}`} className="text-link">
                {clubInfo.email}
              </a>
              .
            </p>
          </div>
        </Section>

        <div className="divider" />

        {/* Google Sheet Embed */}
        <Section title="Resource directory">
          <Card className="p-0 overflow-hidden">
            {/* TODO: Replace the embed URL with your actual Google Sheet */}
            <div className="aspect-[4/3] md:aspect-[16/9] w-full">
              <iframe
                src={resourcesSheetEmbedUrl}
                className="w-full h-full border-0"
                title="Resources spreadsheet"
                loading="lazy"
              />
            </div>
          </Card>

          {/* Fallback link */}
          <p className="text-sm text-neutral-500 mt-4">
            Having trouble viewing the embed?{' '}
            <a
              href={resourcesSheetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Open in Google Sheets →
            </a>
          </p>
        </Section>

        <div className="divider" />

        {/* Additional Resources */}
        <Section title="Quick links">
          <div className="grid md:grid-cols-2 gap-4">
            <Card hover>
              <h3 className="font-medium text-neutral-900 mb-1">University resources</h3>
              <p className="text-sm text-neutral-600 mb-2">
                Our university has an entrepreneurship center with office hours, funding
                programs, and workspace.
              </p>
              {/* TODO: Replace with actual university entrepreneurship center URL */}
              <a
                href="https://university.edu/entrepreneurship"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-link"
              >
                Visit the center →
              </a>
            </Card>
            <Card hover>
              <h3 className="font-medium text-neutral-900 mb-1">Student discounts</h3>
              <p className="text-sm text-neutral-600 mb-2">
                Many SaaS tools offer free or discounted plans for students. Check out the
                GitHub Student Pack and similar programs.
              </p>
              <a
                href="https://education.github.com/pack"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-link"
              >
                GitHub Student Pack →
              </a>
            </Card>
            <Card hover>
              <h3 className="font-medium text-neutral-900 mb-1">YC Startup Library</h3>
              <p className="text-sm text-neutral-600 mb-2">
                Y Combinator's free collection of videos, essays, and guides on building
                startups.
              </p>
              <a
                href="https://www.ycombinator.com/library"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-link"
              >
                Browse the library →
              </a>
            </Card>
            <Card hover>
              <h3 className="font-medium text-neutral-900 mb-1">Indie Hackers</h3>
              <p className="text-sm text-neutral-600 mb-2">
                Community of founders building profitable businesses. Great for bootstrapped
                and side project inspiration.
              </p>
              <a
                href="https://www.indiehackers.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-link"
              >
                Visit Indie Hackers →
              </a>
            </Card>
          </div>
        </Section>

        <div className="divider" />

        {/* Suggest a Resource */}
        <Section title="Suggest a resource">
          <p className="text-neutral-600 max-w-content">
            Know of a tool, program, or resource that would help student entrepreneurs?
            We'd love to add it. Email us at{' '}
            <a href={`mailto:${clubInfo.email}?subject=Resource suggestion`} className="text-link">
              {clubInfo.email}
            </a>{' '}
            with the link and a short description.
          </p>
        </Section>
      </div>
    </div>
  );
}
