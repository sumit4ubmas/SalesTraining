import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, backgroundColor: "#020617", color: "#f8fafc", fontFamily: "Inter, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
