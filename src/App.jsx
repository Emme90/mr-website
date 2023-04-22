import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Footer,
  Hero,
  Hobbies,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="max-md:invisible">
          <StarsCanvas />
        </div>
        <div className="relative">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Hobbies />
        <Contact />
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
