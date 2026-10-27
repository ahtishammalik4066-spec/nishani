"use client";

import { useState } from "react";

const navigationLinks = [
  ["Home", "#home"],
  ["Collections", "#occasions"],
  ["Pricing", "#pricing"],
  ["Our story", "#transformation"],
  ["How it works", "#how-it-works"],
  ["Gift experience", "#packaging"],
  ["FAQs", "#faq"],
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header" data-menu-open={menuOpen}>
      <a className="brand" href="#home" aria-label="Nishaani home">
        <span className="brand-name">nishaani</span>
        <span className="brand-caption">YOUR MEMORIES, MADE PERSONAL</span>
      </a>
      <nav className="main-nav" id="primary-navigation" aria-label="Main navigation">
        {navigationLinks.map(([label, href]) => (
          <a href={href} key={href} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a
          className="button button-outline header-cta"
          href="#create"
          aria-label="Create your Nishaani"
        >
          <span className="header-cta-full">Create your Nishaani</span>
          <span className="header-cta-short" aria-hidden="true">Create</span>
          <span aria-hidden="true">↗</span>
        </a>
        <a className="bag-link" href="#create" aria-label="View saved keepsake">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 8.5h14l1 12H4l1-12Z" />
            <path d="M9 9V6a3 3 0 0 1 6 0v3" />
          </svg>
          <span>0</span>
        </a>
      </div>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
