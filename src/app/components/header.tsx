import Image from "next/image";

export default function Header() {
  return (
    <div className="z-10 h-5 w-full max-w-1.5xl items-center justify-between text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Jelly's Space - &nbsp;
        <code className=" font-bold">Avatar Decors</code>
      </p>
      <div className="z-10 h-5 w-1/2 max-w-1.5xl items-center justify-between lg:flex pr-24 text-xl">
        <a href="/">Home</a>
        <a href="/decors">Decorations</a>
        <a href="/guide">Guide</a>
        <a href="/credits">Credits</a>
      </div>
      <div className="fixed left-0 flex w-full justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
        <Image
          className="dark:drop-shadow-[0_0_0.5rem_#000000] dark"
          src="/jellyhome.png"
          alt="Jelly Logo"
          width={100}
          height={24}
          priority
        />
      </div>
    </div>
  );
}
