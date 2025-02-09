import { Routes, Route } from 'react-router-dom'
import './App.css';
import Layout from  './components/Layout'
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />           
          <Route path='/about' element={<About/>} />           
        </Route>
      </Routes>
    </div>
  );
}

export default App;
