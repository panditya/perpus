// React Core
import React from 'react';
import ReactDOM from 'react-dom';
// React Router
import { Route, BrowserRouter } from 'react-router-dom';
// React Components
import Landing from './components/Landing';
// Register Service Worker
import registerServiceWorker from './registerServiceWorker';

const App = () => {
  return (
      <BrowserRouter>
          <Route path="/" component={Landing}/>
      </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
