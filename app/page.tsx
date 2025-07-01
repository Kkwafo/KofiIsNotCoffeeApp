"use client";
import Logo from '@/components/ui/Logo';
import { redirect } from "next/navigation";

export default function Home() {

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[url('/bg-pattern.png')] bg-cover bg-center bg-no-repeat">
      <div className="bg-[#F8F0E6]/90 p-8 rounded-2xl shadow-2xl max-w-xl text-center animate-fadeIn">
        <div className="mb-6 flex justify-center">
          <Logo />
        </div>

        <h1 className="text-4xl font-bold mb-4 text-gray-800 drop-shadow-md">
          Sistema de Gestión de Cocina - DEMO
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          Esta aplicación es un demo para mostrar el funcionamiento de un sistema de gestión de pedidos de cocina. Elija una opción para comenzar.
        </p>

        <div className="flex flex-col space-y-4">
          <button
            onClick={() => redirect("/order/cafe")}
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition duration-300 transform hover:scale-105"
          >
            Realizar Orden
          </button>
          <button
            onClick={() => redirect("/admin/orders")}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition duration-300 transform hover:scale-105"
          >
            Administrar Plataforma
          </button>
          <button
            onClick={() => redirect("/orders")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition duration-300 transform hover:scale-105"
          >
            Órdenes Listas
          </button>
        </div>
      </div>
    </main>
  );
}
