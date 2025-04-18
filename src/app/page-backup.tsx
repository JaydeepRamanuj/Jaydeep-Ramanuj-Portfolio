import Image from "next/image";
import {
  CodeBracketIcon,
  CommandLineIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";
import SkillChip from "@/components/SkillChip";
import {
  AdditionalToolsAndLibraries,
  FamiliarAndExplored,
  PrimarySkills,
} from "./data";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                Hi, I'm
                <span className="text-blue-600 dark:text-blue-400">
                  Your Name
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300">
                Full Stack Developer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                I build exceptional digital experiences that make an impact.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  View My Work
                </a>
              </div>
            </div>
            <div className="relative h-80 md:h-96">
              <Image
                src="/hero-image.jpg"
                alt="Hero Image"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I'm a passionate Full Stack Developer with expertise in building
                modern web applications. With a strong foundation in both
                frontend and backend technologies, I create seamless user
                experiences and robust systems.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                My journey in software development began [Your Story]. Since
                then, I've worked on various projects ranging from small
                business websites to complex web applications.
              </p>
            </div>
            <div className="relative h-80">
              <Image
                src="/about-image.jpg"
                alt="About Image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <CodeBracketIcon className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Primary Skills (FrontEnd)
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {PrimarySkills.map((skill, index) => (
                  <SkillChip
                    skill={skill.name}
                    level={skill.level}
                    iconPath={skill.icon}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <ServerIcon className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Additional Tools & Libraries ( + BackEnd)
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {AdditionalToolsAndLibraries.map((skill, index) => (
                  <SkillChip
                    skill={skill.name}
                    level={skill.level}
                    iconPath={skill.icon}
                    key={index}
                  />
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <CommandLineIcon className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Tools & Others
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {FamiliarAndExplored.map((skill, index) => (
                  <SkillChip
                    skill={skill.name}
                    level={skill.level}
                    iconPath={skill.icon}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                description:
                  "A full-stack e-commerce platform with payment integration and admin dashboard.",
                technologies: ["React", "Node.js", "MongoDB"],
                image: "/project1.jpg",
                link: "#",
              },
              {
                title: "Task Management App",
                description:
                  "A collaborative task management application with real-time updates.",
                technologies: ["Next.js", "Firebase", "Tailwind CSS"],
                image: "/project2.jpg",
                link: "#",
              },
              {
                title: "Portfolio Website",
                description:
                  "A modern portfolio website built with Next.js and Tailwind CSS.",
                technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
                image: "/project3.jpg",
                link: "#",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
