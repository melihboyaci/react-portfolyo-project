import "flowbite/dist/flowbite.min.css";
import "./index.css"; // Tailwind CSS için
import { Header } from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route path="tecrubelerim" element={<Experience />} />
        <Route path="yeteneklerim" element={<Skill />} />
        <Route path="projelerim" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
