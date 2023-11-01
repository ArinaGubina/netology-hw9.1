import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

// import { RouteComponentProps } from '@reach/router';
//import { useState } from 'react'

import './App.css'
import Menu from './components/Menu'
import HomePage from './components/HomePage'
import DriftPage from './components/DriftPage'
import TimeAttackPage from './components/TimeAttackPage'
import ForzaPage from './components/ForzaPage'

const menuItems = [
  { 
    path: "/",
    title: "Главная"
  },
  { 
    path: "/drift",
    title: "Дрифт-такси"
  },
  { 
    path: "/timeattack",
    title: "Time Attack"
  },
  { 
    path: "/forza",
    title: "Forza Karting"
  }
];

export default function App() {
  return (
      <Router>
        <Menu items={menuItems}/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/drift" element={<DriftPage/>} />
            <Route path="/timeattack" element={<TimeAttackPage/>} />
            <Route path="/forza" element={<ForzaPage/>} />
        </Routes>
      </Router> 
  );
}
