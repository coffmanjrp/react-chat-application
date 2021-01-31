import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      'Project-ID': process.env.REACT_APP_API_KEY,
      'User-Name': username,
      'User-Secret': password,
    };

    try {
      await axios.get('https://api.chatengine.io/chats', {
        headers: authObject,
      });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
    } catch (error) {
      setError('Incorrect Credentials');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">React Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            value={username}
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
            required={true}
          />
          <input
            type="password"
            className="input"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
            <h2 className="error">{error}</h2>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
