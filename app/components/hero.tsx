import Link from "next/link";
import MapTooltip from "./map-tooltip";

const Hero = () => {
  return (
    <div className="relative h-[75vh] flex flex-col justify-between bg-davblue bg-hero bg-cover bg-center rounded-b-[48px] shadow-md">
      <nav className="relative z-10 flex w-full px-8 py-4 justify-between text-white">
        <h1 className="text-xl motion-preset-typewriter-[11] motion-loop-[0.5] motion-duration-[4s] motion-delay-100 h-7">
          <b>davis banks</b>
        </h1>
        <div className="flex flex-col text-end sm:flex-row gap-2 sm:gap-4">
          <Link
            href="#work"
            className="text-xl hover:underline focus:underline"
          >
            <b>work</b>
          </Link>
          <Link
            href="https://github.com/d5vis"
            target="_blank"
            className="text-xl hover:underline focus:underline"
          >
            <b>github</b>
          </Link>
          <Link
            href="https://linkedin.com/in/d5vis"
            target="_blank"
            className="text-xl hover:underline focus:underline"
          >
            <b>linkedin</b>
          </Link>
          {/* <Link
            href="https://docs.google.com/document/d/1gN_Eksicl5UHZw_tF7JI5SArSFH-Ex3Yp_4FYe6eotE/pub"
            target="_blank"
            className="text-xl hover:underline"
          >
            <b>resume</b>
          </Link> */}
          {/* <Link
            href="mailto:davisjbanks@gmail.com"
            className="text-xl hover:underline"
          >
            <b>email</b>
          </Link> */}
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center text-white p-8 gap-2 md:flex-row md:gap-8">
        <div className="flex gap-1 motion-blur-in motion-duration-[1s]">
          <MapTooltip
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
              </svg>
            }
            title="los angeles, california"
            location="los angeles, california"
            zoom={9}
          />
        </div>
        <div className="flex gap-1 motion-blur-in motion-duration-[1s] motion-delay-[0.3s]">
          <MapTooltip
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="currentColor"
              >
                <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
              </svg>
            }
            title="loyola marymount university"
            location="loyola marymount university"
            zoom={15}
          />
        </div>
        <div className="flex gap-1 motion-blur-in motion-duration-[1s] motion-delay-[0.6s]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
          </svg>
          <b>research @ ebay</b>
        </div>
      </div>
    </div>
  );
};

export default Hero;
