"use client";

import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans antialiased selection:bg-emerald-500 selection:text-slate-950">
      
      {/* 1. NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            <span>AiFitCam</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-emerald-400 transition-colors">Features</a>
            <a href="#smartwatch" className="hover:text-emerald-400 transition-colors">Smartwatch</a>
            <a href="#kitchen" className="hover:text-emerald-400 transition-colors">Smart Kitchen</a>
            <a href="#privacy" className="hover:text-emerald-400 transition-colors">Privacy</a>
          </nav>
          <div>
            <a 
              href="#download" 
              className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
            >
              Download Now
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section id="download" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
              ✨ Experience the Future of Fitness Tracking
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent leading-tight">
              The Zero-Typing <br/>AI Health & Fitness Coach
            </h1>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl">
              No more manual logging. Just snap, speak, or sync your smartwatch. Let advanced AI handle your calories, nutrition, and workouts effortlessly.
            </p>
            
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl text-slate-200 transition-all shadow-xl">
                <svg className="w-5 h-5 fill-current text-emerald-400" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.783 12 3.609 22.186c-.182.182-.311.417-.367.674l12.44-12.44 3.73 3.73c.626.626.626 1.64 0 2.266l-9.146 9.146c-.53.53-1.336.635-1.98.26l-7.461-4.307c-.495-.286-.801-.814-.801-1.385V4.184c0-.571.306-1.099.801-1.385l7.461-4.307c.307-.178.65-.264.99-.264.354 0 .707.093 1.02.279l2.42 1.398-12.28 12.28c-.056-.257-.185-.492-.367-.674z"/>
                </svg>
                <div className="text-left leading-tight">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">Get it on</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </a>
              <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl text-slate-200 transition-all shadow-xl">
                <svg className="w-5 h-5 fill-current text-cyan-400" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.57 2.95-1.39z"/>
                </svg>
                <div className="text-left leading-tight">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </a>
            </div>
          </div>

          {/* App UI Mockup Simulator */}
          <div className="justify-center hidden md:flex">
            <div className="w-[300px] h-[550px] bg-slate-900 border-4 border-slate-800 rounded-[40px] p-3 shadow-2xl relative overflow-hidden">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-slate-800 rounded-full z-20" />
              <div className="w-full h-full bg-slate-950 rounded-[32px] p-4 flex flex-col justify-between border border-slate-800/50">
                <div className="w-full h-40 bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-800">
                  <span className="text-4xl">🥗</span>
                </div>
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-2 mt-4 shadow-lg">
                  <div className="flex justify-between items-center text-[11px] font-semibold text-emerald-400">
                    <span>✨ AI Active Scan</span>
                    <span>Identified</span>
                  </div>
                  <p className="text-xs font-bold text-white">Avocado Salmon Salad</p>
                  <div className="grid grid-cols-3 gap-1 text-center pt-2 border-t border-slate-800 text-[10px]">
                    <div className="bg-slate-950 p-1 rounded">
                      <p className="text-slate-500">Kcal</p>
                      <p className="font-bold text-slate-200">420</p>
                    </div>
                    <div className="bg-slate-950 p-1 rounded">
                      <p className="text-slate-500">Protein</p>
                      <p className="font-bold text-emerald-400">32g</p>
                    </div>
                    <div className="bg-slate-950 p-1 rounded">
                      <p className="text-slate-500">Carbs</p>
                      <p className="font-bold text-cyan-400">12g</p>
                    </div>
                  </div>
                </div>
                <div className="w-full py-2 bg-slate-900 rounded-full flex items-center justify-center text-[9px] font-bold text-slate-400 border border-slate-800 mt-4">
                  🎙️ Tap to speak or scan scale
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE COMPETITOR KILLERS */}
      <section id="features" className="py-24 bg-slate-900/30 border-y border-slate-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              The Competitor Killers
            </h2>
            <p className="text-slate-400">Why spend hours typing into legacy apps? AiFitCam automates your tracking in seconds.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl hover:border-emerald-500/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-xl mb-6 group-hover:scale-110 transition-transform">
                📸
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-100">Snap & Analyze</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Snap a photo of any meal. Our AI instantly reads the plate, estimates portions, and breaks down macros in seconds.
              </p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl hover:border-cyan-500/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl mb-6 group-hover:scale-110 transition-transform">
                🎙️
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-100">Voice Logging</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Too busy to snap? Just say &quot;Coffee with sugar and an omelette.&quot; Our smart voice coach logs it instantly.
              </p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl hover:border-purple-500/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-xl mb-6 group-hover:scale-110 transition-transform">
                ⚖️
