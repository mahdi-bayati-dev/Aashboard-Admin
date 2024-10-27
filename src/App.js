import React from 'react';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import TopBar from './Components/TopBar/topbar';
import SideBarLeft from './Components/sidebar_left/sideBar';
import './App.css';

function App() {

  let router =useRoutes(routes)
  return (
    <div className="App">
      <TopBar/>
      <div className="container">
         <SideBarLeft/>
         {router} 
      </div>
 

    </div>
  );
}

export default App;
