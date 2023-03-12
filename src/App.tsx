import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AccessibilityWidget } from 'react-accessibility'
import Blog from './components/Blog/Blog';
import React, { createContext, useEffect, useState } from 'react';
import Hero from './components/Hero/Hero';
 interface MyContextProps {
 blogs: {title:string, description:string, thumbnail:string, link:string, "_id":string, createdAt:string, updatedAt:string}[],
 setBlogs : (data:[])=>void,
 show: boolean,
 setShow: (a:boolean) => void
}


export const MyContext = createContext<MyContextProps>({blogs:[], setBlogs:()=>{}, show:false, setShow:()=>{}});

function App() {
  const [blogs, setBlogs] = useState([])
  const [show, setShow] = useState(false);
  const value:MyContextProps = {
    blogs, setBlogs,
    show, setShow
  }
  useEffect(()=>{
    const API = process.env.REACT_APP_API;
    fetch(API+"/blog/all")
    .then(res=>res.json())
    .then(result=>{
      setBlogs(result)
    })
  },[show])
  return (
    <MyContext.Provider value={value}>
      <Hero/>
      <Blog />
      <AccessibilityWidget />
    </MyContext.Provider>
  );
}

export default App;
