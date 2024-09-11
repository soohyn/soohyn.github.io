import { FC } from "react";
import Contacts from "./Contacts";

const Footer: FC = () => {
  return (
    <footer className="px-5 pt-10 pb-20 flex flex-row justify-between">
      <span>Copyright © 2024 Soohyeon All rights reserved.</span>
      <Contacts />
    </footer>
  );
};

export default Footer;
