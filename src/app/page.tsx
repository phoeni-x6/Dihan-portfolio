import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
      
      <main>
        <Hero />
        <TechStack />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}


/* ================= HERO ================= */

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-96 w-96 bg-purple-600/20 blur-3xl rounded-full" />
      <div className="absolute top-1/3 -right-40 h-96 w-96 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto grid gap-14 md:grid-cols-2 items-center">
        <div className="text-center md:text-left">
          <span className="inline-block mb-4 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-sm text-purple-300">
            Web Developer • Freelancer
          </span>

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold">
            Hi, I’m <span className="text-purple-400">Dihan</span>
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-xl">
            I design and build modern, high-performance websites and
            landing pages that help businesses grow online.
          </p>

          <div className="mt-10 flex gap-4 justify-center md:justify-start">
            <a
              href="https://wa.me/947XXXXXXXX"
              className="rounded-full bg-purple-500 px-8 py-4 font-semibold hover:bg-purple-400 transition"
            >
              Contact on WhatsApp
            </a>
            <a
              href="#projects"
              className="rounded-full border border-neutral-700 px-8 py-4 font-semibold hover:border-purple-500 transition"
            >
              View Projects
            </a>
          </div>
          {/* SOCIAL LINKS */}
<div className="mt-10 flex items-center gap-5 justify-center md:justify-start">
  <SocialLink
    href="https://github.com/phoeni-x6"
    label="GitHub"
    icon={
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.44 7.86 10.97.58.1.79-.25.79-.56v-2.1c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.52-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.43-2.71 5.41-5.29 5.69.41.35.77 1.04.77 2.1v3.12c0 .31.21.67.8.56A11.53 11.53 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5z"
        />
      </svg>
    }
  />

  <SocialLink
    href="https://linkedin.com/in/USERNAME"
    label="LinkedIn"
    icon={
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05C20.7 8.6 22 11 22 14.7V21h-4v-5.3c0-1.26-.02-2.88-1.75-2.88-1.75 0-2.02 1.37-2.02 2.78V21H9z"
        />
      </svg>
    }
  />

  <SocialLink
  href="https://discord.com/users/779867100042362880"
  label="Discord"
  icon={
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.0371 19.7363 19.7363 0 0 0-4.8852 1.5152.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.3196 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561 19.9112 19.9112 0 0 0 5.9931 3.0304.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057 13.2012 13.2012 0 0 1-1.8722-.9004.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7937 8.18 1.7937 12.0614 0a.0739.0739 0 0 1 .0785.0096c.1202.0991.246.1981.3728.2924a.077.077 0 0 1-.0066.1276 12.299 12.299 0 0 1-1.8732.8994.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.2256 1.9932a.076.076 0 0 0 .0842.0286 19.855 19.855 0 0 0 6.0021-3.0304.077.077 0 0 0 .0312-.0552c.5004-5.177-.8381-9.6739-3.5485-13.6604a.061.061 0 0 0-.0312-.0286z"
      />
    </svg>
  }
/>


  <SocialLink
    href="https://instagram.com/dihanhewage"
    label="Instagram"
    icon={
      <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.8-2.3a1.3 1.3 0 1 1-1.3-1.3 1.3 1.3 0 0 1 1.3 1.3z"
        />
      </svg>
    }
  />
</div>

        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden border border-purple-500/40 shadow-[0_0_60px_rgba(168,85,247,0.25)]">
            <Image
              src="/images/me.jpeg"
              alt="Dihan portrait"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-gray-400 hover:text-purple-400 transition transform hover:-translate-y-1"
    >
      {icon}
    </a>
  );
}


/* ================= TECH STACK ================= */

function TechStack() {
  const techs = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Git",
    "Vercel",
  ];

  return (
    <section className="py-16 border-y border-neutral-800 overflow-hidden">
      <h3 className="text-center text-gray-400 mb-8">Tech Stack</h3>
      <div className="flex gap-6 w-max px-6 tech-marquee">
        {[...techs, ...techs].map((tech, i) => (
          <div
            key={i}
            className="min-w-[160px] rounded-xl bg-neutral-900 px-6 py-4 border border-neutral-800 text-gray-300"
          >
            {tech}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= SERVICES ================= */

function Services() {
  return (
    <section
      className="py-24 px-6"
      aria-labelledby="services-title"
    >
      <h2
        id="services-title"
        className="text-3xl font-bold text-center mb-12"
      >
        Services
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        <ServiceCard
          title="Landing Pages"
          description="High-converting landing pages designed to capture leads, load fast, and perform well on search engines."
        />

        <ServiceCard
          title="Business Websites"
          description="Professional, responsive business websites that clearly represent your brand and build trust with customers."
        />

        <ServiceCard
          title="Managed Web Hosting"
          description="Reliable, secure, and fully managed hosting with updates, backups, and performance monitoring handled for you."
        />
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl bg-neutral-900 p-8 border border-neutral-800 hover:border-purple-500/50 transition">
      <h3 className="text-xl font-semibold text-purple-400 mb-3">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

/* ================= PROJECTS ================= */

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-neutral-900">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        <ProjectCard
          title="Purana Ayurveda"
          description="Modern wellness website with calming UI."
          status="Live"
          image="/projects/ayurvedalogo.png"
        />
        <ProjectCard
          title="Business Landing Page"
          description="High-converting WhatsApp lead page."
          status="Live"
          image="/projects/business-landing.jpg"
        />
        <ProjectCard
          title="EcoLens"
          description="Photography gallery platform in development."
          status="In Progress"
          image="/projects/ecolens.jpg"
        />
      </div>
    </section>
  );
}

/* ================= ABOUT ================= */

function About() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl font-bold mb-12 text-center">
          About Me
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          
          {/* STORY */}
          <div className="md:col-span-2 rounded-2xl bg-neutral-900 p-8 border border-neutral-800">
            <p className="text-gray-300 mb-4">
              I’m a web developer who focuses on creating clean,
              modern websites that are not just visually appealing,
              but also fast, responsive, and conversion-focused.
            </p>

            <p className="text-gray-400 mb-4">
              I enjoy turning ideas into real products — whether
              it’s a landing page for leads or a full business
              website that represents a brand professionally.
            </p>

            <p className="text-gray-400">
              My approach is simple: understand the goal, design
              with purpose, and build with performance in mind.
            </p>
          </div>

          {/* SKILLS / HIGHLIGHTS */}
          <div className="rounded-2xl bg-black p-8 border border-purple-500/40">
            <h3 className="text-xl font-semibold mb-6 text-purple-400">
              Core Skills
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>⚡ Fast & SEO-ready websites</li>
              <li>🎨 Clean, modern UI design</li>
              <li>📱 Mobile-first & responsive</li>
              <li>⚙️ Next.js & TypeScript</li>
              <li>🚀 Performance optimization</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}


/* ================= CONTACT ================= */

function Contact() {
  return (
    <section className="py-32 px-6 bg-neutral-900">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-4xl font-bold mb-6">
          Let’s Work Together
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Have a project in mind or need a professional website?
          I’m open to freelance work and collaborations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/94768339970"
            className="rounded-full bg-purple-500 px-10 py-4 font-semibold text-white hover:bg-purple-400 transition"
          >
            Contact on WhatsApp
          </a>

          <a
            href="mailto:dihanhewage123@gmail.com"
            className="rounded-full border border-neutral-700 px-10 py-4 font-semibold text-white hover:border-purple-500 transition"
          >
            Send an Email
          </a>
        </div>

      </div>
    </section>
  );
}

/* ================= FOOTER ================= */

function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-6 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} Dihan Hewage
    </footer>
  );
}
