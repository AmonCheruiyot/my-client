import React, { useState } from 'react';
import axios from 'axios';

const SupportPopup = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/support', { name, message })
      .then(response => {
        alert('Message sent successfully!');
        setName('');
        setMessage('');
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="support-popup">
      <h2>Support</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default SupportPopup;
