"use client";

const skills = [
  { skill: "Java" },
  { skill: "Spring Boot" },
  { skill: "Python" },
  { skill: "C" },
  { skill: "Node" },
  { skill: "Express" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Tailwind CSS" },
  { skill: "MySQL" },
  { skill: "PostgreSQL" },
  { skill: "Mongo DB" },
  { skill: "AWS" },
  { skill: "Jenkins" },
  { skill: "Docker" },
  { skill: "Kubernetes" },
  { skill: "Linux" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "JSON" },
  { skill: "REST" },
  { skill: "API" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
      <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Abdurrahman and I am{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span>
              Software Engineer based in Santa Clara, CA.
            </p>
            <br />

            <p>
              I graduated from San Jose State University in 2020 with a
              Bachelor&#39;s in Computer Science and have worked in prestigious
              companies including Cognizant and Visa.
            </p>
            <br />
            <p>
              Abdurrahman has a robust technical skill set, including
              proficiency in Java, Python, Spring Boot, JavaScript, TypeScript,
              Next.js, React.js, and Node.js. His expertise extends to backend
              development, focusing on microservices, RESTful architecture, and
              object-oriented programming. He has hands-on experience with AWS,
              Docker, Kubernetes, and various database technologies such as
              MySQL, MongoDB, and DynamoDB.
            </p>
            <br />
            <p>
              I&#39;m a firm believer of{" "}
              <span className="font-bold text-blue-500">
                the growth mindset
              </span>
              , that we should embrace every challenge as an opportunity to grow
              and push beyond your limits. Our dedication and hard work today
              will shape the successful future we envision
            </p>
          </div>

          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => (
                <p
                  key={idx}
                  className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                >
                  {item.skill}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
