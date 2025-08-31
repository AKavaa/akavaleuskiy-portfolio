import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

// Handle base URL for both development and production
const getBase = () => {
  // In development or when accessing via custom domain, use root path
  if (window.location.hostname === 'alexkavaleuskiy.me' || 
      window.location.hostname === 'localhost' || 
      window.location.hostname === '127.0.0.1') {
    return '/';
  }
  // For GitHub Pages without custom domain
  return '/akavaleuskiy-portfolio';
};

function Router() {
  return (
    <WouterRouter base={getBase()}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
