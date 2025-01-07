import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  title: string;
  description: string;
  link: string;
  image: string;
  logo: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  link,
  image,
  logo,
}) => {
  return (
    <Link href={link} target="_blank">
      <div className="intersect-once motion-duration-1500 intersect:motion-translate-y-in-[20%] intersect:motion-blur-in relative group flex flex-col items-center justify-center w-full h-full bg-gray-100 text-gray-600 p-6 lg:p-16 gap-8 rounded-3xl hover:scale-[101%] hover:shadow-sm transition-all">
        <Image
          src={image}
          alt={title}
          width={1280}
          height={720}
          className="rounded-2xl shadow-lg bg-gray-300 z-20 object-cover group-hover:rotate-[1deg] transition-all"
        />
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-row items-center justify-center bg-white py-1 px-4 gap-2 rounded-3xl shadow-md z-20 transition-all">
            <Image
              src={logo}
              alt={title}
              width={24}
              height={24}
              className="p-[1px]"
            />
            <h2 className="text-xs text-center">
              <b>{title}</b>
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-0 opacity-0 group-hover:motion-preset-rebound-right motion-duration-[0.4s] group-hover:w-6 group-hover:opacity-100 transition-all"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
          <div className="text-xs text-center pt-2 z-20 md:text-sm group-hover:text-white group-hover:text transition-all">
            {description}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-davblue via-blue-400 to-pink-300 opacity-0 group-hover:opacity-70 rounded-3xl transition-opacity z-10" />
      </div>
    </Link>
  );
};

export default Project;
