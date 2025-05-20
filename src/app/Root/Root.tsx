import About from "pages/About";
import Home from "pages/Home";
import Skill from "pages/Skill";
import Projects from "pages/Projects";
import Contact from "pages/Contact";

const Root = () => {
  return (
    <>
      <section id="home">
        <Home />
      </section>

      <section id="skill">
        <Skill />
      </section>

      <section id="about">
        <About />
      </section>

      
      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Root;
