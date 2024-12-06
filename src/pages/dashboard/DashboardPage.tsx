import { motion } from 'framer-motion';
import { SalesChart } from '@/components/dashboard/SalesChart';
import type { SalesMetric } from '@/types/dashboard';

// Mock data - replace with actual API call
const mockSalesData: SalesMetric[] = Array.from({ length: 30 }, (_, i) => ({
  id: `sale-${i}`,
  date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString(),
  amount: Math.floor(Math.random() * 10000),
  status: 'completed' as const,
  paymentMethod: 'credit_card' as const,
}));

export default function DashboardPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900">Total de Vendas</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            R$ {mockSalesData.reduce((acc, curr) => acc + curr.amount, 0).toLocaleString('pt-BR')}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900">Vendas Hoje</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            R$ {mockSalesData[0].amount.toLocaleString('pt-BR')}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900">Taxa de Conversão</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">68.5%</p>
        </div>
      </div>

      <div className="mt-8">
        <SalesChart data={mockSalesData} />
      </div>
    </motion.div>
  );
}