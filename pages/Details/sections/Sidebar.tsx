
import React from 'react';
import Button from '../../../components/UI/Button';

const Sidebar: React.FC = () => {
  return (
    <div className="space-y-6 sticky top-24">
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center space-y-6">
        <div className="relative inline-block">
          <img src="https://picsum.photos/seed/agent/200" className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg mx-auto" />
          <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></div>
        </div>
        <div>
          <h3 className="text-xl font-bold">Besoin d'aide ?</h3>
          <p className="text-gray-500 text-sm mt-2 leading-relaxed">
            Emilie est disponible pour répondre à toutes vos questions par WhatsApp.
          </p>
        </div>
        <Button variant="whatsapp" fullWidth className="!py-4">
          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412 0 12.048c0 2.12.54 4.142 1.566 5.929L0 24l6.135-1.61a11.893 11.893 0 005.915 1.594h.005c6.637 0 12.05-5.414 12.056-12.05 0-3.217-1.252-6.242-3.524-8.514z"/></svg>
          WhatsApp Emilie
        </Button>
        <p className="text-gray-400 text-xs font-medium">Ou par téléphone : <span className="text-gray-900">+228 90 00 00 00</span></p>
      </div>

      <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 shadow-sm space-y-6">
        <h4 className="text-sm font-black text-[#1D7AFC] tracking-widest uppercase">Pourquoi nous ?</h4>
        {[
          { icon: '✔️', title: 'Transparence Totale', sub: 'Pas de frais cachés, prix fixes.' },
          { icon: '🎧', title: 'Assistance Locale', sub: 'Équipe basée à Lomé disponible 24/7.' },
          { icon: '🛻', title: 'Maintenance Strict', sub: 'Véhicules révisés après chaque trajet.' }
        ].map((item, i) => (
          <div key={i} className="flex gap-4">
             <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white flex items-center justify-center text-sm shadow-sm">{item.icon}</div>
             <div>
               <h5 className="font-bold text-sm text-gray-900">{item.title}</h5>
               <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
