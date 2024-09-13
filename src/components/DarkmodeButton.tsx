"use client";

import Image from "next/image";
import { FC, useEffect, useState } from "react";
import IconSun from "../assets/sun.svg";
import IconMoon from "../assets/moon.svg";

const DarkmodeButton: FC = () => {
  const [isDark, setIsDark] = useState<boolean>(
    localStorage.getItem("theme") === "dark"
  );

  const onClickDarkmode = () => {
    setIsDark((prev) => !prev);

    if (isDark) {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  };

  const prepare = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    prepare();
  }, [isDark]);

  return (
    <button onClick={onClickDarkmode}>
      {isDark ? (
        <Image src={IconMoon} alt="moon.svg" width={24} height={24} />
      ) : (
        <Image src={IconSun} alt="sun.svg" width={24} height={24} />
      )}
    </button>
  );
};

export default DarkmodeButton;
