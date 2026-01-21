import React from 'react';
import ScrollAnimation from '../../../components/ScrollAnimation';

interface Vehicle {
  id: string;
  name: string;
  category: string;
  seats: string;
  rating: number;
  pricePerDay: string;
  imageUrl: string;
  withDriver: boolean;
}

const vehicles: Vehicle[] = [
  {
    id: '1',
    name: 'Toyota RAV4',
    category: 'SUV',
    seats: '5 Places',
    rating: 4.9,
    pricePerDay: '45 000 FCFA',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH0VJrXNEdNQweYRWA1shzsLSCAhR_WzcnONMj9dUxJbs4uthwBgwFkJ6pjBdgI4DBECHtHulKs8vm8YtV6c4iVBqes_oEEUC4QnENVMuTNYOcG1ZIL91-x4Ve10j5FjaVN3UYq_nqS62tS9MVZfieWrOE05Q_0eACh0GwlBG-2KcVlFZTXPkZrRGIJQCrf2-LnbZcdAyDav_9cKbj0j24hYugzanvsEh3Ce84Qg9V3aHvQsF2hepQG0_ERoj-MA00ZYcHK-I-J2xV',
    withDriver: true
  },
  {
    id: '2',
    name: 'Hyundai Elantra',
    category: 'Berline',
    seats: 'Sans Chauffeur',
    rating: 4.7,
    pricePerDay: '35 000 FCFA',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuMGjnw8q61xmYDbYPROi-AuIznI8fTkHETbsBHtuSm7ud2CCKOptX7d51JxkIjvF0dFLFF0LZ8XRiaPlOjocLjQKmSKEAp6Q_yY3nyBoLYWnT7kqk4RZ05e_N_XZYtqcr6rCDqKubVOU9dScQgzLWdbZAn8v6xBHtRxhtcgKT1s39rQ_qyFBPU5dwII0PcGrbc7o4ghVIlnoMuAZYbzuL9xUmGqb1w55jPzaJmyVqjhJ7WvmliGUv6SSfbIjS06-KPtMyeLuqEFUE',
    withDriver: false
  },
  {
    id: '3',
    name: 'Mitsubishi Pajero',
    category: '4x4',
    seats: 'Robuste',
    rating: 5.0,
    pricePerDay: '65 000 FCFA',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5mc8EachgXVo1zN52rf7rBvf05YUWy4QpxfJZd-kwsSe3-yMaUSf_9sNeePVbD7sYAbI0wZ3A2tFOTlOpOdC2e9xkYkdG3iAgzDDRxHQD4sPLvcjPFX55-OETaJ9_Mhy5Ox0x4c6gynPYYyBDvzre1yyu7GycOx95aL7nIPjZt4vJLldsfWmwklax1L7SWIOxBE-GOkAhWjmueAGqjVrUKjN_EZoobuV5xLkUwWSWkjSV6dXegyFAsSj-OnAwNUFtryJaUIi-waBp',
    withDriver: true
  },
  {
    id: '4',
    name: 'Toyota Coaster',
    category: 'Minibus',
    seats: '22 Places',
    rating: 4.8,
    pricePerDay: '120 000 FCFA',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoMjqWCYuHd9gmjuuBpmZu_bWRtwkKmTUhJ0pvk3nHBub9I0qQh7ptyEqzKk7w5OzAzc8bxD8KzOOFpCybfXB4-5Q-v_80fui13wXFuO4_owa7plF3rWSguZOpFvbGc6uAQ_OwMH6Ahn4gQBMSoDjMqkt34tosDS8KCEXtPZkxCHaI7r6oyXwu6C-EhikIdg9f5pJk0RQSHtKOp5mpfVt-AQnFrQHxlUMQn3CZKW_ayWhCsfOdno69A2NvTeP7_m4DAityKE4bcnkx',
    withDriver: true
  },
  {
    id: '5',
    name: 'Suzuki Vitara',
    category: 'Compact SUV',
    seats: 'Sans Chauffeur',
    rating: 4.6,
    pricePerDay: '40 000 FCFA',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDN7RWIBb6l5tdHKsKsewM5bDjOBOwKmBFQ5NKQkNQ21FiREdubDe6tCiDWpK3u-gt2Sz5dhDajzoaJBs5_HFow-vHFsHSKT6R_afDtv5nTfl68s7I3nHQhNCI7UqnAnjiVbIIe3HmsX6Q3uP_UZpL9IIJPcjS1d7MoXOSNP2WkdFh0Pghajvjt5yVZkSmpiT71EJUdqYN1ggV5VEZQtl0vDHI_BLjQAwkSf_uOSR-XTGGYNKMIRNCYQsH_nYBLzVvBrZDsp6mLUMT7',
    withDriver: false
  },
  {
    id: '6',
    name: 'Kia Sportage',
    category: 'SUV Premium',
    seats: '5 Places',
    rating: 4.9,
    pricePerDay: '45 000 FCFA',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlADKLAdDthqQZwEnlnvCdYI6xZuOFcnvQMCnAowwDW2aB-OLYxPkOZuED5s6Qj0jBKc50HjBnTOyyaLNVs8cKRDWo9-W0t9Twt69D2PoyNmeeqRD0s83-n_I0NJ3jMUUW3upaFCjB1Nd7ob4R2KWbg1asxZ19RpQsa_eGVTwTx_-TnlSt6Ts5OeOzTuEzr6v3nfLxl6tbOmv7Jp296ymBjvBBSui6qjoJN4IpO1GpdZeZTEejQ3yhwC9ZYAc1cte6LiJrNM-jt7OD',
    withDriver: true
  }
];

const VehicleGrid: React.FC = () => {
  return (
    <>
      {/* ImageGrid (Vehicle Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-10">
        {vehicles.map((vehicle, index) => (
          <ScrollAnimation key={vehicle.id} animation="fade-in-up" delay={index * 100}>
            <div
              key={vehicle.id}
              className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-[#f0f2f4] dark:border-slate-700 transition-all hover:shadow-xl hover:-translate-y-1 h-full"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                {vehicle.withDriver && (
                  <div className="absolute top-4 left-4 z-10 bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <span className="material-symbols-outlined text-[14px]">
                      {vehicle.category === 'Minibus' ? 'groups' : 'person'}
                    </span>
                    Avec Chauffeur
                  </div>
                )}
                <div
                  className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url("${vehicle.imageUrl}")` }}
                ></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-tight">
                    {vehicle.name}
                  </h3>
                  <div className="flex items-center gap-1 text-orange-500">
                    <span className="material-symbols-outlined text-sm fill-orange-500">star</span>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                      {vehicle.rating}
                    </span>
                  </div>
                </div>
                <p className="text-[#617589] dark:text-slate-400 text-sm font-medium mb-4 flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">
                    {vehicle.category === 'Berline' ? 'directions_car' : 
                     vehicle.category === '4x4' ? 'minor_crash' : 
                     vehicle.category === 'Minibus' ? 'airport_shuttle' : 'electric_car'}
                  </span>
                  {vehicle.category} • {vehicle.seats}
                </p>
                <div className="flex items-end justify-between border-t border-[#f0f2f4] dark:border-slate-700 pt-4">
                  <div>
                    <p className="text-[#617589] dark:text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-0.5">
                      Tarif journalier
                    </p>
                    <p className="text-[#111418] dark:text-white text-lg font-black">
                      {vehicle.pricePerDay}
                    </p>
                  </div>
                  <button 
                    onClick={() => window.location.hash = `#/details/${vehicle.id}`}
                    className="h-10 px-4 bg-primary/10 hover:bg-primary text-primary hover:text-white transition-all font-bold text-sm rounded-lg flex items-center gap-2"
                  >
                    Voir détails
                  </button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      {/* Pagination or Load More */}
      <ScrollAnimation animation="fade-in-up">
        <div className="mt-16 flex justify-center">
          <button className="flex items-center gap-2 rounded-xl h-14 px-10 bg-white dark:bg-slate-800 border-2 border-primary/20 text-[#111418] dark:text-white text-base font-bold transition-all hover:bg-primary hover:text-white hover:border-primary shadow-lg shadow-primary/10">
            Charger plus de véhicules
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
      </ScrollAnimation>
    </>
  );
};

export default VehicleGrid;
