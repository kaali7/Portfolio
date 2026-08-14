"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
  onMouseEnter,
  onTouchStart,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();
  const { triggerTransition, isPending } = usePageTransition();

  const isExternal = href.startsWith("http") || href.startsWith("//");
  const isHash = href.startsWith("#");

  const prefetchRoute = () => {
    if (!isExternal && !isHash && href) {
      router.prefetch(href);
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onMouseEnter) onMouseEnter(e);
    prefetchRoute();
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLAnchorElement>) => {
    if (onTouchStart) onTouchStart(e);
    prefetchRoute();
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);

    const isNewTab = props.target === "_blank";

    if (isExternal || isHash || isNewTab || e.defaultPrevented || isPending) {
      return;
    }

    // Intercept internal page navigation for paint wipe transition
    e.preventDefault();
    triggerTransition(href);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleTouchStart}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
