import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-card-wrapper', {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-card-wrapper',
          start: 'top 85%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="title gradient-text">Get In Touch</h2>
          <p className="subtitle">Let's work together</p>
        </div>

        <div className="contact-card-wrapper">
          <div className="contact-card">
            <p className="contact-message">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            
            <div className="contact-info">
              <a href="mailto:mrinmoypathak159@gmail.com" className="contact-item">
                <span className="icon">📧</span>
                <span>mrinmoypathak159@gmail.com</span>
              </a>
              <div className="contact-item">
                <span className="icon">📱</span>
                <span>6000065764</span>
              </div>
              <div className="contact-item">
                <span className="icon">📍</span>
                <span>Assam, India</span>
              </div>
            </div>

            <a href="mailto:mrinmoypathak159@gmail.com" className="btn-primary">
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
