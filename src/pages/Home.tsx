import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

import { projectsInfo } from "@/utils/projectsInfo";
import { socialNetworks } from "@/utils/socialNetworks";
import { skills } from "@/utils/skills";

const Home = () => {
  return (
    <>
      <Hero socialNetworks={socialNetworks} skills={skills} />
      <Projects projectsInfo={projectsInfo} />
    </>
  );
};

export default Home;
