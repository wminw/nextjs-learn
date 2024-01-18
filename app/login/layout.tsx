import Link from 'next/link';
import AcmeLogo from '../ui/acme-logo';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <Link href="/login">
              <AcmeLogo />
            </Link>
          </div>
        </div>
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
          {children}
        </div>
      </div>
    </main>
  );
}
