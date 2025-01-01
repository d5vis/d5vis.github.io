import Hero from "@/app/components/hero";
import Projects from "@/app/components/projects";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-inter)]">
      <main className="flex-col items-center justify-center">
        <Hero />
        <Projects />
      </main>
      <footer className="p-4 flex items-center justify-center text-gray-500 text-sm">
        <p>
          <b>
            made with &lt;3 by <span className="text-davblue">@d5vis</span> /{" "}
            <a
              href="https://buymeacoffee.com/d5vis"
              target="_blank"
              className="hover:underline focus:underline"
            >
              buy me a coffee
            </a>
          </b>
        </p>
      </footer>
    </div>
  );
}
