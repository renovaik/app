import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import type { SalesMetric } from '@/types/dashboard';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface SalesChartProps {
  data: SalesMetric[];
}

export function SalesChart({ data }: SalesChartProps) {
  const chartData = {
    labels: data.map((item) =>
      format(new Date(item.date), 'dd/MM', { locale: ptBR })
    ),
    datasets: [
      {
        label: 'Vendas',
        data: data.map((item) => item.amount),
        borderColor: '#9FE800',
        backgroundColor: 'rgba(159, 232, 0, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Vendas nos últimos 30 dias',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <Line data={chartData} options={options} />
    </div>
  );
}