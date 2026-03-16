"use client";

import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import css from "./Menu.module.css";
import { menuItems } from "./menuItems";

export default function Menu({ openMenu }: { openMenu: boolean }) {
  const t = useTranslations();
  const pathname = usePathname();

  return (
    <nav>
      <ul
        className={openMenu ? `${css.navigation} ${css.open}` : css.navigation}
      >
        {menuItems.map((item) => (
          <li key={item.id}>
            <a
              href={`${pathname}#${item.to}`}
              className={css.nav_link}
              aria-label={item.name}
            >
              {t(item.name)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
