import type { AppProps } from 'next/app';
import '@/index.css';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { StickyCTA } from '@/components/StickyCTA';
import { ExitIntentPopup } from '@/components/ExitIntentPopup';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TooltipProvider>
      <div className="flex flex-col min-h-[100dvh]">
        <NavBar />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
        <StickyCTA />
        <ExitIntentPopup />
      </div>
      <Toaster />
    </TooltipProvider>
  );
}
