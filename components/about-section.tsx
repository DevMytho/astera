"use client";

import { motion } from "framer-motion";
import { TeamCard } from "./team-card";

const teamMembers = [
  {
    name: "Debasish Mishra",
    role: "Founder",
    bio: "An Aspiring problem solver and a mathematics graduate.",
    image: "/dev.jpg",
    skills: [
      "Frontend",
      "Backend",
      "Desktop Applications",
      "Android Applications",
      "Database Management",
      "Leadership",
    ],
    liveUrl: "https://devmytho.vercel.app/",
    githubUrl: "https://github.com/Devmytho/",
  },
  {
    name: "Deepanshu Yadav",
    role: "Co-founder",
    bio: "A Student who is pursuing finding efficient coding solutions.",
    image: "/pallav.jpg",
    skills: [
      "Fullstack Web Development",
      "Desktop Applications",
      "Android Applications & APIs",
      "Database Management",
      "Leadership",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Deepanshu0211/",
  },
  {
    name: "Vishal Sarkar",
    role: "UI/UX Developer",
    bio: "An Art student who wants to find creativity in everything.",
    image: "/vishal.jpg",
    skills: ["UI Designing", "Figma Products", "Editing", "Video Editing"],
    liveUrl: "",
    githubUrl: "",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Talented professionals dedicated to delivering exceptional software
            solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
