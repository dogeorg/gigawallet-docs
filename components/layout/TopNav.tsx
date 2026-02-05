'use client';

import Link from 'next/link';

const SIDEBAR_TRIGGER_SLOT_ID = 'sidebar-trigger-slot';

export function TopNav() {
  return (
    <nav className="gigawallet-top-nav">
      <div className="gigawallet-top-nav-container">
        <div id={SIDEBAR_TRIGGER_SLOT_ID} className="gigawallet-top-nav-menu-slot" />
        <div className="gigawallet-top-nav-logo">
          <Link href="/" className="gigawallet-top-nav-logo-link">
            <span className="gigawallet-logo-text">GigaWallet</span>
          </Link>
        </div>
        <div className="gigawallet-top-nav-actions">
          <a
            href="https://github.com/dogecoinfoundation/gigawallet"
            target="_blank"
            rel="noopener noreferrer"
            className="gigawallet-top-nav-link"
            title="View source code"
            aria-label="View source on GitHub"
          >
            GitHub
          </a>
          <a
            href="https://github.com/dogeorg/gigawallet-docs"
            target="_blank"
            rel="noopener noreferrer"
            className="gigawallet-top-nav-link"
            title="Edit this site"
            aria-label="Edit documentation"
          >
            Edit docs
          </a>
        </div>
      </div>
    </nav>
  );
}

export { SIDEBAR_TRIGGER_SLOT_ID };
