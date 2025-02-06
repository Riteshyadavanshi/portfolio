import React from "react";
import { Button } from "./custome-btn";
import Image from "next/image";

export const SkillSection = () => {
  return (
    <div className="px-2 md:px-10 space-y-4">
      <h1 className="text-3xl font-bold text-indigo-950">My Skills</h1>
      <div className="gap-2 grid grid-cols-2   md:grid-cols-4" key="sd">
        {
          Skills.map((skill)=>(
            <>
             <SkillCard {...skill} key={skill.imageUrl}/>
            </>
          ))
        }
        </div>
    </div>
  );
};

const Skills: skillCardProps[] = [ 
  {
    imageUrl: "/portfolio/nextjs.png",
    label: "Nextjs",
  },
  {
    imageUrl: "/portfolio/react.png",
    label: "Reactjs",
  },
 
  {
    imageUrl: "/portfolio/js.png",
    label: "Javascript",
  },
  {
    imageUrl: "/portfolio/ts.png",
    label: "Typescript",
  },
  {
    imageUrl: "/portfolio/nodejs.png",
    label: "Nodejs",
  },
  {
    imageUrl: "/portfolio/mongodb.png",
    label: "Mongodb",
  },
  {
    imageUrl: "/portfolio/tailwind.png",
    label: "Tailwind Css",
  },

  {
    imageUrl: "html.png",
    label: "Html",
  },
  {
    imageUrl: "css.png",
    label: "Css",
  },
];

interface skillCardProps {
  imageUrl: string;
  label: string;
}
const SkillCard = ({ imageUrl, label }: skillCardProps) => {
  return (
    <>
      <div className="bg-slate-300 py-2  space-y-2 flex flex-col justify-center items-center">
        <div>
          <Image
            src={imageUrl}
            width={400}
            height={400}
            alt=""
            className="w-40"
          />
        </div>
        <h1 className="text-xl font-bold">{label}</h1>
      </div>
    </>
  );
};
