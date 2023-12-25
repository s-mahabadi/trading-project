import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// Note: with strict mode, the app component is rendered twice in development mode
// look at here for more info on what to do for useEffect: https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const container = document.getElementById("root");
// const root = createRoot(container)
// root.render(<App />);

// measuring performance
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
