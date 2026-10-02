import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from './Pages/Home';
import ScrumMaster from './Pages/ScrumMaster';
import TestManager from './Pages/TestManager';
import AutomationArchitect from './Pages/AutomationArchitect';
import FullstackDeveloper from './Pages/FullstackDeveloper';

function App() {
  return (
    <div className="App">
      <Routes>

        {/* Unprotected Routes - Business Page*/}
        {/* ============================*/}
        <Route path='/scrummaster' element={<ScrumMaster />} />
        <Route path='/testmanager' element={<TestManager />} />
        <Route path='/automationarchitect' element={<AutomationArchitect />} />
        <Route path='/fullstackdeveloper' element={<FullstackDeveloper />} />

        {/* Unprotected and root Routes */}
        {/* ============================*/}
        <Route path='/' element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
