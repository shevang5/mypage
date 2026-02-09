import React, { useState } from 'react';

import './SkillsTools.css'; 

const SKILLS = [
  "HTML/CSS/JS",
  "React",
  "Node.js",
  "MongoDB",
  "Photoshop",
  "Git/GitHub"
];

export default function SkillsTools() {
  const [activeBtn, setActiveBtn] = useState(null);

  const handleAnimation = (id) => {
    setActiveBtn(id);
    // Remove animation class after 1 second (duration of CSS animation)
    setTimeout(() => setActiveBtn(null), 1000);
  };

  return (
    <div className="skills-container">
      <header className="skills-header w-full bg-black text-center ">My Skills</header>
      
      <main className="skills-main py-20">
        

        {/* Skill Tags Overlay */}
        <div className="skills-overlay">
           {SKILLS.map(skill => (
             <span key={skill} className="skill-tag">{skill}</span>
           ))}
        </div>
      </main>

      <footer className="skills-footer"></footer>
    </div>
  );
}