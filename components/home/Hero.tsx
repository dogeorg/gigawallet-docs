'use client';

import Link from 'next/link';
import Image from 'next/image';
import '@/styles/hero.css';

export function Hero() {
  return (
    <section className="gigawallet-hero">
      {/* Parallax: two equal panels per layer so -50% scroll = seamless continuous loop */}
      <div className="gigawallet-hero-parallax gigawallet-hero-clouds" aria-hidden>
        <div className="gigawallet-hero-parallax-inner gigawallet-hero-parallax-clouds-inner">
          <div className="gigawallet-hero-parallax-panel">
            <div className="gigawallet-cloud gigawallet-cloud-1" />
            <div className="gigawallet-cloud gigawallet-cloud-2" />
            <div className="gigawallet-cloud gigawallet-cloud-3" />
            <div className="gigawallet-cloud gigawallet-cloud-4" />
            <div className="gigawallet-cloud gigawallet-cloud-5" />
            <div className="gigawallet-cloud gigawallet-cloud-6" />
          </div>
          <div className="gigawallet-hero-parallax-panel">
            <div className="gigawallet-cloud gigawallet-cloud-1" />
            <div className="gigawallet-cloud gigawallet-cloud-2" />
            <div className="gigawallet-cloud gigawallet-cloud-3" />
            <div className="gigawallet-cloud gigawallet-cloud-4" />
            <div className="gigawallet-cloud gigawallet-cloud-5" />
            <div className="gigawallet-cloud gigawallet-cloud-6" />
          </div>
        </div>
      </div>
      <div className="gigawallet-hero-parallax gigawallet-hero-mountains" aria-hidden>
        <div className="gigawallet-hero-parallax-inner gigawallet-hero-parallax-mountains-inner">
          <div className="gigawallet-hero-parallax-panel">
            <div className="gigawallet-mountain gigawallet-mountain-1" />
            <div className="gigawallet-mountain gigawallet-mountain-2" />
            <div className="gigawallet-mountain gigawallet-mountain-3" />
            <div className="gigawallet-mountain gigawallet-mountain-4" />
            <div className="gigawallet-mountain gigawallet-mountain-5" />
            <div className="gigawallet-mountain gigawallet-mountain-6" />
          </div>
          <div className="gigawallet-hero-parallax-panel">
            <div className="gigawallet-mountain gigawallet-mountain-1" />
            <div className="gigawallet-mountain gigawallet-mountain-2" />
            <div className="gigawallet-mountain gigawallet-mountain-3" />
            <div className="gigawallet-mountain gigawallet-mountain-4" />
            <div className="gigawallet-mountain gigawallet-mountain-5" />
            <div className="gigawallet-mountain gigawallet-mountain-6" />
          </div>
        </div>
      </div>
      <div className="gigawallet-hero-parallax gigawallet-hero-buildings" aria-hidden>
        <div className="gigawallet-hero-parallax-inner gigawallet-hero-parallax-buildings-inner">
          <div className="gigawallet-hero-parallax-panel">
            <div className="gigawallet-building gigawallet-building-1" />
            <div className="gigawallet-building gigawallet-building-2" />
            <div className="gigawallet-building gigawallet-building-3" />
            <div className="gigawallet-building gigawallet-building-4" />
            <div className="gigawallet-building gigawallet-building-5" />
            <div className="gigawallet-building gigawallet-building-6" />
            <div className="gigawallet-building gigawallet-building-7" />
            <div className="gigawallet-building gigawallet-building-8" />
            <div className="gigawallet-building gigawallet-building-9" />
            <div className="gigawallet-building gigawallet-building-10" />
          </div>
          <div className="gigawallet-hero-parallax-panel">
            <div className="gigawallet-building gigawallet-building-1" />
            <div className="gigawallet-building gigawallet-building-2" />
            <div className="gigawallet-building gigawallet-building-3" />
            <div className="gigawallet-building gigawallet-building-4" />
            <div className="gigawallet-building gigawallet-building-5" />
            <div className="gigawallet-building gigawallet-building-6" />
            <div className="gigawallet-building gigawallet-building-7" />
            <div className="gigawallet-building gigawallet-building-8" />
            <div className="gigawallet-building gigawallet-building-9" />
            <div className="gigawallet-building gigawallet-building-10" />
          </div>
        </div>
      </div>

      <div className="gigawallet-hero-content">
        <div className="gigawallet-hero-text">
          <h1 className="gigawallet-hero-title">GigaWallet</h1>
          <p className="gigawallet-hero-subtitle">
            <strong>A backend for your Dogecoin Business.</strong>
            <br /><br />
            Dogecoin GigaWallet provides a convenient integration API for platforms such as online
            shops, exchanges, and social media to accept and transact Dogecoin on behalf of their users.
          </p>
          <div className="gigawallet-hero-buttons">
            <Link
              href="/docs"
              className="gigawallet-hero-btn gigawallet-hero-btn-primary"
            >
              <span className="material-icons" aria-hidden>rocket_launch</span>
              Get Started
            </Link>
            <Link
              href="https://github.com/dogecoinfoundation/gigawallet"
              target="_blank"
              rel="noopener noreferrer"
              className="gigawallet-hero-btn gigawallet-hero-btn-secondary"
            >
              <span className="material-icons" aria-hidden>code</span>
              Get Code
            </Link>
          </div>
        </div>
        <div className="gigawallet-hero-image-wrap">
          <Image
            src="/images/GigaWallet.gif"
            alt="GigaWallet"
            className="gigawallet-hero-gif"
            width={320}
            height={320}
            unoptimized
          />
        </div>
      </div>

      {/* Mario-style loop: icon walks and collects Dogecoin coins */}
      <div className="gigawallet-hero-game" aria-hidden>
        <div className="gigawallet-hero-game-ground" />
        <div className="gigawallet-hero-game-coins">
          <span className="gigawallet-hero-coin gigawallet-hero-coin-1" aria-hidden>Ð</span>
          <span className="gigawallet-hero-coin gigawallet-hero-coin-2" aria-hidden>Ð</span>
          <span className="gigawallet-hero-coin gigawallet-hero-coin-3" aria-hidden>Ð</span>
          <span className="gigawallet-hero-coin gigawallet-hero-coin-4" aria-hidden>Ð</span>
          <span className="gigawallet-hero-coin gigawallet-hero-coin-5" aria-hidden>Ð</span>
        </div>
        <div className="gigawallet-hero-game-character">
          <Image
            src="/images/gigawallet-icon.png"
            alt=""
            width={48}
            height={48}
            className="gigawallet-hero-walker"
          />
        </div>
      </div>
    </section>
  );
}
