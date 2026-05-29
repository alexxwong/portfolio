import { useState } from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectGallery() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Campus Marketplace Cross-Platform App",
      description: "A cross-platform mobile and web application designed with a registration workflow, custom UI components, and real-time state management.",
      tags: ["Flutter", "Dart", "UI/UX"],
      link: "https://github.com/alexxwong/campus_bazaar"
    },
    {
      title: "Conference Room Booking System",
      description: "A web-based application for managing conference room reservations, featuring user authentication, calendar integration, and an admin dashboard.",
      tags: ["Springboot", "Angular", "MySQL"],
      link: "https://github.com/STIWK2124-A251/assignment-3-biscuit3"
    },
    {
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website built with React, showcasing projects, skills, and a contact form, designed with a modern and minimalist aesthetic.",
      tags: ["React", "tailwindcss", "JavaScript"],
      link: "https://github.com/alexxwong/portfolio"
    }
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="py-20 px-8 max-w-6xl mx-auto">
      
      <div className="mb-12">
        {/* Header styling matches the "#projects" from the inspiration */}
        <h2 className="font-mono text-2xl md:text-3xl font-bold mb-6 text-gray-100">
          <span className="text-primary-500">#</span>projects
        </h2>
        
        {/* Filter Buttons updated to a minimalist underline style */}
        <div className="flex gap-4 border-b border-zinc-800 pb-4">
          {["All", "Flutter", "Springboot", "React"].map(tech => (
            <button 
              key={tech}
              onClick={() => setFilter(tech)}
              className={`font-mono text-sm px-4 py-2 transition-all duration-300 hover:tracking-widest hover:cursor-pointer ${
                filter === tech 
                  ? "text-primary-400 border-b-2 border-primary-500 mb-[-17px]" 
                  : "text-zinc-500 hover:text-gray-300"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div key={index} className={index === 0 ? "md:col-span-2" : ""}>
            <ProjectCard 
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          </div>
        ))}
      </div>
      
    </section>
  );
}