import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  
  const techSkills = [
    { name: 'Python', percentage: 90 },
    { name: 'Machine Learning', percentage: 85 },
    { name: 'HTML/CSS', percentage: 85 },
    { name: 'Network Simulation', percentage: 80 },
    { name: 'Protocol Design', percentage: 80 },
    { name: 'C++', percentage: 75 },
    { name: 'Django', percentage: 75 },
    { name: 'PHP', percentage: 70 },
    { name: 'MS Office', percentage: 90 }
  ];

  const softSkills = ['Communication', 'Teamwork', 'Leadership', 'Quick Learner'];
  const languages = ['Assamese', 'Hindi', 'English'];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate progress bars
      gsap.utils.toArray('.progress-fill').forEach(bar => {
        gsap.to(bar, {
          width: bar.dataset.target,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 85%',
          }
        });
      });

      // Animate soft skills and languages
      gsap.from('.pill', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.right-col',
          start: 'top 80%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="title gradient-text">Skills</h2>
          <p className="subtitle">Technologies & tools I work with</p>
        </div>

        <div className="skills-content">
          <div className="left-col">
            <h3 className="col-title">Technical Skills</h3>
            <div className="bars-container">
              {techSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="progress-bg">
                    <div 
                      className="progress-fill gradient-purple-cyan" 
                      data-target={`${skill.percentage}%`}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="right-col">
            <div className="soft-skills-container">
              <h3 className="col-title">Soft Skills</h3>
              <div className="pills-wrapper">
                {softSkills.map((skill, index) => (
                  <div className="pill soft-skill" key={index}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="languages-container">
              <h3 className="col-title">Languages</h3>
              <div className="pills-wrapper">
                {languages.map((lang, index) => (
                  <div className="pill language" key={index}>
                    <span className="flag-accent"></span>
                    {lang}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
