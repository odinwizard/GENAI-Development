// MyComponent.jsx
import axios from 'axios';
import React, { useState } from 'react';

const EmailForm = () => {

    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setEmail('');
        console.log(subject);
        try {
          const res = await axios.post('/api/v1/generate', { subject });
          console.log(res.data);
          setEmail(res.data.data);
        } catch (err) {
          setError('Failed to generate email. Please try again.',err);
        }
      };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto' }}>
         <div>
        <h1> ProMail Generator</h1>
        <form onSubmit={handleSubmit}>
        <label>Enter Email Body</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
        />
        <button type="submit">Generate Email</button>
      </form>
    </div>
    <div>
    {email && (
        <div>
          <h2>📧 Generated Email:</h2>
          <pre style={{
                background: '#f4f4f4',
                padding: '15px',
                overflowX: 'auto',      
                whiteSpace: 'pre-wrap', 
                wordWrap: 'break-word', 
                maxHeight: '400px',    
  }}  
          >
          {email}</pre>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    </div>
  )
};

export default EmailForm;



