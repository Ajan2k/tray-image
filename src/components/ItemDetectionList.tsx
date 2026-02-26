import React from 'react';
import { Package, CheckCircle2, AlertCircle, Info } from 'lucide-react';

export const ItemDetectionList = () => {
  const items = [
    { id: 1, name: 'Power Drill 18V', status: 'Verified', confidence: '99.9%', price: '$89.99', icon: '🛠️' },
    { id: 2, name: 'Screw Set (50pc)', status: 'Verified', confidence: '97.2%', price: '$12.50', icon: '🔩' },
    { id: 3, name: 'Steel Hammer', status: 'Warning', confidence: '94.2%', price: '$24.25', icon: '🔨', note: 'Qty Mismatch' },
    { id: 4, name: 'WD-40 Multi-Use', status: 'Alert', confidence: '91.0%', price: '$8.50', icon: '⚙️', note: 'Unbilled Item' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-3 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <h3 className="font-bold text-slate-900 flex items-center gap-2 text-sm">
          <Package size={16} className="text-slate-400 shrink-0" />
          <span className="truncate">Live Item Detection</span>
        </h3>
        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter whitespace-nowrap">4 Items Found</span>
      </div>

      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="group p-2.5 rounded-xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center text-lg shadow-inner group-hover:bg-white transition-colors shrink-0">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="text-xs font-bold text-slate-900 leading-tight break-words">{item.name}</h4>
                  <span className="text-xs font-black text-slate-900 whitespace-nowrap">{item.price}</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <div className="flex items-center gap-1">
                    {item.status === 'Verified' && <CheckCircle2 size={10} className="text-emerald-500" />}
                    {item.status === 'Warning' && <AlertCircle size={10} className="text-amber-500" />}
                    {item.status === 'Alert' && <AlertCircle size={10} className="text-red-500" />}
                    <span className={`text-[9px] font-bold uppercase ${
                      item.status === 'Verified' ? 'text-emerald-600' : 
                      item.status === 'Warning' ? 'text-amber-600' : 'text-red-600'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="hidden xs:block w-1 h-1 bg-slate-200 rounded-full" />
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter whitespace-nowrap">
                    Conf: {item.confidence}
                  </span>
                </div>
              </div>
            </div>
            {item.note && (
              <div className="mt-2 flex items-center gap-1.5 px-2 py-1 bg-slate-100 rounded-md text-[9px] font-bold text-slate-500">
                <Info size={10} className="shrink-0" />
                <span className="truncate">{item.note}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="w-full mt-4 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-bold rounded-xl border border-slate-200 transition-all uppercase tracking-widest">
        View Tool Inventory
      </button>
    </div>
  );
};
