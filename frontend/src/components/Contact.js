import React, { useState } from 'react';

const ContactForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

    const contactData = {
      name: name,
      email: email,
      message: message,
    };

    try {

      const response = await fetch('http://127.0.0.1:8000/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (response.ok) {
        setSuccessMessage('Contact form submitted successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const data = await response.json();
        setError(data.detail || 'Something went wrong');
      }
    } catch (error) {
      setError('Error: Unable to send message');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>

      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            className="form-control"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
