import React, { useState } from 'react';

const ContactUs = () => {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the submission of feedback and contact details
    console.log("Feedback:", feedback);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Clear the form fields after submission
    setFeedback('');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <div style={styles.contactInfo}>
        <p style={styles.text}>Address: 123 Main Street, Karur</p>
        <p style={styles.text}>Phone: +1234567890</p>
        <p style={styles.text}>Email: info@goldlinefurniture.com</p>
      </div>
      <h2 style={styles.subHeading}>Send us a message</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={handleEmailChange}
          style={styles.input}
          required
        />
        <textarea
          value={message}
          onChange={handleMessageChange}
          style={styles.textarea}
          placeholder="Your Message"
          required
        />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
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
  contactInfo: {
    marginBottom: '30px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    fontSize: '16px',
  },
  textarea: {
    width: '100%',
    height: '150px',
    padding: '10px',
    marginBottom: '15px',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default ContactUs;




