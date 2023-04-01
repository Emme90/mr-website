import React from "react";
import { styles } from "../style";
import { navLinks, socials } from "../constants/index";
import { github } from "../assets";

const Footer = () => {
  return (
    <footer
      className={`${styles.paddingX} w-full flex items-center py-10 top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-start max-w-2xl mx-auto">
        <div className="flex-col flex gap-2 justify-between">
          <h3 className="text-white text-[24px] font-bold uppercase">
            Website map
          </h3>
          <ul className="flex-col flex gap-2">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer uppercase"
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-col items-end flex gap-2 justify-between">
          <h3 className="text-white text-[24px] font-bold uppercase">
            socials
          </h3>
          <ul className="flex flex-row justify-end gap-4">
            {socials.map((social, index) => (
              <li key={index}>
                <div
                  onClick={() => window.open(social.url, "_blank")}
                  className="flex justify-center items-center black-gradient w-10 h-10 rounded-full cursor-pointer"
                >
                  <img
                    src={social.image}
                    alt={social.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
