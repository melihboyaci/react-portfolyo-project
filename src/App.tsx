import "flowbite/dist/flowbite.min.css";
import "./index.css"; // Tailwind CSS için
import { Header } from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-blue-950">
      <div></div>
      <div>
        <About />
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <Experience />
          </div>
          <div>
            <Skill />
          </div>
          <div>
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
