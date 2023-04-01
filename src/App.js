import { Routes, Route, HashRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About/index.';
import './App.scss';
import Contact from './components/Contact';

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element = {<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>
    </Routes>
    </HashRouter>
  );
}

export default App;
