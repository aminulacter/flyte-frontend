"use client";

import { useEffect } from "react";

/**
 * Client-side initializers recovered from the original build:
 *  - AOS (Animate On Scroll) init
 *  - Mobile nav toggle + mega-menu dropdown behaviour (ported from /script.js)
 */
export default function ClientInit() {
  useEffect(() => {
    let aos;
    (async () => {
      try {
        aos = (await import("aos")).default;
        aos.init({ duration: 1000, once: true });
      } catch {
        /* AOS is optional */
      }
    })();

    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("nav-menu");
    const body = document.body;

    const onToggle = () => {
      nav?.classList.toggle("show-menu");
      toggle?.classList.toggle("show-icon");
      body.classList.toggle("no-scroll", !!nav?.classList.contains("show-menu"));
    };

    const onNavClick = (e) => {
      const target = e.target.closest("a");
      if (target && !target.classList.contains("dropdown__button")) {
        nav?.classList.remove("show-menu");
        toggle?.classList.remove("show-icon");
        body.classList.remove("no-scroll");
      }
    };

    toggle?.addEventListener("click", onToggle);
    nav?.addEventListener("click", onNavClick);

    const dropdownItems = Array.from(document.querySelectorAll(".dropdown__item"));

    const toggleItem = (item) => {
      const container = item.querySelector(".dropdown__container");
      if (item.classList.contains("show-dropdown")) {
        container?.removeAttribute("style");
        item.classList.remove("show-dropdown");
      } else if (container) {
        container.style.height = container.scrollHeight + "px";
        item.classList.add("show-dropdown");
      }
    };

    const buttonHandlers = [];
    dropdownItems.forEach((item) => {
      const button = item.querySelector(".dropdown__button");
      if (!button) return;
      const handler = (e) => {
        e.preventDefault();
        const shown = document.querySelector(".show-dropdown");
        toggleItem(item);
        if (shown && shown !== item) toggleItem(shown);
      };
      button.addEventListener("click", handler);
      buttonHandlers.push([button, handler]);
    });

    const mediaQuery = matchMedia("(min-width: 1118px)");
    const containers = Array.from(document.querySelectorAll(".dropdown__container"));
    const removeStyle = () => {
      if (mediaQuery.matches) {
        containers.forEach((el) => el.removeAttribute("style"));
        dropdownItems.forEach((el) => el.classList.remove("show-dropdown"));
        body.classList.remove("no-scroll");
      }
    };
    window.addEventListener("resize", removeStyle);

    return () => {
      toggle?.removeEventListener("click", onToggle);
      nav?.removeEventListener("click", onNavClick);
      buttonHandlers.forEach(([b, h]) => b.removeEventListener("click", h));
      window.removeEventListener("resize", removeStyle);
      aos?.refresh?.();
    };
  }, []);

  return null;
}
