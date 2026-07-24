import logoImg from '../assets/images/logo_white_bg.png';
import directorImg from '../assets/images/regina_new.png';
import heroImg from '../assets/images/consulting_hero_1784895749201.jpg';
import { ServiceItem, IndustryItem, TestimonialItem, FAQItem, ValueItem, ProcessStep } from '../types';

export const COMPANY_INFO = {
  name: "SARE Projects Solutions",
  tagline: "Your Partner in Compliance, Research and Digital Solutions",
  slogan: "Empowering Organisations Through Compliance, Research & Digital Solutions",
  description: "SARE Projects Solutions provides comprehensive business compliance, research support, and custom website design and digital solutions.",
  director: {
    name: "Regina Rikhotso",
    title: "Director & Founder",
    bio: "Regina Rikhotso is a distinguished South African executive and consulting leader with over 15 years of hands-on expertise in compliance management, donor relations, development research, and organizational governance. We founded SARE Projects Solutions to bridge the strategic operational gap for NGOs, public institutions, donor agencies, and researchers seeking reliable, outcome-driven administrative and compliance support.",
    quote: "We help organizations focus on their core mission while we handle the critical operational, research, and regulatory details that support long-term success."
  },
  contact: {
    phone: "071 950 6936",
    phoneDisplay: "071 950 6936",
    phoneTel: "+27719506936",
    whatsapp: "+27719506936",
    whatsappLink: "https://wa.me/27719506936?text=Good%20day,%20I%20would%20like%20to%20enquire%20about%20one%20of%20your%20services%20and%20discuss%20my%20requirements.%20Please%20let%20me%20know%20the%20next%20steps.%20Thank%20you.",
    emails: ["hlamisto@yahoo.com", "sareprojectssolutions@gmail.com"],
    location: "South Africa (Nationwide & Regional Service)",
    hours: "Monday – Friday: 08:00 – 17:00 SAST"
  },
  images: {
    logo: logoImg,
    director: directorImg,
    hero: heroImg
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "website-design",
    title: "Website Design & Digital Solutions",
    category: "Digital Solutions",
    iconName: "Laptop",
    shortDesc: "We design modern websites that help businesses establish a professional online presence, generate more leads, automate daily operations, and grow with confidence. Every website is custom-built to match your brand, industry, and business goals.",
    fullDesc: "Establishing a strong digital presence is crucial for modern organisations. SARE Projects Solutions designs and develops premium, custom websites, e-commerce stores, client portals, and donation platforms that streamline your operations and engage stakeholders. We integrate secure payment gateways (PayFast, Yoco, Paystack, Peach Payments, Ozow) and deploy automated workflows, support chatbots, and CRM connections to turn your website into a growth engine.",
    benefits: [
      "Custom-built websites matching your brand and business goals",
      "Fully responsive, SEO-optimised, and lightning-fast performance",
      "Integrated South African & international payment gateways",
      "Workflow automations and customer support chatbots"
    ],
    deliverables: [
      "Custom Website Design (Corporate, NGO, E-commerce, Portfolio)",
      "Payment Gateway Integration (PayFast, Yoco, Peach, Paystack, PayPal)",
      "Lead Generation & Contact Forms with Email Notifications",
      "Smart Support Chatbots & WhatsApp Integration",
      "Client & Member Portals, Donation Platforms & Event Registrations",
      "Search Engine Optimisation (SEO) & Google Maps Integration",
      "Secure Hosting Setup, Domain Configurations & Ongoing Maintenance",
      "Workflow Automations & CRM Integration"
    ],
    targetClients: ["NGOs & NPOs", "Small & Medium Businesses (SMEs)", "Corporate Companies", "Law Firms", "Healthcare Providers", "Schools & Institutions", "Startups"]
  },
  {
    id: "business-compliance",
    title: "Business Compliance Services",
    category: "Regulatory & Governance",
    iconName: "ShieldCheck",
    shortDesc: "End-to-end statutory compliance, CIPC filings, beneficial ownership registries, and tax returns.",
    fullDesc: "Navigating South African regulatory frameworks can be complex and time-consuming. SARE Projects Solutions provides complete end-to-end statutory compliance management for businesses, NPOs, and social enterprises. We ensure your entity maintains active CIPC standing, meets SARS tax mandates, and strictly adheres to governance requirements.",
    benefits: [
      "Rigorous CIPC & statutory compliance management",
      "Avoid costly penalties and deregistration risks",
      "Streamlined Beneficial Ownership filing",
      "Seamless annual returns & SARS tax clearance"
    ],
    deliverables: [
      "Company Registration",
      "CIPC Filing",
      "Beneficial Ownership Reporting",
      "Company & Personal Tax Returns",
      "Compliance Monitoring"
    ],
    targetClients: ["SMEs", "NPOs & NGOs", "Emerging Enterprises", "Public Sector Suppliers"]
  },

  {
    id: "research-support",
    title: "Research & Transcription Support Services",
    category: "Research & Fieldwork",
    iconName: "FileSpreadsheet",
    shortDesc: "Professional audio/video transcription, translation, focus group moderation, participant recruitment, and fieldwork assistance.",
    fullDesc: "High-impact research relies on rigorous field execution, verbatim data formatting, and meticulous handling. We support academic institutions, development agencies, and independent researchers with professional transcription and research field execution across South Africa.",
    benefits: [
      "Fast turnaround on verbatim transcriptions",
      "Rigorous data quality verification & protocols",
      "Multilingual field researchers and moderators",
      "Complete ethical compliance & consent management"
    ],
    deliverables: [
      "Verbatim Transcription & Translation",
      "Interview Moderation & FGD Note-Taking",
      "Research Assistant Support",
      "Participant Recruitment",
      "Data Quality Checks",
      "Transcript Cleaning & Formatting"
    ],
    targetClients: ["Universities", "Research Institutes", "International Donors", "Government Policy Units"]
  },
  {
    id: "proposal-donor-support",
    title: "Proposal & Donor Support Consulting",
    category: "Grants & Funding",
    iconName: "Briefcase",
    shortDesc: "Grant application support, donor reporting, narrative report writing, compliance tracking, and board dashboards.",
    fullDesc: "Securing and retaining donor funding requires persuasive grant applications, transparent reporting, and strict adherence to donor guidelines. We work closely with NGOs and development partners to prepare winning proposals and maintain impeccable donor accountability.",
    benefits: [
      "Higher grant acquisition & donor retention rates",
      "Professional narrative & financial reporting alignment",
      "Robust KPI tracking and board governance tools",
      "Reduced administrative burden on program teams"
    ],
    deliverables: [
      "Grant Application Support",
      "Donor Reporting",
      "Narrative Report Writing",
      "Compliance Tracking",
      "Board Reporting",
      "KPI Dashboard Preparation"
    ],
    targetClients: ["Non-Governmental Organizations (NGOs)", "Civil Society Organizations", "Grant Beneficiaries"]
  },
  {
    id: "virtual-executive-assistant",
    title: "Virtual Executive Assistant Services",
    category: "Executive Operations",
    iconName: "UserCheck",
    shortDesc: "Diary management, meeting coordination, board packs & minutes, travel coordination, document management, and follow-ups.",
    fullDesc: "Senior executives and project directors need reliable executive administrative support to maintain strategic momentum. Our Virtual Executive Assistant services deliver high-precision support for calendar coordination, board meetings, travel arrangements, and document control.",
    benefits: [
      "Reclaim 15+ hours weekly for executive leadership",
      "Flawless board meeting documentation & minutes",
      "Confidential, highly experienced administrative support",
      "Flexible hourly or retainer models"
    ],
    deliverables: [
      "Diary Management",
      "Meeting Coordination",
      "Board Packs & Minutes",
      "Travel Coordination",
      "Document Management",
      "Executive Follow-Ups"
    ],
    targetClients: ["Executive Directors", "Project Leaders", "Remote Consultants", "SME Founders"]
  },
  {
    id: "translation-services",
    title: "Translation Services",
    category: "Localization & Communication",
    iconName: "Globe",
    shortDesc: "Translation of reports, training materials, research documents, and community engagement materials across South African languages.",
    fullDesc: "Effective community engagement and valid research require authentic linguistic translation. We specialize in contextual translation across South Africa's official languages, ensuring message fidelity, cultural nuance, and academic precision.",
    benefits: [
      "Cultural & contextual linguistic accuracy",
      "Native speaker translators across SA languages",
      "Fast, high-volume document turnaround",
      "Academic & community field validation"
    ],
    deliverables: [
      "Translation of Reports",
      "Translation of Training Materials",
      "Translation of Research Documents",
      "Translation of Community Engagement Materials",
      "Languages: English, isiZulu, isiXhosa, Sesotho and more"
    ],
    targetClients: ["Community Health Programs", "Development Agencies", "Field Researchers", "Public Sector"]
  },
  {
    id: "qualitative-data-analysis",
    title: "Qualitative Data Analysis Support",
    category: "Data Science & Insights",
    iconName: "BarChart3",
    shortDesc: "Transcript preparation, coding support, thematic analysis support, NVivo preparation, and research administration.",
    fullDesc: "Transform raw qualitative field data into structured, actionable research findings. Our analysis specialists utilize industry standard software like NVivo to code transcripts, identify core themes, and generate rigorous analytical reports.",
    benefits: [
      "Methodologically rigorous qualitative coding",
      "NVivo workspace structuring & node hierarchy",
      "Publication-ready thematic analysis summaries",
      "Unbiased, objective data synthesis"
    ],
    deliverables: [
      "Transcript Preparation",
      "Coding Support",
      "Thematic Analysis Support",
      "NVivo Preparation",
      "Research Administration"
    ],
    targetClients: ["Master's & PhD Researchers", "Research Agencies", "NGO M&E Teams", "Policy Analysts"]
  },
  {
    id: "community-engagement-fieldwork",
    title: "Community Engagement & Fieldwork Coordination",
    category: "Field Operations",
    iconName: "Users",
    shortDesc: "Participant recruitment, venue arrangements, fieldworker coordination, consent documentation management, and interview scheduling.",
    fullDesc: "Field research success depends on respectful, well-organized community mobilization. We coordinate field operations, secure appropriate community venues, manage local fieldworkers, and guarantee ethical compliance on location.",
    benefits: [
      "Seamless local community entry & stakeholder alignment",
      "Ethically compliant participant recruitment & consent",
      "On-site field management & safety protocols",
      "Reduced logistical risk during multi-site projects"
    ],
    deliverables: [
      "Participant Recruitment",
      "Venue Arrangements",
      "Fieldworker Coordination",
      "Consent Documentation Management",
      "Interview Scheduling"
    ],
    targetClients: ["International Development Agencies", "Social Impact Initiatives", "Academic Departments"]
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "ngos",
    name: "Non-Governmental Organizations (NGOs & NPOs)",
    shortDesc: "Supporting non-profits with CIPC compliance, donor grant proposals, and field research.",
    iconName: "HeartHandshake",
    stats: "45+ NGO Partners Supported"
  },
  {
    id: "universities",
    name: "Research Institutions & Universities",
    shortDesc: "Academic transcription, NVivo coding, qualitative data analysis, and field assistant support.",
    iconName: "GraduationCap",
    stats: "80+ Academic Projects"
  },
  {
    id: "donor-projects",
    name: "Donor-Funded Projects",
    shortDesc: "Rigorous donor reporting, narrative writing, KPI dashboarding, and financial tracking.",
    iconName: "Landmark",
    stats: "99.8% Compliance Rate"
  },
  {
    id: "smes",
    name: "Small & Medium Businesses (SMEs)",
    shortDesc: "CIPC returns, tax compliance, virtual executive support, and organizational structuring.",
    iconName: "Building2",
    stats: "120+ Business Clients"
  },
  {
    id: "government",
    name: "Government & Public Sector",
    shortDesc: "Policy research support, community fieldwork coordination, and specialized translation.",
    iconName: "Shield",
    stats: "National & Provincial Reach"
  },
  {
    id: "international-dev",
    name: "International Development Partners",
    shortDesc: "In-country operational execution, ethical fieldwork, and local stakeholder engagement.",
    iconName: "Globe2",
    stats: "Cross-Border Collaborations"
  }
];

export const VALUES: ValueItem[] = [
  {
    id: "professionalism",
    title: "Professionalism",
    desc: "Uncompromising standards of execution in every document, report, and consultation.",
    iconName: "Award"
  },
  {
    id: "integrity",
    title: "Integrity",
    desc: "Transparent practices, honest reporting, and adherence to strict regulatory mandates.",
    iconName: "ShieldCheck"
  },
  {
    id: "excellence",
    title: "Excellence",
    desc: "Precision in research, error-free compliance filings, and outcome-focused delivery.",
    iconName: "Sparkles"
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    desc: "Bank-grade data security and absolute non-disclosure for sensitive client records.",
    iconName: "Lock"
  },
  {
    id: "accountability",
    title: "Accountability",
    desc: "Clear ownership of project deliverables, milestones, and statutory deadlines.",
    iconName: "CheckCircle2"
  },
  {
    id: "innovation",
    title: "Innovation",
    desc: "Modern digital tools, qualitative software, and streamlined virtual assistant workflows.",
    iconName: "Lightbulb"
  },
  {
    id: "client-satisfaction",
    title: "Client Satisfaction",
    desc: "Tailored solutions built around the unique operational needs of each organization.",
    iconName: "Smile"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "One-Stop Solution for Multiple Business Needs",
    explanation: "Integrated consulting covering statutory compliance, qualitative fieldwork, donor reporting, translation, and executive administration under one roof."
  },
  {
    title: "Experienced, Reliable & Detail-Oriented Team",
    explanation: "Led by Director Regina Rikhotso with hands-on mastery in CIPC governance, research methodologies, and donor compliance protocols."
  },
  {
    title: "High-Quality & Timely Service Delivery",
    explanation: "Rigorous quality controls and fast turnarounds ensure your statutory deadlines and research milestones are delivered on schedule."
  },
  {
    title: "Understanding of Donor & Compliance Requirements",
    explanation: "Deep technical familiarity with international donor funding mandates, CIPC filing procedures, SARS regulations, and ethics approvals."
  },
  {
    title: "Confidentiality & Professionalism Assured",
    explanation: "Strict non-disclosure commitments, bank-grade file protection, and adherence to academic and statutory ethical standards."
  },
  {
    title: "Flexible & Client-Focused Approach",
    explanation: "Tailored engagement models—from ad-hoc task completion and milestone projects to monthly retainer arrangements suited to your budget."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    desc: "We analyze your compliance gaps, research objectives, or administrative requirements through an initial consultation.",
    duration: "1 - 2 Days",
    keyOutputs: ["Needs Assessment Summary", "Tailored Proposal", "Scope & Milestone Definition"]
  },
  {
    step: "02",
    title: "Planning",
    desc: "We map out timelines, assign specialized field team members or compliance specialists, and establish data protocols.",
    duration: "2 - 3 Days",
    keyOutputs: ["Execution Roadmap", "SLA Agreement", "Resource & Tool Setup"]
  },
  {
    step: "03",
    title: "Implementation",
    desc: "Our team executes the CIPC filings, fieldwork research, verbatim transcriptions, or executive support tasks.",
    duration: "Active Phase",
    keyOutputs: ["Weekly Progress Reports", "Draft Deliverables", "Quality Assurance Audits"]
  },
  {
    step: "04",
    title: "Delivery",
    desc: "Final verification, compliance submission verification, or finalized research reports delivered to executive standards.",
    duration: "Milestone Completion",
    keyOutputs: ["Verified CIPC Certificates", "Final Transcripts/Data", "Board-Ready Reports"]
  },
  {
    step: "05",
    title: "Ongoing Support",
    desc: "Continuous compliance monitoring, retainer executive support, and recurring donor reporting maintenance.",
    duration: "Continuous",
    keyOutputs: ["Compliance Calendar", "Retainer Support", "Quarterly Reviews"]
  }
];

export const STATS = [
  { value: 10, suffix: "+", label: "Years Supporting Organizations", detail: "Deep South African governance expertise" },
  { value: 250, suffix: "+", label: "Projects Completed", detail: "Across compliance, research & EA assignments" },
  { value: 120, suffix: "+", label: "Satisfied Clients", detail: "NGOs, Universities, Donors & SMEs" },
  { value: 180, suffix: "+", label: "Research Assignments", detail: "Fieldwork, transcription & NVivo coding" },
  { value: 99.8, suffix: "%", label: "Compliance Success Rate", detail: "On-time statutory filings & audits" }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    quote: "SARE Projects Solutions transformed our NGO's compliance standing. Their team handled our CIPC filings and beneficial ownership reporting with absolute efficiency, allowing us to focus 100% on community development.",
    author: "Dr. Nkululeko Dlamini",
    role: "Executive Director",
    organization: "Youth Development Trust SA",
    logoText: "YDT SA",
    rating: 5
  },
  {
    id: "t2",
    quote: "When conducting multi-site qualitative research across Limpopo and Gauteng, Regina Rikhotso's research team provided exceptional moderation, transcript cleaning, and NVivo preparation. The accuracy was flawless.",
    author: "Prof. Sarah Jenkins",
    role: "Principal Investigator",
    organization: "School of Public Health",
    logoText: "University Partner",
    rating: 5
  },
  {
    id: "t3",
    quote: "Their proposal and donor support consulting helped us secure a major international grant. The narrative reporting and KPI dashboards they prepared made board meetings seamless and transparent.",
    author: "Thabo Mokoena",
    role: "Operations Head",
    organization: "Sustainable Communities Initiative",
    logoText: "SCI Africa",
    rating: 5
  },
  {
    id: "t4",
    quote: "As a growing SME, having SARE Projects Solutions handle our company tax returns and virtual executive assistant tasks has saved our management team over 20 hours every month. Irreplaceable partner!",
    author: "Lindiwe Khumalo",
    role: "Managing Director",
    organization: "Khumalo Logistics & Advisory",
    logoText: "KLA Advisory",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "Compliance",
    question: "What compliance services do you provide for CIPC and SARS?",
    answer: "We provide complete statutory management including new company registrations, NPO registrations, annual CIPC return filings, Beneficial Ownership disclosures, director changes, tax clearance certificates, and company tax returns."
  },
  {
    id: "faq-2",
    category: "Research",
    question: "Which South African languages do you support for research transcription and translation?",
    answer: "We support English, isiZulu, isiXhosa, Sesotho, Setswana, Sepedi, Xitsonga, Tshivenda, and Afrikaans. Our field teams and translators are native speakers who understand cultural context and academic rigor."
  },
  {
    id: "faq-3",
    category: "Donor Support",
    question: "How do you assist NGOs with donor funding and proposals?",
    answer: "We assist with grant proposal writing, narrative progress reporting, financial alignment documentation, donor compliance audits, and custom KPI board dashboard preparation to ensure funder requirements are fully satisfied."
  },
  {
    id: "faq-4",
    category: "Virtual Assistant",
    question: "How does the Virtual Executive Assistant service work?",
    answer: "We provide dedicated remote executive assistants who manage diary scheduling, board pack preparation, minute-taking, travel arrangements, and action item tracking on a flexible retainer or hourly project basis."
  },
  {
    id: "faq-5",
    category: "Coverage",
    question: "Does SARE Projects Solutions operate nationwide across South Africa?",
    answer: "Yes! While our primary consulting hub is based in South Africa, we deliver nationwide services across all 9 provinces as well as regional support for international development partners operating in Southern Africa."
  },
  {
    id: "faq-6",
    category: "Onboarding",
    question: "How quickly can we start working together on a project?",
    answer: "After our initial consultation (which can be booked online in 2 minutes), we deliver a detailed proposal within 24–48 hours and can deploy team members or initiate compliance filings immediately upon scope approval."
  }
];
