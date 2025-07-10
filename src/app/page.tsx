import SkillsSection from "@/components/SkillsSection";
import {
  AdditionalToolsAndLibraries,
  experiences,
  FamiliarAndExplored,
  PrimarySkills,
  projects,
  qualifications,
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
    <div className="bg-neutral-950 text-neutral-200">
      {/* hero-section */}
      <div
        className="bg-neutral-950 flex justify-center flex-wrap-reverse items-center gap-6 md:gap-24 pt-28 pb-4 md:pt-44 md:pb-32"
        id="home"
      >
        <div className="info max-w-[600px] p-3">
          <a href="#home">
            <h1 className="text-4xl font-bold text-yellow-300">
              Namaste, <br /> I&apos;m Jaydeep Ramanuj 👋
            </h1>
          </a>
          <h1 className="mt-6 text-neutral-300">
            I’m a frontend developer skilled in React and Next.js, aiming to
            build fast, scalable, and responsive web applications that deliver
            real value. With 1 year and 4 months of teaching experience, I blend
            technical ability with strong communication. I aim to build
            real-world solutions and grow both as a developer and as a person.
          </h1>
          <div className="flex mt-6 gap-6 text-yellow-200">
            <a
              href="https://github.com/JaydeepRamanuj"
              className="block w-fit  p-1.5 rounded hover:bg-white/10 text-xl"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/jaydeep-ramanuj"
              className="block w-fit p-1.5 rounded hover:bg-white/10 text-xl"
            >
              <SlSocialLinkedin />
            </a>
            <a
              href="https://codepen.io/jd-coding-03"
              className="block w-fit p-1.5 rounded hover:bg-white/10 text-xl"
            >
              <FaCodepen />
            </a>
            <a
              href="mailto:jaydeepramanuj.jd@gmail.com"
              className="block w-fit p-1.5 rounded hover:bg-white/10 text-xl"
            >
              <MdOutlineEmail />
            </a>
          </div>
          <a
            href="/Resume_Jaydeep_Ramanuj_July_2025.pdf"
            download="Resume_Jaydeep_Ramanuj_July_2025.pdf"
            className="block mt-6 w-fit  px-4 py-1.5 rounded-full bg-yellow-400/10 text-yellow-300 hover:bg-yellow-400/20 active:scale-95 transition-all"
          >
            Download Resume
          </a>
        </div>
        <div>
          <div className="h-[200px] md:h-[300px] w-[150px] md:w-[250px] rounded relative isolate after:w-full after:h-full after:bg-yellow-300/10 after:rounded after:absolute after:top-4 after:left-4 md:after:top-10  md:after:left-10 after:-z-10">
            <img
              src="/me.jpeg"
              alt="hero-image.jpg"
              className="w-full h-full object-cover rounded z-10 border-8 border-black"
            />
          </div>
        </div>
      </div>

      {/* skills-section */}
      <div className="p-3 md:py-10 md:px-24 bg-neutral-900" id="skills">
        <SectionTitle title="Skills" />
        <div className="mt-4 md:mt-10 flex flex-wrap md:flex-nowrap gap-3 justify-evenly">
          <SkillsSection
            title="Primary (FrontEnd) Skills"
            data={PrimarySkills}
          />
          <SkillsSection
            title="Additional Skills (+ BackEnd)"
            data={AdditionalToolsAndLibraries}
          />
          <SkillsSection title="Explored skills" data={FamiliarAndExplored} />
        </div>
        <div className="w-fit mx-auto mt-6 flex flex-col sm:flex-row bg-white/10 text-yellow-200 rounded-md sm:rounded-full px-3 py-1 gap-6">
          <div className="flex items-center gap-2">
            <span className="block h-4 w-4 rounded-full bg-green-500/60"></span>
            <span>Core Expertise</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="block h-4 w-4 rounded-full bg-green-300/60"></span>
            <span>Confident</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="block h-4 w-4 rounded-full bg-yellow-300/20"></span>
            <span>Intermediate</span>
          </div>
        </div>
      </div>

      {/* projects-section */}
      <div className="p-3 md:py-10 md:px-24 bg-neutral-950" id="projects">
        <SectionTitle title="Projects" />
        <div className="flex flex-col mt-6 items-center gap-6">
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

      {/* experience-section */}
      <div className="p-3 md:py-10 md:px-24 bg-neutral-900" id="experience">
        <SectionTitle title="Experience" />
        <div className="mt-6 w-fit mx-auto flex flex-col gap-6">
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
        <div className="mt-6 mx-auto max-w-[700px]">
          <h3 className="text-xl font-semibold">Note:</h3>
          <ul className="mt-4 list-disc list-inside text-neutral-300">
            <li>
              <span>
                I also have <b>7 month experience</b> collaborating on freelance
                projects on
              </span>
              <Image
                src="/techIcons/Flutter.png"
                alt="flutter.png"
                width={24}
                height={24}
                className="mx-2 inline"
              />
              <b className="">Flutter.</b>
            </li>
            <li>
              I primarily developed UI components for apps, occasionally
              contributing to core logic as well.
            </li>
            <li>I was learning and working under supervision of a friend</li>
            <li>
              (Since it was freelance and informal work, I&apos;m not writing it
              as experience)
            </li>
          </ul>
        </div>
      </div>

      {/* Qualification-section */}
      <div className="p-3 md:py-10 md:px-24 bg-neutral-950" id="qualification">
        <SectionTitle title="Qualification" />
        <div className="mt-6 max-w-[1000px] mx-auto">
          <div className="p-2 md:p-4 rounded-xl bg-neutral-800 flex justify-between shadow-md text-center text-neutral-300">
            <span className="flex-1">University Name</span>
            <span className="flex-1">Course</span>
            <span className="flex-1">CGPA</span>
            <span className="flex-1">Passing Year</span>
          </div>

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

      {/* Mindset and Values-section */}
      <div className="p-3 md:py-10 lg:px-24 bg-neutral-900">
        <SectionTitle title="Mindset" />
        <div className="w-full lg:w-1/2 mx-auto text-neutral-300 text-start md:text-justify mt-6">
          <p>
            I want to bridge the gap between <b>coding</b> and
            <strong> programming</strong>, because being a programmer means more
            than just writing code — it’s about solving real problems and
            delivering real value. While I’m eager to explore new technologies,
            I also respect and rely on battle-tested tools that ensure
            reliability, performance, and long-term maintainability.
          </p>
          <p className="mt-3">
            Though I’m focused on self-growth, I deeply understand the
            importance of aligning with a company’s environment and
            expectations. I’m committed to acquiring the skills and mindset
            needed to contribute meaningfully to both the company’s goals and my
            own evolution. When we work together, we grow together — and that’s
            the kind of journey I want to be part of.
          </p>

          <hr className="border-gray-600 my-3" />
          <details className="mt-2 text-gray-300">
            <summary>Unedited version</summary>
            <p className="mt-3">
              I want to bridge the gap between coding and programming, as
              programmer would has to do more than just write code. I want my
              skills to deliver real values and solve real world problems. Even
              though I want to learn new tech, I want to respect and use battle
              tested techs that ensures reliability.
            </p>
            <p className="mt-3">
              While I’m focused on self growth, I’m equally aware of company
              environment and its expectations. I want to acquire skills and
              work hard to contribute to growth of my employer and myself
              because when we work together, we grow together.
            </p>
          </details>
          {/* <div>
            <h4 className="text-xl font-semibold mt-6">Note on AI Usage</h4>
            <p className="mt-3">
              I actively explore AI tools like ChatGPT to deepen my
              understanding of concepts, taking notes, debug tricky issues, and
              improve my communication — especially for writing better README
              files and summaries.
              <strong className="mx-2">
                However, all code across my portfolio and GitHub is handwritten
                by me as part of my learning process.
              </strong>
              I believe in using AI as a supportive tool, not a replacement for
              fundamental skills.
            </p>
          </div> */}

          <div>
            <h4 className="text-xl font-semibold mt-6 underline decoration-yellow-300/80  underline-offset-4">
              Note on AI Usage
            </h4>
          </div>
          <p className="mt-3">
            I actively leverage AI tools like ChatGPT to enhance my development
            process, viewing them as powerful assistants rather than
            replacements for fundamental skills. My applications of AI include:
          </p>
          <ul className="list-disc">
            <li className="mt-2">
              <b>Accelerating Learning:</b> Deepening my understanding of
              complex concepts and exploring new technologies.
            </li>
            <li className="mt-2">
              <b> Problem Solving:</b> Debugging tricky issues and identifying
              efficient solutions.
            </li>
            <li className="mt-2">
              <b>Communication & Documentation:</b> Crafting clear and concise
              README files, project summaries, and explanations.
            </li>
            <li className="mt-2">
              <b>UI/UX Enhancement:</b> Expediting the visual design and styling
              of user interfaces (e.g., with Tailwind CSS), where I guide the AI
              to achieve specific aesthetic goals while maintaining a deep
              understanding of the underlying implementation.
            </li>
          </ul>

          <p className="mt-3">
            Crucially, all core application logic and architectural code across
            my portfolio and GitHub is handwritten by me as an integral part of
            my continuous learning journey. I believe in using AI strategically
            to boost productivity and refine output, while always ensuring
            mastery of the foundational skills.
          </p>

          <div>
            <h3 className="text-xl font-semibold mt-6 underline decoration-yellow-300/80  underline-offset-4">
              My Roadmap for the Next 12–15 Months
            </h3>
            <p className="text-gray-200 mt-2">
              I believe being a developer means continuously evolving. My goal
              for the upcoming year is to solidify my core frontend skills
              (especially React and Next.js), then gradually expand into
              supporting libraries, testing practices, and backend technologies
              — ultimately growing into a well-rounded, industry-ready engineer.
            </p>

            <ol className="list-decimal list-inside text-gray-300 mt-3 space-y-1">
              <li>
                Strengthen fundamentals of
                <b className="mx-1">React, Next.js, and TypeScript</b> to match
                modern development standards and best practices
              </li>
              <li>
                Learn/practice essential frontend tools like
                <b className="mx-1">
                  Jest, React Testing Library, shadcn/ui, MUI, Formik, Storybook
                  and many more useful libraries
                </b>
              </li>
              <li>
                Familiarize myself with common dev workflows and collaboration
                tools like <b>Slack</b>, <b>Asana</b>, and project versioning
                practices
              </li>
              <li>
                Strengthen soft skills including
                <b className="mx-1">
                  communication, team collaboration, and problem-solving
                </b>
              </li>
              <li>
                Explore modern backend technologies such as
                <b className="mx-1">GraphQL, PostgreSQL, and Redis</b> to
                enhance frontend expertise
              </li>
            </ol>

            <p className="mt-4 text-gray-400 italic">
              I&apos;m not trying to learn everything at once — just taking
              consistent, focused steps to grow as a developer and bring more
              value to the teams I work with.
            </p>
          </div>
        </div>
      </div>

      {/* contact me section */}
      <div className="p-3 md:py-10 md:px-24 bg-neutral-950" id="contact">
        <SectionTitle title="Get in touch" />
        <div className="mx-auto mt-6 max-w-[500px] text-center text-neutral-300">
          <h3 className="text-lg sm:text-xl">
            Feel free to reach out to me if you are looking for a developer,
            have a query, or simply want to connect.
          </h3>
          <h1 className="mt-6 flex gap-4 justify-center items-center text-xl sm:text-3xl text-yellow-300">
            <MdOutlineEmail />
            <a href="mailto:jaydeepramanuj.jd@gmail.com">
              jaydeepramanuj.jd@gmail.com
            </a>
          </h1>
          <h1 className="mt-4 flex gap-4 justify-center items-center text-xl sm:text-3xl text-yellow-300">
            <IoCallOutline />
            <a href="tel:+919510134230">+91 9510134230</a>
          </h1>
          <div className="mt-10">
            <h4>You may also find me on these platforms!</h4>
            <div className="flex w-fit mx-auto mt-4 gap-6 text-yellow-200">
              <a
                href="https://github.com/JaydeepRamanuj"
                className="block w-fit  p-1.5 rounded hover:bg-white/10 text-xl"
              >
                <FiGithub />
              </a>
              <a
                href="https://linkedin.com/in/jaydeep-ramanuj"
                className="block w-fit p-1.5 rounded hover:bg-white/10 text-xl"
              >
                <SlSocialLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
