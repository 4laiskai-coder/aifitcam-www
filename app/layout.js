import "./globals.css";

export const metadata = {
  title: "AiFitCam - Zero-Typing AI Health & Fitness Coach",
  description: "Transform your health journey with AiFitCam. Instantly log meals via photo or voice, scan weight scales, and sync your smartwatch effortlessly. Your ultimate AI nutrition coach.",
  keywords: ["AI fitness coach", "calorie tracker", "voice logging nutrition", "smart fridge app", "photo food tracker"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 antialiased">{children}</body>
    </html>
  );
}
