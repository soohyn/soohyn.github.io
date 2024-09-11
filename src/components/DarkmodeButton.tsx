"use client";

import Image from "next/image";
import { FC, useState } from "react";
import IconSun from "../assets/sun.svg";
import IconMoon from "../assets/moon.svg";

const DarkmodeButton: FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const onClickDarkmode = () => {
    setIsDark((prev) => !prev);
  };

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
