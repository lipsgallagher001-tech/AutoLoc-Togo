import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const RevenueChart: React.FC = () => {
  const data = [
    { month: 'Jan', revenus: 850000, reservations: 45 },
    { month: 'Fév', revenus: 920000, reservations: 52 },
    { month: 'Mar', revenus: 1050000, reservations: 58 },
    { month: 'Avr', revenus: 980000, reservations: 54 },
    { month: 'Mai', revenus: 1120000, reservations: 62 },
    { month: 'Juin', revenus: 1200000, reservations: 68 },
    { month: 'Juil', revenus: 1350000, reservations: 75 },
    { month: 'Août', revenus: 1280000, reservations: 71 },
    { month: 'Sep', revenus: 1150000, reservations: 64 },
    { month: 'Oct', revenus: 1220000, reservations: 67 },
    { month: 'Nov', revenus: 1180000, reservations: 65 },
    { month: 'Déc', revenus: 1400000, reservations: 78 },
  ];

  const formatRevenue = (value: number) => {
    return `${(value / 1000000).toFixed(1)}M`;
  };

  return (
    <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-[#111418] dark:text-white">
          Évolution des Revenus & Réservations
        </h3>
        <p className="text-sm text-[#617589] dark:text-gray-400">
          Performance sur les 12 derniers mois
        </p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-[#dbe0e6] dark:stroke-[#2d3a4b]" />
          <XAxis
            dataKey="month"
            tick={{ fill: '#617589', fontSize: 12 }}
            stroke="#617589"
          />
          <YAxis
            yAxisId="left"
            tick={{ fill: '#617589', fontSize: 12 }}
            stroke="#617589"
            tickFormatter={formatRevenue}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tick={{ fill: '#617589', fontSize: 12 }}
            stroke="#617589"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #dbe0e6',
              borderRadius: '8px',
              padding: '8px 12px',
            }}
            labelStyle={{ color: '#111418', fontWeight: 'bold', marginBottom: '4px' }}
            formatter={(value: number, name: string) => {
              if (name === 'revenus') {
                return [`${value.toLocaleString()} FCFA`, 'Revenus'];
              }
              return [value, 'Réservations'];
            }}
          />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="line"
            formatter={(value) => (
              <span className="text-sm text-[#617589] dark:text-gray-400">
                {value === 'revenus' ? 'Revenus (FCFA)' : 'Réservations'}
              </span>
            )}
          />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="revenus"
            stroke="#0ea5e9"
            strokeWidth={3}
            dot={{ fill: '#0ea5e9', r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="reservations"
            stroke="#10b981"
            strokeWidth={3}
            dot={{ fill: '#10b981', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
