import Image from "next/image";
import {
  MagnifyingGlassCircleIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import AvatarPic from "./AvatarPic";

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">

        <div className="
        absolute
        top-0
        left-0
        w-full
        h-96
        bg-gradient-to-br
        from-pink-400
        to-[#0055D1]
        rounded-md
        filter
        blur-3xl
        opacity-50
        -z-50
        ">
        </div>


        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Trello-logo-blue.svg"
          alt="Logo de trello"
          width={300}
          height={100}
          className="w-44 md:w-56p pb-10 md:pb-0 object-contain"
        />

        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassCircleIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 outline-none p-2"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>
          <AvatarPic />
        </div>
      </div>

      <div className="flex items-center justify-center px-5 py-6 md:py-5">
        <p className="flex items-center p-5 text-sm font-light pr-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1] ">
          <UserCircleIcon className="inline-block h-10 w-10 text-[#0055D1] mr-1" />
          Texto texto texto texto texto texto...
        </p>
      </div>
    </header>
  );
}

export default Header;
