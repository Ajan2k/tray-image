import React from 'react';
import { Product, DetectionResult, Alert } from '../types';
import { Check, X, AlertCircle, ShoppingBag, Camera } from 'lucide-react';

interface ComparisonTableProps {
  billed: Product[];
  detected: DetectionResult[];
}

export const ComparisonTable = ({ billed, detected }: ComparisonTableProps) => {
  // Logic to find mismatches
  const alerts: Alert[] = [];
  
  billed.forEach(b => {
    const d = detected.find(item => item.name === b.name);
    if (!d) {
      alerts.push({
        id: `m-${b.id}`,
        type: 'missing',
        productName: b.name,
        expected: b.quantity,
        detected: 0,
        timestamp: new Date().toISOString(),
        severity: 'high'
      });
    } else if (d.quantity !== b.quantity) {
      alerts.push({
        id: `q-${b.id}`,
        type: 'quantity_mismatch',
        productName: b.name,
        expected: b.quantity,
        detected: d.quantity,
        timestamp: new Date().toISOString(),
        severity: 'medium'
      });
    }
  });

  detected.forEach(d => {
    const b = billed.find(item => item.name === d.name);
    if (!b) {
      alerts.push({
        id: `e-${d.id}`,
        type: 'extra',
        productName: d.name,
        expected: 0,
        detected: d.quantity,
        timestamp: new Date().toISOString(),
        severity: 'high'
      });
    }
  });

  const totalExpected = billed.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalDetected = detected.reduce((acc, curr) => acc + curr.quantity, 0);
  const matchCount = billed.filter(b => {
    const d = detected.find(item => item.name === b.name);
    return d && d.quantity === b.quantity;
  }).length;

  return (
    <div className="space-y-4">
      {/* Summary Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Expected', value: totalExpected, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Detected', value: totalDetected, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Matches', value: matchCount, color: 'text-emerald-700', bg: 'bg-emerald-100' },
          { label: 'Alerts', value: alerts.length, color: 'text-red-600', bg: 'bg-red-50' },
        ].map((stat, i) => (
          <div key={i} className={`${stat.bg} p-3 rounded-xl border border-black/5 flex flex-col items-center justify-center`}>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">{stat.label}</span>
            <span className={`text-xl font-black ${stat.color}`}>{stat.value}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Expected Items */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <div className="flex items-center gap-2">
              <ShoppingBag size={18} className="text-blue-500" />
              <h3 className="font-bold text-slate-900">Tool Reference List</h3>
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase">Session: #8821</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="px-4 py-2">Item</th>
                  <th className="px-4 py-2">Qty</th>
                  <th className="px-4 py-2 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {billed.map(product => {
                  const det = detected.find(d => d.name === product.name);
                  const isMatch = det && det.quantity === product.quantity;
                  
                  return (
                    <tr key={product.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-4 py-3 font-semibold text-slate-900">{product.name}</td>
                      <td className="px-4 py-3 text-slate-600 font-mono">{product.quantity}</td>
                      <td className="px-4 py-3 text-right">
                        {isMatch ? (
                          <span className="inline-flex items-center gap-1 text-emerald-600 font-bold text-[10px] uppercase">
                            <Check size={12} /> OK
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-amber-600 font-bold text-[10px] uppercase">
                            <AlertCircle size={12} /> Diff
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Vision Detected Items */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
            <div className="flex items-center gap-2">
              <Camera size={18} className="text-emerald-500" />
              <h3 className="font-bold text-slate-900">AI Vision Results</h3>
            </div>
            <span className="text-[10px] font-bold text-emerald-500 uppercase">Live Feed</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="px-4 py-2">Detected</th>
                  <th className="px-4 py-2">Qty</th>
                  <th className="px-4 py-2 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {detected.map(item => {
                  const bill = billed.find(b => b.name === item.name);
                  const isExtra = !bill;
                  const isQtyMismatch = bill && bill.quantity !== item.quantity;
 
                  return (
                    <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-4 py-3 font-semibold text-slate-900">{item.name}</td>
                      <td className="px-4 py-3 text-slate-600 font-mono">{item.quantity}</td>
                      <td className="px-4 py-3 text-right">
                        {isExtra ? (
                          <span className="bg-red-50 text-red-600 px-2 py-1 rounded text-[9px] font-black uppercase tracking-tighter">
                            Extra Item
                          </span>
                        ) : isQtyMismatch ? (
                          <span className="bg-amber-50 text-amber-600 px-2 py-1 rounded text-[9px] font-black uppercase tracking-tighter">
                            Qty Mismatch
                          </span>
                        ) : (
                          <span className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded text-[9px] font-black uppercase tracking-tighter">
                            Verified
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
