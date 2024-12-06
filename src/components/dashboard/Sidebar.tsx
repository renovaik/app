import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  ChartBarIcon,
  CreditCardIcon,
  CogIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Vendas', href: '/dashboard/sales', icon: ChartBarIcon },
  { name: 'Produtos', href: '/dashboard/products', icon: DocumentTextIcon },
  { name: 'Checkout', href: '/dashboard/checkout', icon: CreditCardIcon },
  { name: 'Configurações', href: '/dashboard/settings', icon: CogIcon },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex h-screen w-64 flex-col fixed left-0 top-0 bg-white border-r border-gray-200">
      <div className="flex h-16 items-center justify-center border-b border-gray-200">
        <h1 className="text-xl font-bold bg-gradient-to-r from-[#9FE800] to-[#111216] bg-clip-text text-transparent">
          Atyvo Pay
        </h1>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                isActive
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon
                className={`mr-3 h-5 w-5 flex-shrink-0 ${
                  isActive ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-500'
                }`}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}