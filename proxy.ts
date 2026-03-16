import { type NextRequest, NextResponse } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";

const intlMiddleware = createIntlMiddleware(routing);

const PUBLIC_FILE = /\.(.*)$/;
const LOCALES = ["ru", "ro", "en"];

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return;
  }

  const intlResponse = intlMiddleware(req);
  if (intlResponse) return intlResponse;

  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  const locale = req.cookies.get("NEXT_LOCALE")?.value || "ru";

  return NextResponse.redirect(
    new URL(`/${locale}${pathname}${req.nextUrl.search}`, req.url),
  );
}
