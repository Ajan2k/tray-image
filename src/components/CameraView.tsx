import React, { useState, useEffect } from 'react';
import { Camera, RefreshCw, Maximize2, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import trayImage from './tray image.png';

export const CameraView = () => {
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsScanning(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative aspect-video bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
      {/* Simulated Camera Feed */}
      <img 
        src={trayImage} 
        alt="Hardware Tray Scanning Feed" 
        className="w-full h-full object-cover opacity-90 brightness-90"
        referrerPolicy="no-referrer"
      />

      {/* Scanning Overlay */}
      {isScanning && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div 
            initial={{ top: '-10%' }}
            animate={{ top: '110%' }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-40 bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent z-10"
          />
          <motion.div 
            initial={{ top: '0%' }}
            animate={{ top: '100%' }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[3px] bg-emerald-400 shadow-[0_0_30px_rgba(52,211,153,1)] z-20"
          />
          
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
      )}

      

      {/* UI Controls */}
      <div className="absolute top-4 left-4 flex flex-col gap-2">
        <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,1)]" />
          <span className="text-white text-[10px] font-black tracking-widest uppercase">Tray Scanner Active</span>
        </div>
        <div className="bg-black/40 backdrop-blur-sm px-2 py-1 rounded-md border border-white/10 w-fit">
          <span className="text-white/70 text-[9px] font-mono">Terminal: T-042</span>
        </div>
      </div>

      <div className="absolute top-4 right-4 flex gap-2">
        <button className="p-2 bg-black/50 backdrop-blur-md rounded-lg border border-white/10 text-white hover:bg-white/20 transition-colors">
          <RefreshCw size={16} />
        </button>
        <button className="p-2 bg-black/50 backdrop-blur-md rounded-lg border border-white/10 text-white hover:bg-white/20 transition-colors">
          <Maximize2 size={16} />
        </button>
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
        <div className="bg-black/50 backdrop-blur-md p-3 rounded-xl border border-white/10">
          <div className="flex items-center gap-2 text-emerald-400 mb-1">
            <ShieldCheck size={14} />
            <span className="text-[10px] font-bold uppercase tracking-widest">AI Engine Active</span>
          </div>
          <div className="text-white text-xs font-mono opacity-70">
            FPS: 24.2 | Latency: 12ms | Objects: 5
          </div>
        </div>
      </div>
    </div>
  );
};
