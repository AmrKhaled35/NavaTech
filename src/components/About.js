import React from 'react';

export default function AboutSection() {
  return (
    <section style={sectionStyle}>
      <div style={contentStyle}>
        <h2 style={titleStyle}>We are NovaTech</h2>
        <p style={paragraphStyle}>
          Our mission is to immerse you in the wonders of the universe. Through the <strong>Planetary Detective</strong> game, 
          we offer an engaging and entertaining experience, unveiling the mysteries of planets, stars, and galaxies. 
          Discover the vast cosmos while expanding your knowledge, all in a way that's as fun as it is fascinating.
        </p>
      </div>
    </section>
  );
}

// CSS Styles
const sectionStyle = {
  padding: '4rem 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#0b0d13', // Dark background for contrast
};

const contentStyle = {
  maxWidth: '900px',
  textAlign: 'center',
  color: '#fff',
  padding: '0 20px',
};

const titleStyle = {
  fontSize: '3.5rem', // Larger title size
  fontWeight: 'bold',
  marginBottom: '1.5rem',
  color: '#00d8ff', // Optional color tweak for emphasis
};

const paragraphStyle = {
  fontSize: '1.5rem', // Increased font size for larger text
  lineHeight: '1.8',
  color: '#d0d0d0', // Lighter font color for better contrast
};
