import { prisma } from '@/src/lib/prisma';
import ImageUpload from './ImageUpload';
import { Product } from '@prisma/client';

async function getCategories() {
  return await prisma.category.findMany();
}

type ProductFormProps = {
  product?: Product;
};

export default async function ProductForm({ product }: ProductFormProps) {
  const categories = await getCategories();

  return (
    <>
      <div className="space-y-2">
        <label
          className="text-amber-800 font-semibold"
          htmlFor="name"
        >
          Nombre:
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="block w-full p-3 bg-white border border-amber-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
          placeholder="Nombre del Producto"
          defaultValue={product?.name}
        />
      </div>

      <div className="space-y-2 mt-5">
        <label
          className="text-amber-800 font-semibold"
          htmlFor="price"
        >
          Precio:
        </label>
        <input
          id="price"
          name="price"
          className="block w-full p-3 bg-white border border-amber-300 rounded-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
          placeholder="Precio del Producto"
          defaultValue={product?.price}
        />
      </div>

      <div className="space-y-2 mt-5">
        <label
          className="text-amber-800 font-semibold"
          htmlFor="categoryId"
        >
          Categoría:
        </label>
        <select
          className="block w-full p-3 bg-white border border-amber-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
          id="categoryId"
          name="categoryId"
          defaultValue={product?.categoryId}
        >
          <option value="">-- Seleccione --</option>
          {categories.map((category) => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-8">
        <ImageUpload image={product?.image} />
      </div>
    </>
  );
}
