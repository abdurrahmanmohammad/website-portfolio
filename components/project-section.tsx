import { Github, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./slide-up";

const projects = [
  {
    name: "Courshop",
    description:
      "A scalable MERN e-commerce platform with microservices and serverless architecture for small businesses",
    image: "/Courshop.jpg",
    github: "https://github.com/abdurrahmanmohammad/CourshopFrontendSpringBoot",
    link: "",
  },
  {
    name: "Office Supply Depot",
    description:
      "A n e-commerce web application for inventorying, selling, and delivering office supplies using PHP and MySQL",
    image: "/OfficeSupplyDepot.jpg",
    github: "https://github.com/abdurrahmanmohammad/CS160-Software-Engineering",
    link: "",
  },
  {
    name: "Course Management System",
    description:
      "A database web application in Java, HTML, and CSS intended to serve as an LMS for small institutions",
    image: "/CourseManagementSystem.jpg",
    github: "https://github.com/abdurrahmanmohammad/CS157A-Introduction-to-Database-Management-Systems",
    link: "",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <Github
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <SquareArrowOutUpRight
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
