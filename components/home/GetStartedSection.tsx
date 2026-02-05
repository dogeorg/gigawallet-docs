import Link from 'next/link';

export function GetStartedSection() {
  return (
    <section className="gigawallet-get-started-section">
      <div className="gigawallet-get-started-inner">
        <h2 className="gigawallet-get-started-title">What is GigaWallet?</h2>
        <p>
          GigaWallet is a backend service that provides a convenient integration API for platforms
          such as online shops, exchanges, and social media to accept and transact Dogecoin on behalf
          of their users. The purpose is to promote the rapid uptake of Dogecoin as a payment option
          by taking the complexity and risk out of integrating Dogecoin payments into your business.
        </p>
        <Link href="/docs" className="gigawallet-get-started-link">
          Get Started →
        </Link>
      </div>
    </section>
  );
}
