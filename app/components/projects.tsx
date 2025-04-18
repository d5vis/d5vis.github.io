import Playlist from "./playlist";
import Project from "./project";

const Projects = () => {
  return (
    <div
      id="work"
      className="grid grid-cols[1fr] sm:grid-cols-[1fr_1fr] w-full p-6 gap-6 motion-translate-y-in-[5%] motion-opacity-in motion-blur-in motion-delay-[1s]"
    >
      <div className="flex flex-col w-full h-full gap-4">
        <Project
          title="Google Vids Playback UI"
          description="Fullstack, UI/UX (Intern, Summer 2024)"
          link="https://docs.google.com/videos/u/0/"
          image="/images/vids.gif"
          logo="/images/google.png"
        />
        <Project
          title="NSBE at LMU"
          description="Co-President, National Society of Black Engineers at Loyola Marymount University"
          link="https://nsbelmu.org/"
          image="/images/nsbe.png"
          logo="/images/lmu.png"
        />
        <Project
          title="Android Auto Partner Tools"
          description="Fullstack (Intern, Summer 2023)"
          link="https://source.android.com/docs/automotive"
          image="/images/taco.jpg"
          logo="/images/android.png"
        />
        {/* <Project
          title="Causal Discovery"
          description="Research on Causal Inference & Understanding Behavior"
          link="https://drive.google.com/file/d/1wZTY-9hhW0jScWyRyxMbc1HGq27RsKdH/view?usp=sharing"
          image="/images/causal.png"
          logo="/images/lmu.png"
        /> */}
      </div>
      <div className="flex flex-col w-full h-full gap-4">
        <Project
          title="Counterfactuals & Buyer Retention"
          description="Machine Learning Research Engineer (Spring 2025)"
          link="https://ebay.com"
          image="/images/ebay.png"
          logo="/images/ebay_logo.png"
        />
        <Project
          title="LMUCS TA Site"
          description="Computer Science TA Schedule & Resources"
          link="https://ta.lmucs.org"
          image="/images/talmucs.png"
          logo="/images/lmu.png"
        />
        {/* <Project
          title="Who's on Duty?"
          description="RA Duty Schedule for LMU Student Housing"
          link="https://whosonduty.vercel.app/l56"
          image="/images/whosonduty.png"
          logo="/images/lmu.png"
        /> */}
        <Playlist
          link="https://open.spotify.com/playlist/58bwbCuxsfTTbfI9gd6kK0?si=a16a2f812c1549f2"
          title="2025"
          description="My 2025 Spotify Playlist"
        />
      </div>
    </div>
  );
};

export default Projects;
