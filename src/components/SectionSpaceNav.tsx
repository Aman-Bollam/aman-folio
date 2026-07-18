"use client";

import { useEffect } from "react";

const SECTIONS = ["top", "experience", "projects", "contact"];

// Space / Shift+Space step through the homepage sections (a snappier
// version of the browser's native space-to-page-down). Tab keeps its
// default link-navigation behavior.
export default function SectionSpaceNav() {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== " ") return;
      // Let Space keep activating focused links/buttons
      const target = e.target as HTMLElement | null;
      if (target && target.closest("a, button, input, textarea, select")) return;
      e.preventDefault();

      const positions = SECTIONS.map((id) => {
        if (id === "top") return 0;
        const el = document.getElementById(id);
        return el ? el.getBoundingClientRect().top + window.scrollY : 0;
      });

      // Current section = last one whose top is at or above the viewport
      let current = 0;
      positions.forEach((top, i) => {
        if (window.scrollY >= top - window.innerHeight * 0.3) current = i;
      });

      const next = Math.min(
        Math.max(current + (e.shiftKey ? -1 : 1), 0),
        SECTIONS.length - 1
      );

      if (next === 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.getElementById(SECTIONS[next])?.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return null;
}
