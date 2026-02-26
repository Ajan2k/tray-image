import React from 'react';
import { Activity, Cpu, Globe, HardDrive, Zap } from 'lucide-react';

export const SystemDiagnostics = () => {
  const stats = [
    { label: 'AI Model', value: 'Gemini 2.5 Flash', status: 'Optimal', icon: Zap, color: 'text-emerald-500' },
    { label: 'Latency', value: '14ms', status: 'Low', icon: Activity, color: 'text-blue-500' },
    { label: 'Storage', value: '82%', status: 'Healthy', icon: HardDrive, color: 'text-purple-500' },
    { label: 'Edge Node', value: 'Node-042', status: 'Online', icon: Cpu, color: 'text-amber-500' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-3 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
          <Globe size={16} className="text-slate-400" />
          System Diagnostics
        </h3>
        <span className="text-[9px] font-bold text-slate-400 uppercase">Telemetry</span>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, i) => (
          <div key={i} className="p-2 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all group">
            <div className="flex items-center gap-2 mb-1.5">
              <div className={`p-1.5 rounded-lg bg-white shadow-sm ${stat.color}`}>
                <stat.icon size={14} />
              </div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</span>
            </div>
            <div className="flex items-end justify-between">
              <span className="text-xs font-black text-slate-900">{stat.value}</span>
              <span className="text-[8px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded uppercase">{stat.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
