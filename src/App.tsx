import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AccessibilityWidget } from 'react-accessibility'
import Blog from './components/Blog/Blog';
import React, { createContext, useEffect, useState } from 'react';
 interface MyContextProps {
 blogs: {title:String, description:String, thumbnail:String, link:String}[],
 setBlogs : (data:[])=>void
}
export const MyContext = createContext<MyContextProps | undefined>(undefined);

function App() {
  const [blogs, setBlogs] = useState([])
  const value:MyContextProps = {
    blogs, setBlogs
  }
  useEffect(()=>{
    const API = process.env.REACT_APP_API;
    fetch(API+"/blog/all")
    .then(res=>res.json())
    .then(result=>{
      setBlogs(result)
    })
  },[])
  return (
    <MyContext.Provider value={value}>
      <Blog />
      <AccessibilityWidget />
    </MyContext.Provider>
  );
}

export default App;
