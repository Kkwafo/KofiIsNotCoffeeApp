"use client";
import { useRouter } from 'next/navigation';

export default function GoBackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="group relative flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 text-white text-lg font-bold rounded-2xl shadow-lg px-8 py-4 text-center transition duration-300 w-full lg:w-auto overflow-hidden"
    >
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl animate-pulse"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 transition-transform group-hover:-translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      <span className="z-10">Volver</span>
    </button>
  );
}
