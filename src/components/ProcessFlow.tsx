import React from 'react';
import { Camera, ArrowRight, Search, AlertTriangle, CheckCircle } from 'lucide-react';

export const ProcessFlow = () => {
  return (
    <div className="w-full bg-slate-100/50 rounded-2xl sm:rounded-full p-2 sm:p-1 border border-slate-200 flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 sm:gap-4 max-w-3xl mx-auto">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm">
          <Camera size={12} />
        </div>
        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tight">Capture</span>
      </div>

      <ArrowRight size={12} className="text-slate-300" />

      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm">
          <Search size={12} />
        </div>
        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tight">AI Vision</span>
      </div>

      <ArrowRight size={12} className="text-slate-300" />

      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center">
          <AlertTriangle size={12} />
        </div>
        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tight">Compare</span>
      </div>

      <ArrowRight size={12} className="text-slate-300" />

      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center">
          <CheckCircle size={12} />
        </div>
        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tight">Verify</span>
      </div>
    </div>
  );
};
