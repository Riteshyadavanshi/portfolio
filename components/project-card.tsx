import Image from "next/image";
import React from "react";
import { Button } from "./custome-btn";
import RedirectBtn from "./redirect-btn";
interface ProjectCardProps {
  projectName : string;
  projectUrl: string;
  description: string;
  imageUrl: string;
}
const ProjectCard = (
    {
        projectName,
        projectUrl,
        description,
        imageUrl,
      }: ProjectCardProps
) => {
  return (
    <>
      <div className="border-2 border-gray-300 w-full p-4 rounded-md space-y-2">
        <div className="w-full">
          <Image src={imageUrl} width={400} height={400} alt="" className="object-cover w-full rounded-sm"  />
        </div>
        <div className="space-y-2">
            <h1 className="text-3xl ">{projectName}</h1>
          <p className="text-gray-600">
            {
                description
            }
          </p>
        </div>
        <div>
            <RedirectBtn url={projectUrl}/>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
