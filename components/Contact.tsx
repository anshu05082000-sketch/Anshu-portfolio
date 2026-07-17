"use client";

import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      alert("✅ Message Sent Successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="bg-slate-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-400 text-2xl" />
              <span>anshu05082000@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-blue-400 text-2xl" />
              <span>+91-8882015472</span>
            </div>

            <div className="flex items-center gap-4">
              <FaGithub className="text-blue-400 text-2xl" />
              <a
                href="https://github.com/anshu05082000-sketch"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaLinkedin className="text-blue-400 text-2xl" />
              <a
                href="https://linkedin.com/in/anshu-sharma-3526a5339"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right */}
          <form onSubmit={sendEmail} className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full bg-slate-800 p-4 rounded-xl outline-none"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full bg-slate-800 p-4 rounded-xl outline-none"
              required
            />

            <textarea
              rows={6}
              placeholder="Message"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full bg-slate-800 p-4 rounded-xl outline-none"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 px-8 py-4 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}