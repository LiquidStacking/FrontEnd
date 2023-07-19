import './App.css';
import Header from './components/header/header';
import Stacking from './components/stacking/stacking';
// import bgVideo from './images/bg.mp4';
import { Connect } from "@stacks/connect-react";
import { AppConfig, UserSession } from '@stacks/connect';

function App() {
  const appConfig = new AppConfig(['store_write', 'publish_data']);
  const userSession = new UserSession({appConfig});
  const authOption = {
    appDetails: {
      name: 'Todos',
      icon: window.location.origin + '/logo.svg',
    },
    redirectTo: '/',
    userSession: userSession,
  }
  return (
    <Connect authOptions={authOption}>
      <div className="App">
        <div><Header /></div>
        <div><Stacking /></div>
        {/* <video className='videoTag' autoPlay loop muted>
      <source src={bgVideo} type='video/mp4' />
        </video> */}
      </div>
    </Connect>
  );
}

export default App;
