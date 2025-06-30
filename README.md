<h1>🍔 Quiosco Comida</h1>

<p>Aplicación web para gestionar pedidos en un quiosco de comida, desarrollada con Next.js y Prisma. Permite a los usuarios realizar pedidos y a los administradores gestionar productos, categorías y pedidos en tiempo real.</p>

<hr />

<h2>🚀 Demo</h2>

<p>Próximamente…</p>

<hr />

<h2>📦 Tecnologías</h2>

<ul>
  <li><a href="https://nextjs.org/">Next.js</a> — framework React para SSR/SSG.</li>
  <li><a href="https://www.prisma.io/">Prisma</a> — ORM para PostgreSQL.</li>
  <li><a href="https://tailwindcss.com/">TailwindCSS</a> — framework de estilos.</li>
  <li><a href="https://www.postgresql.org/">PostgreSQL</a> — base de datos relacional.</li>
</ul>

<hr />

<h2>⚙️ Instalación</h2>

<ol>
  <li>Clona el proyecto y navega al directorio:
    <pre><code>git clone https://github.com/Kkwafo/quisco-comida.git
cd quisco-comida</code></pre>
  </li>
  <li>Instala las dependencias:
    <pre><code>npm install</code></pre>
  </li>
  <li>Crea un archivo <code>.env</code> en la raíz del proyecto con tu conexión a PostgreSQL (ejemplo):
    <pre><code>DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/quisco</code></pre>
  </li>
  <li>Inicializa la base de datos con Prisma:
    <pre><code>npx prisma migrate dev</code></pre>
  </li>
  <li>Genera el cliente de Prisma:
    <pre><code>npx prisma generate</code></pre>
  </li>
  <li>Inicia el servidor de desarrollo:
    <pre><code>npm run dev</code></pre>
  </li>
  <li>Accede a la app en <a href="http://localhost:3000">http://localhost:3000</a></li>
</ol>

<hr />

<h2>🗂️ Estructura del proyecto</h2>

<pre><code>quisco-comida/
├── prisma/                # Esquema y migraciones de Prisma
├── app/                   # Rutas y páginas Next.js (App Router)
├── components/            # Componentes de UI y funcionalidades
├── src/lib/prisma.ts      # Configuración de cliente Prisma
├── public/                # Archivos estáticos
├── tailwind.config.js     # Configuración de TailwindCSS
└── ...
</code></pre>

<hr />

<h2>📄 Scripts útiles</h2>

<ul>
  <li><code>npm run dev</code> — Inicia el servidor en modo desarrollo.</li>
  <li><code>npm run build</code> — Construye la aplicación para producción.</li>
  <li><code>npm run start</code> — Inicia el servidor en producción.</li>
  <li><code>npx prisma studio</code> — Interfaz visual para explorar la base de datos.</li>
  <li><code>npx prisma migrate dev</code> — Ejecuta migraciones.</li>
</ul>

<hr />

<h2>✅ Funcionalidades</h2>

<ul>
  <li>Visualización de productos por categoría.</li>
  <li>Selección de productos y flujo de pedido.</li>
  <li>Administración de productos y categorías.</li>
  <li>Gestión de pedidos en tiempo real.</li>
  <li>Interfaz responsiva y moderna con TailwindCSS.</li>
</ul>

<hr />

<h2>✨ A mejorar (pendientes/futuro)</h2>

<ul>
  <li>Autenticación y roles de usuarios.</li>
  <li>Pasarela de pagos integrada.</li>
  <li>Panel de métricas para administración.</li>
  <li>Tests automatizados.</li>
</ul>

<hr />

<h2>📝 Licencia</h2>

<p>MIT</p>

<hr />

<h3>📬 Contacto</h3>

<p>Hecho con ❤️ por <a href="https://github.com/Kkwafo">Kofi Kwafo Awua</a>. ¡Contribuciones y feedback son bienvenidos!</p>
