"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

import { assets } from "@/app/[locale]/assets";
import css from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher({ scroll }: { scroll: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const language = locale.toUpperCase();

  const changeLanguage = (lang: string) => {
    const segments = pathname.split("/");

    if (segments[1] === lang.toLowerCase()) return;

    segments[1] = lang.toLowerCase();
    const newPath = segments.join("/") + window.location.hash;

    router.replace(newPath);
  };

  return (
    <div className={css.menu_wrapper}>
      <ul>
        <li>
          <span className={css.menu_parent}>
            {language}
            <i className={css.arrow_right}></i>
          </span>

          <ul>
            {assets.languages
              .filter((item) => item !== language)
              .map((item) => (
                <li className={scroll ? css.scroll_background : ""} key={item}>
                  <button
                    type={"button"}
                    className={css.button}
                    onClick={() => changeLanguage(item)}
                  >
                    <span className={css.dropdown}>{item}</span>
                  </button>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
