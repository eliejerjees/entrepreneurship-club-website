// =============================================================================
// DATA MODELS AND CONTENT
// =============================================================================
// All content is centralized here for easy updates. Replace placeholder content
// with real club information when ready.
// =============================================================================

// -----------------------------------------------------------------------------
// Type Definitions
// -----------------------------------------------------------------------------

export interface Event {
  id: string;
  title: string;
  date: string; // ISO date string
  time: string;
  location: string;
  description: string;
  tags: string[];
  photos: string[]; // paths to images in /public/photos/
  status: 'upcoming' | 'current' | 'past';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  major: string;
  year: string;
  bio: string;
  photo: string; // path to image in /public/photos/
  linkedinUrl: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ConnectionPost {
  id: string;
  projectName: string;
  description: string;
  skillsNeeded: string[];
  timeCommitment: string;
  contactEmail: string;
  postedDate: string;
  tags: string[];
}

// -----------------------------------------------------------------------------
// Club Info
// -----------------------------------------------------------------------------

export const clubInfo = {
  name: "Davidson Entrepreneurship Club",
  university: "Davidson College",
  tagline: "Where ideas meet action",
  email: "eclub@davidson.edu", // TODO: Replace with real email
  instagramUrl: "https://instagram.com/davidsoneclub", // TODO: Replace
  linkedinUrl: "https://linkedin.com/company/davidson-entrepreneurship-club", // TODO: Replace
  meetingTime: "Thursdays, 7:00 PM",
  meetingLocation: "Chambers Building, Room 204", // TODO: Update with actual location
  address: "405 N Main St, Davidson, NC 28035", // Davidson College address
};

// -----------------------------------------------------------------------------
// Navigation Links
// -----------------------------------------------------------------------------

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/team", label: "E-Board" },
  { href: "/resources", label: "Resources" },
  { href: "/connections", label: "Connections" },
  { href: "/faq", label: "FAQ" },
];

// -----------------------------------------------------------------------------
// Events Data
// -----------------------------------------------------------------------------
// TODO: Replace with actual events. Update status as events move from
// upcoming -> current -> past

export const events: Event[] = [
  // Upcoming Events
  {
    id: "startup-weekend-2025",
    title: "Startup Weekend Spring 2025",
    date: "2025-03-15",
    time: "6:00 PM - Sunday 9:00 PM",
    location: "Innovation Hub, Building C",
    description:
      "54 hours to build a startup from scratch. Form teams, validate ideas, build MVPs, and pitch to real investors. Open to all majors and experience levels. Meals and snacks provided.",
    tags: ["hackathon", "networking", "competition"],
    photos: ["event-startup-weekend.jpg"], // TODO: Add real photos
    status: "upcoming",
  },
  {
    id: "vc-panel-feb",
    title: "VC Panel: What Investors Actually Look For",
    date: "2025-02-20",
    time: "6:30 PM",
    location: "Business School Auditorium",
    description:
      "Three local VCs share insights on what makes a pitch stand out, common mistakes founders make, and how to approach fundraising as a student entrepreneur.",
    tags: ["speaker", "fundraising"],
    photos: ["event-vc-panel.jpg"],
    status: "upcoming",
  },
  {
    id: "workshop-validation",
    title: "Workshop: Idea Validation 101",
    date: "2025-02-06",
    time: "7:00 PM",
    location: "Student Union, Room 204",
    description:
      "Learn practical techniques to test your startup idea before writing a single line of code. We'll cover customer interviews, landing page tests, and the mom test.",
    tags: ["workshop", "skills"],
    photos: [],
    status: "upcoming",
  },

  // Current/Ongoing
  {
    id: "pitch-competition-spring",
    title: "Spring Pitch Competition",
    date: "2025-01-27",
    time: "Applications open",
    location: "Online submissions",
    description:
      "Our annual pitch competition is now accepting applications. $5,000 in prizes. Submit your 3-minute pitch video by March 1st. Finals will be held live on March 20th.",
    tags: ["competition", "prizes"],
    photos: [],
    status: "current",
  },

  // Past Events
  {
    id: "founder-talk-sarah",
    title: "Founder Talk: Sarah Chen, Luminary Labs",
    date: "2024-11-14",
    time: "7:00 PM",
    location: "Student Union, Room 204",
    description:
      "Sarah shared her journey from dorm room side project to $2M seed round. Great Q&A about balancing school and startup life.",
    tags: ["speaker", "founder"],
    photos: ["event-sarah-talk-1.jpg", "event-sarah-talk-2.jpg"],
    status: "past",
  },
  {
    id: "networking-fall-mixer",
    title: "Fall Networking Mixer",
    date: "2024-10-24",
    time: "6:00 PM",
    location: "Campus Cafe",
    description:
      "Casual mixer to meet other students interested in startups. Good turnout this year—lots of new faces and a few promising team formations.",
    tags: ["networking", "social"],
    photos: ["event-mixer-1.jpg", "event-mixer-2.jpg", "event-mixer-3.jpg"],
    status: "past",
  },
  {
    id: "workshop-mvp",
    title: "Workshop: Building Your First MVP",
    date: "2024-10-10",
    time: "7:00 PM",
    location: "Computer Science Building, Lab 101",
    description:
      "Hands-on workshop covering no-code tools, rapid prototyping, and how to ship something in a weekend.",
    tags: ["workshop", "skills", "technical"],
    photos: ["event-mvp-workshop.jpg"],
    status: "past",
  },
  {
    id: "kickoff-fall-2024",
    title: "Fall 2024 Kickoff Meeting",
    date: "2024-09-05",
    time: "7:00 PM",
    location: "Student Union, Room 204",
    description:
      "First meeting of the semester. We introduced the E-Board, previewed upcoming events, and heard lightning pitches from members with active projects.",
    tags: ["meeting", "social"],
    photos: ["event-kickoff-fall.jpg"],
    status: "past",
  },
];

// -----------------------------------------------------------------------------
// Team Members (E-Board)
// -----------------------------------------------------------------------------
// TODO: Replace with actual team member info and photos

export const teamMembers: TeamMember[] = [
  {
    id: "president",
    name: "Jordan Martinez",
    role: "President",
    major: "Computer Science & Business",
    year: "Senior",
    bio: "Started coding in high school, launched two side projects that went nowhere, and learned more from failures than successes. Passionate about making entrepreneurship accessible to all students.",
    photo: "team-jordan.jpg",
    linkedinUrl: "https://linkedin.com/in/placeholder",
  },
  {
    id: "vp",
    name: "Priya Patel",
    role: "Vice President",
    major: "Economics",
    year: "Junior",
    bio: "Former investment banking intern who realized she'd rather build things than analyze them. Runs our speaker series and has an uncanny ability to get busy founders to say yes.",
    photo: "team-priya.jpg",
    linkedinUrl: "https://linkedin.com/in/placeholder",
  },
  {
    id: "treasurer",
    name: "Marcus Thompson",
    role: "Treasurer",
    major: "Finance",
    year: "Junior",
    bio: "Manages our budget, sponsorship relationships, and makes sure we never run out of pizza money. Also building a fintech startup on the side.",
    photo: "team-marcus.jpg",
    linkedinUrl: "https://linkedin.com/in/placeholder",
  },
  {
    id: "events",
    name: "Emily Rodriguez",
    role: "Events Coordinator",
    major: "Marketing",
    year: "Sophomore",
    bio: "Organized her first event at age 12 (a neighborhood lemonade stand competition). Now brings that same energy to hackathons and workshops.",
    photo: "team-emily.jpg",
    linkedinUrl: "https://linkedin.com/in/placeholder",
  },
  {
    id: "outreach",
    name: "David Kim",
    role: "Outreach Director",
    major: "Communications",
    year: "Senior",
    bio: "Handles partnerships with other clubs, companies, and the local startup ecosystem. Believes the best opportunities come from unexpected connections.",
    photo: "team-david.jpg",
    linkedinUrl: "https://linkedin.com/in/placeholder",
  },
  {
    id: "tech",
    name: "Aisha Johnson",
    role: "Tech Lead",
    major: "Computer Science",
    year: "Junior",
    bio: "Maintains our website, runs technical workshops, and helps non-technical founders understand what's actually possible to build. Open source enthusiast.",
    photo: "team-aisha.jpg",
    linkedinUrl: "https://linkedin.com/in/placeholder",
  },
];

// -----------------------------------------------------------------------------
// FAQs
// -----------------------------------------------------------------------------

export const faqs: FAQ[] = [
  {
    id: "join",
    question: "How do I join the club?",
    answer:
      "Just show up to any of our meetings or events! There's no formal application process. We meet every Thursday at 7 PM in Student Union Room 204. You can also sign up for our email list on the home page to stay updated.",
  },
  {
    id: "experience",
    question: "Do I need startup experience to participate?",
    answer:
      "Not at all. Most of our members had zero experience when they joined. We're here to learn together. Whether you have a business idea or just want to explore, you're welcome.",
  },
  {
    id: "majors",
    question: "Is this only for business or CS majors?",
    answer:
      "Nope! We have members from engineering, design, biology, communications, and more. Diverse teams build better products. If you're curious about startups, you belong here.",
  },
  {
    id: "idea",
    question: "What if I don't have a startup idea?",
    answer:
      "That's totally fine. Many members join to learn and meet people before working on anything specific. You might find a team to join, or an idea might come to you later. No pressure.",
  },
  {
    id: "time",
    question: "How much time commitment is expected?",
    answer:
      "It's flexible. Regular meetings are about an hour each week. Special events like hackathons require more time but are optional. Participate as much or as little as your schedule allows.",
  },
  {
    id: "dues",
    question: "Are there membership dues?",
    answer:
      "No dues. We're funded through the student activities fee and occasional sponsorships. All events are free for students.",
  },
  {
    id: "funding",
    question: "Can the club help me get funding for my startup?",
    answer:
      "We can't fund you directly, but we can connect you with resources: pitch competitions with cash prizes, local angel investors, the university's entrepreneurship center, and grant programs. We've had members raise real money through these channels.",
  },
  {
    id: "pitch-competition",
    question: "How does the pitch competition work?",
    answer:
      "We run one each semester. You submit a short pitch video, semifinalists are selected, then finalists pitch live to a panel of judges (usually local founders and investors). Prizes range from $500 to $2,000 depending on sponsorships.",
  },
  {
    id: "connections",
    question: "What is the Student Connections board?",
    answer:
      "It's a way for students to find collaborators for their projects. If you're building something and need a designer, developer, or business person, you can post there. Or browse existing posts to find a team to join.",
  },
  {
    id: "speakers",
    question: "How do you choose speakers for events?",
    answer:
      "We look for founders and operators who can share practical, honest advice—not just success stories. If you know someone who'd be a great speaker, let us know! We're always looking for recommendations.",
  },
  {
    id: "leadership",
    question: "How can I get more involved or join leadership?",
    answer:
      "Start by attending consistently and helping out at events. E-Board elections happen each spring. We also have committee roles throughout the year for members who want to take on more responsibility.",
  },
  {
    id: "non-students",
    question: "Can non-students attend events?",
    answer:
      "Some events are open to the public (like speaker talks), while others are student-only (like workshops and the pitch competition). Check individual event details or ask us.",
  },
];

// -----------------------------------------------------------------------------
// Connection Posts (Student Connections Board)
// -----------------------------------------------------------------------------
// TODO: In the future, this will come from a database. For now, placeholder data.

export const connectionPosts: ConnectionPost[] = [
  {
    id: "post-1",
    projectName: "Campus Marketplace App",
    description:
      "Building a mobile app for students to buy/sell textbooks and dorm stuff. Have the backend mostly done, need help with the iOS/Android frontend and someone who can handle marketing when we launch.",
    skillsNeeded: ["mobile-dev", "design", "marketing"],
    timeCommitment: "8-10 hrs/week",
    contactEmail: "alex.t@university.edu",
    postedDate: "2025-01-20",
    tags: ["mobile", "marketplace", "consumer"],
  },
  {
    id: "post-2",
    projectName: "AI Study Group Matcher",
    description:
      "Working on a tool that uses ML to match students into optimal study groups based on learning style, schedule, and course performance. Looking for someone interested in the ML/data side.",
    skillsNeeded: ["data-science", "backend"],
    timeCommitment: "5-8 hrs/week",
    contactEmail: "jamie.l@university.edu",
    postedDate: "2025-01-18",
    tags: ["ai", "edtech", "b2b"],
  },
  {
    id: "post-3",
    projectName: "Sustainable Food Delivery",
    description:
      "Partnering with local restaurants to offer carbon-neutral delivery on campus using e-bikes. Need someone to handle operations logistics and a designer for the ordering interface.",
    skillsNeeded: ["operations", "design"],
    timeCommitment: "10-15 hrs/week",
    contactEmail: "morgan.r@university.edu",
    postedDate: "2025-01-15",
    tags: ["sustainability", "marketplace", "consumer"],
  },
  {
    id: "post-4",
    projectName: "Freelance Platform for Students",
    description:
      "A Fiverr-style platform specifically for college students to offer services to each other (tutoring, design work, video editing, etc.). Looking for a full-stack developer co-founder.",
    skillsNeeded: ["full-stack", "design"],
    timeCommitment: "15+ hrs/week",
    contactEmail: "taylor.s@university.edu",
    postedDate: "2025-01-12",
    tags: ["marketplace", "b2c", "gig-economy"],
  },
  {
    id: "post-5",
    projectName: "Mental Health Check-in App",
    description:
      "Building a simple daily check-in app focused on student mental health. Non-profit project. Need a mobile developer and someone with UX research experience to help with user testing.",
    skillsNeeded: ["mobile-dev", "ux-research"],
    timeCommitment: "5-7 hrs/week",
    contactEmail: "sam.k@university.edu",
    postedDate: "2025-01-10",
    tags: ["health", "mobile", "social-impact"],
  },
  {
    id: "post-6",
    projectName: "Event Discovery for College Towns",
    description:
      "Aggregating events from campus orgs, local venues, and social media into one searchable feed. Have a working prototype. Need help with growth/marketing strategy and possibly a business co-founder.",
    skillsNeeded: ["marketing", "business"],
    timeCommitment: "8-12 hrs/week",
    contactEmail: "chris.m@university.edu",
    postedDate: "2025-01-08",
    tags: ["consumer", "social", "local"],
  },
];

// -----------------------------------------------------------------------------
// Skills/Tags for filtering (used in Connections page)
// -----------------------------------------------------------------------------

export const skillTags = [
  { id: "full-stack", label: "Full-Stack Dev" },
  { id: "mobile-dev", label: "Mobile Dev" },
  { id: "backend", label: "Backend" },
  { id: "design", label: "Design" },
  { id: "ux-research", label: "UX Research" },
  { id: "data-science", label: "Data Science" },
  { id: "marketing", label: "Marketing" },
  { id: "business", label: "Business/Strategy" },
  { id: "operations", label: "Operations" },
];

// -----------------------------------------------------------------------------
// Google Sheet URL for Resources page
// -----------------------------------------------------------------------------
// TODO: Replace with your actual Google Sheet embed URL

export const resourcesSheetUrl =
  "https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit?usp=sharing";

export const resourcesSheetEmbedUrl =
  "https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/pubhtml?widget=true&headers=false";
