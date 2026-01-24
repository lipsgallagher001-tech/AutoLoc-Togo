import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const VehicleCategoryChart: React.FC = () => {
  const data = [
    { name: 'Berline', value: 35, color: '#0ea5e9' },
    { name: 'SUV', value: 28, color: '#10b981' },
    { name: '4x4', value: 22, color: '#f59e0b' },
    { name: 'Minibus', value: 15, color: '#8b5cf6' },
  ];

  const COLORS = data.map((item) => item.color);

  const renderCustomLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className="font-bold text-sm"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-[#111418] dark:text-white">
          Répartition par Catégorie
        </h3>
        <p className="text-sm text-[#617589] dark:text-gray-400">
          Distribution des réservations par type de véhicule
        </p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #dbe0e6',
              borderRadius: '8px',
              padding: '8px 12px',
            }}
            formatter={(value: number) => [`${value}%`, 'Part']}
          />
          <Legend
            verticalAlign="bottom"
            height={36}
            iconType="circle"
            formatter={(value, entry: any) => (
              <span className="text-sm text-[#617589] dark:text-gray-400">
                {value} ({entry.payload.value}%)
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VehicleCategoryChart;
