import React from 'react';
import { Scale, Database, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

export const ValidationModules = () => {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* KG Validation Module */}
        <div className="bg-white rounded-2xl border border-slate-200 p-3 shadow-sm overflow-hidden relative group hover:border-blue-200 transition-all">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-inner shrink-0">
                <Scale size={20} />
              </div>
              <div className="min-w-0">
                <h3 className="font-black text-slate-900 text-base leading-tight truncate">KG Validation</h3>
                <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest truncate">Load Cell Precision</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[9px] font-black uppercase tracking-wider border border-emerald-100">
              <CheckCircle2 size={12} />
              Verified
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="p-2 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center text-center">
              <span className="text-[7px] font-black text-slate-400 uppercase block mb-0.5 tracking-widest">Hardware</span>
              <span className="text-base font-black text-slate-900 leading-none">1.450</span>
              <span className="text-[8px] font-bold text-slate-400 mt-0.5 uppercase">kg</span>
            </div>
            <div className="p-2 bg-slate-50 rounded-xl border border-slate-100 flex flex-col items-center text-center">
              <span className="text-[7px] font-black text-slate-400 uppercase block mb-0.5 tracking-widest">AI Vision</span>
              <span className="text-base font-black text-slate-900 leading-none">1.448</span>
              <span className="text-[8px] font-bold text-slate-400 mt-0.5 uppercase">kg</span>
            </div>
            <div className="p-2 bg-blue-50 rounded-xl border border-blue-100 flex flex-col items-center justify-center text-center">
              <span className="text-[7px] font-black text-blue-400 uppercase block mb-0.5 tracking-widest">Variance</span>
              <span className="text-base font-black text-blue-700 leading-none">0.14%</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-2 bg-emerald-50/50 rounded-xl border border-emerald-100">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-emerald-800">Weight Match Confirmed</span>
            </div>
          </div>

          <div className="absolute -right-6 -bottom-6 opacity-[0.02] text-slate-900 group-hover:scale-110 transition-transform duration-500">
            <Scale size={120} />
          </div>
        </div>

        {/* ERP Sync Validation Module */}
        <div className="bg-white rounded-2xl border border-slate-200 p-3 shadow-sm overflow-hidden relative group hover:border-purple-200 transition-all">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shadow-inner shrink-0">
                <Database size={20} />
              </div>
              <div className="min-w-0">
                <h3 className="font-black text-slate-900 text-base leading-tight truncate">ERP Integrity</h3>
                <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest truncate">SAP S/4HANA Bridge</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-black text-purple-600 uppercase tracking-widest">Syncing...</span>
              <RefreshCw size={12} className="animate-spin text-purple-400" />
            </div>
          </div>

          <div className="space-y-3 mb-3">
            <div className="flex items-center justify-between p-2 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex flex-col">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Session ID</span>
                <span className="text-xs font-mono font-black text-slate-700">TRX-8829-ALPHA</span>
              </div>
              <div className="text-right">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Latency</span>
                <span className="block text-xs font-black text-emerald-600">12ms</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-slate-400">
                <span>Consistency</span>
                <span>100%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-purple-500 to-indigo-500"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[9px] text-slate-400 font-bold uppercase tracking-tighter">
            <div className="flex -space-x-1.5">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-5 h-5 rounded-full border-2 border-white bg-slate-200" />
              ))}
            </div>
            <span>3 Nodes Active</span>
          </div>

          <div className="absolute -right-6 -bottom-6 opacity-[0.02] text-slate-900 group-hover:scale-110 transition-transform duration-500">
            <Database size={120} />
          </div>
        </div>
      </div>
    </div>
  );
};
