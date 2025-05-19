
import "../index.css";
import "../lib/process-polyfill";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata = {
  title: "Runa - Mining Reimagined",
  description: "Runa is a proud Indonesian company specializing in mining, engineering, and heavy equipment solutions. Shaping the future of Indonesia's industrial economy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
