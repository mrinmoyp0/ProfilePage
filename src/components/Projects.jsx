import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 1,
    title: 'Algorithm for Resource Allocation in Ultra-Dense Networks',
    description: 'Designed and implemented a novel algorithm using Deep Q-Network (DQN), Federated Learning and Game Theory to optimize resource allocation, improving QoE compared to traditional algorithms.',
    tech: ['Python', 'DQN', 'Federated Learning', 'Game Theory'],
    variant: 'purple-cyan'
  },
  {
    id: 2,
    title: 'Routing Protocol with Explainable AI for WSN',
    description: 'Developed a secure and energy-efficient routing protocol for Wireless Sensor Networks; integrated Explainable AI to increase trustworthiness and performance.',
    tech: ['Python', 'Machine Learning', 'XAI', 'WSN'],
    variant: 'pink-purple'
  },
  {
    id: 3,
    title: 'Population Data Analysis and Visualization',
    description: 'Analyzed large-scale population datasets using Python libraries such as Pandas and NumPy, created interactive visualizations with Matplotlib and Seaborn.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    variant: 'cyan-emerald'
  },
  {
    id: 4,
    title: 'Full-Stack Music Player',
    description: 'Built a responsive, full-stack music player with playlist management and user authentication.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SQL'],
    variant: 'amber-pink'
  }
];

const Projects = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;
    
    gsap.fromTo(cards, 
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="projects" className="projects-section" ref={containerRef}>
      <div className="projects-container">
        <div className="section-header">
          <p className="subtitle">Things I've built</p>
          <h2 className="title">Projects</h2>
        </div>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card border-${project.variant}`}
              ref={el => cardsRef.current[index] = el}
            >
              <div className="project-number">0{project.id}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map(t => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
