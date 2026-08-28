export interface Project {
  projectName: string;
  projectUrl: string;
  description: string;
  imageUrl: string;
  tags?: string[];
  featured?: boolean;
}

export const Projects: Project[] = [
  {
    projectName: "Pawfriend.in",
    projectUrl: "https://pawfriend.in",
    description:
      "Pet and street animal welfare platform with digital QR Aadhaar tags, secure pet profiles, and e-commerce for tags and collars. Built with Next.js 14, JWT/RBAC, and payment flows — improving load times by 25%.",
    imageUrl: "/portfolio/pawfriend.png",
    tags: ["Next.js", "JWT", "RBAC", "E-commerce"],
    featured: true,
  },
  {
    projectName: "Project Chetna",
    projectUrl: "https://projectchetna.in",
    description:
      "Healthcare and safety infrastructure connecting QR identity, care continuity, and emergency reunification through Milaap Setu — helping vulnerable people stay identified and supported when it matters most.",
    imageUrl: "/portfolio/projectchetna.png",
    tags: ["Next.js", "QR Identity", "Care Platform"],
  },
  {
    projectName: "Shopholic Diaries",
    projectUrl: "https://www.shopholicdiaries.com",
    description:
      "Freelance e-commerce site where users can browse products and checkout with cash on delivery or online payment via Razorpay.",
    imageUrl: "/portfolio/p1.png",
    tags: ["E-commerce", "Razorpay"],
  },
  {
    projectName: "Ecommerce Dashboard",
    projectUrl: "https://ecommerce-six-lime.vercel.app/login",
    description:
      "Admin dashboard for e-commerce with login, order management, product CRUD, active user tracking, and order status updates.",
    imageUrl: "/portfolio/p2.png",
    tags: ["Next.js", "Auth", "CRUD"],
  },
  {
    projectName: "Shiv Shakti Temple",
    projectUrl: "https://www.mariammantemple.org/",
    description:
      "Temple website with an admin dashboard to upload gallery and YouTube videos, plus a flow for users to join the team.",
    imageUrl: "/portfolio/p4.png",
    tags: ["CMS", "Admin"],
  },
];

export const featuredProject =
  Projects.find((project) => project.featured) ?? Projects[0];
