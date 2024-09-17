// import logo from './logo.svg';

import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

 const  App = ()=> {

  const pageSize = 10;
  
  // (Api Key )
  // REACT_APP_NEWS_API_KEY='ee0d8722e47a465c9b03ad9189b1260f'     
    
  const apiKey=process.env.REACT_APP_NEWS_API_KEY;
  
  const [progress, setProgress] = useState(0)

  
 
    return (
       <div>
          <Router>
            <Navbar /><LoadingBar
              height={3}
              color='#f11946'
              progress={progress}
             /> 
            <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}   key="general" pageSize={pageSize}  category="general"/>}></Route>
              <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}   key="technology" pageSize={pageSize}  category="technology"/>}></Route>
              <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}   key="entertainment" pageSize={pageSize}  category="entertainment"/>}></Route>
              <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}   key="science" pageSize={pageSize}  category="science"/>}></Route>
              <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}   key="business" pageSize={pageSize}  category="business"/>}></Route>
              <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}   key="health" pageSize={pageSize}  category="health"/>}></Route>
              <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}   key="sports" pageSize={pageSize}  category="sports"/>}></Route>
              <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey}   key="general" pageSize={pageSize}  category="general"/>}></Route>
            </Routes>
          </Router>
       </div>
    )
  
}

export default App