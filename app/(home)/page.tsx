import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1 w-full max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">GigaWallet</h1>
      <p className="text-lg text-muted-foreground mb-6">
        A backend for your Dogecoin Business. Dogecoin GigaWallet is a backend service which
        provides a convenient integration API for platforms such as online shops, exchanges, social
        media platforms etc, to accept and transact Dogecoin on behalf of their users.
      </p>
      <Link
        href="/docs"
        className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
      >
        View documentation
      </Link>
    </div>
  );
}
