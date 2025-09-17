"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "Blogging Website",
    category: "Web Application",
    description: "Blogging Website using modern tools like NEXTJs & MongoDB",
    image: "/whispers.png",
    technologies: ["NextJS", "Tailwind", "MongoDB", "CSS"],
    liveUrl: "https://whisperstoyou.vercel.app/",
    githubUrl: "https://github.com/Deepanshu0211/Whisper",
  },
  {
    title: "Clothing Brand Website",
    category: "Web Application",
    description: "A Modern Website made for a clothing brand",
    image: "/mahadev.png",
    technologies: ["Tailwind", "NextJS", "CSS", "JS"],
    liveUrl: "https://mahadeventerprises.vercel.app/",
    githubUrl: "https://github.com/Deepanshu0211/MahadevEnterprises",
  },
  {
    title: "Video Editing Agency Website",
    category: "Web Application",
    description:
      "A Sleek and Cutting Edge Website made using NEXTJs and Tailwind for a new & rising Video Editing Agency",
    image: "/karmafilms.png",
    technologies: ["NextJs", "Tailwind", "Js", "CSS"],
    liveUrl: "https://karmafilms.vercel.app/",
    githubUrl: "https://github.com/Deepanshu0211/karmafillms",
  },
  {
    title: "Neatify",
    category: "Desktop Application",
    description: "Desktop Application made using Rust & Tauri",
    image: "/neatify.png",
    technologies: ["Rust", "Tailwind", "Tauri", "NextJs"],
    liveUrl: "https://apps.microsoft.com/detail/9PJM4F0SW10D",
    githubUrl: "https://github.com/Deepanshu0211/Neatify",
  },
  {
    title: "SEO Optimised Website",
    category: "Web Application",
    description: "SEO Optimised website for our client, based on discord",
    image: "/brewdies.png",
    technologies: ["HTML", "CSS", "Js"],
    liveUrl: "https://brewdies.co.in",
    githubUrl: "https://github.com/DevMytho/Brewdies",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-balance">Our Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover the innovative solutions we&apos;ve built for our clients
            across various industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
