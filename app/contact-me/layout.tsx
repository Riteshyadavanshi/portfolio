import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Ritesh Yadav",
  description:
    "Get in touch with Ritesh Yadav for project inquiries, collaborations, or opportunities.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
