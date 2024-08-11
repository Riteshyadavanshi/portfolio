import Image from "next/image";
import React from "react";
import { Button } from "./custome-btn";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="  md:flex md:flex-row-reverse items-center w-full  space-y-10 p-10">
      <div className="flex-1 flex  justify-center items-center">
        <div className="w-[300px] h-[300px] ">
          <Image
            src={"/portfolio/rite.png"}
            width={700}
            height={700}
            alt="Ritesh yadav photo"
            className=" aspect-square  rounded-full "
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col space-y-4 p-4">
        <div>
          {" "}
          <h1 className="text-[50px] font-semibold md:text-5xl">
            <span className="animate-bounce w-4">👋</span> Hey there,
            <br />It&apos;s 
            <span className="text-indigo-900 font-extrabold"> Ritesh Yadav</span>
          </h1>
        </div>
        <div>
          <p className=" text-gray-500">
            Hi! I&apos;m Ritesh Yadav, a passionate and dedicated third-year B.Sc IT
            student specializing in Next.js and React.js development. With a
            strong foundation in HTML5, CSS3, JavaScript, TypeScript, and
            Tailwind CSS, I create modern and responsive web applications.
          </p>
        </div>
        <div className=" flex space-x-2">
          <Link href="" download={""} target="_blank">
            <Button> Download Cv</Button>
          </Link>

          <Link href="https://wa.me/918291047365">
            <Button className="bg-green-600 flex items-center gap-2">
              <Image
                src={"/portfolio/what.svg"}
                width={400}
                height={400}
                alt="whatsapp icon"
                className="w-6 h-6"
              />{" "}
              Contact me
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
