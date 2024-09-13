import { url } from "@/lib";
import Image from "next/image";
import { FC } from "react";

const Profile: FC = () => {
  return (
    <a
      className="flex flex-col items-center gap-6 hover:opacity-50 active:scale-95 transition-all ease-in-out"
      target="_blank"
      href={url.portfolio}
    >
      <div className="relative">
        <div className="w-36 h-36 overflow-hidden border-4 rounded-full border-gray-100 dark:border-gray-800 relative">
          <Image src={""} alt="soohyn" fill={true} className="bg-green-800" />
        </div>
        <div className="bg-white dark:bg-black absolute bottom-1 right-1 flex justify-center text-2xl items-center right-4 w-10 h-10 overflow-hidden border-4 rounded-full border-gray-100 dark:border-gray-800">
          <span>🎁</span>
        </div>
      </div>

      <div className="text-center">
        <h1 className="font-extrabold text-2xl dark:text-white">Soohyn</h1>
        <span className="font-semibold text-gray-500 text-lg">
          Frontend developer
        </span>
      </div>
    </a>
  );
};

export default Profile;
