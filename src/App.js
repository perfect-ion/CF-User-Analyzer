import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContestState from './context/contest/ContestState';
import UserInfoState from './context/userInfo/UserInfoState';
import ProblemState from './context/problem/ProblemState';
import Contests from './components/Contests';
import ThemeState from './context/theme/ThemeState';
import { useContext, useEffect } from 'react';

function App(){

  return (
    <>
    <ThemeState>
    <ContestState>
    <ProblemState>
    <UserInfoState>
    <Router>
          <Navbar />
          <div className="container">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/contests" element={<Contests/>} />
          </Routes>
          </div>
        </Router>
    </UserInfoState>
    </ProblemState>
    </ContestState>
    </ThemeState>
    </>
  );
}

export default App;
