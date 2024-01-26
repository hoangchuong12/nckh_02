import React, { useState } from 'react';
import ContactService from '../../../services/ContactService';

function Contact() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    title: '',
    content: '',
    status: '1' 
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false); 
    try {
      const response = await ContactService.store(contact);
     
      console.log(response);
  
      if(response.data && response.data.message) {
        console.log(response.data.message);
      } else {
        console.log('Response received, but it does not contain the expected data.');
      }
    } catch (error) {
     
      if (error.response) {
      
        console.error('Error data:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
      } else if (error.request) {
        
        console.error('Error request:', error.request);
      } else {
              
        console.error('Error message:', error.message);
      }
    }
  };
  
  

  return (
<div className="container my-4">
      <h2>Contact Us</h2>
      {submitted && (
        <div className="alert alert-success" role="alert">
          Your message has been sent successfully!
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={contact.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={contact.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="tel" className="form-control" id="phone" name="phone" value={contact.phone} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name="title" value={contact.title} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">Content</label>
          <textarea className="form-control" id="content" name="content" value={contact.content} onChange={handleChange} rows="3" required></textarea>
        </div>
        <input type="hidden" name="status" value={contact.status} />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    
  );
}

export default Contact;
