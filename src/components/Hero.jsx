import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css';

const Hero = () => {
  const containerRef = useRef(null);
  const nameRef = useRef(null);
  const subtitleRef = useRef(null);
  const introRef = useRef(null);
  const ctaRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);
  const chevronRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Orbs Animation
      const animateOrb = (orb, delay = 0) => {
        gsap.to(orb, {
          x: 'random(-100, 100)',
          y: 'random(-100, 100)',
          scale: 'random(0.8, 1.2)',
          duration: 'random(5, 10)',
          ease: 'sine.inOut',
          delay: delay,
          repeat: -1,
          repeatRefresh: true,
        });
      };

      animateOrb(orb1Ref.current, 0);
      animateOrb(orb2Ref.current, 2);
      animateOrb(orb3Ref.current, 4);

      // Text Reveal Animation Timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Split text animation for name
      const nameLetters = nameRef.current.querySelectorAll('.letter');
      
      tl.fromTo(nameLetters,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.05 }
      )
      .fromTo(subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(introRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(ctaRef.current.children,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
        '-=0.4'
      );

      // Chevron bounce animation
      gsap.to(chevronRef.current, {
        y: 15,
        duration: 1.5,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const name = "MRINMOY PATHAK";

  return (
    <section id="hero" className="hero-section" ref={containerRef}>
      {/* Background Orbs */}
      <div className="hero-orbs">
        <div className="orb orb-purple" ref={orb1Ref}></div>
        <div className="orb orb-cyan" ref={orb2Ref}></div>
        <div className="orb orb-pink" ref={orb3Ref}></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-name" ref={nameRef}>
          {name.split('').map((char, index) => (
            <span key={index} className="letter" style={{ display: char === ' ' ? 'inline' : 'inline-block' }}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
        
        <h2 className="hero-subtitle" ref={subtitleRef}>
          Computer Science Engineer | ML Researcher | Full-Stack Developer
        </h2>
        
        <p className="hero-intro" ref={introRef}>
          Passionate about building scalable applications and exploring the frontiers of Machine Learning.
          Based in Assam, India.
        </p>

        <div className="hero-cta" ref={ctaRef}>
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <a href="#about" aria-label="Scroll Down">
          <svg ref={chevronRef} className="chevron-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
