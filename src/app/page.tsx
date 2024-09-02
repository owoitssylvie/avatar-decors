import Image from "next/image";

export default function Home() {
  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 h-5 w-full max-w-1.5xl items-center justify-between text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Jelly's Space - &nbsp;
          <code className=" font-bold">Avatar Decors</code>
        </p>
        <div className="fixed left-0 flex w-full justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <Image
            src="/jellyhome.png"
            alt="Jelly Logo"
            className="dark"
            width={100}
            height={24}
            priority
          />
        </div>
      </div>
      <div className="pt-28 fixed flex place-items-center before:absolute before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/5 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-pink-700 before:dark:opacity-10 after:dark:from-purple-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
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
          <p className="italic font-thin pt-5">
            All decors hosted on this site were provided by the artists.
          </p>
        </div>
      </div>
      {/* Turn this from regular html to tailwind please im begging */}
    </main>
  );
}
