import React from "react";
import { Button } from "./custome-btn";

export const SkillSection = () => {
  return (
    <div className="px-10 space-y-4">
      <h1 className="text-3xl font-bold text-indigo-950">My Skills</h1>
      <div className="space-x-2">
        {Skills.map((skill) => (
          <Button className="bg-gray-100  text-black font-semibold mt-2" key={skill}>
            {skill}
          </Button>
        ))}
      </div>
    </div>
  );
};

const Skills = ["Next.js", "React.js", "Tailwind css", "Javascript","Node.js"];
