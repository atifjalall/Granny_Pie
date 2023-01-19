import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Menu } from "./components/menu";
import { Contact } from "./components/contact";
import { Home } from "./components/home";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Home data={landingPageData.Home} />
      <About data={landingPageData.About} />
      <Menu data={landingPageData.Gallery} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
