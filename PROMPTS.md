# 🤖 ABTalks AI Cohort Assessment Portal — PROMPTS & ARCHITECTURE DOCUMENTATION

> **Document Type:** `PROMPTS.md` (AI Usage & Prompt Log)  
> **Hackathon Challenge:** Problem Statement 2 — The Interview Agent (Build the interviewer, not the interview)  
> **Project Title:** ABTalks Enterprise Candidate Assessment Portal  
> **Tech Stack:** React (Vite) + Tailwind CSS + Node.js/Express + Groq LLM API + Vercel Serverless Functions  

---

## 📌 01. Hackathon Challenge Overview & Rules Compliance

### Problem Statement 2: The Interview Agent
The goal is to build an AI Interview Agent that conducts realistic, multi-turn, adaptive technical interviews for candidates graduating from the 31-Day AI Cohort (covering RAG, Vector DBs, Prompt Engineering, Agents, MCP, and Kubernetes Deployment).

### Submission & Stage Verification Matrix:
1. **Stage 1 (Eligibility Verification):** Public Repository, Live Vercel Demo, accessible `PROMPTS.md` included.
2. **Stage 2 (Authenticity Review):** Comprehensive prompt history and iterative system design logs documenting real vibe-coding sessions.
3. **Conversational Multi-Turn Engine:** Maintains state and context across candidate messages.
4. **Targeted Evaluation:** Probes deeper into topics where candidate attempts > 1 in `candidates.json`.
5. **Structured Output:** Emits Executive Summary, Strengths, Gaps, and Next Steps in clean JSON format.
6. **API Specification:** Exposes `POST /api/interview` serverless endpoint.

---

## 🎨 02. GLOBAL DESIGN SYSTEM

**Prompt Name:** `abtalks_design_system_prompt`

Use the following design language throughout the entire website:

- **Premium dark SaaS aesthetic**
- **Background:** Black / Deep Slate (`#07090e` / `#0f172a`)
- **Primary Color:** Indigo (`#6366f1`)
- **Secondary Color:** Purple (`#a855f7`)
- **Accent Color:** Pink (`#ec4899`)
- **Text Color:** White (`#f8fafc`)
- **Muted Text:** Slate (`#94a3b8`)
- **Borders:** Slate 800 (`#1e293b`)
- **Card Radius:** Rounded-2xl / Rounded-3xl
- **Styling Effects:** Glassmorphism (`backdrop-blur-xl`, `bg-slate-900/60`), soft background glows
- **Headings & Actions:** Gradient headings (`bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400`), gradient CTA buttons
- **Interactivity:** Subtle shadows, smooth hover animations, mobile-first responsive grid

> **Design Guardrails:** Avoid excessive bright colors, white backgrounds, heavy shadows, cluttered layouts, or random colors outside the core palette.

---

## 🛠️ 03. COMPONENT PROMPTS & SPECIFICATIONS

### 1. Hero Section
**Prompt Name:** `hero_section_prompt`

Create a premium dark-themed hero section for an AI Engineering Cohort landing page. Use an indigo, purple, and pink gradient visual theme.

**Include:**
- ABTalks AI Cohort 2026 badge
- **Main Heading:** *"Become a Production-Ready Generative AI & Agentic Architect"*
- Supporting description text
- **Primary CTA:** "Launch Candidate Interview Assessment"
- **Secondary CTA:** "Explore 31-Day Syllabus"
- Glassmorphism dark UI with subtle background glows
- Responsive layout for desktop, tablet, and mobile

---

### 2. Company Marquee
**Prompt Name:** `company_marquee_prompt`

Create a continuously scrolling company-logo marquee for an AI engineering cohort website.

**Requirements:**
- Dark background with horizontal infinite scrolling CSS animation
- Authentic company logos displayed with equal spacing
- Duplicate logo set for a seamless infinite loop
- Pause animation on hover with left and right gradient fade masks
- Clean responsive layout without visible scrollbars

---

### 3. Mentors Section
**Prompt Name:** `mentors_section_prompt`

Create a *"Learn From Industry Experts"* section for a premium AI Engineering Cohort landing page.

**Include:**
- **Section Badge:** "EXPERT GUIDANCE"
- **Heading:** "Learn From Industry Experts"
- Short description and mentor profile cards
- **Mentor Details:** Image, Name, Job Role, Industry Experience, and Expertise summary
- Dark slate cards with rounded corners, subtle borders, and indigo/purple hover glow

---

### 4. Technologies Section
**Prompt Name:** `technologies_section_prompt`

Create an interactive *"Industry Tools You'll Master"* section with categorized tab switching.

**Include Category Tabs:**
* **Frontend:** React, Next.js, TypeScript, Tailwind CSS
* **Backend:** Node.js, Express.js, Python, FastAPI
* **AI Engineering:** LangChain, LangGraph, OpenAI, Pinecone
* **Infrastructure:** Docker, Kubernetes, AWS, GitHub
* **Engineering Skills:** System Design, API Design, Git & GitHub, Testing

---

### 5. Curriculum Preview
**Prompt Name:** `curriculum_preview_prompt`

Create a curriculum preview section for a 31-day AI Engineering Cohort.

**Include:**
- Course prerequisites card (Beginner-to-Advanced, 31 Days duration)
- Quick overview highlights: Industry Ready Curriculum, Hands-on AI Engineering Training, AI Interview Assessment
- **Right Column:** Expandable module accordion detailing day ranges, lesson counts, tools used, and daily objectives
- "View Full Syllabus" CTA button

---

### 6. Builder Section
**Prompt Name:** `builders_section_prompt`

Create a section titled **"NOT JUST JOBS — We Also Support Builders."**

**Description:** *"Go beyond getting hired. Learn how to turn your technical skills into products, startups, and real-world opportunities."*

**4 Interactive Cards:**
1. **How To Build Startups** (Rocket icon)
2. **How To Validate Ideas** (Lightbulb icon)
3. **How To Launch Products** (CPU icon)
4. **How To Pitch To Investors** (Handshake icon)

---

### 7. Certification Section
**Prompt Name:** `certification_section_prompt`

Create a two-column certification section titled **"Get Certified With Recognized Validation"**.

- **Left Side:** Explanation of project completion, AI technical assessments, verified credential benefits.
- **Right Side:** Professional certificate mockup with ABTalks branding, Credential ID, Authenticity QR Code, and shareable triggers.

---

### 8. Placement Stories
**Prompt Name:** `placement_stories_prompt`

Create a testimonial section titled **"PLACEMENT STORIES — What Our Cohort Graduates Say"**.

**Card Content:**
- 5-Star Rating indicator
- Student review quote
- Student avatar / initials
- Student name & placed company role (e.g., Placed at Cohere AI / Meta / Pinecone)

---

### 9. FAQ Section
**Prompt Name:** `faq_section_prompt`

Create a premium FAQ accordion section titled **"Frequently Asked Questions From Our Students"**.

- Interactive expand/collapse state with smooth transitions
- Gradient active state and purple glow on expansion
- Answers explaining interview workflow, certification verification, and placement assistance

---

### 10. Candidate Interview Portal
**Prompt Name:** `candidate_interview_portal_prompt`

Create a technical candidate roster portal titled **"ABTalks Technical Interview Portal"**.

**Display Candidate Cards with:**
- Candidate ID & Name
- Current Status & Job Role
- Experience & Education background
- Missions completed progress bar (e.g., 28/31 completed)
- Commit days & First-try success counts
- **CTA:** *"Start Interview Assessment"* button with Play icon

---

### 11. Full Curriculum Page
**Prompt Name:** `full_curriculum_prompt`

Create a full 31-Day AI Cohort syllabus page featuring an 8-Module interactive accordion detailing day-by-day objectives, tools (ChromaDB, FastAPI, MCP, LangGraph, K8s), and mission types.

---

### 12. Footer
**Prompt Name:** `footer_prompt`

Create a premium dark footer featuring ABTalks branding, short description, quick links, tech stack badges (Groq LLM, FastAPI, React, Tailwind), and copyright metadata.

---

## 🤖 04. BACKEND & AGENT PROMPTS (PROBLEM STATEMENT 2)

### 1. Core Interview Agent Persona Prompt

```text
You are the ABTalks Technical AI Evaluator, an expert AI/ML engineer and technical interviewer assessing candidates graduating from the 31-Day AI Cohort.

YOUR PURPOSE:
Conduct a realistic, multi-turn, adaptive technical interview based on the candidate's background, job role, experience level, and their specific 31-day cohort mission history.

CANDIDATE CONTEXT HANDLING:
1. Examine the candidate's job role (e.g., Senior Data Engineer, AI Developer).
2. Review their 31-Day Cohort Missions (e.g., Vector DBs, RAG, LoRA Fine-Tuning, MCP, Kubernetes).
3. Identify missions where the candidate required multiple attempts (>1 attempts) and probe deeper into those specific technical concepts.

RULES FOR INTERVIEW CONDUCT:
- Ask ONE focused, practical technical question at a time.
- Ensure at least 8 questions are asked across 4 curriculum topics throughout the session.
- Adapt follow-up questions dynamically based on the candidate's previous response.
- Do not give away complete answers; provide subtle hints if the candidate struggles.
- Keep responses concise, clear, and professional (under 3-4 sentences per question).
- Focus on practical real-world architecture scenarios rather than memorized definitions.