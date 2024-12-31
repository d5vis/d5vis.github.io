import Project from "./project";

const Projects = () => {
  return (
    <div
      id="projects"
      className="grid grid-cols[1fr] sm:grid-cols-[1fr_1fr] w-full p-6 gap-6"
    >
      <div className="flex flex-col w-full h-full gap-4">
        <Project
          title="Google Vids Playback UI"
          link="https://docs.google.com/videos/u/0/"
          image="/images/vids.gif"
          logo="/images/google.png"
        />
        <Project
          title="LMUCS TA Site"
          link="https://ta.lmucs.org"
          image="/images/talmucs.png"
          logo="/images/lmu.png"
        />
      </div>
      <div className="flex flex-col w-full h-full gap-4">
        <Project
          title="Who's on Duty?"
          link="https://whosonduty.vercel.app/l56"
          image="/images/whosonduty.png"
          logo="/images/lmu.png"
        />
      </div>
    </div>
  );
};

export default Projects;
