import Image from "next/image";
import Header from "../components/header";

export default function Home() {
  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-12">
      <Header />
      <div className="pt-36 fixed flex place-items-center before:absolute before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-pink-700 before:dark:opacity-10 after:dark:from-purple-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>
      <div className="pt-24">
        <h1 className="font-extrabold text-lg">CREDITS:</h1>
        <div>
          <p className="pt-8">
            Here, you'll find the website credits; aka, those who worked on the
            website itself. These people dedicated their free time to bring the
            site to life!
          </p>
          <p className="pt-2">
            Credits for the decorations can be found in the decorations page for
            each category.
          </p>
        </div>
        <div className="pt-12">
          <h2 className="font-extrabold pb-5 text-lg">General Credits:</h2>
          <br></br>
          <p>
            <span className="font-bold">HTML Developer: </span>Jelly
          </p>
          <p>
            <span className="font-bold">Next.js Developer: </span>gabe.j
          </p>
          <p>
            <span className="font-bold">Co-Web Developer: </span>SpartanWynter
          </p>
          <p>
            <span className="font-bold">Co-Web Developer: </span>jissoho
          </p>
          <p>
            <span className="font-bold">Logo/Favicon: </span>Jelly
          </p>
          <p>
            <span className="font-bold">Jellyfish Art: </span>zin_ar
          </p>
        </div>
        <div className="pt-12 pb-20">
          <h1 className="font-extrabold text-lg pb-5">TRANSLATORS:</h1>
          <p className="italic font-thin">
            This is just placeholder text and will be updated eventually.
          </p>
          <p>English: Jelly</p>
          <p>British: Jelly</p>
          <p>Spanish: jissoho</p>
          <p>Arabic: jissoho</p>
          <p>French: jissoho</p>
          <p>Russian: jissoho</p>
          <p>German: jissoho</p>
          <p>Lithuanian: mikyu</p>
          <p>Romanian: sharsame</p>
          <p>Italian: Treta</p>
          <p>Turkish: Naturr</p>
          <p>Hungarian: lecdeeee</p>
        </div>
      </div>
    </main>
  );
}
