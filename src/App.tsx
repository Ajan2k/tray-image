/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  Camera as CameraIcon, 
  AlertCircle, 
  FileText, 
  Settings, 
  Bell, 
  Search,
  LogOut,
  Menu,
  X,
  Shield,
  Activity,
  BarChart3,
  Maximize2,
  ShieldCheck,
  RefreshCw,
  Database,
  Scale
} from 'lucide-react';
import { CameraView } from './components/CameraView';
import { ComparisonTable } from './components/ComparisonTable';
import { ProcessFlow } from './components/ProcessFlow';
import { SummaryCharts } from './components/SummaryCharts';
import { ValidationModules } from './components/ValidationModules';
import { StoreOverview } from './components/StoreOverview';
import { SystemDiagnostics } from './components/SystemDiagnostics';
import { ItemDetectionList } from './components/ItemDetectionList';
import { MOCK_BILLED_PRODUCTS, MOCK_DETECTED_PRODUCTS, MOCK_SUMMARY_DATA } from './constants';

import sec1 from "./sec1.png";
import sec2 from "./sec2.png";
import sec3 from "./sec3.png";
import sec4 from "./sec4.png";
import sec5 from "./sec5.png";
import sec6 from "./sec6.png";
export default function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'reports' | 'settings'>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const cameraImages = [sec1, sec2, sec3, sec4, sec5, sec6];

  const navItems = [
    { id: 'dashboard', label: 'Live Monitor', icon: LayoutDashboard },
    { id: 'security', label: 'Security Feed', icon: Shield },
    { id: 'reports', label: 'Daily Reports', icon: FileText },
    { id: 'settings', label: 'System Config', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-white border-r border-slate-200 transition-all duration-300 flex flex-col fixed h-full z-50`}
      >
        <div className="p-4 flex items-center gap-3 border-b border-slate-100">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center shrink-0">
            <CameraIcon className="text-white" size={20} />
          </div>
          {isSidebarOpen && <span className="font-bold text-lg tracking-tight text-nowrap">Hardware TrayGuard</span>}
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id 
                  ? 'bg-emerald-50 text-emerald-700 font-semibold' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <item.icon size={20} />
              {isSidebarOpen && <span className="text-nowrap">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all">
            <LogOut size={20} />
            {isSidebarOpen && <span className="text-nowrap">Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-slate-100 rounded-lg text-slate-500"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search transactions..." 
                className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm w-64 focus:ring-2 focus:ring-emerald-500 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              System Online
            </div>
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-all">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
            <div className="w-8 h-8 rounded-full bg-slate-200 border border-slate-300 overflow-hidden">
              <img src="https://picsum.photos/seed/admin/32/32" alt="Admin" referrerPolicy="no-referrer" />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-4 max-w-7xl mx-auto space-y-4">
          <AnimatePresence mode="wait">
            {activeTab === 'dashboard' && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold text-slate-900 tracking-tight leading-none">Hardware Monitoring</h1>
                    <p className="text-xs text-slate-500 mt-1">Industrial tray analysis and ERP cross-verification.</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-sm">
                      Export Logs
                    </button>
                    <button className="px-4 py-2 bg-emerald-600 rounded-xl text-sm font-semibold text-white hover:bg-emerald-700 transition-all shadow-md shadow-emerald-200">
                      New Session
                    </button>
                  </div>
                </div>

                <ProcessFlow />

                <div className="flex flex-wrap gap-4">
                  <div className="flex-1 min-w-[200px] bg-white p-4 rounded-2xl border-l-4 border-l-blue-500 border border-slate-200 shadow-sm flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Scale size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">KG Validation</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900">1.450 kg</span>
                        <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded uppercase">Match</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-[200px] bg-white p-4 rounded-2xl border-l-4 border-l-purple-500 border border-slate-200 shadow-sm flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                      <Database size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">ERP Sync</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900">Verified</span>
                        <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded uppercase">Synced</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-[200px] bg-white p-4 rounded-2xl border-l-4 border-l-emerald-500 border border-slate-200 shadow-sm flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">AI Integrity</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900">99.8% Acc.</span>
                        <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded uppercase">Optimal</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <StoreOverview />
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-2">
                      <ValidationModules />
                    </div>
                    <div className="lg:col-span-1">
                      <SystemDiagnostics />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                  <div className="xl:col-span-2 space-y-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <div className="lg:col-span-2 relative">
                        <CameraView />
                        {/* Floating Controls */}
                        <div className="absolute bottom-6 right-6 flex flex-col gap-3">
                          <div className="bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-slate-200 shadow-xl w-48">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-[10px] font-bold text-slate-500 uppercase">AI Confidence</span>
                              <span className="text-[10px] font-mono font-bold text-emerald-600">85%</span>
                            </div>
                            <input type="range" className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-500" />
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-1">
                        <ItemDetectionList />
                      </div>
                    </div>
                    
                    <ComparisonTable 
                      billed={MOCK_BILLED_PRODUCTS} 
                      detected={MOCK_DETECTED_PRODUCTS} 
                    />

                    {/* New Section: Recent Activity Timeline */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-slate-900">Recent Activity Timeline</h3>
                        <button className="text-xs font-bold text-emerald-600 uppercase tracking-widest">View History</button>
                      </div>
                      <div className="relative space-y-4 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                        {[
                          { time: '10:42 AM', event: 'Weight Discrepancy Resolved', desc: 'Manual override by Supervisor #04', status: 'resolved' },
                          { time: '10:38 AM', event: 'New Hardware Scan Initiated', desc: 'Terminal T-042 started processing', status: 'info' },
                          { time: '10:35 AM', event: 'ERP Sync Completed', desc: 'Transaction #POS-99281-X verified', status: 'success' },
                        ].map((item, i) => (
                          <div key={i} className="relative flex items-center justify-between gap-4 pl-12">
                            <div className={`absolute left-0 w-10 h-10 rounded-full border-4 border-white flex items-center justify-center shadow-sm ${
                              item.status === 'resolved' ? 'bg-blue-500 text-white' : 
                              item.status === 'success' ? 'bg-emerald-500 text-white' : 'bg-slate-500 text-white'
                            }`}>
                              <Activity size={16} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h4 className="text-sm font-bold text-slate-900">{item.event}</h4>
                                <span className="text-[10px] font-bold text-slate-400 uppercase">{item.time}</span>
                              </div>
                              <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Live Analytics Feature */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-slate-900">Live Analytics</h3>
                        <div className="flex gap-1">
                          <div className="w-1 h-1 bg-emerald-500 rounded-full animate-ping" />
                          <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-[10px] font-bold text-slate-400 uppercase">Detection Accuracy</span>
                            <span className="text-xs font-bold text-emerald-600">99.2%</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 w-[99.2%]" />
                          </div>
                        </div>
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-[10px] font-bold text-slate-400 uppercase">Processing Speed</span>
                            <span className="text-xs font-bold text-blue-600">14ms</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 w-[85%]" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-center">
                            <span className="block text-[8px] font-bold text-emerald-600 uppercase mb-1">Items/Min</span>
                            <span className="text-lg font-black text-emerald-700">124</span>
                          </div>
                          <div className="p-3 bg-amber-50 rounded-xl border border-amber-100 text-center">
                            <span className="block text-[8px] font-bold text-amber-600 uppercase mb-1">Loss Saved</span>
                            <span className="text-lg font-black text-amber-700">$42</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-slate-900">Recent Discrepancies</h3>
                        <span className="text-xs text-emerald-600 font-bold hover:underline cursor-pointer">Logs</span>
                      </div>
                      <div className="space-y-4">
                        {[
                          { id: 1, type: 'Extra Item', product: 'WD-40 Spray', time: '2m ago', severity: 'high' },
                          { id: 2, type: 'Qty Mismatch', product: 'Screw Set (50pc)', time: '5m ago', severity: 'medium' },
                          { id: 3, type: 'Missing Item', product: 'Measuring Tape', time: '12m ago', severity: 'low' },
                        ].map((alert) => (
                          <div key={alert.id} className="flex gap-4 p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100">
                            <div className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                              alert.severity === 'high' ? 'bg-red-50 text-red-600' : 
                              alert.severity === 'medium' ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'
                            }`}>
                              <AlertCircle size={20} />
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <h4 className="text-sm font-bold text-slate-900">{alert.type}</h4>
                                <span className="text-[10px] text-slate-400 font-medium">{alert.time}</span>
                              </div>
                              <p className="text-xs text-slate-500 mt-0.5">{alert.product}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-emerald-900 rounded-2xl p-4 text-white shadow-xl shadow-emerald-100 relative overflow-hidden">
                      <div className="relative z-10">
                        <h3 className="font-bold mb-2">Loss Prevention Tip</h3>
                        <p className="text-sm text-emerald-100/80 leading-relaxed">
                          For heavy hardware items, ensure the load cells are calibrated weekly to maintain 99.9% weight validation accuracy.
                        </p>
                        <button className="mt-4 text-xs font-bold uppercase tracking-widest text-emerald-300 hover:text-white transition-colors">
                          Maintenance Guide →
                        </button>
                      </div>
                      <div className="absolute -right-4 -bottom-4 opacity-10">
                        <CameraIcon size={120} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'security' && (
              <motion.div
                key="security"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                <div className="flex justify-between items-end">
                  <div>
                    <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Security Feed</h1>
                    <p className="text-slate-500 mt-1">Multi-camera surveillance and threat detection.</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
                      <BarChart3 size={20} />
                    </button>
                    <button className="px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold">
                      View All Cameras
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cameraImages.map((image, index) => (
                    <div key={index + 1} className="group relative aspect-video bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                      <img 
                        src={image} 
                        alt={`Camera ${index + 1}`} 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/50 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-wider">CAM-0{index + 1}</span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-[10px] font-mono text-white/70">1080p | 30fps</span>
                        <button className="p-1.5 bg-white/10 backdrop-blur-md rounded-md border border-white/20 text-white hover:bg-white/20">
                          <Maximize2 size={12} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'reports' && (
              <motion.div
                key="reports"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Daily Summary Report</h1>
                  <p className="text-slate-500 mt-1">Performance analytics for February 25, 2026.</p>
                </div>
                <SummaryCharts data={MOCK_SUMMARY_DATA} />
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div
                key="settings"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm"
              >
                <h2 className="text-2xl font-bold mb-6">System Configuration</h2>
                <div className="space-y-4 max-w-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Camera Sensitivity</label>
                      <input type="range" className="w-full accent-emerald-600" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Confidence Threshold</label>
                      <select className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm">
                        <option>High (90%+)</option>
                        <option>Medium (75%+)</option>
                        <option>Low (50%+)</option>
                      </select>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-slate-100 flex justify-end gap-3">
                    <button className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 rounded-xl transition-all">
                      Cancel
                    </button>
                    <button className="px-6 py-2 bg-emerald-600 text-white rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-all shadow-md shadow-emerald-100">
                      Save Changes
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
