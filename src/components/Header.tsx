"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import SearchInput from "./SearchInput";

interface Router {
  label: string;
  path: string;
}

const routers: Router[] = [
  {
    label: "Posts",
    path: "/posts",
  },
];

const Header: FC = () => {
  const pathname = usePathname();

  const routersMap = routers.map((r) => {
    return (
      <li
        className={`font-semibold text-gray-500 hover:text-gray-400 active:scale-95 transition-all ${
          pathname.includes(r.path) ? "text-lime-500" : ""
        }`}
        key={r.path}
      >
        <Link href={"/posts"}>{r.label}</Link>
      </li>
    );
  });

  return (
    <header className="flex flex-row items-center px-5 py-4 gap-3">
      <h1 className="text-xl font-extrabold cursor-pointer">
        <a href="/">{"soohyn.log()"}</a>
      </h1>

      <nav className="w-full">
        <ul className="flex flex-row items-center">{routersMap}</ul>
      </nav>

      <div className="flex flex-row">
        <SearchInput />
      </div>
    </header>
  );
};

export default Header;
