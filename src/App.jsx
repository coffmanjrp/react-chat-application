import { ChatEngine } from 'react-chat-engine';
import env from 'react-dotenv';
import { ChatFeed, LoginForm } from './components';
import './App.css';

const App = () => {
  if (!localStorage.getItem('username')) {
    return <LoginForm />;
  }

  return (
    <ChatEngine
      height="100vh"
      projectID={env.REACT_APP_YOUR_API_KEY}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
