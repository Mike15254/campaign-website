import Image from 'next/image';

export const Logo = () => (
  <div className="flex items-center gap-2">
    <Image
      src="/images/logo1.png"
      alt="Okiya Logo"
      width={48}
      height={48}
      className="w-12 h-12"
    />
    <span className="font-bold text-xl">Okiya 2027</span>
  </div>
);