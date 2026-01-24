import React from 'react';

const StatsContent: React.FC = () => {
    return (
        <div className="p-8 max-w-[1400px] mx-auto space-y-8">
            {/* Breadcrumbs & Heading */}
            <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-[#617589] dark:text-gray-400 font-medium">
                    <a href="#/admin">Tableau de bord</a>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <span className="text-[#111418] dark:text-white">Statistiques Avancées</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-black tracking-tight text-[#111418] dark:text-white">Statistiques Avancées</h1>
                        <p className="text-[#617589] dark:text-gray-400 mt-2">Analyses complètes de la performance commerciale et de la flotte pour AutoLoc Togo.</p>
                    </div>
                    <div className="flex items-center p-1 bg-white dark:bg-[#1a2632] rounded-xl border border-[#dbe0e6] dark:border-[#2d3a4b]">
                        <button className="px-4 py-2 text-xs font-bold rounded-lg bg-[#f0f2f4] dark:bg-[#2d3a4b] text-[#111418] dark:text-white shadow-sm">Derniers 30 jours</button>
                        <button className="px-4 py-2 text-xs font-bold text-[#617589] dark:text-gray-400 rounded-lg">Trimestre</button>
                        <button className="px-4 py-2 text-xs font-bold text-[#617589] dark:text-gray-400 rounded-lg">Année</button>
                    </div>
                </div>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-[#1a2632] p-6 rounded-2xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-sm font-semibold text-[#617589] dark:text-gray-400">Taux de Conversion</p>
                        <span className="flex items-center text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                            <span className="material-symbols-outlined text-xs mr-1">trending_up</span>+2.1%
                        </span>
                    </div>
                    <p className="text-3xl font-black text-[#111418] dark:text-white">12.5%</p>
                    <div className="mt-4 h-1.5 w-full bg-[#f0f2f4] dark:bg-[#2d3a4b] rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: '12.5%' }}></div>
                    </div>
                </div>

                <div className="bg-white dark:bg-[#1a2632] p-6 rounded-2xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-sm font-semibold text-[#617589] dark:text-gray-400">Durée Moyenne de Location</p>
                        <span className="flex items-center text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                            <span className="material-symbols-outlined text-xs mr-1">trending_up</span>+0.5
                        </span>
                    </div>
                    <p className="text-3xl font-black text-[#111418] dark:text-white">4.2 Jours</p>
                    <div className="mt-4 h-1.5 w-full bg-[#f0f2f4] dark:bg-[#2d3a4b] rounded-full overflow-hidden">
                        <div className="h-full bg-blue-400 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                </div>

                <div className="bg-white dark:bg-[#1a2632] p-6 rounded-2xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-sm font-semibold text-[#617589] dark:text-gray-400">Utilisation de la Flotte</p>
                        <span className="flex items-center text-xs font-bold text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded-full">
                            <span className="material-symbols-outlined text-xs mr-1">trending_down</span>-1.2%
                        </span>
                    </div>
                    <p className="text-3xl font-black text-[#111418] dark:text-white">88%</p>
                    <div className="mt-4 h-1.5 w-full bg-[#f0f2f4] dark:bg-[#2d3a4b] rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: '88%' }}></div>
                    </div>
                </div>
            </div>

            {/* Main Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Revenue Trends */}
                <div className="lg:col-span-8 bg-white dark:bg-[#1a2632] p-6 rounded-2xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-lg font-bold text-[#111418] dark:text-white">Tendances des Revenus</h3>
                            <p className="text-xs text-[#617589] dark:text-gray-400">Répartition mensuelle en FCFA</p>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl font-black text-primary">15,420,000 FCFA</p>
                            <p className="text-[10px] text-[#617589] dark:text-gray-400 uppercase tracking-wider font-bold">Revenu Total Période</p>
                        </div>
                    </div>
                    <div className="h-64 flex items-end justify-between gap-2 relative">
                        <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none opacity-10">
                            <div className="border-t border-[#617589] dark:border-gray-400 w-full"></div>
                            <div className="border-t border-[#617589] dark:border-gray-400 w-full"></div>
                            <div className="border-t border-[#617589] dark:border-gray-400 w-full"></div>
                            <div className="border-t border-[#617589] dark:border-gray-400 w-full"></div>
                        </div>
                        {[30, 45, 40, 60, 75, 70, 85, 80, 65, 90, 95, 88].map((height, i) => (
                            <div
                                key={i}
                                className={`flex-1 ${i === 6 ? 'bg-primary' : 'bg-primary/20'} hover:bg-primary/40 rounded-t-lg transition-all group relative`}
                                style={{ height: `${height}%` }}
                            >
                                <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-[#111418] text-white text-[10px] py-1 px-2 rounded whitespace-nowrap z-10">
                                    {i === 6 ? 'Actuel: 2.8M' : `${(height / 30).toFixed(1)}M`}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-[10px] text-[#617589] dark:text-gray-400 font-bold uppercase tracking-widest px-1">
                        <span>Jan</span><span>Fév</span><span>Mar</span><span>Avr</span><span>Mai</span><span>Juin</span><span>Juil</span><span>Août</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Déc</span>
                    </div>
                </div>

                {/* Service Mix */}
                <div className="lg:col-span-4 bg-white dark:bg-[#1a2632] p-6 rounded-2xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm flex flex-col">
                    <h3 className="text-lg font-bold text-[#111418] dark:text-white mb-6">Mix de Services</h3>
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="size-48 rounded-full border-[18px] border-[#f0f2f4] dark:border-[#2d3a4b] relative flex items-center justify-center">
                            <div
                                className="absolute inset-0 border-[18px] border-primary rounded-full"
                                style={{
                                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                                    maskImage: 'radial-gradient(circle, transparent 58%, black 58%)',
                                    WebkitMaskImage: 'radial-gradient(circle, transparent 58%, black 58%)'
                                }}
                            ></div>
                            <div className="text-center">
                                <p className="text-sm text-[#617589] dark:text-gray-400 font-medium leading-none">Total</p>
                                <p className="text-2xl font-black mt-1 text-[#111418] dark:text-white">100%</p>
                            </div>
                        </div>
                        <div className="mt-8 space-y-3 w-full">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="size-3 rounded-full bg-primary"></div>
                                    <span className="text-sm font-medium text-[#111418] dark:text-white">Avec Chauffeur</span>
                                </div>
                                <span className="text-sm font-bold text-[#111418] dark:text-white">65%</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="size-3 rounded-full bg-[#f0f2f4] dark:bg-[#2d3a4b]"></div>
                                    <span className="text-sm font-medium text-[#111418] dark:text-white">Sans Chauffeur</span>
                                </div>
                                <span className="text-sm font-bold text-[#111418] dark:text-white">35%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Most Rented Vehicles */}
                <div className="bg-white dark:bg-[#1a2632] p-6 rounded-2xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-[#111418] dark:text-white">Véhicules les Plus Loués</h3>
                        <button className="text-primary text-xs font-bold hover:underline">Voir Tout</button>
                    </div>
                    <div className="space-y-6">
                        {[
                            { name: 'Toyota Hilux 4x4', rentals: 128, percent: 92 },
                            { name: 'Suzuki S-Presso', rentals: 94, percent: 70 },
                            { name: 'Hyundai Tucson', rentals: 76, percent: 55 },
                            { name: 'Renault Kwid', rentals: 42, percent: 35 }
                        ].map((v, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex justify-between text-sm mb-1 text-[#111418] dark:text-white">
                                    <span className="font-bold">{v.name}</span>
                                    <span className="text-[#617589] dark:text-gray-400">{v.rentals} Locations</span>
                                </div>
                                <div className="h-2 w-full bg-[#f0f2f4] dark:bg-[#2d3a4b] rounded-full">
                                    <div className="h-full bg-primary rounded-full" style={{ width: `${v.percent}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Performing Drivers */}
                <div className="bg-white dark:bg-[#1a2632] p-6 rounded-2xl border border-[#dbe0e6] dark:border-[#2d3a4b] shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-[#111418] dark:text-white">Meilleurs Chauffeurs</h3>
                        <button className="text-primary text-xs font-bold hover:underline">Détails Classement</button>
                    </div>
                    <div className="space-y-4">
                        {[
                            { name: 'Jean Koffi', id: '#DR-9021', rating: 4.9, mission: 48, photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFm-6uHg32Qx29pHa8eJ0twE-dY6ebqzT05qEYaDf6jN4c5qCERJU3jOIYnSB7UCCL4tp5fq5jmnz9PL6p0hAri43JzrOU7T3VybSaV-IZrIcqIj6OmvM5ZZYMHIR-YsrNIA9yLiuFaLuNYVmkHORqErYv_6kmgJdOYhyhogw6M4P9p-K5GkJpq7O_Chi333lh2wSsbxacww6N5uluSMGtxgFH7pyWU00YR5fbBCN_Zk_wzQm2SsDpTUeeRGNPjzmdfbAeC-m_6hPn' },
                            { name: 'Adjoa Azia', id: '#DR-8832', rating: 4.8, mission: 42, photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoHr64dxLDrdTM0Tpf0k7gZ_lBVICuQt8fKXDLvhKQmV5AVcEuxPXsKNUDYKB6c-DLKIw_stirYhsrBb1rjKAVHXLc8nUdRrpplCpOE1__8j15Ec1I3EnvLqG8TAaVgJ_3ocwhWux0turukV6GhyBF2XmzWxknBMnecTOD_adIfR3VJlqsC__HJIdZl7cVvcaM-tBFHeCot3avc0VZFuZat1YZ-bgMx3hblkYNPaat49eQ5e0YKHYUGYLsNQWDfyScjuG6ekUSRD2M' },
                            { name: 'Mawuli Lawson', id: '#DR-7741', rating: 4.8, mission: 39, photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9V0oOLCj3mU93s1yVVQGBvoXD9-dz7e5FqR1tzlbYacOAK6g33q0YQtpE81obUM7Z1UBm40ox-f8lLf3BWSwZnsOuCU8nqON2Bdz7rflSamniXteabgqSSfmslz0NfUOrpScFAAgPvFQZ-UKPj0lnEkY6Pv11773v8SPYzXyddNSfwMDUQWbzGW0kg9M9eXu-fzxWpbJA2p3t7ARcqCOrU2W7fKosXxKyuXiRLMpoARPr5TBdLD07f4qtXZ17Dh6Y6M-0zaCCtKEk' }
                        ].map((d, i) => (
                            <div key={i} className="flex items-center gap-4 p-3 hover:bg-[#f0f2f4] dark:hover:bg-[#2d3a4b]/50 rounded-xl transition-colors">
                                <div
                                    className="size-12 rounded-full bg-cover"
                                    style={{ backgroundImage: `url('${d.photo}')` }}
                                ></div>
                                <div className="flex-1">
                                    <h4 className="text-sm font-bold text-[#111418] dark:text-white">{d.name}</h4>
                                    <p className="text-xs text-[#617589] dark:text-gray-400">ID: {d.id}</p>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center gap-1 text-amber-500 mb-1">
                                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                        <span className="text-sm font-black">{d.rating}</span>
                                    </div>
                                    <p className="text-[10px] text-[#617589] dark:text-gray-400 font-bold uppercase tracking-tighter">{d.mission} missions ce mois</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsContent;
