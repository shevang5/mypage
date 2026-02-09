import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card" // Removed CardAction from here

const projectData = [
  {
    id: 1,
    title: "SM Fitness App",
    description: "Production-ready web application with secure auth.",
    image: "./images/pj1.png",
    tag: "GYM MANAGEMENT",
    url: "https://sm-fitness-eta.vercel.app/"
  },
  {
    id: 2,
    title: "Restaurant UI Platform",
    description: "ull-stack management for operational efficiency.",
    image: "./images/pj2.jpg",
    tag: "RESTAURANT MANAGEMENT",
    url: "https://restaurant-ui-platform.vercel.app/"
  }
]

const Projects = () => {
  return (
    <div className="bg-black  py-36 dark text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl uppercase text-center tracking-[2px] mb-9">MY PROJECTS</h2>
        
        <div className="w-full flex flex-wrap justify-center gap-8">
          {projectData.map((project) => (
            <Card key={project.id} className="relative w-full max-w-sm pt-0 overflow-hidden border-zinc-800 bg-zinc-900">
              <div className="absolute inset-0 z-30 aspect-video" />
              
              <img
                src={project.image}
                alt={project.title}
                className="relative z-20 aspect-video w-full object-cover "
              />
              
              <CardHeader>
                {/* Replaced CardAction with a simple div */}
                <div className="mb-2">
                  <Badge variant="secondary" className="bg-zinc-800 text-zinc-300">
                    {project.tag}
                  </Badge>
                </div>
                <CardTitle className="text-zinc-100">{project.title}</CardTitle>
                <CardDescription className="text-zinc-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardFooter>
                <Button className="w-full bg-white text-black hover:bg-zinc-200">
                  View Project
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
