import AdminSidebar from '@/components/admin/AdminSidebar';
import ToastNotification from '@/components/ui/ToasNotification';

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="md:flex">
        <aside className="md:w-72 md:h-screen bg-orange-50">
          <AdminSidebar />
        </aside>

        <main className="md:flex-1 md:h-screen md:overflow-y-scroll bg-orange-100 p-5">
          {children}
        </main>
      </div>

      <ToastNotification />
    </>
  )
}