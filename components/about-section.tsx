"use client";

const skills = [
  { skill: "Java" },
  { skill: "Spring Boot" },
  { skill: "Python" },
  { skill: "C" },
  { skill: "Node.js" },
  { skill: "Express" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Tailwind CSS" },
  { skill: "MySQL" },
  { skill: "PostgreSQL" },
  { skill: "MongoDB" },
  { skill: "AWS" },
  { skill: "Jenkins" },
  { skill: "Docker" },
  { skill: "Kubernetes" },
  { skill: "Linux" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "JSON" },
  { skill: "RESTful APIs" },
  { skill: "API Design" },
];

const AboutSection = () => {
  return (
    <section id="about" className="my-12 pb-12 md:pt-16 md:pb-48">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-center font-bold text-4xl mb-8">
          About Me
          <hr className="w-16 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col md:flex-row md:space-x-10 md:space-y-0 space-y-10 md:text-left text-center">
          {/* Left Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-6">Get to know me!</h2>
            <p className="mb-6">
              Hello! I’m Abdurrahman, a passionate and driven software engineer
              based in Santa Clara, CA. I am constantly striving for growth,
              armed with a highly ambitious, self-motivated, and
              solution-oriented mindset.
            </p>
            <p className="mb-6">
              I graduated with a Bachelor's in Computer Science from San Jose
              State University in 2020. Over the years, I’ve had the opportunity
              to contribute to prestigious organizations like Cognizant and
              Visa, where I refined my skills in software engineering and
              problem-solving.
            </p>
            <p className="mb-6">
              My expertise spans a broad range of technologies, including Java,
              Python, Spring Boot, and modern JavaScript frameworks such as
              React.js, Next.js, and Node.js. I have a strong background in
              backend development, working extensively with microservices,
              RESTful architecture, and object-oriented design patterns.
            </p>
            <p className="mb-6">
              I am also well-versed in cloud technologies like AWS, and
              containerization tools like Docker and Kubernetes. I have hands-on
              experience working with databases such as MySQL, MongoDB, and
              DynamoDB, allowing me to build highly scalable and efficient
              systems.
            </p>
            <p>
              I firmly believe in the power of{" "}
              <span className="font-semibold text-blue-500">
                a growth mindset
              </span>
              . I see every challenge as an opportunity to learn, innovate, and
              improve. Through dedication and hard work, we can shape the future
              we aspire to.
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-6">My Technical Skills</h2>
            <div className="flex flex-wrap justify-center md:justify-start">
              {skills.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-gray-200 px-4 py-2 mr-2 mb-2 text-gray-700 rounded-full font-semibold text-sm"
                >
                  {item.skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
