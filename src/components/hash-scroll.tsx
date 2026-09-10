"use client";

import { useEffect } from "react";

export function HashScroll() {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;

    const scrollToHash = () => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    scrollToHash();
    const timeout = window.setTimeout(scrollToHash, 100);
    return () => window.clearTimeout(timeout);
  }, []);

  return null;
}
