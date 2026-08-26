import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef([]);
  const edCardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Text animation
      gsap.fromTo(textRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );

      // Stats animation
      gsap.fromTo(statsRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );

      // Number counter animation
      statsRef.current.forEach(stat => {
        const numElement = stat.querySelector('.stat-number');
        if (!numElement) return;
        const targetText = numElement.getAttribute('data-target');
        const isFloat = targetText.includes('.');
        const targetNum = parseFloat(targetText);
        
        let obj = { val: 0 };
        gsap.to(obj, {
          val: targetNum,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stat,
            start: 'top 85%',
          },
          onUpdate: () => {
            if (isFloat) {
              numElement.innerText = obj.val.toFixed(2);
            } else {
              numElement.innerText = Math.floor(obj.val) + (targetText.includes('+') ? '+' : '');
            }
          }
        });
      });

      // Education cards animation
      gsap.fromTo(edCardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.2,
          scrollTrigger: {
            trigger: '.education-section',
            start: 'top 85%',
          }
        }
      );

    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">
        <div className="about-split">
          <div className="about-text" ref={textRef}>
            <h2 className="gradient-text">About Me</h2>
            <p>
              I am Mrinmoy Pathak, a passionate B.Tech CSE student graduating in 2025. I have a strong background in Machine Learning, Web Development, and academic research. With multiple publications and hands-on experience building complex models and applications, I strive to create impactful tech solutions.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card" ref={el => statsRef.current[0] = el}>
              <h3 className="stat-number" data-target="8.80">0.00</h3>
              <p className="stat-label">CGPA</p>
            </div>
            <div className="stat-card" ref={el => statsRef.current[1] = el}>
              <h3 className="stat-number" data-target="3+">0</h3>
              <p className="stat-label">Publications</p>
            </div>
            <div className="stat-card" ref={el => statsRef.current[2] = el}>
              <h3 className="stat-number" data-target="90+">0</h3>
              <p className="stat-label">ML Accuracy (%)</p>
            </div>
          </div>
        </div>

        <div className="education-section">
          <h3>Education</h3>
          <div className="education-grid">
            <div className="ed-card" ref={el => edCardsRef.current[0] = el}>
              <h4>Girijananda Chowdhury University (GCU)</h4>
              <p className="ed-degree">B.Tech in Computer Science</p>
              <p className="ed-score">CGPA: 8.80</p>
              <p className="ed-year">2025</p>
            </div>
            <div className="ed-card" ref={el => edCardsRef.current[1] = el}>
              <h4>Cotton Collegiate</h4>
              <p className="ed-degree">Higher Secondary</p>
              <p className="ed-score">67.6%</p>
              <p className="ed-year">2020</p>
            </div>
            <div className="ed-card" ref={el => edCardsRef.current[2] = el}>
              <h4>Sarupeta High School</h4>
              <p className="ed-degree">HSLC</p>
              <p className="ed-score">87.6%</p>
              <p className="ed-year">2018</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
