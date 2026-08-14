"use client";

import React from "react";
import Link from "next/link";
import { usePageTransition } from "./TransitionOverlay";

interface TransitionLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  children: React.ReactNode;
  href: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function TransitionLink({
  children,
  href,
  className = "",
  onClick,
  ...props
}: TransitionLinkProps) {
  const { triggerTransition, isPending } = usePageTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Invoke custom onClick handler if provided
    if (onClick) {
      onClick(e);
    }

    // Bypass for external links, anchor hash links, new tabs, or if transition is already running
    const isExternal = href.startsWith("http") || href.startsWith("//");
    const isHash = href.startsWith("#");
    const isNewTab = props.target === "_blank";

    if (isExternal || isHash || isNewTab || e.defaultPrevented || isPending) {
      return;
    }

    // Intercept internal page navigation for paint wipe transition
    e.preventDefault();
    triggerTransition(href);
  };

  return (
    <Link href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  );
}
