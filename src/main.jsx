import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@fontsource/inter'; // Defaults to regular 400 weight
// Import specific weights and styles if needed
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
