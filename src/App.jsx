import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout     from './components/layout/Layout';
import Home       from './components/sections/Home';
import About      from './components/sections/About';
import Skills     from './components/sections/Skills';
import Projects   from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact    from './components/sections/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/"           element={<Home />}       />
          <Route path="/about"      element={<About />}      />
          <Route path="/skills"     element={<Skills />}     />
          <Route path="/projects"   element={<Projects />}   />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact"    element={<Contact />}    />
          <Route path="*"           element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
