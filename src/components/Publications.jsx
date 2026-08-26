import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Publications.css';

gsap.registerPlugin(ScrollTrigger);

const publicationsData = [
  {
    id: 1,
    title: '"MLTRP-XAI: Machine learned based trustworthy routing protocol for wireless sensor networks with explainable AI integration"',
    authors: 'Mrinmoy Pathak, Monisha Devi, Dibashree Baruah, Bhaanvee Baruah',
    venue: '7th ICDCML, 2026',
    status: 'Accepted',
    variant: 'purple'
  },
  {
    id: 2,
    title: '"Analyzing Hardware Efficiency in Single-Stream versus Dual-Stream CNN Architectures for 5G Channel Estimation"',
    authors: 'Mrinmoy Pathak, Monisha Devi',
    venue: '3rd IEEE GCON, 2026',
    status: 'Accepted',
    variant: 'cyan'
  },
  {
    id: 3,
    title: '"QoE-Aware Resource Allocation in Ultra Dense Networks Using Deep Q-Network, Federated Learning and Game-Theoretic Approaches"',
    authors: 'Mrinmoy Pathak, Monisha Devi, Dibashree Baruah, Bhaanvee Baruah',
    venue: 'Journal of Network and Computer Applications',
    status: 'Under Revision',
    variant: 'pink'
  }
];

const Publications = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;
    
    gsap.fromTo(cards, 
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
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
    <section id="publications" className="publications-section" ref={containerRef}>
      <div className="publications-container">
        <div className="section-header">
          <p className="subtitle">Research contributions</p>
          <h2 className="title">Publications</h2>
        </div>
        
        <div className="publications-list">
          {publicationsData.map((pub, index) => (
            <div 
              key={pub.id} 
              className={`pub-card border-left-${pub.variant}`}
              ref={el => cardsRef.current[index] = el}
            >
              <div className="pub-content">
                <h3 className="pub-title">{pub.title}</h3>
                <p className="pub-authors">{pub.authors}</p>
                <div className="pub-meta">
                  <span className="pub-venue">{pub.venue}</span>
                  <span className={`pub-status status-${pub.status.replace(/\s+/g, '-').toLowerCase()}`}>
                    {pub.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
