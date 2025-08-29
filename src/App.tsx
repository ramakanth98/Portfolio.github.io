import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OpenSource from "./components/OpenSource";
import Technologies from "./components/Technologies";

const App: React.FC = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 font-inter">
      {/* Background with mobile optimization */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      
      {/* Main content with responsive padding */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <Navbar/>
        <Hero/>
        <About/>
        <Technologies/>
        <Experience/>
        <Education/>
        <OpenSource/>
        <Contact/>
      </div>
    </div>
  );
};

export default App;
