import SkillsSection from "@/components/SkillsSection";
import SkillsInteractive from "@/components/SkillsInteractive";
import {
  BackendStack,
  experiences,
  FrontendStack,
  projects,
  qualifications,
  ToolsAndOthers,
} from "./data";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import ExperienceCard from "@/components/ExperienceCard";
import Image from "next/image";
import QualificationsCard from "@/components/QualificationsCard";
import { FaCodepen } from "react-icons/fa";

export default function Home() {
  return (
    <div className="pt-12 md:pt-0 min-h-screen text-neutral-200">
      {/* hero-section */}
      <div
        className="min-h-[90vh] flex flex-col justify-center items-center px-4 relative pt-20 pb-12"
        id="home"
      >
        {/* Background glow specific to Hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="max-w-4xl w-full mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="order-2 md:order-1 flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Namaste, <br />
              I&apos;m <span className="text-gradient-gold">Jaydeep Ramanuj</span> <span className="inline-block animate-wave">👋</span>
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              I’m a frontend developer skilled in <b className="text-neutral-200">React</b> and <b className="text-neutral-200">Next.js</b>, creating fast, scalable, and responsive web applications that deliver real value.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="/Jaydeep_Ramanuj_Frontend.pdf"
                download="Jaydeep_Ramanuj_Frontend.pdf"
                className="px-8 py-3 rounded-full bg-yellow-500 text-neutral-950 font-bold hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] active:scale-95"
              >
                Download Resume
              </a>
              <div className="flex gap-4 items-center">
                <a href="https://github.com/JaydeepRamanuj" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all text-2xl text-neutral-400"><FiGithub /></a>
                <a href="https://linkedin.com/in/jaydeep-ramanuj" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-400 transition-all text-2xl text-neutral-400"><SlSocialLinkedin /></a>
                <a href="https://codepen.io/jd-coding-03" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-all text-2xl text-neutral-400"><FaCodepen /></a>
                <a href="mailto:jaydeepramanuj.jd@gmail.com" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-yellow-400 transition-all text-2xl text-neutral-400"><MdOutlineEmail /></a>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/5 shadow-2xl">
              <img
                src="/me.jpeg"
                alt="Jaydeep Ramanuj"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full border border-yellow-500/20 scale-110 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* skills-section */}
      <SkillsInteractive />

      {/* projects-section */}
      <div
        className="py-12 md:py-24 px-4 md:px-8 relative"
        id="projects"
      >
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Featured Projects" />
          <div className="flex flex-col gap-12 mt-12 items-center">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                img={project.img}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                tags={project.tags}
                isUnderDevelopment={project.isUnderDevelopment}
                specialMessage={project.specialMessage}
                specialLink={project.specialLink}
                specialMessageType={project.specialMessageType}
                specialNode={project.specialNode}
              />
            ))}
          </div>
        </div>
      </div>

      {/* experience-section */}
      <div className="py-12 md:py-24 px-4 md:px-8 max-w-5xl mx-auto" id="experience">
        <SectionTitle title="Professional Experience" />
        <div className="mt-12 flex flex-col gap-8 relative before:absolute before:left-8 md:before:left-[50%] before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              companyLogo={experience.companyLogo}
              companyName={experience.companyName}
              role={experience.role}
              startDate={experience.startDate}
              endDate={experience.endDate}
              points={experience.points}
            />
          ))}
        </div>

        <div className="mt-16 p-6 rounded-2xl bg-neutral-900/30 border border-white/5 backdrop-blur-sm mx-auto max-w-3xl">
          <div className="flex items-start gap-4">
            <span className="text-2xl mt-1">💡</span>
            <div>
              <h3 className="text-lg font-semibold text-neutral-200 mb-2">Freelance Note</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                I also have <b>7 months of freelance experience</b> working with
                <Image
                  src="/techIcons/Flutter.png"
                  alt="flutter"
                  width={20}
                  height={20}
                  className="inline mx-1.5 align-text-bottom"
                />
                <b>Flutter</b>. I primarily developed UI components under supervision.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Qualification-section */}
      <div className="py-12 md:py-24 px-4 md:px-8" id="qualification">
        <SectionTitle title="Education" />
        <div className="mt-12 max-w-4xl mx-auto">
          {/* Keeping the grid layout but making it nicer */}
          <div className="hidden md:grid grid-cols-4 gap-4 p-4 mb-4 text-sm font-semibold text-neutral-500 uppercase tracking-wider border-b border-white/10">
            <span className="col-span-1">University</span>
            <span className="col-span-1">Course</span>
            <span className="col-span-1">CGPA</span>
            <span className="col-span-1 text-right">Year</span>
          </div>

          <div className="space-y-4">
            {qualifications.map((qualification, index) => (
              <QualificationsCard
                key={index}
                collageName={qualification.collageName}
                courseName={qualification.courseName}
                CGPA={qualification.CGPA}
                passingYear={qualification.passingYear}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mindset and Values-section */}
      <div className="py-12 md:py-24 px-4 md:px-8 bg-neutral-900/20">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="My Philosophy" />

          <div className="mt-12 grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-neutral-300 leading-relaxed">
              <h3 className="text-2xl font-bold text-neutral-100">Coding vs Programming</h3>
              <p>
                I believe being a programmer is about more than just writing code—it’s about <span className="text-yellow-400">solving real problems</span>.
                While I love exploring new tech, I rely on battle-tested tools for production.
              </p>
              <p>
                Growth is a two-way street. I seek environments where I can contribute to the company's goals while evolving my own skills.
              </p>
            </div>

            <div className="space-y-6 text-neutral-300 leading-relaxed">
              <h3 className="text-2xl font-bold text-neutral-100">AI as an Accelerator</h3>
              <p>
                I leverage AI as a powerful assistant to accelerate learning and debug faster, but <span className="text-yellow-400">I never let it replace understanding</span>.
                All core architecture and logic are handwritten and fully understood.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-white/5 text-center" id="contact">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Connect</h2>
            <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
              Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a href="mailto:jaydeepramanuj.jd@gmail.com" className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                <MdOutlineEmail className="text-xl text-yellow-400" />
                <span>jaydeepramanuj.jd@gmail.com</span>
              </a>
              <a href="tel:+919510134230" className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                <IoCallOutline className="text-xl text-yellow-400" />
                <span>+91 9510134230</span>
              </a>
            </div>

            <div className="flex justify-center gap-6 mt-8">
              <a href="https://github.com/JaydeepRamanuj" target="_blank" className="text-2xl text-neutral-500 hover:text-white transition-colors"><FiGithub /></a>
              <a href="https://linkedin.com/in/jaydeep-ramanuj" target="_blank" className="text-2xl text-neutral-500 hover:text-blue-400 transition-colors"><SlSocialLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
