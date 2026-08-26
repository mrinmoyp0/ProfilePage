import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  const dotsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        const isLeft = index % 2 === 0;
        
        gsap.fromTo(item,
          { x: isLeft ? -100 : 100, opacity: 0 },
          {
            x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            }
          }
        );
      });

      dotsRef.current.forEach(dot => {
        gsap.fromTo(dot,
          { scale: 0 },
          {
            scale: 1, duration: 0.5, ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: dot,
              start: 'top 85%',
            }
          }
        );
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const experiences = [
    {
      role: 'Research Intern',
      company: 'IIT Guwahati',
      date: 'Jul 2023 – Sep 2023',
      color: 'purple',
      points: [
        'Developed a hand sign recognition ML model.',
        'Achieved 90%+ accuracy in sign classification.',
        'Conducted literature reviews and collaborated with academic researchers.'
      ]
    },
    {
      role: 'Web Developer',
      company: 'Zinfytech Web Solution, Kolkata',
      date: 'Jun 2024 – Jul 2024',
      color: 'cyan',
      points: [
        'Built a full-featured e-commerce website.',
        'Developed responsive frontend using HTML, CSS, and JS.',
        'Implemented robust backend with Django and MongoDB.'
      ]
    },
    {
      role: 'Teaching Assistant',
      company: 'SITM, Guwahati',
      date: 'Mar 2025 – Present',
      color: 'emerald',
      points: [
        'Teaching Assistant in the Computer Science department.',
        'Assisting students with programming assignments and conceptual doubts.',
        'Helping professors evaluate course materials and projects.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          <div className="timeline-line"></div>
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div 
                className={`timeline-dot ${exp.color}`} 
                ref={el => dotsRef.current[index] = el}
              ></div>
              <div 
                className="timeline-content"
                ref={el => itemsRef.current[index] = el}
              >
                <h3 className="exp-role">{exp.role}</h3>
                <h4 className="exp-company">{exp.company}</h4>
                <p className="exp-date">{exp.date}</p>
                <ul className="exp-points">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
