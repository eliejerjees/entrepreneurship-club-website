'use client';

import { useState } from 'react';
import { PageHeader, Section, Button } from '@/components';
import { clubInfo, faqs } from '@/lib/data';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-neutral-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-4 flex items-start justify-between text-left hover:text-accent-600 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-neutral-900 pr-4">{question}</span>
        <span className="flex-shrink-0 text-neutral-400">
          {isOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4 pr-8">
          <p className="text-neutral-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="container-narrow">
      <div className="py-10 md:py-14">
        <PageHeader
          title="Frequently Asked Questions"
          description="Common questions about joining, participating, and getting involved with the club."
        />

        {/* FAQ List */}
        <Section>
          <div className="max-w-content">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            ))}
          </div>
        </Section>

        <div className="divider" />

        {/* Still Have Questions */}
        <Section title="Still have questions?">
          <div className="max-w-content space-y-4">
            <p className="text-neutral-600">
              Can't find what you're looking for? We're happy to help. You can:
            </p>
            <ul className="space-y-2 text-neutral-600">
              <li className="flex items-start gap-2">
                <span className="text-accent-500">•</span>
                <span>
                  Email us at{' '}
                  <a href={`mailto:${clubInfo.email}`} className="text-link">
                    {clubInfo.email}
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-500">•</span>
                <span>DM us on Instagram or LinkedIn</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-500">•</span>
                <span>
                  Come to a meeting and ask in person ({clubInfo.meetingTime},{' '}
                  {clubInfo.meetingLocation})
                </span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-4">
              <Button href={`mailto:${clubInfo.email}`} variant="primary">
                Email us
              </Button>
              <Button href="/events" variant="secondary">
                See upcoming events
              </Button>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
