"use client";
import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans antialiased selection:bg-emerald-500 selection:text-slate-950">
      
      {/* 1. NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="font-bold text-xl bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">AiFitCam</span>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            <a href="#features" className="hover:text-emerald-400">Features</a>
            <a href="#smartwatch" className="hover:text-emerald-400">Smartwatch</a>
            <a href="#kitchen" className="hover:text-emerald-400">Smart Kitchen</a>
            <a href="/privacy" className="hover:text-emerald-400">Privacy</a>
          </nav>
          <a href="#download" className="px-4 py-2 rounded-full text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400">Download Now</a>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section id="download" className="relative pt-32 pb-20 max-w-6xl mx-auto px-4 text-center md:text-left grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">✨ Future of Fitness Tracking</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent leading-tight">The Zero-Typing <br/>AI Health & Fitness Coach</h1>
          <p className="text-base text-slate-400 mb-8 max-w-xl">No more manual logging. Just snap, speak, or sync your smartwatch. Let advanced AI handle your calories, nutrition, and workouts effortlessly.</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <div className="px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl font-semibold text-sm text-emerald-400">Google Play</div>
            <div className="px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl font-semibold text-sm text-cyan-400">App Store</div>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="w-[280px] h-[480px] bg-slate-900 border-4 border-slate-800 rounded-[36px] p-4 flex flex-col justify-between text-left">
            <div className="w-full h-32 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 text-3xl">🥗</div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-1">
              <p className="text-[10px] text-emerald-400 font-bold">✨ AI Scanning...</p>
              <p className="text-xs font-bold">Avocado Salmon Salad</p>
              <p className="text-[11px] text-slate-400">420 kcal | 32g Protein</p>
            </div>
            <div className="w-full py-1.5 bg-slate-950 rounded-full text-center text-[9px] text-slate-500 border border-slate-800">🎙️ Tap to speak or scan scale</div>
          </div>
        </div>
      </section>

      {/* 3. COMPETITOR KILLERS */}
      <section id="features" className="py-20 bg-slate-900/30 border-y border-slate-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">The Competitor Killers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
              <span className="text-xl">📸</span>
              <h3 className="font-bold text-sm my-2">Snap & Analyze</h3>
              <p className="text-xs text-slate-400">Snap a photo of any meal. Our AI instantly reads the plate, estimates portions, and breaks down macros.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
              <span className="text-xl">🎙️</span>
              <h3 className="font-bold text-sm my-2">Voice Logging</h3>
              <p className="text-xs text-slate-400">Too busy to snap? Just say &quot;Coffee with sugar and an omelette.&quot; Our smart voice coach logs it instantly.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
              <span className="text-xl">⚖️</span>
              <h3 className="font-bold text-sm my-2">Scale Snapshot</h3>
              <p className="text-xs text-slate-400">Step on your scale, take a quick photo of the display, and watch your weight trend update automatically.</p>
            </div>
            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
              <span className="text-xl">🔍</span>
              <h3 className="font-bold text-sm my-2">Nutrition Assistant</h3>
              <p className="text-xs text-slate-400">Scan microscopic nutrition facts on packaging. Get instant warnings and a clear health grade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SMARTWATCH & 5. SMART KITCHEN */}
      <section id="smartwatch" className="py-20 max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Seamless Smartwatch Sync</h2>
          <p className="text-sm text-slate-400 leading-relaxed">Connect your Apple Watch, Garmin, Wear OS, or Samsung Health via Google Health Connect. Automatically import steps and calories to balance your nutrition needs.</p>
        </div>
        <div id="kitchen" className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Never Run Out of Essentials</h2>
          <p className="text-sm text-slate-400 leading-relaxed">AiFitCam tracks your grocery inventory based on logs. Receive smart background notifications when your protein or veggies are running low.</p>
        </div>
      </section>

      {/* 6. PRIVACY & 7. FOOTER */}
      <section id="privacy" className="py-20 max-w-4xl mx-auto px-4 text-center">
        <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4">Your Health Data, Fully Protected</h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto mb-6">Operating under modern encryption architecture, AiFitCam fully secures your data. Your personal metrics are encrypted and never shared or sold.</p>
          <a href="/privacy" className="text-xs font-semibold text-emerald-400 underline">Read Our Privacy Policy</a>
        </div>
      </section>

      <footer className="border-t border-slate-900 py-12 text-center text-xs text-slate-600">
        <p className="font-bold text-slate-400 mb-2">AiFitCam.com</p>
        <p>&copy; {new Date().getFullYear()} All rights reserved. Support: support@aifitcam.com</p>
      </footer>

    </div>
  );
}
