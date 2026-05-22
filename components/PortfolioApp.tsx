"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { GlowCard as GlowCardWrapper } from "@/components/GlowCard";
import { scrollController } from "@/components/scrollState";
import {
  MonitorSmartphone,
  Code2,
  Layers3,
  Palette,
  Sparkles,
  ArrowRight,
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Star,
  ExternalLink,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";

// ─── Brand Icons ─────────────────────────────────────────────────────────────

function BrandIcon({ name, className }: { name: string; className?: string }) {
  if (name === "github") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    );
  }
  if (name === "linkedin") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    );
  }
  if (name === "instagram") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    );
  }
  return null;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const profile = {
  name: "Umer Saiyad",
  title: "Full Stack Developer",
  tagline: "Building modern web experiences.",
  location: "Surat,Gujarat, India",
  email: "umersaiyad76@gmail.com",
  phone: "+91 9510131599",
  experience: "6+ Months",
  education: "BCA & MCA — Uka Tarsadia University",
  availability: "Available for freelance",
  heroImage: "/umer-hero-bg.png",
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Socials", href: "#socials" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: MonitorSmartphone,
    title: "Responsive Design",
    description:
      "Pixel-perfect interfaces that adapt seamlessly across all devices and screen sizes.",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "End-to-end web applications built with modern frameworks and scalable architectures.",
  },
  {
    icon: Layers3,
    title: "API Development",
    description:
      "RESTful and GraphQL APIs designed for performance, security, and developer experience.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Thoughtful user experiences with clean aesthetics and intuitive interactions.",
  },
];

const projects = [
  {
    title: "LawAssist",
    description:
      "A smart FIR filing system that simplifies legal documentation, case tracking, and citizen-police interaction.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=500&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    link: "#",
  },
  {
    title: "HomeFixCare",
    description:
      "A home service management system for booking repairs, maintenance, and trusted service providers on demand.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=500&fit=crop",
    tags: ["Next.js", "Express", "Stripe", "PostgreSQL"],
    link: "#",
  },
  {
    title: "RadioPlugger",
    description:
      "A song streaming platform for independent artists to upload, promote, and distribute music to radio stations.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=500&fit=crop",
    tags: ["React", "Firebase", "Tailwind", "Node.js"],
    link: "#",
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Docker",
  "Git",
  "Figma",
];

// Social media feeds and updates loaded dynamically inside the Socials component.

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "Understanding your goals, audience, and project requirements through in-depth consultation.",
  },
  {
    step: "02",
    title: "Design",
    description: "Creating wireframes and visual designs that align with your brand and user expectations.",
  },
  {
    step: "03",
    title: "Development",
    description: "Building your project with clean, scalable code using modern technologies and best practices.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Thorough testing, optimization, and deployment with ongoing support and maintenance.",
  },
];

const socialLinks = [
  { name: "github", href: "https://github.com/Umer-Enacton", label: "GitHub" },
  { name: "linkedin", href: "https://www.linkedin.com/in/umer-saiyad-741710254/", label: "LinkedIn" },
  { name: "instagram", href: "https://www.instagram.com/the_umersaiyad/", label: "Instagram" },
];

// ─── Animation Variants ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

// ─── Utility Components ──────────────────────────────────────────────────────

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <Sparkles className="w-4 h-4 text-accent" />
      <span className="text-sm font-medium text-accent tracking-wide uppercase">{children}</span>
    </div>
  );
}

function PremiumButton({
  children,
  variant = "primary",
  href,
  onClick,
  icon,
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  icon?: "arrow" | "download";
}) {
  const baseClasses =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all duration-300";
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/25 hover:shadow-accent/40",
    secondary: "border border-border text-text hover:border-accent hover:text-accent",
  };

  const iconEl =
    icon === "arrow" ? <ArrowRight className="w-4 h-4" /> : icon === "download" ? <Download className="w-4 h-4" /> : null;

  const classes = `${baseClasses} ${variants[variant]}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
        {iconEl}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
      {iconEl}
    </motion.button>
  );
}

function SectionHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight ${className}`}>
      {children}
    </h2>
  );
}

function GlassCard({
  children,
  className = "",
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <motion.div
      className={`rounded-2xl border border-border bg-card backdrop-blur-sm p-6 ${className}`}
      whileHover={hover ? { y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" } : undefined}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}


// ─── Header ──────────────────────────────────────────────────────────────────

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("light");
    document.documentElement.classList.toggle("dark");
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    // Map href to page index
    const map: Record<string, number> = {
      "#about": 1,
      "#services": 2,
      "#projects": 3,
      "#skills": 4,
      "#socials": 5,
      "#contact": 7,
    };
    const page = map[href];
    if (page !== undefined) {
      scrollController.goTo(page);
    } else {
      scrollController.goTo(0);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border"
    >
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.button
            onClick={() => scrollController.goTo(0)}
            className="font-display font-bold text-xl text-text"
            whileHover={{ scale: 1.05 }}
          >
            US<span className="text-accent">.</span>
          </motion.button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-sm text-text-secondary hover:text-accent transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border hover:border-accent transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </motion.button>

            <PremiumButton variant="primary" onClick={() => scrollController.goTo(7)} icon="arrow">
              <span className="hidden sm:inline">Let&apos;s Talk</span>
              <span className="sm:hidden">Talk</span>
            </PremiumButton>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full border border-border"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </motion.button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg/95 backdrop-blur-xl border-b border-border"
          >
            <Container>
              <nav className="py-4 flex flex-col gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm text-text-secondary hover:text-accent transition-colors py-2 text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="home" className="relative h-full flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-[128px] dark:opacity-100 opacity-30" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-[128px] dark:opacity-100 opacity-20" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-subtle border border-accent/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-accent font-medium">{profile.availability}</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold tracking-tight leading-[1.1] mb-6"
            >
              Umer Saiyad — Building <span className="text-accent">modern</span> web experiences.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-lg text-text-secondary max-w-lg mb-8"
            >
              Hi, I&apos;m {profile.name}. A passionate {profile.title.toLowerCase()} crafting
              elegant digital solutions with clean code and thoughtful design.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex flex-wrap gap-4 mb-12"
            >
              <PremiumButton variant="primary" onClick={() => scrollController.goTo(3)} icon="arrow">
                View Projects
              </PremiumButton>
              <PremiumButton variant="secondary" onClick={() => scrollController.goTo(7)} icon="download">
                Download CV
              </PremiumButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex gap-8"
            >
              {[
                { value: "6 Months+", label: "Exp." },
                { value: "10+", label: "Projects" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-display font-bold text-accent">{stat.value}</div>
                  <div className="text-sm text-text-muted">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent rounded-3xl dark:block hidden" />
              <Image
                src={profile.heroImage}
                alt="Umer Saiyad - Full Stack Developer standing with arms crossed, professional portrait"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top rounded-3xl"
              />
              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-1/4 bg-surface/90 backdrop-blur-sm border border-border rounded-xl px-4 py-3 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span className="text-xs font-medium">{profile.availability}</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-8 bottom-1/3 bg-surface/90 backdrop-blur-sm border border-border rounded-xl px-4 py-3 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-xs font-medium">{profile.location}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}


// ─── About ───────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about">
      <Container>
        <SectionLabel>About Me</SectionLabel>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading>
              Passionate about creating <span className="text-accent">impactful</span> digital experiences
            </SectionHeading>
          </div>
          <div>
            <p className="text-text-secondary mb-6 leading-relaxed">
              I&apos;m a full-stack developer with {profile.experience} of experience building web applications
              that are both beautiful and functional. I specialize in React, Next.js, and Node.js ecosystems.
            </p>
            <p className="text-text-secondary mb-8 leading-relaxed">
              Currently pursuing my {profile.education}, I combine academic knowledge with hands-on
              project experience to deliver solutions that make a real difference.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: MapPin, label: profile.location },
                { icon: Mail, label: profile.email },
                { icon: Phone, label: profile.phone },
                { icon: Calendar, label: profile.experience },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-subtle flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm text-text-secondary">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─── Services ────────────────────────────────────────────────────────────────

function Services() {
  return (
    <section id="services">
      <Container>
        <div className="text-center mb-16">
          <SectionLabel>What I Do</SectionLabel>
          <SectionHeading className="mx-auto">
            Services & <span className="text-accent">Expertise</span>
          </SectionHeading>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <GlassCard key={service.title} className="h-full text-center group">
              <div className="w-14 h-14 rounded-2xl bg-accent-subtle flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-3">{service.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{service.description}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ─── Projects ────────────────────────────────────────────────────────────────

function Projects() {
  return (
    <section id="projects">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <SectionLabel>My Work</SectionLabel>
            <SectionHeading>
              Featured <span className="text-accent">Projects</span>
            </SectionHeading>
          </div>
          <PremiumButton variant="secondary" href="#" icon="arrow">
            View All
          </PremiumButton>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <GlassCard key={project.title} className="overflow-hidden group p-0">
              <div className="relative overflow-hidden aspect-[16/10]">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={project.image}
                    alt={
                      project.title === "LawAssist"
                        ? "LawAssist - Smart FIR Filing System for legal documentation and case management"
                        : project.title === "HomeFixCare"
                          ? "HomeFixCare - Home Service Management System for booking repairs and maintenance"
                          : "RadioPlugger - Song Streaming Platform for independent artists and radio promotion"
                    }
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1 text-white text-sm font-medium"
                  >
                    View Project <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-sm text-text-secondary mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-accent-subtle text-accent font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
}

// ─── Skills ──────────────────────────────────────────────────────────────────

function Skills() {
  return (
    <section id="skills">
      <Container>
        <div className="bg-surface rounded-3xl border border-border p-8 sm:p-12 lg:p-16">
          <div className="text-center mb-12">
            <SectionLabel>Tech Stack</SectionLabel>
            <SectionHeading>
              Skills & <span className="text-accent">Technologies</span>
            </SectionHeading>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {skills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center justify-center px-4 py-3 rounded-xl bg-card border border-border text-sm font-medium text-text-secondary hover:text-accent hover:border-accent/30 transition-colors cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─── Socials SEO Metadata (Always Rendered) ──────────────────────────────────

const instaAltTexts: Record<string, string> = {
  "DXBwaGAjEDZ": "Umer Saiyad, Full Stack Developer from Surat, holding a flower bouquet in a white shirt and blue jeans.",
  "DWJ1lq5DKS2": "Umer Saiyad, Full Stack Developer from Surat, wearing a black traditional kurta and glasses outdoors by a road.",
  "DT-CmqdjKJ-": "Umer Saiyad, Full Stack Developer from Surat, wearing a red sweatshirt, glasses, and a white prayer cap, leaning on a motorcycle.",
  "DNW6bFEI2qs": "Umer Saiyad, a Full Stack developer from India, posing outdoor next to a clean, polished car under bright daylight.",
  "DEkiJrHSFJD": "Umer Saiyad, Full Stack Developer from Surat, wearing a purple formal suit, a white dress shirt, and clear glasses, posing against a purple draped background with floral arrangements.",
};

const instaDates: Record<string, string> = {
  "DXBwaGAjEDZ": "2026-04-12T12:00:00+05:30",
  "DWJ1lq5DKS2": "2026-03-21T12:00:00+05:30",
  "DT-CmqdjKJ-": "2026-01-26T12:00:00+05:30",
  "DNW6bFEI2qs": "2025-08-15T12:00:00+05:30",
  "DEkiJrHSFJD": "2025-01-08T12:00:00+05:30",
};

const instagramShortcodes = [
  "DXBwaGAjEDZ",
  "DWJ1lq5DKS2",
  "DT-CmqdjKJ-",
  "DNW6bFEI2qs",
  "DEkiJrHSFJD",
];

function SocialsSEO() {
  return (
    <div className="sr-only" aria-hidden="true">
      <article itemScope itemType="https://schema.org/SocialMediaPosting">
        <span itemProp="author" itemScope itemType="https://schema.org/Person">
          <meta itemProp="name" content="Umer Saiyad" />
          <meta itemProp="url" content="https://umer-saiyad.vercel.app/" />
        </span>
        <meta itemProp="datePublished" content="2026-05-20T10:00:00+05:30" />
        
        <h3 itemProp="headline">Umer Saiyad - Full Stack Developer Surat Professional Tech Stack Update</h3>
        <p itemProp="articleBody">
          Driven by building scalable web applications and seamless user experiences. 🚀
          As a Full Stack Web Developer, I focus on bridging the gap between clean, responsive frontend user interfaces and robust, high-performance backend architecture.
          Here is a look at my current core production tech stack: Next.js, React.js, JavaScript (ES6+), HTML5, CSS3, Node.js, Express.js, REST APIs, PostgreSQL, Drizzle ORM.
        </p>
        <Image itemProp="image" src="/Umer_Saiyad_techstack.png" width={800} height={400} alt="Umer Saiyad, Full Stack Developer from Surat, smiling in a white dress shirt with arms crossed, next to glowing digital panels showcasing Next.js, PostgreSQL, Drizzle ORM, and Node.js." />
        <a itemProp="url" href="https://www.linkedin.com/feed/update/urn:li:share:7462732694418817024" rel="noopener noreferrer" target="_blank">
          View Umer Saiyad's tech-stack graphic on LinkedIn
        </a>
      </article>
      {instagramShortcodes.map((code, index) => (
        <article key={code} itemScope itemType="https://schema.org/SocialMediaPosting">
          <span itemProp="author" itemScope itemType="https://schema.org/Person">
            <meta itemProp="name" content="Umer Saiyad" />
            <meta itemProp="url" content="https://umer-saiyad.vercel.app/" />
          </span>
          <meta itemProp="datePublished" content={instaDates[code] || "2026-05-01T12:00:00+05:30"} />
          
          <h4 itemProp="headline">Umer Saiyad Instagram Web Development Post {index + 1}</h4>
          <Image itemProp="image" src={`/insta-${code}.jpg`} width={400} height={400} alt={instaAltTexts[code] || "Umer Saiyad Instagram Post"} />
          <a itemProp="url" href={`https://www.instagram.com/p/${code}/`} rel="noopener noreferrer" target="_blank">
            View Umer Saiyad's full stack developer life post {index + 1} on Instagram
          </a>
        </article>
      ))}
    </div>
  );
}

// ─── Socials (LinkedIn & Instagram Updates) ──────────────────────────────────

function Socials() {
  const [activeTab, setActiveTab] = useState<"linkedin" | "instagram">("linkedin");
  const [instaIndex, setInstaIndex] = useState(3); // Start at index 3 (first original item)
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [loadLiveLinkedIn, setLoadLiveLinkedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Prepend last 3 items, append first 3 items: [C, D, E, A, B, C, D, E, A, B, C]
  const extendedPosts = [
    ...instagramShortcodes.slice(-3),
    ...instagramShortcodes,
    ...instagramShortcodes.slice(0, 3),
  ];

  // Detect mobile state for slide calculations
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Listen to document theme mutations to toggle embedded Instagram theme
  useEffect(() => {
    const checkTheme = () => {
      // Default to dark mode (true) unless document root explicitly has the 'light' class
      setIsDarkMode(!document.documentElement.classList.contains("light"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Seamless scroll silent jump check after transitions finish
  const handleTransitionEnd = () => {
    if (instaIndex >= 8) {
      setIsTransitioning(false);
      setInstaIndex(3);
    } else if (instaIndex <= 2) {
      setIsTransitioning(false);
      setInstaIndex(7);
    }
  };

  // Re-enable transition effect in next paint loop
  useEffect(() => {
    if (!isTransitioning) {
      // A double requestAnimationFrame guarantees the browser has painted the transitionless position
      // before we re-enable transitions, completely preventing visual iframe jumps or flickers.
      const handle = window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => window.cancelAnimationFrame(handle);
    }
  }, [isTransitioning]);

  // Infinite scroll handlers
  const handlePrevInsta = () => {
    if (!isTransitioning) return;
    setInstaIndex((prev) => prev - 1);
  };

  const handleNextInsta = () => {
    if (!isTransitioning) return;
    setInstaIndex((prev) => prev + 1);
  };

  return (
    <section id="socials" className="w-full h-full flex flex-col justify-between py-2">

      <Container className="flex-grow flex flex-col justify-between max-h-[64vh]">
        <div className="text-center mb-3">
          <SectionLabel>Social Buzz</SectionLabel>
          <SectionHeading className="mx-auto mb-3 text-2xl sm:text-3xl">
            My <span className="text-accent">Socials</span> & Updates
          </SectionHeading>

          {/* Tab Selector */}
          <div className="inline-flex rounded-full bg-border/20 p-1 backdrop-blur-sm border border-border/50">
            <button
              onClick={() => setActiveTab("linkedin")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${activeTab === "linkedin"
                ? "bg-accent text-white shadow-md shadow-accent/25"
                : "text-text-secondary hover:text-accent cursor-pointer"
                }`}
            >
              <BrandIcon name="linkedin" className="w-3.5 h-3.5" />
              LINKEDIN UPDATE
            </button>
            <button
              onClick={() => setActiveTab("instagram")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${activeTab === "instagram"
                ? "bg-accent text-white shadow-md shadow-accent/25"
                : "text-text-secondary hover:text-accent cursor-pointer"
                }`}
            >
              <BrandIcon name="instagram" className="w-3.5 h-3.5" />
              INSTAGRAM POSTS
            </button>
          </div>
        </div>

        {/* Content Area - naturally scaling height */}
        <div className="w-full max-w-5xl mx-auto flex items-start justify-center flex-grow h-auto min-h-[400px]">
          {activeTab === "linkedin" ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-[800px] h-auto pb-4 px-2"
            >
              <div className="w-full bg-surface border border-border rounded-2xl p-4 shadow-xl flex flex-col md:flex-row gap-5 transition-colors duration-300">

                {/* Left Column: Text and Header */}
                <div className="flex-1 flex flex-col">
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-full border border-accent/30 overflow-hidden bg-accent-subtle flex items-center justify-center flex-shrink-0 relative">
                        <Image src="/umer-avatar.png" alt="Umer Saiyad Profile Avatar" fill sizes="40px" className="object-cover object-top" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-text flex items-center gap-1.5">
                          Umer Saiyad
                          <span className="bg-accent/15 text-accent text-[8px] px-1.5 py-0.5 rounded-full font-medium">Author</span>
                        </h4>
                        <p className="text-[9px] text-text-secondary leading-tight mt-0.5">Full Stack Developer Intern | MERN Stack | EnactOn Technologies | MCA Student</p>
                        <p className="text-[8px] text-text-muted mt-0.5">2d • Edited • Public</p>
                      </div>
                    </div>
                    <BrandIcon name="linkedin" className="w-5 h-5 text-accent hidden sm:block" />
                  </div>

                  {/* Primary Card Body */}
                  <div className="text-[11px] leading-relaxed text-text flex flex-col justify-start">
                    <p className="mb-1.5">Driven by building scalable web applications and seamless user experiences. 🚀</p>
                    <p className="mb-2">As a Full Stack Web Developer, I focus on bridging the gap between clean, responsive frontend user interfaces and robust, high-performance backend architecture.</p>
                    <p className="mb-1">Here is a look at my current core production tech stack:</p>
                    <p className="mb-0.5">🔹 <span className="font-semibold">Frontend & Frameworks:</span> Next.js, React.js, JavaScript (ES6+), HTML5, CSS3</p>
                    <p className="mb-0.5">🔹 <span className="font-semibold">Backend Ecosystem:</span> Node.js, Express.js, REST APIs, Type-Safe Development</p>
                    <p className="mb-0">🔹 <span className="font-semibold">Database & ORM:</span> PostgreSQL, Drizzle ORM</p>
                  </div>
                  {/* Action Buttons */}
                  <div className="flex items-center justify-center mt-7 ">
                    <a
                      href="https://www.linkedin.com/feed/update/urn:li:share:7462732694418817024"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 py-2 px-4 rounded-full text-[11px] font-semibold text-white bg-accent hover:bg-accent-hover shadow-md shadow-accent/20 hover:shadow-accent/40 transition-all duration-300 cursor-pointer"
                    >
                      <span>Open Original LinkedIn Post</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Right Column: Full Size Image and Footer */}
                <div className="w-full md:w-[320px] flex flex-col flex-shrink-0">
                  <div className="w-full rounded-xl overflow-hidden border border-border/50 bg-black/5 mb-3 relative">
                    <Image
                      src="/Umer_Saiyad_techstack.png"
                      alt="Umer Saiyad, Full Stack Developer from Surat, smiling in a white dress shirt with arms crossed, next to glowing digital panels showcasing Next.js, PostgreSQL, Drizzle ORM, and Node.js."
                      width={800}
                      height={400}
                      priority
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* Secondary Card Body (Footer Text) */}
                  <div className="text-[11px] leading-relaxed text-text mb-3">
                    <p className="mb-1.5">Always optimizing workflows, writing clean code, and exploring efficient data architectures. Let's connect!</p>
                    <p className="text-accent text-[9px] leading-tight font-medium">#FullStackDeveloper #WebDevelopment #SoftwareEngineer #NextJS #PostgreSQL #DrizzleORM #NodeJS #ReactJS #MERN #UmerSaiyad #SuratTech #CodingLife</p>
                  </div>


                </div>

              </div>
            </motion.div>
          ) : (
            /* Carousel slider displaying 3 beautiful height-increased theme-adaptive Instagram posts side-by-side on desktop, 1 on mobile */
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full flex flex-col justify-between items-center"
            >
              {/* Slider Body with Navigation Arrows */}
              <div className="w-full flex items-center justify-between gap-3 flex-grow">
                {/* Left Arrow Button */}
                <button
                  onClick={handlePrevInsta}
                  className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all shadow-sm cursor-pointer flex-shrink-0"
                  aria-label="Previous Instagram Post"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Viewport for sliding track */}
                <div className="flex-grow overflow-hidden px-1 py-1">
                  <div
                    className={`flex ${isTransitioning ? "transition-transform duration-500 ease-out" : ""} gap-4`}
                    onTransitionEnd={handleTransitionEnd}
                    style={{
                      transform: isMobile
                        ? `translateX(calc(-${instaIndex} * (100% + 16px)))`
                        : `translateX(calc(-${instaIndex} * (33.333% + 5.33px)))`,
                    }}
                  >
                    {extendedPosts.map((code, idx) => {
                      const locations: Record<string, string> = {
                        "DXBwaGAjEDZ": "Uka Tarsadia University",
                        "DWJ1lq5DKS2": "Kadod, Gujarat, India",
                        "DT-CmqdjKJ-": "Kadod, Gujarat, India",
                        "DNW6bFEI2qs": "Surat, Gujarat, India",
                        "DEkiJrHSFJD": "Surat, Gujarat, India",
                      };

                      return (
                        <div
                          key={idx}
                          className="flex-shrink-0 bg-card rounded-2xl border border-border flex flex-col overflow-hidden transition-all duration-300 shadow-xl group"
                          style={{
                            width: isMobile ? "100%" : "calc(33.333% - 11px)",
                            height: "380px"
                          }}
                        >
                          {/* Native Header */}
                          <div className="flex items-center justify-between p-3 border-b border-border/50 bg-card">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full overflow-hidden border border-border/30 flex-shrink-0 bg-surface relative">
                                <Image
                                  src="/umer-avatar.png"
                                  alt="Umer Saiyad Profile Avatar"
                                  fill
                                  sizes="32px"
                                  className="object-cover object-top"
                                />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[11px] font-semibold text-text leading-tight tracking-tight">the_umersaiyad</span>
                                <span className="text-[9px] text-text-muted leading-tight">{locations[code] || "Gujarat, India"}</span>
                              </div>
                            </div>
                            <a
                              href={`https://www.instagram.com/p/${code}/`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-[#0095f6] hover:bg-[#1877f2] text-white text-[10px] font-semibold px-3 py-1.5 rounded-md transition-colors"
                            >
                              Follow
                            </a>
                          </div>

                          {/* Image Container with Carousel Indicator */}
                          <a
                            href={`https://www.instagram.com/p/${code}/`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-grow w-full bg-surface relative overflow-hidden flex items-center justify-center block cursor-pointer group"
                            aria-label={`View full carousel for ${instaAltTexts[code] || 'Instagram post'}`}
                          >
                            <Image
                              src={`/insta-${code}.jpg`}
                              alt={instaAltTexts[code] || "Umer Saiyad Instagram Post"}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Instagram Carousel Icon overlay */}
                            <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm p-1.5 rounded-md shadow-sm">
                              <svg aria-label="Carousel" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 48 48">
                                <path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1.6 1.5 3.7 2.4 6 2.4h16.1c4.5 0 8.2-3.7 8.2-8.2V19.5c0-2.3-.9-4.4-2.4-6-.4-.4-1.1-.1-1.1.5z"></path>
                              </svg>
                            </div>
                          </a>

                          {/* Native Footer */}
                          <div className="p-3 border-t border-border/50 bg-card flex items-center justify-between">
                            <a
                              href={`https://www.instagram.com/p/${code}/`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] font-semibold text-text hover:text-accent transition-colors flex items-center gap-1.5"
                            >
                              View full post on Instagram
                            </a>
                            <div className="flex items-center gap-2">
                              <BrandIcon name="instagram" className="w-4 h-4 text-text-muted" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Arrow Button */}
                <button
                  onClick={handleNextInsta}
                  className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all shadow-sm cursor-pointer flex-shrink-0"
                  aria-label="Next Instagram Post"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Navigation Pager Dots */}
              <div className="flex justify-center items-center gap-2 mt-3 pb-1">
                {instagramShortcodes.map((_, idx) => {
                  const activeDot = (instaIndex - 3 + instagramShortcodes.length) % instagramShortcodes.length;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        if (!isTransitioning) return;
                        setInstaIndex(idx + 3);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activeDot === idx
                        ? "w-6 bg-accent"
                        : "w-2 bg-text-muted/30 hover:bg-accent/40"
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}

// ─── Process ─────────────────────────────────────────────────────────────────

function Process() {
  return (
    <div id="process">
      <Container>
        <div className="text-center mb-16">
          <SectionLabel>How I Work</SectionLabel>
          <SectionHeading className="mx-auto">
            My <span className="text-accent">Process</span>
          </SectionHeading>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <GlassCard key={step.step} className="h-full relative">
              <div className="w-12 h-12 rounded-2xl bg-accent-subtle flex items-center justify-center mb-5">
                <span className="font-display font-bold text-accent">{step.step}</span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-3">{step.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
            </GlassCard>
          ))}
        </div>
      </Container>
    </div>
  );
}


// ─── Contact ─────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="h-full flex items-center">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionLabel>Get In Touch</SectionLabel>
            <SectionHeading>
              Let&apos;s work <span className="text-accent">together</span>
            </SectionHeading>
            <p className="text-text-secondary mt-6 mb-8 max-w-md">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can
              bring your ideas to life.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
                { icon: Phone, label: profile.phone, href: `tel:${profile.phone}` },
                { icon: MapPin, label: profile.location, href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-subtle flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-text-secondary group-hover:text-accent transition-colors">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>

            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  <BrandIcon name={link.name} className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Workspace Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden aspect-square">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=600&fit=crop"
                alt="Modern developer workspace with laptop showing code editor"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent dark:from-bg/80" />
              <div className="absolute bottom-6 left-6 right-6">
                <GlassCard hover={false} className="bg-surface/90">
                  <p className="text-sm font-medium">Ready to start your next project?</p>
                  <p className="text-xs text-text-muted mt-1">
                    Let&apos;s create something amazing together.
                  </p>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function FooterSection() {
  return (
    <div className="absolute bottom-0 left-0 right-0 py-4 border-t border-border bg-bg/50 backdrop-blur-sm z-20">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-lg">
              US<span className="text-accent">.</span>
            </span>
            <span className="text-sm text-text-muted">
              © {new Date().getFullYear()} {profile.name}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors"
                aria-label={link.label}
              >
                <BrandIcon name={link.name} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

// ─── Scroll Progress Bar ─────────────────────────────────────────────────────

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollController.subscribe(() => {
      setProgress(scrollController.currentPage / (scrollController.totalPages - 1));
    });
    return unsubscribe;
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-accent origin-left z-[100]"
      animate={{ scaleX: progress }}
      transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
    />
  );
}

function MobileScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] bg-accent z-[100]"
      style={{ width: `${progress * 100}%`, transition: "width 0.1s linear" }}
    />
  );
}

// ─── Section Dots Navigation (Liquid Goo Effect) ─────────────────────────────

const sectionIds = ["home", "about", "services", "projects", "skills", "socials", "process", "contact"];

function SectionDots() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollController.subscribe(() => {
      setActive(scrollController.currentPage);
    });
    return unsubscribe;
  }, []);

  const handleClick = (index: number) => {
    scrollController.goTo(index);
  };

  const dotSize = 12;
  const gap = 28;
  const totalHeight = (sectionIds.length - 1) * gap + dotSize;
  const svgWidth = 36;

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <svg
        width={svgWidth}
        height={totalHeight + 10}
        viewBox={`0 0 ${svgWidth} ${totalHeight + 10}`}
        className="overflow-visible"
      >
        {/* Goo filter for liquid merging effect */}
        <defs>
          <filter id="goo-dots">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -12"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>

        {/* Inactive dots */}
        {sectionIds.map((_, index) => (
          <circle
            key={`bg-${index}`}
            cx={svgWidth / 2}
            cy={5 + index * gap + dotSize / 2}
            r={5}
            fill="rgba(148, 163, 184, 0.5)"
          />
        ))}

        {/* Group with goo filter applied — liquid blob */}
        <g filter="url(#goo-dots)">
          <motion.circle
            cx={svgWidth / 2}
            r={7}
            fill="#10b981"
            animate={{ cy: 5 + active * gap + dotSize / 2 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
          />
          <motion.circle
            cx={svgWidth / 2}
            r={6}
            fill="#10b981"
            animate={{ cy: 5 + active * gap + dotSize / 2 }}
            transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          />
          <motion.circle
            cx={svgWidth / 2}
            r={7}
            fill="#10b981"
            animate={{ cy: 5 + active * gap + dotSize / 2 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          />
        </g>

        {/* Clickable hit areas */}
        {sectionIds.map((id, index) => (
          <circle
            key={`hit-${id}`}
            cx={svgWidth / 2}
            cy={5 + index * gap + dotSize / 2}
            r={10}
            fill="transparent"
            className="cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <title>{id.charAt(0).toUpperCase() + id.slice(1)}</title>
          </circle>
        ))}
      </svg>
    </div>
  );
}


// ─── Card Sections Array ─────────────────────────────────────────────────────

const cardSections = [About, Services, Projects, Skills, Socials, Process];

// ─── Main App (Fullpage Scroll Controller) ───────────────────────────────────

export function PortfolioApp() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Subscribe to scroll controller
  useEffect(() => {
    const unsubscribe = scrollController.subscribe(() => {
      setCurrentPage(scrollController.currentPage);
    });
    return unsubscribe;
  }, []);

  // Global wheel handler — prevents ALL default scrolling (desktop only)
  useEffect(() => {
    if (isMobile) return;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        scrollController.next();
      } else if (e.deltaY < 0) {
        scrollController.prev();
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isMobile]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        scrollController.next();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        scrollController.prev();
      } else if (e.key === "Home") {
        e.preventDefault();
        scrollController.goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        scrollController.goTo(scrollController.totalPages - 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Touch support — disabled on mobile (normal scroll instead)
  useEffect(() => {
    if (isMobile) return;
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          scrollController.next();
        } else {
          scrollController.prev();
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Determine what to show
  const isHero = currentPage === 0;
  const isContact = currentPage === 7;
  const cardIndex = currentPage >= 1 && currentPage <= 6 ? currentPage - 1 : -1;

  // Mobile: normal scrollable layout (no fullpage controller)
  if (isMobile) {
    return (
      <>
        <SocialsSEO />
        <MobileScrollProgress />
        <Header />
        <main className="pt-20">
          <section className="min-h-screen flex items-center">
            <Hero />
          </section>
          <div className="px-4 py-12 space-y-20">
            <About />
            <Services />
            <Projects />
            <Skills />
            {/* Socials section completely hidden on mobile as requested */}
            <Process />
          </div>
          <section className="py-16">
            <Contact />
          </section>
        </main>
        <footer className="border-t border-border py-6 px-4 text-center text-sm text-text-muted">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-3">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent" aria-label={link.label}>
                <BrandIcon name={link.name} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </footer>
      </>
    );
  }

  return (
    <>
      <ScrollProgress />
      <SocialsSEO />
      <SectionDots />
      <Header />
      <div className="h-screen h-dvh overflow-hidden relative pointer-events-none">
        {/* Hero */}
        <motion.div
          className={`absolute inset-0 ${isHero ? "pointer-events-auto" : "pointer-events-none"}`}
          animate={{ y: isHero ? "0%" : "-100%" }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        >
          <Hero />
        </motion.div>

        {/* Card with sections */}
        <motion.div
          className={`absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 ${!isHero && !isContact ? "pointer-events-auto" : "pointer-events-none"}`}
          animate={{
            y: isHero ? "100%" : isContact ? "-100%" : "0%",
          }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        >
          <GlowCardWrapper className="w-full max-w-7xl relative">
            <div className="relative overflow-hidden" style={{ height: "75vh" }}>
              {cardSections.map((Section, index) => {
                const offset = index - cardIndex;
                // Only render active + neighbors for performance
                if (Math.abs(offset) > 1) return null;
                return (
                  <motion.div
                    key={index}
                    className="absolute inset-0 flex items-center justify-center p-6 sm:p-10 lg:p-14"
                    animate={{
                      y: `${offset * 100}%`,
                      opacity: offset === 0 ? 1 : 0,
                    }}
                    transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
                  >
                    <div className="w-full overflow-y-auto max-h-full">
                      <Section />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </GlowCardWrapper>
        </motion.div>

        {/* Contact */}
        <motion.div
          className={`absolute inset-0 ${isContact ? "pointer-events-auto" : "pointer-events-none"}`}
          animate={{ y: isContact ? "0%" : "100%" }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        >
          <Contact />
          <FooterSection />
        </motion.div>
      </div>
    </>
  );
}
