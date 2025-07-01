"use client"
import useSWR from 'swr';
import Logo from '@/components/ui/Logo';
import { OrderWithProducts } from '@/src/types';
import LatestOrderItem from '@/components/order/LatestOrderItem';

export default function OrdersPage() {
  const url = '/orders/api';
  const fetcher = () => fetch(url).then(res => res.json());
  const { data, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
    refreshInterval: 60000,
    revalidateOnFocus: false,
  });

  if (isLoading) return (
    <p className="text-center mt-20 text-2xl text-amber-600 font-semibold animate-pulse">
      Cargando órdenes...
    </p>
  );

  if (data) return (
    <div className="max-w-screen-xl mx-auto px-4">
      <h1 className="text-center mt-16 text-5xl font-black text-amber-700 drop-shadow">
        Órdenes Listas
      </h1>

      <div className="flex justify-center mt-10">
        <Logo />
      </div>

      {data.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {data.map(order => (
            <LatestOrderItem
              key={order.id}
              order={order}
            />
          ))}
        </div>
      ) : (
        <p className="text-center my-16 text-2xl text-stone-600 font-semibold">
          No hay órdenes listas por el momento.
        </p>
      )}
    </div>
  );
}
