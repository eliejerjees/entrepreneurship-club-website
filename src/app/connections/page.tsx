'use client';

import { useState, useMemo } from 'react';
import { PageHeader, Section, Card, Tag, Button } from '@/components';
import { clubInfo, connectionPosts, skillTags } from '@/lib/data';

export default function ConnectionsPage() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // Filter posts based on selected skills
  const filteredPosts = useMemo(() => {
    if (selectedSkills.length === 0) {
      return connectionPosts;
    }
    return connectionPosts.filter((post) =>
      post.skillsNeeded.some((skill) => selectedSkills.includes(skill))
    );
  }, [selectedSkills]);

  const toggleSkill = (skillId: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skillId)
        ? prev.filter((s) => s !== skillId)
        : [...prev, skillId]
    );
  };

  const clearFilters = () => {
    setSelectedSkills([]);
  };

  return (
    <div className="container-narrow">
      <div className="py-10 md:py-14">
        <PageHeader
          title="Student Connections"
          description="Find co-founders and collaborators for your projects, or join someone else's team."
        />

        {/* How It Works */}
        <Section>
          <h2 className="font-display text-xl text-neutral-900 mb-6">How it works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center text-sm font-medium">
                1
              </div>
              <div>
                <h3 className="font-medium text-neutral-900 mb-1">Post your project</h3>
                <p className="text-sm text-neutral-600">
                  Describe what you're building and what skills you need. Include time
                  commitment expectations.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center text-sm font-medium">
                2
              </div>
              <div>
                <h3 className="font-medium text-neutral-900 mb-1">Browse and filter</h3>
                <p className="text-sm text-neutral-600">
                  Look through existing posts. Filter by the skills you have to find
                  projects that need you.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center text-sm font-medium">
                3
              </div>
              <div>
                <h3 className="font-medium text-neutral-900 mb-1">Connect directly</h3>
                <p className="text-sm text-neutral-600">
                  Reach out via the contact info provided. Set up a coffee chat to see if
                  it's a good fit.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <div className="divider" />

        {/* Post a Project */}
        <Section title="Post a project">
          <Card className="bg-neutral-50">
            <div className="space-y-4">
              <p className="text-sm text-neutral-600">
                Have a project and need teammates? Fill out the form below to post it to the board.
              </p>

              {/* Form UI (disabled/coming soon) */}
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Project name
                  </label>
                  <input
                    type="text"
                    disabled
                    placeholder="e.g., Campus Marketplace App"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md text-sm bg-white text-neutral-400 cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    What are you building?
                  </label>
                  <textarea
                    disabled
                    rows={3}
                    placeholder="Describe your project and what stage it's at..."
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md text-sm bg-white text-neutral-400 cursor-not-allowed resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Skills needed
                  </label>
                  <input
                    type="text"
                    disabled
                    placeholder="e.g., iOS development, marketing, UI design"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md text-sm bg-white text-neutral-400 cursor-not-allowed"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Time commitment
                    </label>
                    <input
                      type="text"
                      disabled
                      placeholder="e.g., 5-10 hrs/week"
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md text-sm bg-white text-neutral-400 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">
                      Contact email
                    </label>
                    <input
                      type="email"
                      disabled
                      placeholder="your.email@university.edu"
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md text-sm bg-white text-neutral-400 cursor-not-allowed"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <Button disabled variant="primary" className="opacity-50 cursor-not-allowed">
                    Submit (Coming Soon)
                  </Button>
                  <p className="text-xs text-neutral-500 mt-2">
                    Form submissions will be available soon. In the meantime, email your project
                    details to{' '}
                    <a href={`mailto:${clubInfo.email}?subject=Connections board post`} className="text-link">
                      {clubInfo.email}
                    </a>{' '}
                    and we'll add it for you.
                  </p>
                </div>
              </form>
            </div>
          </Card>
        </Section>

        <div className="divider" />

        {/* Browse Posts */}
        <Section title="Browse posts">
          {/* Filter by skill */}
          <div className="mb-6">
            <p className="text-sm text-neutral-600 mb-3">
              Filter by skills you can contribute:
            </p>
            <div className="flex flex-wrap gap-2">
              {skillTags.map((skill) => (
                <Tag
                  key={skill.id}
                  label={skill.label}
                  active={selectedSkills.includes(skill.id)}
                  onClick={() => toggleSkill(skill.id)}
                  size="md"
                />
              ))}
              {selectedSkills.length > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-neutral-500 hover:text-neutral-700 underline ml-2"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-neutral-500 mb-4">
            Showing {filteredPosts.length} of {connectionPosts.length} posts
          </p>

          {/* Posts Grid */}
          {filteredPosts.length === 0 ? (
            <Card>
              <p className="text-neutral-600">
                No posts match your filter. Try selecting different skills or{' '}
                <button onClick={clearFilters} className="text-link">
                  clear the filters
                </button>
                .
              </p>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {filteredPosts.map((post) => (
                <Card key={post.id} hover>
                  <h3 className="font-medium text-neutral-900 mb-2">{post.projectName}</h3>
                  <p className="text-sm text-neutral-600 mb-3">{post.description}</p>

                  {/* Skills needed */}
                  <div className="mb-3">
                    <p className="text-xs text-neutral-500 mb-1.5">Looking for:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {post.skillsNeeded.map((skillId) => {
                        const skill = skillTags.find((s) => s.id === skillId);
                        return (
                          <Tag
                            key={skillId}
                            label={skill?.label || skillId}
                            active={selectedSkills.includes(skillId)}
                          />
                        );
                      })}
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="text-xs text-neutral-500 space-y-1">
                    <p>⏱ {post.timeCommitment}</p>
                    <p>
                      Posted{' '}
                      {new Date(post.postedDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                  </div>

                  {/* Contact */}
                  <div className="mt-4 pt-3 border-t border-neutral-100">
                    <a
                      href={`mailto:${post.contactEmail}?subject=Re: ${post.projectName} on Connections Board`}
                      className="text-sm text-accent-600 hover:text-accent-700 font-medium"
                    >
                      Contact →
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </Section>

        <div className="divider" />

        {/* Guidelines */}
        <Section title="Guidelines">
          <div className="space-y-4 text-sm text-neutral-600 max-w-content">
            <p>
              <strong className="font-medium text-neutral-700">Be specific.</strong> Vague
              posts like "looking for a technical co-founder" get fewer responses than ones
              that explain the project and what you need help with.
            </p>
            <p>
              <strong className="font-medium text-neutral-700">Be realistic about time.</strong>{' '}
              Everyone's a student. Be honest about how many hours you expect and whether there's
              flexibility.
            </p>
            <p>
              <strong className="font-medium text-neutral-700">Respond promptly.</strong> If
              someone reaches out, try to reply within a day or two, even if it's just to say
              you'll follow up later.
            </p>
            <p>
              <strong className="font-medium text-neutral-700">Meet in person.</strong> A quick
              coffee chat is the best way to see if you'd work well together. Don't commit to
              a big project without meeting first.
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}
