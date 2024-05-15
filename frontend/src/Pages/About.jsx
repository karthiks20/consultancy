import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Goldline Furniture and Electronics</h1>
      <p style={styles.text}>Welcome to Goldline Furniture and Electronics, your one-stop destination for premium furniture and electronic appliances in Karur.</p>
      
      <h2 style={styles.subHeading}>Our Story</h2>
      <p style={styles.text}>Established in 2005, Goldline has been serving the community of Karur with top-notch products and exceptional customer service for over 15 years. Our commitment to quality and customer satisfaction has made us a trusted name in the industry.</p>
      
      <h2 style={styles.subHeading}>Our Products</h2>
      <p style={styles.text}>At Goldline, we offer a wide range of furniture including sofas, beds, dining sets, and more, crafted with the finest materials and exquisite craftsmanship. In addition, we also provide a variety of electronic appliances such as televisions, refrigerators, washing machines, and air conditioners from leading brands.</p>
      
      <h2 style={styles.subHeading}>Our Mission</h2>
      <p style={styles.text}>Our mission is to enhance the comfort and convenience of our customers' lives by providing them with superior quality furniture and electronic appliances at competitive prices. We strive to exceed our customers' expectations and build long-lasting relationships based on trust and reliability.</p>
      
      
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  subHeading: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '30px',
    marginBottom: '10px',
  },
  text: {
    fontSize: '16px',
    marginBottom: '15px',
  },
};

export default About;
