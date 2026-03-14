"use client";
import React, { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare } from "lucide-react";

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
      setError("Please fill all the fields");
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
          setSuccess("Email sent successfully!");
          setFormData({ email: "", subject: "", message: "" });
        } else {
          setError("Email not sent. Try again later.");
        }
      } catch (err) {
        setError("Something went wrong. Please try again.");
      }
    });
  };

  return (
    <section className="pt-32 pb-24 px-6 min-h-screen max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              Let&apos;s <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Have a project in mind or just want to say hi? Feel free to reach
              out. I&apos;m always open to new opportunities and collaborations.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                <Mail className="text-indigo-400" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email me at</p>
                <p className="font-medium">riteshyadav4122@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                <MessageSquare className="text-purple-400" size={20} />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-effect p-8 md:p-10 rounded-3xl border border-white/5 relative"
        >
          <div className="absolute inset-0 bg-indigo-500/5 blur-3xl rounded-full -z-10" />

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300 flex items-center gap-2"
              >
                <Mail size={14} className="text-indigo-400" /> Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-gray-300 flex items-center gap-2"
              >
                <User size={14} className="text-indigo-400" /> Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What's this about?"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-300 flex items-center gap-2"
              >
                <MessageSquare size={14} className="text-indigo-400" /> Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your message here..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm font-medium">{error}</p>
            )}
            {success && (
              <p className="text-green-400 text-sm font-medium">{success}</p>
            )}

            <button
              disabled={pending}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 active:scale-[0.98]"
            >
              {pending ? (
                "Sending..."
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
