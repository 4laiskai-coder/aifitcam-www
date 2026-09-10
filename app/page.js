"use client";

import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans antialiased selection:bg-emerald-500 selection:text-slate-950">
      
      {/* 1. NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-2xl md:text-3xl tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
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
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm md:text-base font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
              ✨ Experience the Future of Fitness Tracking
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-white to-slate-200 bg-clip-text text-transparent leading-tight tracking-tight">The Zero-Typing <br/>AI Health & Fitness Coach</h1>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl">
              No more manual logging. Just snap, speak, or sync your smartwatch. Let advanced AI handle your calories, nutrition, and workouts effortlessly.
            </p>
            
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <div className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 shadow-xl cursor-pointer">
                <span className="text-sm font-semibold text-emerald-400">🤖 Google Play</span>
              </div>
              <div className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 shadow-xl cursor-pointer">
                <span className="text-sm font-semibold text-cyan-400">🍏 App Store</span>
              </div>
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
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-xl mb-6 group-hover:scale-110 transition-transform">📸</div>
              <h3 className="text-lg font-bold mb-2 text-slate-100">Snap & Analyze</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Snap a photo of any meal. Our AI instantly reads the plate, estimates portions, and breaks down macros in seconds.
              </p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl hover:border-cyan-500/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl mb-6 group-hover:scale-110 transition-transform">🎙️</div>
              <h3 className="text-lg font-bold mb-2 text-slate-100">Voice Logging</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Too busy to snap? Just say &quot;Coffee with sugar and an omelette.&quot; Our smart voice coach logs it instantly.
              </p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl hover:border-purple-500/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 text-xl mb-6 group-hover:scale-110 transition-transform">⚖️</div>
              <h3 className="text-lg font-bold mb-2 text-slate-100">Morning Scale Snapshot</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Step on your scale, take a quick photo of the display, and watch your weight trend update automatically. No typing required.
              </p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/80 p-6 rounded-2xl hover:border-amber-500/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 text-xl mb-6 group-hover:scale-110 transition-transform">🔍</div>
              <h3 className="text-lg font-bold mb-2 text-slate-100">Nutrition Label Assistant</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Scan microscopic nutrition facts on packaging. Get instant warnings about allergens and a clear health grade.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 4. SMARTWATCH INTEGRATION */}
      <section id="smartwatch" className="py-24 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 flex justify-center">
          <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl w-full max-w-md relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl" />
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
              <span className="text-sm font-semibold text-slate-400">Connected Hub</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400">Live Syncing</span>
            </div>
            <div className="space-y-3">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-900 flex justify-between items-center text-sm">
                <span>⌚ Apple Watch & Garmin</span>
                <span className="text-xs text-cyan-400 font-bold">Imported</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-900 flex justify-between items-center text-sm">
                <span>🏃‍♂️ Active Energy Expenditure</span>
                <span className="text-xs text-emerald-400 font-bold">+650 kcal</span>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Seamless Smartwatch Sync
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Connect your Apple Watch, Garmin, Wear OS, or Samsung Health in one click via Google Health Connect. AiFitCam automatically imports your steps, heart rate, and active calories to balance your daily nutrition needs perfectly.
          </p>
        </div>
      </section>

      {/* 5. SMART KITCHEN / INVENTORY */}
      <section id="kitchen" className="py-24 bg-slate-900/20 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Never Run Out of Healthy Essentials
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              AiFitCam tracks your grocery inventory based on what you scan and log. Receive smart background notifications when your favorite protein or veggies are running low or about to expire.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl w-full max-w-md space-y-3">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Automated Smart Fridge</p>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-900/60 flex justify-between items-center text-sm">
                <div className="flex items-center gap-2"><span>🥚</span><span>Organic Eggs</span></div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">Running Low</span>
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-900/60 flex justify-between items-center text-sm">
                <div className="flex items-center gap-2"><span>🥩</span><span>Protein Powder</span></div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">In Stock</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRIVACY & TRUST SECTION */}
      <section id="privacy" className="py-24 max-w-4xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-b from-slate-900/50 to-slate-950 border border-slate-800 p-10 rounded-3xl">
          <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-2xl mx-auto mb-6">🔒</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Your Health Data, Protected by Top-Tier Security
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            We believe health data is sacred. Operating under modern encryption architecture, AiFitCam fully secures your data. Your personal metrics are fully encrypted, protected via advanced Row-Level Security, and never shared or sold to third parties.
          </p>
          <a href="/privacy" className="inline-block px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold transition-all">
            Read Our Privacy Policy
          </a>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12 text-center text-sm text-slate-500">
        <div className="max-w-6xl mx-auto px-4 space-y-4">
          <p className="font-bold text-slate-400">AiFitCam</p>
          <p className="text-xs max-w-md mx-auto">Your ultimate AI-powered health, nutrition, and fitness coach. Just snap, speak, and track.</p>
          <div className="flex items-center justify-center gap-6 text-xs font-medium text-slate-400 pt-2">
            <a href="/privacy" className="hover:text-emerald-400">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400">Terms of Service</a>
            <a href="mailto:support@aifitcam.com" className="hover:text-emerald-400">support@aifitcam.com</a>
          </div>
          <p className="text-[11px] text-slate-600 pt-6">&copy; {new Date().getFullYear()} AiFitCam.com. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
