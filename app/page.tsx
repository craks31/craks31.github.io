import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import SkillSet from "@/components/SkillSet";

const SectionDivider = () => (
  <div className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-gray-500/30 to-transparent my-4" />
);

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <NavBar />
        <Hero />
        <SectionDivider />
        <AboutMe />
        <SectionDivider />
        <SkillSet />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Contact />
      </div>
    </main>
  );
}
