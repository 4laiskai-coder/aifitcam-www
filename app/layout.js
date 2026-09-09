import "./globals.css";

export const metadata = {
  title: "AiFitCam - Smart AI Workout Assistant & Rep Counter",
  description: "Track your workouts automatically with AiFitCam. Real-time AI exercise form correction, automatic rep counting, and 100% on-device privacy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 antialiased">{children}</body>
    </html>
  );
}
