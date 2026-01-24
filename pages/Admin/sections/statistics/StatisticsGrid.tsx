import React from 'react';

const StatisticsGrid: React.FC = () => {
  const stats = [
    {
      icon: 'groups',
      value: '2000+',
      label: 'Clients Satisfaits',
      color: 'primary',
      trend: '+12%',
      trendUp: true,
    },
    {
      icon: 'directions_car',
      value: '124',
      label: 'Véhicules Disponibles',
      color: 'emerald-500',
      trend: '+5%',
      trendUp: true,
    },
    {
      icon: 'star',
      value: '4.9/5',
      label: 'Note Moyenne',
      color: 'orange-500',
      trend: '+0.2',
      trendUp: true,
    },
    {
      icon: 'support_agent',
      value: '24/7',
      label: 'Support Client',
      color: 'purple-500',
      trend: 'Actif',
      trendUp: true,
    },
    {
      icon: 'payments',
      value: '1.2M',
      label: 'Revenus Mensuels',
      color: 'primary',
      trend: '+8%',
      trendUp: true,
    },
    {
      icon: 'event_available',
      value: '342',
      label: 'Réservations Actives',
      color: 'emerald-500',
      trend: '+15%',
      trendUp: true,
    },
    {
      icon: 'trending_up',
      value: '78.5%',
      label: 'Taux d\'Utilisation',
      color: 'purple-500',
      trend: '+0.8%',
      trendUp: true,
    },
    {
      icon: 'schedule',
      value: '2.3h',
      label: 'Temps de Réponse Moyen',
      color: 'orange-500',
      trend: '-0.5h',
      trendUp: true,
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      'primary': 'bg-primary/10 text-primary',
      'emerald-500': 'bg-emerald-500/10 text-emerald-500',
      'orange-500': 'bg-orange-500/10 text-orange-500',
      'purple-500': 'bg-purple-500/10 text-purple-500',
    };
    return colorMap[color] || 'bg-primary/10 text-primary';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm hover:shadow-md transition-all"
        >
          <div className="flex justify-between items-start mb-4">
            <p className="text-[#617589] dark:text-gray-400 text-sm font-medium">
              {stat.label}
            </p>
            <span className={`${getColorClasses(stat.color)} p-2 rounded-lg`}>
              <span className="material-symbols-outlined text-xl">{stat.icon}</span>
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-black text-[#111418] dark:text-white">
              {stat.value}
            </h3>
            <span className={`text-xs font-bold ${stat.trendUp ? 'text-emerald-500' : 'text-rose-500'}`}>
              {stat.trend}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatisticsGrid;
