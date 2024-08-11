import ProjectCard from "@/components/project-card";
import React from "react";
import { Projects } from "@/lib/projects";
const ProjectPage = () => {
  return (
    <>
      <div className="mt-10">
        <div className="w-full flex justify-center">
          <h1 className="text-3xl font-bold text-indigo-900">Projects </h1>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2 p-4">
          {Projects.map((project) => (
            <>
              <ProjectCard {...project} key={project.projectName} />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
