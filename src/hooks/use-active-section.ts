"use client";

import { useEffect, useState } from "react";

export function useActiveSection(ids: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      const viewportHeight = window.innerHeight;

      let bestId: string | null = null;
      let bestVisible = 0;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        const visible = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);

        if (visible > bestVisible) {
          bestVisible = visible;
          bestId = id;
        }
      }

      setActiveId(bestVisible > 0 ? bestId : null);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ids]);

  return activeId;
}
