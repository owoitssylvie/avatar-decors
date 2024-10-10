import Image from "next/image";
import Header from "../components/header";

export default function Home() {
  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-12">
      <Header />
      <div className="pt-36 fixed flex place-items-center before:absolute before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/5 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-pink-700 before:dark:opacity-10 after:dark:from-purple-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="dark:drop-shadow-[0_0_0.3rem_#cd66ff] dark"
          src="/logo.png"
          alt="Jelly Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className="pt-96">
        <h1 className="font-extrabold">WELCOME!</h1>
        <div>
          <p className="pt-10">
            This website aims to provide custom Avatar Decorations to be used
            with Decor, the Vencord plugin.
          </p>
          <p className="pt-2">
            <span className="font-bold">Important:</span> This website is
            non-commercial, has no ads, and is open source.
          </p>
          <p className="italic font-thin pt-5 pb-10">
            All decors hosted on this site were provided by the artists.
          </p>
        </div>
      </div>
    </main>
  );
}
