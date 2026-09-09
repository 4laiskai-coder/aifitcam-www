import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans antialiased selection:bg-emerald-500 selection:text-slate-950 pt-24 pb-16">
      
      {/* Grįžimo atgal mygtukas */}
      <div className="max-w-3xl mx-auto px-4 mb-8">
        <a href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
          ← Back to AiFitCam.com
        </a>
      </div>

      <main className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold mb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500 mb-8 font-medium">Last Updated: September 9, 2026</p>

        <div className="space-y-8 text-sm leading-relaxed">
          
          <section>
            <h2 className="text-lg font-bold text-slate-100 mb-2">1. Introduction</h2>
            <p>
              Welcome to <strong>AiFitCam</strong> ("we," "our," or "us"). We are highly committed to protecting your privacy. 
              This Privacy Policy explains how our mobile application and website handle information when you use our services.
            </p>
          </section>

          {/* Svarbiausia dalis „Google Play“ tikrintojams dėl kameros naudojimo */}
          <section className="p-5 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
            <h2 className="text-lg font-bold text-emerald-400 mb-2">2. Camera Access & Real-Time Video Processing</h2>
            <p className="text-slate-350">
              AiFitCam requires access to your device's camera to enable its core functionalities, including exercise form analysis and repetition counting. 
              <strong> Crucial Privacy Assurance:</strong> All video processing and Artificial Intelligence (AI) analysis are performed <strong>locally on your device</strong> (on-device processing). 
              We do not stream, record, upload, or store any camera feeds, video data, or biometric imagery on our servers or share it with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-100 mb-2">3. Data Collection and Usage</h2>
            <p className="mb-2">We strive to collect the absolute minimum data required to provide and improve the application:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Local Usage Data:</strong> Exercise history, repetition counts, and personal performance statistics are stored strictly on your local device storage.</li>
              <li><strong>Anonymized Analytics:</strong> We may use third-party analytics tools (such as Google Analytics or Firebase) to collect aggregated, non-personally identifiable technical information (e.g., device model, OS version, app crashes) to optimize app stability.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-100 mb-2">4. Data Security</h2>
            <p>
              Since your core workout data remains on your physical device, its security depends on your device's native security controls. 
              For any analytical data transmitted, we implement industry-standard encryption protocols to protect it during transit.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-100 mb-2">5. Children's Privacy</h2>
            <p>
              Our services are not directed to children under the age of 13. We do not knowingly collect personal identifiable information from children under 13. 
              If we discover that a child has provided us with personal data, we will immediately delete it from our systems.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-100 mb-2">6. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-100 mb-2">7. Contact Us</h2>
            <p>
              If you have any questions, suggestions, or concerns regarding this Privacy Policy, please feel free to contact us via email at:{' '}
              <a href="mailto:support@aifitcam.com" className="text-emerald-400 hover:underline">
                support@aifitcam.com
              </a>
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
