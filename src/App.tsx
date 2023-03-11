import React from 'react';

import './App.css';
import { AccessibilityWidget } from 'react-accessibility'
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
    <Hero />
    <AccessibilityWidget />
    </>
  );
}

export default App;
