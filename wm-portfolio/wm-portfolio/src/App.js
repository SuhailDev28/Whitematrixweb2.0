import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import MyComponent from './home_screen';
import Career from './career';
import MobileApp from './mobileapp';
import Software from './software';
import Schedule from './scheduleconvo';
import Voip from './voip';
import AI from './ai';

function App() {
  return (
    <div><Router>
      <Routes>
        <Route path='/' element={<MyComponent/>}/>
        <Route path="/career" element={<Career />} />
        <Route path="/mobile" element={<MobileApp />} />
        <Route path="/software" element={<Software />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/voip" element={<Voip />} />
        <Route path="/ai" element={<AI />} />
      </Routes>
      </Router>
    </div>
  )
}

export default App