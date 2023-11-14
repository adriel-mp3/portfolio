import { useState } from "react";

import type { MouseEvent } from "react";

import { useMedia } from "@/hooks/useMedia";

export const useHeader = () => {
  const [isMenuOpen, setMenuIsOpen] = useState(false);
  const isViewportMobile = useMedia("(max-width: 1024px)");

  const toggleMenu = () => {
    setMenuIsOpen((open) => !open);
  };

  const smoothScrollToSection = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const clickedAnchorId = e.currentTarget.id;

    const section = document.querySelector(
      `section[id="${clickedAnchorId}"], footer[id="${clickedAnchorId}"]`
    );

    const scrollOptions: ScrollIntoViewOptions = {
      behavior: "smooth",
      block: "start",
    };

    section?.scrollIntoView(scrollOptions);
  };

  return {
    isMenuOpen,
    toggleMenu,
    isViewportMobile,
    smoothScrollToSection,
  };
};
