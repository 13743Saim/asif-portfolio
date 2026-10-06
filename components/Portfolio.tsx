"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  Boxes,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Github,
  Linkedin,
  Mail,
  Network,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  {
    index: "01",
    title: "AI Workflow Automation",
    summary:
      "Designed operational automations that connect lead research, qualification, reporting, and delivery workflows into measurable systems.",
    tags: ["n8n", "Automation", "AI Agents", "APIs"],
  },
  {
    index: "02",
    title: "Aartic AI — B2B Platform",
    summary:
      "Positioning and product direction for a B2B AI services brand focused on AI/ML, automation, software, web, mobile, and intelligent agents.",
    tags: ["Product", "Next.js", "B2B", "Conversion"],
  },
  {
    index: "03",
    title: "TrainMatrix — Sports Data",
    summary:
      "Data-operations concept for high-precision sports annotation, structured QA, and human-in-the-loop training data production.",
    tags: ["AI Data", "QA", "Computer Vision", "Operations"],
  },
];

const capabilities = [
  [BrainCircuit, "AI Product Strategy", "Turn an ambiguous AI opportunity into a scoped product, workflow, and measurable implementation plan."],
  [Workflow, "Automation Systems", "Design pragmatic automations across research, operations, CRM, reporting, APIs, and AI-assisted workflows."],
  [Code2, "Technical Delivery", "Bridge product intent and engineering execution across web, mobile, data, AI integrations, and MVP delivery."],
  [Network, "Operations Architecture", "Build repeatable systems for delivery, QA, talent coordination, sales operations, and internal execution."],
];

const experience = [
  ["2025 — Now", "Project / Technical Product Leadership", "AI workflow automation, MVP development, research, delivery systems, marketplace and B2B execution."],
  ["100+", "AI Data & Annotation Projects", "Hands-on exposure to data annotation, model evaluation, QA workflows, computer vision, and AI training operations."],
  ["Cross-functional", "Builder + Operator", "Combining CSE fundamentals, execution management, AI tooling, product thinking, and technical problem solving."],
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 24, mass: 0.25 });
  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, 160]);
  const [mouse, setMouse] = useState({ x: 50, y: 20 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setMouse({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <main>
      <motion.div className="progress" style={{ scaleX: progress }} />
      <div
        className="spotlight"
        style={{ background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(107,92,255,.16), transparent 28%)` }}
      />

      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Home">
          ASIF<span>.</span>
        </a>
        <div className="navlinks">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="navcta" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
      </nav>

      <section id="top" className="hero shell">
        <motion.div className="heroCopy" style={{ y: heroY }}>
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="liveDot" /> AI PRODUCT · AUTOMATION · DELIVERY
          </motion.div>

          <div className="heroTitleWrap">
            {['I BUILD', 'SYSTEMS THAT', 'MOVE WORK'].map((line, i) => (
              <div className="titleClip" key={line}>
                <motion.h1
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.12 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  {line}
                </motion.h1>
              </div>
            ))}
            <div className="titleClip accentLine">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <span>FASTER.</span>
              </motion.h1>
            </div>
          </div>

          <motion.div
            className="heroBottom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <p>
              I&apos;m <strong>Asif Ikbal</strong> — a technical product and project leader building AI-enabled products,
              automation workflows, and execution systems that turn messy operations into scalable outcomes.
            </p>
            <a className="circleButton" href="#work" aria-label="See selected work">
              <ArrowDownRight size={28} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="heroVisual"
          initial={{ opacity: 0, scale: 0.94, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.45, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="orb orbA" />
          <div className="orb orbB" />
          <motion.div
            className="glassCard cardMain"
            animate={{ y: [0, -12, 0], rotate: [0, 1.5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="cardTop"><Sparkles size={17} /> LIVE SYSTEM</div>
            <div className="signal"><span /><span /><span /><span /><span /></div>
            <div className="miniLabel">AI + OPERATIONS</div>
            <div className="bigMetric">01 → ∞</div>
            <div className="cardFooter">From prototype to repeatable workflow.</div>
          </motion.div>
          <motion.div
            className="glassCard cardMini cardOne"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Bot size={21} />
            <span>Agents</span>
            <strong>Active</strong>
          </motion.div>
          <motion.div
            className="glassCard cardMini cardTwo"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Boxes size={21} />
            <span>Workflows</span>
            <strong>Connected</strong>
          </motion.div>
        </motion.div>
      </section>

      <section className="marqueeWrap" aria-hidden="true">
        <div className="marquee">
          <span>AI AUTOMATION ✦ PRODUCT SYSTEMS ✦ NEXT.JS ✦ N8N ✦ AI AGENTS ✦ TECHNICAL DELIVERY ✦ </span>
          <span>AI AUTOMATION ✦ PRODUCT SYSTEMS ✦ NEXT.JS ✦ N8N ✦ AI AGENTS ✦ TECHNICAL DELIVERY ✦ </span>
        </div>
      </section>

      <section id="work" className="section shell">
        <Reveal>
          <div className="sectionHead">
            <div><span className="kicker">SELECTED WORK</span><h2>Building where<br/>AI meets execution.</h2></div>
            <p>Not demo-project theatre. The focus is real operational leverage: less manual work, clearer systems, better delivery.</p>
          </div>
        </Reveal>

        <div className="projectGrid">
          {projects.map((project, i) => (
            <Reveal delay={i * 0.08} key={project.title}>
              <motion.article className="projectCard" whileHover={{ y: -8 }} transition={{ duration: 0.28 }}>
                <div className="projectTop"><span>{project.index}</span><ArrowUpRight size={22}/></div>
                <div className={`projectArt art${i + 1}`}>
                  <div className="gridLines" />
                  {i === 0 && <Workflow size={70} />}
                  {i === 1 && <BrainCircuit size={70} />}
                  {i === 2 && <Network size={70} />}
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="about" className="section shell splitSection">
        <Reveal>
          <span className="kicker">WHAT I DO</span>
          <h2 className="displayMedium">Strategy is useless<br/>without shipped systems.</h2>
        </Reveal>
        <div className="capabilities">
          {capabilities.map(([Icon, title, body], i) => {
            const IconComponent = Icon as typeof BrainCircuit;
            return (
              <Reveal delay={i * .06} key={String(title)}>
                <div className="capability">
                  <div className="iconBox"><IconComponent size={22}/></div>
                  <div><h3>{String(title)}</h3><p>{String(body)}</p></div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="section shell">
        <Reveal>
          <div className="experiencePanel">
            <div className="experienceIntro">
              <span className="kicker">EXPERIENCE</span>
              <h2>Operator mindset.<br/>Builder instincts.</h2>
              <p>I work across the messy middle: where strategy, clients, product requirements, developers, data, deadlines, and business constraints collide.</p>
            </div>
            <div className="experienceRows">
              {experience.map(([meta, title, body]) => (
                <div className="experienceRow" key={title}>
                  <div className="experienceMeta">{meta}</div>
                  <div><h3>{title}</h3><p>{body}</p></div>
                  <CheckCircle2 size={20}/>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="contact shell">
        <Reveal>
          <div className="contactInner">
            <span className="kicker">START A CONVERSATION</span>
            <h2>Have a hard problem?<br/><span>Make it executable.</span></h2>
            <p>If the work sits between AI, automation, product, delivery, or operations, that is exactly where I like to work.</p>
            <div className="contactActions">
              <a className="primaryBtn" href="mailto:hello@example.com"><Mail size={18}/> Email me <ArrowUpRight size={17}/></a>
              <a className="iconBtn" href="#" aria-label="LinkedIn"><Linkedin size={19}/></a>
              <a className="iconBtn" href="#" aria-label="GitHub"><Github size={19}/></a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="footer shell">
        <span>© 2026 ASIF IKBAL</span>
        <span>DHAKA · AVAILABLE GLOBALLY</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
