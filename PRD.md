2. Product Requirement Document (PRD.md)
Executive Summary & Goals
The objective is to establish a high-impact, premium agency web application that positions our Web Development Startup as an elite engineering partner for scaling businesses. The site must deliver immediate technical credibility, seamless interactive user experiences, clear service positioning, and optimized conversion pathways for inbound client leads.
Target Audience
Startups (Seed to Series B): Requiring fast-to-market, scalable web applications and MVP iterations.
Small to Medium Enterprises (SMEs): Seeking digital transformation, redesigns, and modern headless CMS integrations.
Enterprises: Requiring performant custom frontend engineering, complex API integrations, and conversion-focused landing pages.
Design System Specifications
Token
Class / Name
Value / Specification
Usage Context
Primary Accent
brand-blue
#3B67F6
Primary CTAs, active states, key highlights
Secondary Accent
brand-navy
#324B9B
Gradient accents, headers, dark UI borders
Dark Background
bg-slate-950
#090D16
Main background for dark-mode sections
Card Background
bg-slate-900/50
#0F172A with opacity
Card containers with glassmorphism
Primary Font
Display / Headings
Oswald, sans-serif
Section titles, Hero display text, key metrics
Secondary Font
Body / UI
Plus Jakarta Sans, sans-serif
Paragraphs, button labels, inputs, navigation

Logo Rules
All branding MUST route through components/Logo.tsx.
Supports dynamic size properties (width, height) and variant states (light, dark, monochrome).
Image fallbacks must gracefully load SVG vector assets without disrupting document flow.
Information Architecture
1. Header / Navbar
Sticky positioning with glassmorphism backdrop blur (backdrop-blur-md bg-slate-950/80).
Dynamic brand logo left-aligned; center navigation links (Services, Work, Process, About); right-aligned "Book a Call" CTA button.
Mobile responsive slide-out drawer navigation powered by Framer Motion.
2. Hero Section
Headline rendered in Oswald: High-contrast, dynamic typing effect or gradient fill (from-brand-blue to-white).
Subtitle highlighting agency value proposition (e.g., "We engineer high-converting digital products for ambitious brands").
Dual CTAs: Primary "Start Project" button with dynamic blue illumination; Secondary "View Selected Work" outline button.
Animated background visual: Tech stack particle grid or dynamic 3D code viewport card.
3. Trust & Social Proof Stats
Grid display of dynamic metrics (e.g., "$50M+ Client Revenue Generated", "99.8% On-Time Delivery", "4.9/5 Rating").
Interactive client logo marquee slider displaying partner brands with subtle grayscale-to-color hover effects.
4. Core Services
Quad-card dynamic grid layout detailing agency core offerings:

Custom Web Applications: Next.js, React, Node.js, performant web platforms.
E-Commerce Systems: Headless Shopify, custom checkout flows, payment architecture.
High-Converting Landing Pages: Conversion rate optimization, motion graphics, dynamic landing funnels.
Maintenance & Architecture Audit: Performance optimization, security patching, monthly dev retainer.
5. Interactive Work / Portfolio Showcase
Filterable portfolio grid (Categories: All, Web Apps, E-Commerce, SaaS).
Project Cards featuring preview thumbnails, interactive hover zoom, industry tags, and dynamic case study modal triggers.
6. Process Workflow
Step-by-step interactive timeline visualization:

Discovery & Strategy: Technical specification, scope scoping, wireframing.
UI/UX Design: Interactive Figma prototypes, visual token establishment.
Engineering & Code: Modern Next.js stack, continuous deployment, unit testing.
Launch & Growth: Deployment optimization, analytics setup, post-launch scaling.
7. Client Testimonials
Carousel container featuring client video/quote cards.
Client details: Profile photo asset, name, title, company badge, star rating, verified outcome metrics.
8. Interactive Contact & Project Inquiry Form
Multi-step or grouped project planner interface:
Budget selector chips ($5k-$10k, $10k-$25k, $25k+).
Service scope checkboxes.
Input fields for Name, Email, Company, and Project Details.
Dynamic submit button with instant validation and loading states.
9. Footer
Multi-column layout: Brand summary, Navigation quick links, Legal policies, Social channels.
Live status indicator ("Available for Q3/Q4 Projects").
