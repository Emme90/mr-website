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
        <div className="relative">
          {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> */}
          <StarsCanvas />
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Hobbies />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
