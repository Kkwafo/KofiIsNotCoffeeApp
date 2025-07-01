import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className="flex justify-center mt-5">
      <Link href="/" className="relative w-40 h-40 cursor-pointer">
        <Image
          src="/logo.png"
          alt="Logotipo Fresh Coffee"
          fill
          className="object-contain"
        />
      </Link>
    </div>
  );
}
