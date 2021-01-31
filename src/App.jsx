import { ChatEngine } from 'react-chat-engine';
import { ChatFeed, LoginForm } from './components';
import './App.css';

const App = () => {
  return (
    <>
      {!localStorage.getItem('username') ? (
        <LoginForm />
      ) : (
        <ChatEngine
          height="100vh"
          projectID={process.env.REACT_APP_API_KEY}
          userName={localStorage.getItem('username')}
          userSecret={localStorage.getItem('password')}
          renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
      )}
    </>
  );
};

export default App;
