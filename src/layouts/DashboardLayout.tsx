import { Outlet } from 'react-router-dom';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { Header } from '@/components/dashboard/Header';

export function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}