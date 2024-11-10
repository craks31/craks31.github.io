import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import SkillSet from "@/components/SkillSet";


export default function Home() {
  return (
    <main className = "relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className = "max-w-7xl w-full">
        <NavBar></NavBar>
        <Hero/>
        <AboutMe></AboutMe>
        <SkillSet></SkillSet>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </main>
  );
}
