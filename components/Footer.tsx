import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-black  rounded-lg shadow m-4   md:absolute   w-full">
      <div className="w-full flex items-center justify-between mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Get touch with me on social media
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li className="me-4 md:me-6">
            <Link href="https://github.com/Riteshyadavanshi" className="hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github "><path d="M16 22s-1 0-2-1c1-1 2-3 2-3s0-1 0-1-1 1-3 1-3-1-3-1 0 1 0 1-1 2-2 3c-1 1-2 1-2 1s-3-1-4-4c0 0-1-3 2-4 1-1 1-1 1-2 0-1 0-3-1-4 0 0 0-1 0-1s0-1 1-2 2 0 2 0l1 1c0 0 0 0 1 0 0-1 1-1 2-1s2 0 2 1c1 0 1 0 1 0 0 0 0 0 1-1 0 0 1 0 2 0s1 1 1 2 0 1 0 1c-1 1-1 3-1 4 0 1 0 1 1 2 3 1 2 4 2 4-1 3-4 4-4 4z"></path></svg>

            </Link>
          </li>
          <li className="me-4 md:me-6">
            <Link
              href="https://www.linkedin.com/in/ritesh-yadav-560496247/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-linkedin text-blue-600"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
