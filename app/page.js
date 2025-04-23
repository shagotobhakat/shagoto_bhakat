import Header from "@/component/header.jsx";
import Banner from "@/component/banner.jsx";
import About from "@/component/about.jsx";
import Skill from "@/component/skill.jsx";
import Service from "@/component/service.jsx";
import Work from "@/component/work";
import Experience from "@/component/experience";
import Footer from "@/component/footer";

export default function Home () {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Service></Service>
      <Work></Work>
      <Experience></Experience>
      <Footer></Footer>
    </>
  );
}
