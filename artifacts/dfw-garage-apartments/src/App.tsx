import React from 'react';
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Areas from "@/pages/Areas";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Process from "@/pages/Process";
import Resources from "@/pages/Resources";
import GarageConversions from "@/pages/services/GarageConversions";
import AboveGarageApartments from "@/pages/services/AboveGarageApartments";
import DetachedADUs from "@/pages/services/DetachedADUs";
import GuestHouses from "@/pages/services/GuestHouses";
import CityPage from "@/pages/areas/CityPage";
import ResourcePage from "@/pages/resources/ResourcePage";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />

      {/* Services */}
      <Route path="/services" component={Services} />
      <Route path="/services/garage-conversions" component={GarageConversions} />
      <Route path="/services/above-garage-apartments" component={AboveGarageApartments} />
      <Route path="/services/detached-adus" component={DetachedADUs} />
      <Route path="/services/guest-houses" component={GuestHouses} />

      {/* Areas */}
      <Route path="/areas" component={Areas} />
      <Route path="/areas/:city" component={CityPage} />

      {/* Resources */}
      <Route path="/resources" component={Resources} />
      <Route path="/resources/:slug" component={ResourcePage} />

      {/* Standalone pages */}
      <Route path="/process" component={Process} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="flex flex-col min-h-[100dvh]">
            <NavBar />
            <main className="flex-grow">
              <Router />
            </main>
            <Footer />
            <StickyCTA />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
