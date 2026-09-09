import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans antialiased selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            <span>AiFitCam</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#features" className="hover:text-emerald-400 transition-colors">Features</a>
            <a href="#privacy" className="hover:text-emerald-400 transition-colors">Privacy</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </nav>
          <div>
            <a 
              href="#download" 
              className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
            >
              Download
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="download" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
            ✨ Your Personal AI Trainer in Your Pocket
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Workout Smart.<br/>Camera Tracks, AI Corrects.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            <strong className="text-slate-200">AiFitCam</strong> uses your phone's camera and advanced artificial intelligence to count reps and correct your exercise form in real-time.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl text-slate-200 font-medium transition-all shadow-xl hover:bg-slate-850"
            >
              <svg className="w-5 h-5 fill-current text-emerald-400" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.783 12 3.609 22.186c-.182.182-.311.417-.367.674l12.44-12.44 3.73 3.73c.626.626.626 1.64 0 2.266l-9.146 9.146c-.53.53-1.336.635-1.98.26l-7.461-4.307c-.495-.286-.801-.814-.801-1.385V4.184c0-.571.306-1.099.801-1.385l7.461-4.307c.307-.178.65-.264.99-.264.354 0 .707.093 1.02.279l2.42 1.398-12.28 12.28c-.056-.257-.185-.492-.367-.674z"/>
              </svg>
              <div className="text-left leading-tight">
                <p className="text-[10px] text-slate-400 uppercase tracking-wider">Get it on</p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </a>
            <span className="text-xs text-slate-500 font-medium">Coming soon to iOS</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-900/30 border-y border-slate-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose AiFitCam?</h2>
            <p className="text-slate-400">Everything you need for safe and effective workouts at home or at the gym.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 border border-slate-800/80 p-6 rounded-2xl hover:border-emerald-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xl mb-5 group-hover:scale-110 transition-transform">
                👁️
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-100">Form Analysis</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                AI instantly detects if you squat too deep, round your back, or make other critical form errors.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800/80 p-6 rounded-2xl hover:border-emerald-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-xl mb-5 group-hover:scale-110 transition-transform">
                🔢
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-100">Auto Rep Counting</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Forget counting repetitions in your head. The app precisely tracks every full movement and saves your stats.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800/80 p-6 rounded-2xl hover:border-emerald-500/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-xl mb-5 group-hover:scale-110 transition-transform">
                🔒
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-100">100% Privacy</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Videos are never sent or stored on servers. All AI analysis happens completely locally on your device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="py-16 max-w-4xl mx-auto px-4 text-center">
        <div className="bg-slate-900/20 border border-slate-900 p-8 rounded-2xl">
          <h2 className="text-xl font-bold mb-3">Legal Information</h2>
          <p className="text-sm text-slate-400 mb-6 max-w-xl mx-auto">
            To successfully publish your app on the store, Google requires a publicly accessible privacy policy.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <a href="/privacy" className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-300 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 border-t border-slate-900 text-center">
        <div className="max-w-xl mx-auto px-4">
          <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">Have questions or suggestions?</p>
          <h3 className="text-lg font-medium text-slate-300 mb-2">Contact Us</h3>
          <a href="mailto:support@aifitcam.com" className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors text-sm">
            support@aifitcam.com
          </a>
        </div>
      </section>

      <footer className="py-6 text-center text-xs text-slate-600 border-t border-slate-950 bg-slate-950">
        <p>&copy; {new Date().getFullYear()} AiFitCam. All rights reserved.</p>
      </footer>

    </div>
  );
}
