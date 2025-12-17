"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export function ProjectsSection() {
  const projects = [
    {
      title: "QuickChat",
      description:
        "QuickChat is a modern real-time messaging application that enables users to connect instantly with friends and colleagues. The platform features user authentication, private one-on-one chats, real-time online/offline status indicators, image sharing, message seen status, voice and video calling powered by WebRTC, and a fully responsive design for mobile and desktop devices.",
      image: "/Screenshot.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Socket.io",
        "WebRTC",
        "MongoDB",
        "NextAuth.js",
        "Tanstack Query",
      ],

      
      liveUrl: "https://your-quickchat-live-demo.com",
      clientUrl: "https://github.com/yourusername/quickchat-client.git",
      serverUrl: "https://github.com/yourusername/quickchat-server.git",
    },
    {
      title: "Tomato E-commerce",
      description:
        "Tomato E-commerce is a full-featured online shopping platform that allows users to browse products, add items to their cart, and complete secure purchases. The platform supports user authentication, order management, product search and filtering, and an admin dashboard to manage inventory and track orders.",
      image: "/tomato.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Stripe",
      ],
      liveUrl: "https://tomato-ecommerce-demo.com",
      clientUrl: "https://github.com/Tanvirgit07/Tomato_front_end.git",
      adminUrl: "https://github.com/Tanvirgit07/Tomato_dashboard.git",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order processing.",
      image: "/jassica.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Stripe",
      ],
      liveUrl: "https://lawbie.com/",
      clientUrl: "https://github.com/Tanvirgit07/jessica_website",
      adminUrl: "https://github.com/Tanvirgit07/jessica_dashboard.git",
    },
    {
      title: "Lone Management Website",
      description:
        "Lone Management Website is a web-based platform designed to help small teams and freelancers manage tasks efficiently. It includes features like project creation, task assignment, real-time status updates, drag-and-drop task boards, and collaboration tools to improve team productivity and organization.",
      image: "/rambap.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Stripe",
      ],
      liveUrl: "https://guehiandco.com/",
      clientUrl: "https://github.com/Tanvirgit07/lone-service-website.git",
      adminUrl: "https://github.com/Tanvirgit07/lone-service-dashboard.git",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gradient">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              style={{ perspective: 1000 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-44 sm:h-48 md:h-52 object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardHeader>

                <CardContent className="p-4 sm:p-6 relative z-10">
                  <CardTitle className="mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>

                  <p className="text-muted-foreground mb-4 text-sm sm:text-base line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.2 + techIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="outline"
                          className="text-xs group-hover:border-blue-500/50 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      size="sm"
                      className="text-xs sm:text-sm cursor-pointer group-hover:bg-blue-600 transition-colors duration-300"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>

                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs sm:text-sm cursor-pointer bg-transparent group-hover:border-blue-500/50 transition-colors duration-300"
                      asChild
                    >
                      <a
                        href={project.clientUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Client
                      </a>
                    </Button>

                    <Button
                      size="sm"
                      variant="outline"
                      className="text-xs sm:text-sm cursor-pointer bg-transparent group-hover:border-blue-500/50 transition-colors duration-300"
                      asChild
                    >
                      <a
                        href={project.adminUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Admin
                      </a>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
