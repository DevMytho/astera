"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="perspective-1000"
    >
      <motion.div
        className="relative w-full h-80 cursor-pointer"
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
        data-cursor-hover
      >
        <motion.div
          className="absolute inset-0 w-full h-full"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front of card */}
          <Card className="absolute inset-0 w-full h-full backface-hidden">
            <CardContent className="p-0 h-full">
              <div className="relative h-full overflow-hidden rounded-lg">
                <img
                  src={
                    project.image ||
                    "/placeholder.svg?height=320&width=400&query=software project dashboard"
                  }
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.category}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Back of card */}
          <Card
            className="absolute inset-0 w-full h-full backface-hidden bg-primary text-primary-foreground"
            style={{ transform: "rotateY(180deg)" }}
          >
            <CardContent className="p-6 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm opacity-90 mb-4">{project.category}</p>
                <p className="text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-foreground/20 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs hover:opacity-80 transition-opacity"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs hover:opacity-80 transition-opacity"
                  >
                    <Github size={14} />
                    Code
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
