'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SIDEBAR_TRIGGER_SLOT_ID } from './SidebarTriggerPortal';

export function TopNav() {
  return (
    <nav className="gigawallet-top-nav">
      <div className="gigawallet-top-nav-container">
        <div id={SIDEBAR_TRIGGER_SLOT_ID} className="gigawallet-top-nav-menu-slot" />
        <div className="gigawallet-top-nav-logo">
          <Link href="/" className="gigawallet-top-nav-logo-link">
            <Image
              src="/images/gigawallet-icon.png"
              alt=""
              width={40}
              height={40}
              className="gigawallet-logo-icon"
            />
            <Image
              src="/images/gigawallet-logo.png"
              alt="GigaWallet"
              width={140}
              height={32}
              className="gigawallet-logo-img"
            />
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
            <span className="material-icons" aria-hidden>code</span>
          </a>
          <a
            href="https://github.com/dogeorg/gigawallet-docs"
            target="_blank"
            rel="noopener noreferrer"
            className="gigawallet-top-nav-link"
            title="Edit this site"
            aria-label="Edit documentation"
          >
            <span className="material-icons" aria-hidden>edit</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export { SIDEBAR_TRIGGER_SLOT_ID };
