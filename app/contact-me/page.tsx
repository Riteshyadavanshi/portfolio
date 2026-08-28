"use client";

import React, { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { Send, Mail, FileText, MessageSquare, Loader2 } from "lucide-react";
import Link from "next/link";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const { email, subject, message } = formData;

    if (!email || !subject || !message) {
      setError("Please fill in all fields.");
      return;
    }

    startTransition(async () => {
      try {
        const res = await fetch("/api/sendemail", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();

        if (data.success) {
          setSuccess("Message sent! I'll get back to you soon.");
          setFormData({ email: "", subject: "", message: "" });
        } else {
          setError("Could not send your message. Please try again later.");
        }
      } catch {
        setError("Something went wrong. Please try again.");
      }
    });
  };

  return (
    <section className="pt-28 sm:pt-32 pb-24 px-4 sm:px-6 min-h-screen max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Let&apos;s <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
              Have a project in mind or just want to say hi? Feel free to reach
              out. I&apos;m always open to new opportunities and collaborations.
            </p>
          </div>

          <div className="space-y-4">
            <ContactInfo
              icon={<Mail size={20} className="text-zinc-300" />}
              label="Email me at"
              value="riteshyadav4122@gmail.com"
              href="mailto:riteshyadav4122@gmail.com"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
          className="bento-card p-8 md:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-zinc-300 flex items-center gap-2"
              >
                <Mail size={14} className="text-zinc-500" /> Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500/50 focus:border-zinc-600 transition-all"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={!!error && !formData.email}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-zinc-300 flex items-center gap-2"
              >
                <FileText size={14} className="text-zinc-500" /> Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="What's this about?"
                className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500/50 focus:border-zinc-600 transition-all"
                value={formData.subject}
                onChange={handleChange}
                aria-invalid={!!error && !formData.subject}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-zinc-300 flex items-center gap-2"
              >
                <MessageSquare size={14} className="text-zinc-500" /> Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project or idea..."
                className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-500/50 focus:border-zinc-600 transition-all resize-none"
                value={formData.message}
                onChange={handleChange}
                aria-invalid={!!error && !formData.message}
              />
            </div>

            {error && (
              <p role="alert" className="text-red-400 text-sm font-medium">
                {error}
              </p>
            )}
            {success && (
              <p role="status" className="text-green-400 text-sm font-medium">
                {success}
              </p>
            )}

            <button
              type="submit"
              disabled={pending}
              className="w-full btn-primary !w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {pending ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const ContactInfo = ({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) => (
  <div className="flex items-center gap-4 text-zinc-300">
    <div className="w-12 h-12 rounded-full bg-zinc-800/80 flex items-center justify-center border border-zinc-700 shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-sm text-zinc-500">{label}</p>
      {href ? (
        <Link
          href={href}
          className="font-medium hover:text-white transition-colors"
        >
          {value}
        </Link>
      ) : (
        <p className="font-medium">{value}</p>
      )}
    </div>
  </div>
);

export default ContactForm;
