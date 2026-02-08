import React from "react";
import "./Projects.css";

const PROJECTS = [
  {
    title: "SM Fitness App",
    url: "https://sm-fitness-eta.vercel.app/",
    description: "Production-ready web application with secure auth.",
    iframeTitle: "SM Fitness Project"
  },
  {
    title: "Restaurant UI Platform",
    url: "https://restaurant1-eight.vercel.app/",
    description: "Full-stack management for operational efficiency.",
    iframeTitle: "Restaurant Project"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <header className="projects-header">My Projects</header>

      <main className="projects-main">
        <div className="projects-flex-row">
          {PROJECTS.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card-header">
                <h3 className="project-title">{project.title}</h3>
              </div>

              <div className="project-card-body">
                <div className="iphone-frame">
                  <div className="iphone-notch">
                    <span className="iphone-speaker"></span>
                  </div>
                  <div className="iphone-screen">
                    <iframe
                      src={project.url}
                      title={project.iframeTitle}
                      className="project-iframe"
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div className="iphone-home"></div>
                </div>

                <p className="project-desc">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  Launch Program
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </section>
  );
}
