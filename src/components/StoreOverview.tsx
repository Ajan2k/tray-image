import React from 'react';
import { MapPin, TrendingDown, TrendingUp, Users } from 'lucide-react';

export const StoreOverview = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-3 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-sm font-bold text-slate-900 leading-none">Hardware Store Performance</h3>
          <p className="text-[9px] text-slate-400 uppercase font-bold mt-0.5">Industrial Division - Region 4</p>
        </div>
        <select className="text-[9px] font-bold uppercase bg-slate-50 border border-slate-200 rounded-lg px-1.5 py-0.5 outline-none">
          <option>Last 24 Hours</option>
          <option>Last 7 Days</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Users size={14} className="text-slate-400" />
              <span className="text-[11px] font-semibold text-slate-600">Active Terminals</span>
            </div>
            <span className="text-xs font-bold text-slate-900">12/14</span>
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-[85%]" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <TrendingDown size={14} className="text-red-500" />
              <span className="text-[11px] font-semibold text-slate-600">Shrinkage Rate</span>
            </div>
            <span className="text-xs font-bold text-red-600">-2.4%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-red-500 w-[24%]" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <TrendingUp size={14} className="text-emerald-500" />
              <span className="text-[11px] font-semibold text-slate-600">Detection ROI</span>
            </div>
            <span className="text-xs font-bold text-emerald-600">+18.5%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-[72%]" />
          </div>
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-slate-100 grid grid-cols-4 gap-2">
        {[
          { label: 'Scans', value: '14.2k', trend: '+12%' },
          { label: 'Disc.', value: '142', trend: '-5%' },
          { label: 'Saved', value: '$1.2k', trend: '+22%' },
          { label: 'Acc.', value: '99.4%', trend: '+0.2%' },
        ].map((item, i) => (
          <div key={i} className="text-center">
            <span className="block text-[8px] font-bold text-slate-400 uppercase mb-0.5">{item.label}</span>
            <div className="flex flex-col items-center">
              <span className="text-sm font-black text-slate-900 leading-none">{item.value}</span>
              <span className={`text-[8px] font-bold ${item.trend.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>
                {item.trend}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
