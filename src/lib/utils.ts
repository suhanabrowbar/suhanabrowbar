import { MouseEvent } from "react";

export const scrollToSection = (
  e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  id: string,
) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};