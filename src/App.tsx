import { useLayoutEffect, useRef } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Portfolio } from "./components/Portfolio";
import { ProjectPage } from "./components/ProjectPage";
import { Resume } from "./components/Resume";
import { LanguageProvider } from "./i18n/LanguageContext";
import { getHomeScrollY, useHashRoute, type Route } from "./router";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
    </>
  );
}

function scrollToSection(id: string, behavior: ScrollBehavior) {
  document.getElementById(id)?.scrollIntoView({ behavior });
}

function Routes() {
  const route = useHashRoute();
  const previous = useRef<Route>(route);

  useLayoutEffect(() => {
    const prev = previous.current;
    previous.current = route;

    if (route.name === "project") {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }

    const comingFromProject = prev !== route && prev.name === "project";

    if (route.section) {
      scrollToSection(route.section, comingFromProject || prev === route ? "instant" : "smooth");
      return;
    }

    if (comingFromProject) {
      const y = getHomeScrollY();
      if (y !== null) window.scrollTo({ top: y, behavior: "instant" });
      else scrollToSection("portfolio", "instant");
    }
  }, [route]);

  return (
    <main>{route.name === "project" ? <ProjectPage id={route.id} /> : <Home />}</main>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Routes />
      <Footer />
    </LanguageProvider>
  );
}
