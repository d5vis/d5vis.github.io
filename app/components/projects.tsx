import Project from "./project";

const Projects = () => {
  return (
    <div
      id="work"
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
          title="Android Auto Partner Tools"
          link="https://source.android.com/docs/automotive"
          image="/images/taco.jpg"
          logo="/images/android.png"
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
        <Project
          title="Causal Discovery & Behavior"
          link="https://drive.google.com/file/d/1wZTY-9hhW0jScWyRyxMbc1HGq27RsKdH/view?usp=sharing"
          image="/images/causal.png"
          logo="/images/lmu.png"
        />
      </div>
    </div>
  );
};

export default Projects;
