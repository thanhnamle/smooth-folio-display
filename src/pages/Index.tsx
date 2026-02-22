import { useState, useCallback } from "react";
import Splash from "@/components/Splash";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  return (
    <>
      {!splashDone && <Splash onComplete={handleSplashComplete} />}
      {splashDone && (
        <>
          <Navbar />
          <ScrollProgress />
          <BackToTop />
          <main>
            <Hero />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </>
      )}
    </>
  );
};

export default Index;
