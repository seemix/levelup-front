"use client";

import { useEffect, useRef, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { assets } from "@/app/[locale]/assets";
import {
  BurgerButton,
  LanguageSwitcher,
  Menu,
} from "@/app/[locale]/components";
import { useClickOutside } from "@/app/[locale]/hooks/useClickOutside";
import css from "./Header.module.css";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const clickMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setScroll(true);
      else setScroll(false);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuRef = useRef<HTMLButtonElement>(null);
  useClickOutside(menuRef, () => clickMenu(), openMenu);

  return (
    <header
      className={
        !scroll ? css.header_wrapper : `${css.header_wrapper} ${css.scroll}`
      }
    >
      <div className={css.logo} />
      <div className={css.lang_switcher_wrapper}>
        <div>
          <a
            className={css.insta_link}
            href={assets.instagramUrl}
            target={"_blank"}
            rel={"noreferrer"}
            aria-label={"instagram"}
          >
            <FaInstagram size={"2em"} />
          </a>
        </div>
        <div>
          <LanguageSwitcher scroll={scroll} />
        </div>
      </div>
      <button
        ref={menuRef}
        type={"button"}
        style={{ all: "unset", cursor: "pointer" }}
      >
        <Menu openMenu={openMenu} />
      </button>
      <button
        ref={menuRef}
        className={`button_reset ${css.burger_button}`}
        onClick={clickMenu}
        type={"button"}
      >
        <BurgerButton openMenu={openMenu} />
      </button>
    </header>
  );
}
