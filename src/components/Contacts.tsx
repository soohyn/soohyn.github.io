import { url } from "@/lib";
import { FC } from "react";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

const Contacts: FC = () => {
  return (
    <ul className="flex flex-row gap-3">
      <li>
        <a href={url.github} target="__blank">
          <SiGithub size={20} className="icon-button" />
        </a>
      </li>
      <li>
        <a href={url.linkedin} target="__blank">
          <SiLinkedin size={20} className="icon-button" />
        </a>
      </li>
      <li>
        <a href={`mailto:${url.gmail}`}>
          <SiGmail size={20} className="icon-button" />
        </a>
      </li>
    </ul>
  );
};

export default Contacts;
