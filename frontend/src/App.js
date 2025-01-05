import React, { useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [prompt, setPrompt] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);

  const generateEmail = async () => {
    try {
      // console.log("dcbkdks",process.env.REACT_APP_URL, `${process.env.REACT_APP_URL}/api/generate-email-body`)
      const response = await axios.post(`${process.env.REACT_APP_URL}/api/generate-email-body`, { prompt });
      setEmailBody(response.data.data);
      setIsGenerated(true);
    } catch (error) {
      alert('Failed to generate email body!');
    }
  };

  const regenerateEmail = async () => {
    try {
      setPrompt('')
      setEmailBody('');
      setIsGenerated(false);
    } catch (error) {
      alert('Failed to generate email body!');
    }
  };

  const sendEmail = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_URL}/api/send-mail`, { email, subject, emailBody });
      alert('Email sent successfully!');
    } catch (error) {
      alert('Failed to send email!');
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">Email Generator</h1>
      <div className="form-container">
        <input
          className="input-field"
          type="email"
          placeholder="Recipient Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input-field"
          type="text"
          placeholder="Email Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        {!isGenerated && (
          <textarea
            className="textarea-field"
            placeholder="Enter prompt for email body"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        )}
        {isGenerated && (
          <textarea
            className="textarea-field"
            placeholder="email body"
            value={emailBody}
            onChange={(e) => setEmailBody(e.target.value)}
          />
        )}
        <div className="button-container">
          {!isGenerated && (
            <button className="button generate-button" onClick={generateEmail}>
              Generate Email body
            </button>
          )}

          {isGenerated && (
            <button className="button generate-button" onClick={regenerateEmail}>
              Generate Again
            </button>
          )}
          <button
            className="button send-button"
            onClick={sendEmail}
            disabled={!emailBody} // Disable button if email body is empty
          >
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
