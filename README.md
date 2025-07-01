# 🚀 KofiIsNotCoffeeApp

![KofiIsNotCoffeeApp Banner](https://placehold.co/1200x300?text=KofiIsNotCoffeeApp+by+Kofi+Kwafo+Awua)

**KofiIsNotCoffeeApp** es una solución web moderna para la **gestión de pedidos en restaurantes**, creada a partir de un problema real que tuvo un amigo con su emprendimiento de comidas rápidas. Este proyecto nace con la idea de brindar un sistema escalable, fácil de usar y adaptable a restaurantes grandes o cadenas gastronómicas.

---

## 🎯 Objetivos
✅ Mejorar el control de pedidos en cocina.  
✅ Visualizar pedidos en tiempo real.  
✅ Organizar órdenes por categorías.  
✅ Administrar productos, menús y reportes.  
✅ Escalable para múltiples sucursales.

---

## 🛠️ Stack Técnico
- **Next.js 15 + Turbopack** (SSR/SSG híbrido y rápido)
- **React 19** (última versión)
- **TypeScript 5** (seguridad y escalabilidad)
- **TailwindCSS 4** (UI moderna y responsive)
- **Prisma ORM + PostgreSQL**
- **Zustand** (estado global simple y eficaz)
- **SWR** (fetch reactivo y revalidación en tiempo real)
- **Zod** (validaciones robustas)
- **React Toastify** (notificaciones elegantes)
- **xlsx** (exportación de reportes a Excel)
- **Heroicons + React Icons** (íconos profesionales)
- **next-cloudinary** (subida y gestión de imágenes en la nube)

---

## 🔑 Deploy en Verser
Este proyecto se encuentra deployed en:  
[`kofiisnotCoffeApp`](https://github.com/Kkwafo/KofiIsNotCoffeeApp/tree/kofiisnotCoffeApp)

---

## ⚙️ Funcionalidades principales
- 📦 CRUD completo de productos y categorías.
- 🛒 Panel de pedidos con confirmación y total dinámico.
- 👨‍🍳 Administración de órdenes listas para cocina.
- 📊 Reportes detallados de ventas con exportación a Excel.
- 🔍 Búsqueda de productos.
- 🕒 Selección de reportes por turno (día, mañana, tarde).

---

## 📖 Instalación local
Cloná el proyecto y levantá el entorno de desarrollo:
```bash
git clone https://github.com/Kkwafo/KofiIsNotCoffeeApp.git
cd KofiIsNotCoffeeApp
git checkout kofiisnotCoffeApp
npm install
npx prisma migrate dev
npm run dev
