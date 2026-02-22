import { useState, useCallback } from "react";
import Splash from "@/components/Splash";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

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
