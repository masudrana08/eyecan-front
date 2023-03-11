import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AccessibilityWidget } from 'react-accessibility'
import Blog from './components/Blog/Blog';

function App() {
  return (
    <>
    <Blog />
    <AccessibilityWidget />
    </>
  );
}

export default App;
