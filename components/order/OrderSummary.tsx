"use client";
import { useStore } from '@/src/store';
import ProductDetails from './ProductDetails';
import { formatCurrency } from '@/src/utils';
import { useMemo } from 'react';
import { createOrderAction } from '@/actions/create-order-action';
import { OrderSchema } from '@/src/schema';
import { toast } from 'react-toastify';

export default function OrderSummary() {
  const order = useStore((state => state.order));
  const clearOrder = useStore((state => state.clearOrder));
  const total = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [ order ]);

  const handleCreateOrder = async (formData: FormData) => {
    const data = {
      name: formData.get('name')?.toString(),
      total: total,
      order
    };
    const result = OrderSchema.safeParse(data);
    if (!result.success) {
      result.error.issues.forEach((issue) => toast.error(issue.message));
      return;
    }
    const response = await createOrderAction(data);
    if (response?.errors) {
      response.errors.forEach((issue) => toast.error(issue.message));
      return;
    }
    toast.success('Pedido Realizado correctamente');
    clearOrder();
  };

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-6 bg-[#F8F0E6] rounded-2xl shadow-xl border border-amber-300">
      <h1 className="text-4xl text-center font-black text-amber-800">Mi Pedido</h1>

      {order.length === 0 ? (
        <p className="text-center text-gray-700 mt-6">El pedido está vacío</p>
      ) : (
        <div className="mt-5 space-y-6">
          {order.map(item => (
            <ProductDetails key={item.id} item={item} />
          ))}

          <p className="text-2xl text-center mt-10 text-amber-800">
            Total a pagar:{' '}
            <span className="font-bold">{formatCurrency(total)}</span>
          </p>

          <form
            className="w-full mt-6 space-y-4"
            action={handleCreateOrder}
          >
            <input
              type="text"
              placeholder="Tu Nombre"
              className="bg-white border border-amber-300 p-3 w-full rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
              name="name"
            />

            <input
              type="submit"
              className="py-3 rounded-xl uppercase text-white bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-600 hover:to-yellow-500 w-full text-center cursor-pointer font-bold shadow-lg transition duration-300"
              value="Confirmar Pedido"
            />
          </form>
        </div>
      )}
    </aside>
  );
}
