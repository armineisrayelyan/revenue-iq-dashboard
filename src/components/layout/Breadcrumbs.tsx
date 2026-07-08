"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION_ITEMS } from "@/constants/navigation";

function getBreadcrumbLabel(pathname: string): string {
  if (pathname === "/") {
    return "Dashboard";
  }

  const navigationItem = NAVIGATION_ITEMS.find((item) => item.href === pathname);
  if (navigationItem) {
    return navigationItem.label;
  }

  return pathname
    .split("/")
    .filter(Boolean)
    .at(-1)
    ?.replaceAll("-", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase()) ?? "Dashboard";
}

export function Breadcrumbs() {
  const pathname = usePathname();
  const currentLabel = getBreadcrumbLabel(pathname);

  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link
            href="/"
            className="rounded-md transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Dashboard
          </Link>
        </li>
        {pathname !== "/" ? (
          <>
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li className="font-medium text-foreground" aria-current="page">
              {currentLabel}
            </li>
          </>
        ) : null}
      </ol>
    </nav>
  );
}
